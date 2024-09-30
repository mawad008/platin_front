<template>
  <div style="min-height: 100vh">
    <div
      class="row main-container-product"
      style="margin-bottom: 140px; position: relative"
    >
      <div class="col-12" style="position: relative">
        <div class="container product-page">
          <div class="row">
            <div class="col-12 col-xl-5 col-lg-5 col-md-12">
              <detailsContainer
                :mainProduct="mainProduct"
                :newPriceItem="newPriceItem"
                :addToBasket="addToBasket"
                :goToVendor="goToVendor"
              />
            </div>

            <div class="col-12 col-xl-7 col-lg-7 col-md-12">
              <imagesContainer :mainProduct="mainProduct" />
            </div>
          </div>
        </div>
          
          <hiddenContainer :mainProduct="mainProduct" :newPriceItem="newPriceItem" :addToBasket="addToBasket"  />
        <tableContainer
          :mainProduct="mainProduct"
          :commentInput="commentInput"
          :updateRateInput="updateRateInput"
          :rateInputError="rateInputError"
          :changePrice="changePrice"
          :addComment="addComment"
          :AllItems="AllItems"
          :itemsArray="itemsArray"
          :toggleReadMore="toggleReadMore"
          :showAllComments="showAllComments"
          :maxCharacters="maxCharacters"
          :mainVendor="mainVendor"
          :goToVendor="goToVendor"
        />

        <relatedContainer :relatedArr="relatedArr" />
      </div>
    </div>
    <loader v-if="pending"></loader>
  </div>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "~/store";
import axios from "axios";
import "mosha-vue-toastify/dist/style.css";
import TableContainer from "~/components/product/tableContainer.vue";
import imagesContainer from "~/components/product/imagesContainer.vue";
import relatedContainer from "~/components/product/relatedContainer.vue";
import detailsContainer from "~/components/product/detailsContainer.vue";
import hiddenContainer from "~/components/product/hiddenContainer.vue";
const store = useStore;
const { locale } = useI18n();
const localePath = useLocalePath();
const MainRoute = useRoute();
let id = ref(MainRoute.query.id);
store.dispatch("product/getProduct", { id: id.value, locale: locale.value });
const mainProduct = computed(() => store.state.product.mainProduct);
const pending = computed(() => store.state.product.pending);
const commentInput = computed(() => store.state.product.commentInput);
const newPriceItem = computed(() => store.state.product.newPriceItem);
const tokenCookie = Cookies.get("token");
const router = useRouter();
let checkComment = ref(false);
const maxCharacters = 100;
let commentPerPage = 3;
let AllItems = ref([]);
let rateInput = ref(null);
let rateInputError = ref([]);
let itemsArray = ref([]);
let totalComments = ref([]);
let relatedArr = ref([]);
let mainVendor = ref({});
let newPriceVar = ref();
let showAll = ref(false);
const hiddenDiv = ref(null);
const triggerDiv = ref(null);
const footer = ref(null);
let text2 = ref( locale.value == 'ar' ? "تم الاضافة الي السلة" : "added to cart");
const updateRateInput = (value) => {
  rateInput.value = value;
};

const goToVendor = (id, name) => {
  const queryParams = {
    id: id,
    name: name,
  };
  const url = "/vendor";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);

  router.push(fullLocalePath);
};



