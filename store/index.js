import { createStore } from "vuex";
import Cookies from "js-cookie";
import axios from "axios";
// process.client ? JSON.parse(sessionStorage.getItem("basket")) :
import CircularJSON from 'circular-json';
export const useStore = createStore({
  state: {
    basket: [],
    basketCheck: [],
    favArr: [],
    basketNum: 0,
    totalNum: 0,
    checkForm: 2,
    finalStep: 1,
    lang: "ar",
    check1: true,
    check2: false,
    check3: false,
    check4: false,
    lineActive1: false,
    lineActive2: false,
    lineActive3: false,
    authenticated: false,
    final: false,
    search: '',
    animCart:false,
    activeMobile: 0,
    isInFav: [],
    step: 1,
    idPay:'',
    paymentVar:1,
    userObj1:{},
    userObj2:{},
    userObj3:{},
    user: {},
  },
  mutations: {
    changeFormCheck(state, value) {
      state.checkForm = value;
    },
    addFav(state, payload) {
      const { item, index } = payload;
      const existingItem = state.favArr.find((itemm) => {
        return itemm.id == item.id;
      });
      if (existingItem) {
        console.log(existingItem);
      } else {
        state.favArr.push(item);
        localStorage.setItem("fav", JSON.stringify(state.favArr));
        state.isInFav.push(item.id);
        //  state.isInFav[index] = true;
        localStorage.setItem("favIcon", JSON.stringify(state.isInFav));
      }
    },
    addUser1(state , payload){
      state.userObj1 = payload;
      localStorage.setItem("storeUser1",JSON.stringify(payload));
    },
    addHeaderSteps(state , payload){
      state.check1 = payload.check1;
      localStorage.setItem("check1",JSON.stringify(payload.check1));
      state.check2 = payload.check2;
      localStorage.setItem("check2",JSON.stringify(payload.check2));
      state.check3 = payload.check3;
      localStorage.setItem("check3",JSON.stringify(payload.check3));
      state.lineActive1 = payload.lineActive1;
      localStorage.setItem("lineActive1",JSON.stringify(payload.lineActive1));
      state.lineActive2 = payload.lineActive2;
      localStorage.setItem("lineActive2",JSON.stringify(payload.lineActive2));
      state.lineActive3 = payload.lineActive3;
      localStorage.setItem("lineActive3",JSON.stringify(payload.lineActive3));
    },
    addStep(state , payload){
      state.step = payload;
      localStorage.setItem("storeStep",JSON.stringify(payload));
    },
    addIdPay(state , payload){
      state.idPay = payload;
      localStorage.setItem("storeId",JSON.stringify(payload));
    },
    paymentVarFunc(state , payload){
      state.paymentVar = payload;
      localStorage.setItem("storePayVar",JSON.stringify(payload));
    },
    deleteFav(state, payload){
      const { indexx, itemId } = payload;

     
      // state.isInFav[index] = false;
        let index = Array.from(state.favArr).findIndex(
          (item) => item.id === itemId
      );
      
      if (index != -1) {
        state.isInFav.splice(index, 1);
        localStorage.setItem("favIcon", JSON.stringify(state.isInFav));
         state.favArr.splice(index, 1);
         localStorage.setItem("fav", JSON.stringify(state.favArr));
      }

      if (state.favArr.length < 1) {
        localStorage.clear("fav");
        state.isInFav = [];
        localStorage.clear("favIcon");
      }
    },
    favIcon(state, index) {
      // state.isInFav[index] = true;
      // localStorage.setItem("favIcon", JSON.stringify(state.isInFav));
      console.log(index);
    },
    setBasket(state, basket) {
      state.basket = basket;
    },
    setuser(state, user) {
      state.user = user;
    },
    setuser1(state, user) {
      state.userObj1 = user;
    },
    setStep(state, user) {
      state.step = user;
    },
    setId(state, user) {
      state.idPay = user;
    },
    setPayVar(state, user) {
      state.paymentVar = user;
    },

    setfav(state, payload) {
      state.favArr = payload;
    },
    setHeaderSteps(state, payload) {
      state.check1 = payload.check1;
      state.check2 = payload.check2;
      state.check3 = payload.check3;
      state.lineActive1 = payload.lineActive1;
      state.lineActive2 = payload.lineActive2;
      state.lineActive3 = payload.lineActive3;
      console.log('sasasa' , state.check1);
      console.log('sasasa' , state.check2);
      console.log('sasasa' , state.check3);
      console.log('sasasa' , state.lineActive1);
      console.log('sasasa' , state.lineActive2);
      console.log('sasasa' , state.lineActive3);
    },
    setfavIcon(state, payload) {
      state.isInFav = payload;
    },
    setAuthenticated(state, value) {
      state.authenticated = value;
    },
    add(state, payload) {
      let { mainItem, qw } = payload;
      const existingItem = state.basket.find((item) => {
        let existingData = [item];
        const vendor = existingData.find(
          (vendor) => vendor.vendor_id === mainItem.vendor_id
        );
        if (vendor) {
          const product = vendor.products.find(
            (product) => product.id === mainItem.id
          );
          return !!product;
        }
      });
      if (existingItem) {
        console.log(existingItem);
      } else {
        state.basket.push({
          vendor_id: mainItem.vendor_id,
          id: mainItem.id,

          products: [
            {
              id: mainItem.id,
              quantity: qw ? qw : 1,
              name: mainItem.name,
              price: mainItem.price,
              images: mainItem.images,
            },
          ],
          fast_shipping_cities: mainItem.fast_shipping_cities,
          vendor_name: mainItem.vendor_name,
        });
        const uniqueItems = state.basket.reduce((acc, currentItem) => {
          const { id, products, vendor_id, vendor_name, fast_shipping_cities } =
            currentItem;

          // If the vendorId is not in the object, add it
          if (!acc[vendor_id]) {
            acc[vendor_id] = {
              id,
              products,
              vendor_id,
              vendor_name,
              fast_shipping_cities,
            };
          } else {
            // If the vendorId is already in the object, push the products array
            acc[vendor_id].products.push(...products);
          }

          return acc;
        }, {});

        // Convert the object values back to an array
        state.basket = Object.values(uniqueItems);

        localStorage.setItem("basket", JSON.stringify(state.basket));
        console.log(state.basket);
        getTotalBasketNum(state);
       updateBasket(state);
      }

      // calculate the total price
      getTotalPrice(state);

      console.log(state.totalNum);

      // Calculate the number of products for each vendor
      // addCheck(state);
      //console.log(state.basketNum);
    },
    addItem(state, id) {
      state.basket.forEach((vendor) => {
        const product = vendor.products.find((p) => p.id === id);
        if (product) {
          // Increment the item property
          product.quantity += 1;
        }
      //   vendor.products.forEach((e) => {
      //     e.price *= e.quantity;
      //  });
      });
 
      // localStorage.setItem("basket", JSON.stringify(state.basket));
      // const clonedState = CircularJSON.parse(CircularJSON.stringify(state.basket));
      localStorage.setItem('basket', JSON.stringify(state.basket));

      // console.log(state.basket);
      // console.log(clonedState);
      // state.basket = clonedState;
      // console.log(state.basket);
      getTotalPrice(state);
      getTotalBasketNum(state);
      updateBasket(state);
      // addCheck(state);
    },
    deleteItem(state, payload) {
      const { vendor_id, itemid, indexx } = payload;

      console.log(payload);

      const vendor = state.basket.find((v) => v.vendor_id === vendor_id);

      if (vendor) {
        // Find the index of the product with the given itemId
        const index = vendor.products.findIndex((p) => p.id === itemid);

        // Check if the product with the given itemId exists
        if (index !== -1) {
          // Remove the product from the products array
          vendor.products.splice(index, 1);
          state.basket[indexx].product = vendor;
          if (state.basket[indexx].products.length == 0) {
            state.basket.splice(indexx, 1);
          }
          // let temp = state.basket
          // localStorage.setItem("basket", JSON.stringify(temp));

          const clonedState = CircularJSON.parse(CircularJSON.stringify(state.basket));
          localStorage.setItem('basket', CircularJSON.stringify(clonedState));

          console.log(state.basket);
          console.log(clonedState);
          state.basket = clonedState;

          console.log(`Item with id ${itemid} deleted successfully.`);
        } else {
          console.log(`Item with id ${itemid} not found.`);
        }
      } else {
        console.log(`Vendor with id ${vendor_id} not found.`);
      }

      // state.basket[index].products.splice(item, 1);
      // console.log(state.basket[index].products.length);
      // if (state.basket[index].products.length == 0) {
      //   state.basket.splice(index, 1);
      //   console.log("done");
      //   console.log(state.basket);
      // }

      getTotalBasketNum(state);
      getTotalPrice(state);
      updateBasket(state);
      // addCheck(state);
    },
    deleteAll(state) {
      state.basket = [];
      state.totalNum = 0;
      state.basketNum = 0;
      state.basketCheck = [];
      localStorage.clear("basket");
      localStorage.clear("num");
      localStorage.clear("total");
    },
    deleteCheckOut(state, payload) {
      const { vendor_id, itemid, arr } = payload;
      const vendorIndex = state.basket.findIndex(
        (vendor) => vendor.vendor_id === vendor_id
      );
      const productIndex = state.basket[vendorIndex].products.findIndex(
        (product) => product.id === itemid
      );

      if (productIndex !== -1) {
        // Delete the item from the products array
        state.basket[vendorIndex].products.splice(productIndex, 1);
        if (state.basket[vendorIndex].products.length == 0) {
          state.basket.splice(vendorIndex, 1);
        }
       updateBasket(state);
        localStorage.setItem("basket", JSON.stringify(state.basket));
        console.log(
          `Item with vendorId ${vendor_id} and id ${itemid} deleted successfully.`
        );
      }
      getTotalBasketNum(state);
      getTotalPrice(state);
    },
    clearCache(state){
      state.paymentVar = 1;
      state.userObj1 = {};
      state.step = 1;
      state.idPay = '';
      state.basket = [];
      state.totalNum = 0;
      state.basketNum = 0;
      state.check1 = true;
      state.check2 = false;
      state.check3 = false;
      state.lineActive1 = false;
      state.lineActive2 = false;
      state.lineActive3 = false;
      localStorage.removeItem("storeUser1");
      localStorage.removeItem("check1");
      localStorage.removeItem("check2");
      localStorage.removeItem("check3");
      localStorage.removeItem("lineActive1");
      localStorage.removeItem("lineActive2");
      localStorage.removeItem("lineActive3");
      localStorage.removeItem("storeStep");
      localStorage.removeItem("storePayVar");
      localStorage.removeItem("basket");
      localStorage.removeItem("total");
      localStorage.removeItem("num");
      localStorage.removeItem("storeId");
    },
    clearCheckout(state){
      state.paymentVar = 1;
      state.userObj1 = {};
      state.step = 1;
      state.idPay = '';
      localStorage.removeItem("storeId");
      localStorage.removeItem("storeUser1");
      localStorage.removeItem("storeStep");
      localStorage.removeItem("storePayVar");
    }
  },
  actions: {
    
    loadBasketFromLocalStorage({ commit, state }) {
      if (process.client) {
        const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        const storedfav = JSON.parse(localStorage.getItem("fav")) || [];
        const storedfavicon = JSON.parse(localStorage.getItem("favIcon")) || [];
        const storedUser1 = JSON.parse(localStorage.getItem("storeUser1")) || {};
        const storedStep = JSON.parse(localStorage.getItem("storeStep")) || 1;
        const storedPayVar = JSON.parse(localStorage.getItem("storePayVar")) || 1;
        const storedId = JSON.parse(localStorage.getItem("storeId")) || '';
        const check1 = JSON.parse(localStorage.getItem("check1")) || true;
        const check2 = JSON.parse(localStorage.getItem("check2")) || false;
        const check3 = JSON.parse(localStorage.getItem("check3")) || false;
        const lineActive1 = JSON.parse(localStorage.getItem("lineActive1")) || false;
        const lineActive2 = JSON.parse(localStorage.getItem("lineActive2")) || false;
        const lineActive3 = JSON.parse(localStorage.getItem("lineActive3")) || false;
        // const storedUser3 = JSON.parse(localStorage.getItem("storeUser3")) || {};
        const userCookie = Cookies.get("user");
        const authCookie = Cookies.get("auth");

        const storedUser = userCookie ? JSON.parse(userCookie) : {};
        const storedAuth = authCookie ? JSON.parse(authCookie) : false;
        if (storedBasket.length < 1) {
          localStorage.clear("basket");
          localStorage.clear("total");
          localStorage.clear("num");
        }
        commit("setBasket", storedBasket);
        commit("setfav", storedfav);
        commit("setfavIcon", storedfavicon);
        commit("setuser", storedUser);
        commit("setuser1", storedUser1);
        commit("setStep", storedStep);
        commit("setPayVar", storedPayVar);
        commit("setId", storedId);
        commit("setHeaderSteps", {check1:check1 , check2:check2 , check3:check3 , lineActive1:lineActive1 , lineActive2:lineActive2 , lineActive3:lineActive3 });
        commit("setAuthenticated", storedAuth);
        getTotalBasketNum(state);
        getTotalPrice(state);
       updateBasket(state);
      }
    },
    async authenticateUser({ commit }, form) {
      const response = await axios.post(`${getUrl()}/register`, form, {
        headers: {},
      });
      document.cookie = `token=${response.data.data.token}; path=/;`; // Set token in cookie
      if (process.client) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data.customer)
        );
      }
      commit("setAuthenticated", true);
    },
  },
});

