import { createStore } from "vuex";
import axios from "axios";

export const useStore = createStore({
  state: {
    arrData: [
      {
        id: 1,
        nameV: "زهرة الياقوت",
        vendor: [
          {
            id: 1,
            type: "خاتم ذهب 2.5 جرام صافي sas 24 قيراط",
            price: 120,
          },
          {
            id: 2,
            type: "خاتم ذهب 2.5 جرام صافي عيار34 قيراط",
            price: 130,
          },
          {
            id: 3,
            type: "خاتم ذهب 2.5 جرام صافي عيار 35 قيراط",
            price: 140,
          },
        ],
      },
      {
        id: 2,
        nameV: "زهرة البستان",
        vendor: [
          {
            id: 4,
            type: "خاتم ذهب 2.5 جرام صافي sas 24 قيراط",
            price: 100,
          },
          {
            id: 5,
            type: "خاتم ذهب 2.5 جرام صافي عيار34 قيراط",
            price: 115,
          },
          {
            id: 6,
            type: "خاتم ذهب 2.5 جرام صافي عيار 35 قيراط",
            price: 122,
          },
        ],
      },
    ],
    basket: [],
    basketNum: 0,
  },
  mutations: {
    add(state, payload, index) {
      let arr = [];
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

      // Calculate the number of products for each vendor
      const productsPerVendor = state.basket.map((vendor) => {
        const numProducts = vendor.products.length;
        return { vendorName: vendor.vendorName, numProducts: numProducts };
      });
      let num = productsPerVendor
        .map((e) => e.numProducts)
        .reduce((x, y) => x + y, 0);

      state.basketNum = num;
      console.log(state.basketNum);
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
    },
    deleteItem(state, index, item) {
      state.basket[index].products.splice(item, 1);
      console.log(state.basket[index].products.length);
      if (state.basket[index].products.length == 0) {
        state.basket.splice(index, 1);
        console.log("done");
      }
    },
  },
});
