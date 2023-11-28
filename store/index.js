import { createStore } from 'vuex'
import axios from 'axios';





  export const useStore = createStore({
   state:{
    arrData:[
      {
        id:1,
        nameV: 'زهرة الياقوت',
        vendor:[
          {
            id:1,
            type: 'خاتم ذهب 2.5 جرام صافي sas 24 قيراط',
            price: 120
          },
          {
            id:2,
            type: 'خاتم ذهب 2.5 جرام صافي عيار34 قيراط',
            price: 130
          },
          {
            id:3,
            type: 'خاتم ذهب 2.5 جرام صافي عيار 35 قيراط',
            price: 140
          }
        ]
      },
      {
        id:2,
        nameV: 'زهرة البستان',
        vendor:[
          {
            id:4,
            type: 'خاتم ذهب 2.5 جرام صافي sas 24 قيراط',
            price: 100
          },
          {
            id:5,
            type: 'خاتم ذهب 2.5 جرام صافي عيار34 قيراط',
            price: 115
          },
          {
            id:6,
            type: 'خاتم ذهب 2.5 جرام صافي عيار 35 قيراط',
            price: 122
          }
        ]
      }
    ],
    basket:[]
   },
   mutations:{
    add(state , payload){
      const existingItem = state.basket.find(item => item.vendorId === payload.vendorId && item.id === payload.id);
      if(existingItem){
        console.log(existingItem);
      } else{
        state.basket.push({
          vendorId: payload.vendorId,
          id:payload.id,
          products:[
            {
              id:payload.id,
              item:1,
              description: payload.description,
              price: payload.price
                
            }
          ],
          vendorName: payload.vendorName
        });
        console.log(state.basket);
        }

    }
   }
 
  });