import axios from "axios";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "~/store";

export const useCheckout = () => {
  const store = useStore;
  const { locale } = useI18n();
  let pending = ref(false);
  let errors = ref([]);
  let dialog = ref(false);
  let messagePopup = ref();
  let checkCityProducts = ref(true);
  let productsPopup = ref([]);
  let destination = ref([]);
  let errors1 = ref([]);
  let unique_vendorsVar = ref([]);
  let priceShipping = ref();
  const checkoutFunc = async (
    v$,
    personalorGift,
    userdata1,
    gift_owner_name,
    gift_owner_phone,
    gift_text
  ) => {
    let check = await v$.$validate();
    let formBody = new FormData();
    formBody.append("type", personalorGift == 1 ? "Gift" : "Personal");
    formBody.append("first_name", userdata1.first_name);
    formBody.append("last_name", userdata1.last_name);
    formBody.append("phone", userdata1.phone);
    formBody.append("email", userdata1.email);
    if (personalorGift == 1) {
      formBody.append("gift_owner_name", gift_owner_name);
      formBody.append("gift_owner_phone", gift_owner_phone);
      formBody.append("gift_text", gift_text);
    }
    if (check) {
      pending.value = true;
      try {
        let result = await axios.post(
          `${getUrl()}/orders-checkout/0`,
          formBody,
          {
            headers: {
              "Content-Language": `${locale.value}`,
            },
          }
        );
        if (result.status >= 200) {
          store.commit("addUser1", {
            userdata1,
            personalorGift: personalorGift,
            gift_owner_name: gift_owner_name,
            gift_owner_phone: gift_owner_phone,
            gift_text: gift_text,
          });
          store.commit("addStep", 2);
          store.commit("addHeaderSteps", {
            check1: true,
            check2: true,
            check3: false,
            lineActive1: true,
            lineActive2: false,
            lineActive3: false,
          });
          pending.value = false;
          store.state.step = 2;
          store.state.check2 = true;
          store.state.lineActive1 = true;

          if (process.client) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }
      } catch (errorss) {
        if (errorss.response) {
          pending.value = false;

          errors.value = errorss.response.data.errors;
        }
      }
    }
  };
  const checkoutFunc1 = async (
    v2$,
    userdata2,
    clickedLat,
    clickedLng,
    userdata1,
    newArr,
    personalorGift,
    gift_owner_name,
    gift_owner_phone,
    gift_text,
    chooseCity
  ) => {
    let check = await v2$.$validate();
    let formBody = new FormData();
    formBody.append("city", userdata2.city.id);
    formBody.append("street_name", userdata2.street_name);
    formBody.append("building_number", userdata2.building_number);
    formBody.append("district", userdata2.district);
    formBody.append("marks", userdata2.marks);
    formBody.append("fast_shipping", userdata2.marks);
    if (clickedLat) {
      formBody.append("lat", clickedLat);
      formBody.append("lng", clickedLng);
    }
    if (check) {
      pending.value = true;
      try {
        let result = await axios.post(
          `${getUrl()}/orders-checkout/1`,
          {
            city: userdata2.city.id,
            street_name: userdata2.street_name,
            building_number: userdata2.building_number,
            district: userdata2.district,
            marks: userdata2.marks,
            fast_shipping: chooseCity,
            products: newArr,
            ...(clickedLat && { lat: clickedLat }),
            ...(clickedLng && { lng: clickedLng }),
          },
          {
            headers: {
              "Content-Language": `${locale.value}`,
            },
          }
        );
        if (result.status >= 200) {
          pending.value = false;
          store.commit("addUser1", {
            userdata1,
            personalorGift: personalorGift,
            gift_owner_name: gift_owner_name,
            gift_owner_phone: gift_owner_phone,
            gift_text: gift_text,
            userdata2,
            chooseCity: chooseCity,
          });

          if (process.client) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }
        if (result.data.data.length >= 1) {
          dialog.value = true;
          checkCityProducts.value = true;
          productsPopup.value = result.data.data;
        }
        if (result.data.message) {
          messagePopup.value = result.data.message;
        }
        if (result.data.data?.destination) {
          destination.value = result.data.data?.destination;
          console.log(result.data.data?.destination);
        }
        if (result.data.data.unavailableProducts.length >= 1) {
          dialog.value = true;
          checkCityProducts.value = false;
          productsPopup.value = result.data.data.unavailableProducts;
        }
        if (result.data.data.unavailableProducts.length <= 0) {
          priceShipping.value = result.data.data.totalShippingCost;
          store.commit("addStep", 3);
          store.commit("setTotalShipment", result.data.data.totalShippingCost);
          store.commit("addHeaderSteps", {
            check1: true,
            check2: true,
            check3: true,
            lineActive1: true,
            lineActive2: true,
            lineActive3: false,
          });
          store.state.step = 3;
          store.state.check3 = true;
          store.state.lineActive2 = true;
        }
        if (result.data.data.unique_vendors) {
          unique_vendorsVar.value = result.data.data.unique_vendors;
        }
      } catch (errorss) {
        if (errorss.response) {
          pending.value = false;
          errors1.value = errorss.response.data.errors;
        }
      }
    }
  };

  return {
    checkoutFunc,
    pending,
    errors,
    dialog,
    messagePopup,
    checkCityProducts,
    productsPopup,
    destination,
    errors1,
    unique_vendorsVar,
    priceShipping,
    checkoutFunc1,
  };
};