function getTotalBasketNum(state) {
  // const productsPerVendor = state.basket.map((vendor) => {
  //   const numProducts = vendor.products.length;
  //   return { vendor_name: vendor.vendor_name, numProducts: numProducts };
  // });
  // let num = productsPerVendor
  //   .map((e) => e.numProducts)
  //   .reduce((x, y) => x + y, 0);
  if (process.client) {
    let totall = 0;

    state.basket.forEach((ele) => {
      ele.products.forEach((e) => {
        totall += e.quantity;
      });
    });

    state.basketNum = totall;

    if (totall > 0) {
      localStorage.setItem("num", totall);
      totall = JSON.parse(localStorage.getItem("num"));
    }
  }
}

function getTotalPrice(state) {
  let totall = 0;
  state.basket.forEach((ele) => {
    ele.products.forEach((e) => {
      totall += e.price * e.quantity;
    });
  });
  state.totalNum = totall;
  if (totall > 0) {
    localStorage.setItem("total", totall);
    totall = JSON.parse(localStorage.getItem("total"));
  }
}

const updateBasket = (state) => {
 state.basketCheck = state.basket.flatMap(vendor => {
  let vendor_id = vendor.vendor_id;
  return vendor.products.map(product => ({
    ...product,
    vendor_id: vendor_id,
    price: product.price * product.quantity
  }));
});
};

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copyArr = [];
    for (let i = 0; i < obj.length; i++) {
      copyArr[i] = deepCopy(obj[i]);
    }
    return copyArr;
  }

  const copyObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }

  return copyObj;
}