const addToBasket = async () => {
  if (mainProduct.value) {
    store.commit("addProduct", {
      mainItem: mainProduct.value,
      qw: store.state.product.quantity,
      newPrice: newPriceVar.value,
    });
    const moshaToastify = await import("mosha-vue-toastify");
    const { createToast } = moshaToastify;
    createToast(
      {
        title: text2.value,
      },
      {
        showIcon: "true",
        type: "success",
        toastBackgroundColor: "#dcba95",
        timeout: 2000,
      }
    );
    store.state.animCart = true;
    setTimeout(() => {
      store.state.animCart = false;
    }, 2000);
  }
};
const changePrice = (newPrice, size, weight, item) => {
  if (process.client) {
    newPriceItem.value = item;
    newPriceVar.value = newPrice;
    mainProduct.value.price = newPrice;
    mainProduct.value.size = size;
    mainProduct.value.weight = weight;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
const showVendor = async () => {
  let result = await axios.get(`${getUrl()}/about-vendor/${id.value}`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  mainVendor.value = result.data.data;
  console.log(result.data.data);
};
const showComments = async () => {
  let result = await axios.get(`${getUrl()}/products/${id.value}/rates`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  AllItems.value = result.data.data.customers_rates;
  itemsArray.value = result.data.data.customers_rates.slice(0, 3);
  totalComments.value = result.data.data.customers_rates.slice(0, 3);
  // AllItems.value.slice(0, 3)
  if (result.status == 200) {
    itemsArray.value.forEach((item) => {
      updateTruncatedText(item);
    });
    checkComment.value = true;
  }
  console.log(result.data.data.customers_rates);
  console.log(itemsArray.value);
};
const toggleReadMore = (index) => {
  let item = itemsArray.value[index];
  item.showFullText = !item.showFullText;
  updateTruncatedText(item);
};

const updateTruncatedText = (item) => {
  if (item && item.comment) {
    if (!item.showFullText) {
      item.truncatedText =
        item.comment.length > maxCharacters
          ? item.comment.substring(0, maxCharacters) + "..."
          : item.comment;
    } else {
      item.truncatedText = item.comment;
    }
  }
};

const getRelatedProducts = async () => {
  let result = await axios.get(`${getUrl()}/related-products/${id.value}`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  relatedArr.value = result.data.data;
};

const showAllComments = () => {
  showAll.value = !showAll.value;
  if (showAll.value) {
    itemsArray.value = AllItems.value;
    itemsArray.value.forEach((item) => {
      updateTruncatedText(item);
    });
  } else {
    itemsArray.value = totalComments.value;
    itemsArray.value.forEach((item) => {
      updateTruncatedText(item);
    });
  }
};

const addComment = async () => {
  if (tokenCookie) {
    let formBody = new FormData();
    formBody.append("rate", rateInput.value);
    formBody.append("comment", commentInput.value);
    try {
      let result = await axios.post(
        `${getUrl()}/products/${id.value}/rate`,
        formBody,
        {
          headers: {
            "Content-Language": `${locale.value}`,
            Authorization: `Bearer ${tokenCookie}`,
          },
        }
      );
      if (result.status >= 200) {
        rateInputError.value = [];
        commentInput.value = "";
        showComments();
      }
    } catch (errors) {
      if (errors.response) {
        rateInputError.value = errors.response.data.errors;
      }
    }
  } else {
    const fullLocalePath = localePath("/auth");
    router.push(fullLocalePath);
  }
};

useHead({
  title: locale.value == "ar" ? "بلاتين" : "platin",
});

watch([() => MainRoute.query.id], ([newId]) => {
  id.value = newId;
  // showProduct();
  showVendor();
  showComments();
  getRelatedProducts();
});

const showHiddenDiv = () => {
  if (hiddenDiv.value) {
    hiddenDiv.value.style.display = "flex";
  }
};

const hideHiddenDiv = () => {
  if (hiddenDiv.value) {
    hiddenDiv.value.style.display = "none";
  }
};
const observeTrigger = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showHiddenDiv();
        } else {
          hideHiddenDiv();
        }
      });
    },
    { threshold: 0.5 }
  );

  if (triggerDiv.value) {
    observer.observe(triggerDiv.value);
  }
};

const observeFooter = () => {
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hideHiddenDiv(); // Hide when footer is visible
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold as needed
  );

  if (footer.value) {
    footerObserver.observe(footer.value);
  }
};
onMounted(() => {
  // showProduct();
  showComments();
  showVendor();
  getRelatedProducts();
  triggerDiv.value = document.getElementById("trigger");
  hiddenDiv.value = document.getElementById("hiddenDiv");
  footer.value = document.getElementById("footerId"); // Assuming footer has an ID of 'footer'
  observeTrigger();
  observeFooter();
});
</script>

<style lang="scss"></style>
