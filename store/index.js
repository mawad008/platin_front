import { createStore } from "vuex";
import axios from "axios";

export const useStore = createStore({
  state: {
    basket: [],
    basketCheck:[],
    basketNum: 0,
    totalNum: 0,
  },
  mutations: {
    add(state, payload) {
      const existingItem = state.basket.find((item) => {
        let existingData = [item];
        const vendor = existingData.find(
          (vendor) => vendor.vendorId === payload.vendorId
        );
        if (vendor) {
          const product = vendor.products.find(
            (product) => product.id === payload.id
          );
          return !!product;
        }
      });
      if (existingItem) {
        console.log(existingItem);
      } else {
        state.basket.push({
          vendorId: payload.vendorId,
          id: payload.id,
          products: [
            {
              id: payload.id,
              item: 1,
              description: payload.description,
              price: payload.price,
            },
          ],
          vendorName: payload.vendorName,
        });
        const uniqueItems = state.basket.reduce((acc, currentItem) => {
          const { id, products, vendorId, vendorName } = currentItem;

          // If the vendorId is not in the object, add it
          if (!acc[vendorId]) {
            acc[vendorId] = { id, products, vendorId, vendorName };
          } else {
            // If the vendorId is already in the object, push the products array
            acc[vendorId].products.push(...products);
          }

          return acc;
        }, {});

        // Convert the object values back to an array
        state.basket = Object.values(uniqueItems);
        console.log(state.basket);
      }

      // calculate the total price 
      getTotalPrice(state);
    
       console.log(state.totalNum);
        
      // Calculate the number of products for each vendor
      getTotalBasketNum(state);
      addCheck(state);
      //console.log(state.basketNum);
    },
    addItem(state, id) {
      state.basket.forEach((vendor) => {
        const product = vendor.products.find((p) => p.id === id);
        if (product) {
          // Increment the item property
          product.item += 1;
        }
      });
      console.log(state.basket);
      getTotalPrice(state);
      getTotalBasketNum(state);
      addCheck(state);


    },
    deleteItem(state, index, item) {
      state.basket[index].products.splice(item, 1);
      console.log(state.basket[index].products.length);
      if (state.basket[index].products.length == 0) {
        state.basket.splice(index, 1);
        console.log("done");
        console.log(state.basket);
      }
      getTotalBasketNum(state);
      getTotalPrice(state);
      addCheck(state);

    },
    deleteAll(state){
      state.basket = [];
      state.totalNum = 0;
      state.basketNum = 0; 
      state.basketCheck = [];
    },
    deleteCheckOut(state , index){
      state.basketCheck.splice(index, 1);
    }
   
  },
});


function getTotalBasketNum(state){
  // const productsPerVendor = state.basket.map((vendor) => {
  //   const numProducts = vendor.products.length;
  //   return { vendorName: vendor.vendorName, numProducts: numProducts };
  // });
  // let num = productsPerVendor
  //   .map((e) => e.numProducts)
  //   .reduce((x, y) => x + y, 0);
  let totall = 0;
  state.basket.forEach((ele) => {
    ele.products.forEach((e) => {
      totall += e.item;
    });
  });

 return state.basketNum = totall;
}

function getTotalPrice(state){
  let totall = 0;
  state.basket.forEach((ele) => {
    ele.products.forEach((e) => {
      totall += (e.price * e.item);
    });
  });
  state.totalNum = totall
}

function addCheck(state){
  state.basketCheck = state.basket.flatMap(vendor => {
    let vendorId = vendor.vendorId;
    return vendor.products.map(product => ({
      ...product,
      vendorId: vendorId
    }));
  });
  
}