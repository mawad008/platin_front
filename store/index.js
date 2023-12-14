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
          (vendor) => vendor.vendor_id === payload.vendor_id
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
          vendor_id: payload.vendor_id,
          id: payload.id,
          products: [
            {
              id: payload.id,
              quantity: 1,
              description: payload.description,
              price: payload.price,
              images:payload.images
            },
          ],
          vendorName: payload.vendorName,
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
          product.quantity += 1;
        }
      });
      console.log(state.basket);
      getTotalPrice(state);
      getTotalBasketNum(state);
      // addCheck(state);


    },
    deleteItem(state, payload) {
      const { vendor_id, itemid , indexx } = payload;

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
          if(state.basket[indexx].products.length == 0){
            state.basket.splice(indexx, 1);
          }
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
      addCheck(state);

    },
    deleteAll(state){
      state.basket = [];
      state.totalNum = 0;
      state.basketNum = 0; 
      state.basketCheck = [];
    },
    deleteCheckOut(state , payload){
      const { vendor_id, itemid , arr } = payload;
      const vendorIndex = state.basket.findIndex(vendor => vendor.vendor_id === vendor_id);
      const productIndex = state.basket[vendorIndex].products.findIndex(product => product.id === itemid);
       
      if (productIndex !== -1) {
        // Delete the item from the products array
        state.basket[vendorIndex].products.splice(productIndex, 1);
        if(state.basket[vendorIndex].products.length == 0){
          state.basket.splice(vendorIndex, 1);
        }
        console.log(`Item with vendorId ${vendor_id} and id ${itemid} deleted successfully.`);
      }
      console.log(arr);
      getTotalBasketNum(state);
      getTotalPrice(state);
      addCheck(state);
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
      totall += e.quantity;
    });
  });

 return state.basketNum = totall;
}

function getTotalPrice(state){
  let totall = 0;
  state.basket.forEach((ele) => {
    ele.products.forEach((e) => {
      totall += (e.price * e.quantity);
    });
  });
  state.totalNum = totall
}

function addCheck(state){
  state.basketCheck = state.basket.flatMap(vendor => {
    let vendor_id = vendor.vendor_id;
    return vendor.products.map(product => ({
      ...product,
      vendor_id: vendor_id
    }));
  });
  
}