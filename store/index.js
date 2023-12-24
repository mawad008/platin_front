import { createStore } from "vuex";
import Cookies from "js-cookie";
import axios from "axios";
// process.client ? JSON.parse(sessionStorage.getItem("basket")) :
export const useStore = createStore({
  state: {
    basket: [],
    basketCheck: [],
    favArr: [],
    basketNum: 0,
    totalNum: 0,
    checkForm: 1,
    finalStep: 1,
    lang: "ar",
    authenticated: false,
    final: false,
    isInFav: [],
    step: 1,
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
    deleteFav(state, payload){
      const { indexx, itemId } = payload;

     
      // state.isInFav[index] = false;
        var index = Array.from(state.favArr).findIndex(
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

    setfav(state, payload) {
      state.favArr = payload;
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
 
      localStorage.setItem("basket", JSON.stringify(state.basket));
      console.log(state.basket);
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
          localStorage.setItem("basket", JSON.stringify(state.basket));

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
  },
  actions: {
    loadBasketFromLocalStorage({ commit, state }) {
      if (process.client) {
        const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        const storedfav = JSON.parse(localStorage.getItem("fav")) || [];
        const storedfavicon = JSON.parse(localStorage.getItem("favIcon")) || [];
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
