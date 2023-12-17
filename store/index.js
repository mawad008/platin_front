import { createStore } from "vuex";
import axios from "axios";
// process.client ? JSON.parse(sessionStorage.getItem("basket")) :
export const useStore = createStore({
  state: {
    basket:  [],
    basketCheck: [],
    basketNum: 0,
    totalNum: 0,
    checkForm: 1,
    finalStep:1,
    authenticated: false,
    final: false,
    step: 1 ,
    user: {},
  },
  mutations: {
    changeFormCheck(state, value) {
      state.checkForm = value;
    },
    setBasket(state, basket) {
      state.basket = basket;
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
              description: mainItem.description,
              price: mainItem.price,
              images: mainItem.images,
            },
          ],
          vendorName: mainItem.vendorName,
        });
        const uniqueItems = state.basket.reduce((acc, currentItem) => {
          const { id, products, vendor_id, vendorName } = currentItem;

          // If the vendorId is not in the object, add it
          if (!acc[vendor_id]) {
            acc[vendor_id] = { id, products, vendor_id, vendorName };
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
      });
      localStorage.setItem("basket", JSON.stringify(state.basket));
      console.log(state.basket);
      getTotalPrice(state);
      getTotalBasketNum(state);
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
      // addCheck(state);
    },
    deleteAll(state) {
      state.basket = [];
      state.totalNum = 0;
      state.basketNum = 0;
      state.basketCheck = [];
      localStorage.clear("basket");
      localStorage.clear("num");
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
        if (storedBasket.length < 1) {
          localStorage.clear("basket");
          localStorage.clear("total");
          localStorage.clear("num");
        }
        commit("setBasket", storedBasket);
        getTotalBasketNum(state);
        getTotalPrice(state);
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
  //   return { vendorName: vendor.vendorName, numProducts: numProducts };
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


