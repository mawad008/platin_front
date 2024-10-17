<template>
  <div>
    <div v-if="arrData.length > 0" class="product-checkout">
    <div class="boxes" :class="{'customHeight':arrData.length <= 1}">
      <div v-for="(item, index) in arrData" class="head ">
        <v-badge color="#B1628C" :content="item.quantity">
          <div class="image">
            <!-- <img src="~/assets/images/watch.png" alt="" /> -->
            <img :src="item.images[0].full_image_path" alt="" />
            <!-- <span class="count">3</span> -->
          </div>
        </v-badge>

        <div class="text w-100 d-flex flex-column gap-2">
          <span class="name"> {{ item.name }} </span>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <span class="price"> {{ item.price }} {{ $t("curr") }}</span>
            <div @click="deleteItem(item.id , item.vendor_id , item)" class="trash">
              <img src="~/assets/images/trash.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    
    
    </div>
      <v-divider :thickness="1"></v-divider>

      <div class="total-price">
        <div class="total">
          <span class="word all"> {{ $t("total") }} </span>
          <span class="fw-bold price"> {{ total + (priceShipping ? priceShipping : 0) + ( total * 0.15 ) }}  {{ $t("curr") }} </span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("price") }} </span>
          <span class="price"> {{ total }} {{ $t("curr") }} </span>
        </div>
        <!-- <div class="total">
          <span class="word"> {{ $t("discountss") }}</span>
          <span class="price"> 0 {{ $t("curr") }}</span>
        </div> -->
        <div v-if="priceShipping" class="total">
          <span class="word"> {{ $t("shipping") }}</span>
          <span  class="price"> {{ priceShipping }} {{ $t("curr") }} </span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("bill") }}</span>
          <span class="price"> {{ total * 0.15 }} {{ $t('curr') }} </span>
        </div>
      </div>

      <div class="btns">
      <!-- {{ store.state.step }} -->
      
        <v-progress-circular v-if="checkPay2" style="" indeterminate :size="20" :width="4"></v-progress-circular>
        <button v-if="checkPay == 2 && urlPay" :disabled="checkPay2" @click="goUrl(urlPay)" class="fill gap-3">
                {{ $t('paymentTab') }}
        </button>
        <button v-else @click="checkFunc()" :disabled="checkBtn()" class="fill gap-3">
        <span  class="">  {{ $t("follow buy")  }} </span>        
        <v-progress-circular v-if="pending" style="" indeterminate :size="20" :width="4"></v-progress-circular>
        </button>
 
        <button v-if="cartBtn"  class="stroke">
          <nuxt-link class="w-100" :to="localePath('/cart')">{{ text ? text : $t("back btn") }}</nuxt-link>
        </button>
        <button v-else @click="checkFunc2()" class="stroke">{{ text ? text : $t("back btn") }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "~/store";
const store = useStore;
// Define the props you expect
let step = ref(store.state.step);
const props = defineProps(["arrData" , "myFunction" , "priceShipping" , "pending" , "text" , "text1" , "cartBtn" , "checkPay" , "checkPay2" , "urlPay" , "tap_id"]);

const localePath = useLocalePath();

const checkBtn = ()=>{
  if(props.checkPay2 == false && props.pending == true){
    return true;
  }
}
const checkFunc = () => {
  props.myFunction();
}
const goUrl = (url)=>{
  if(process.client){
    if(url){
      window.location.href = url;
    }
  }
}
const checkFunc1 = () => {
  if(props.tap_id != ''){
    props.myFunction();
  }
}
const checkFunc2 = () => {
  if (store.state.step == 1) {
    return
  } else {
    store.state.step -= 1
  }
 
  // step.value += 1;
  // store.state.step = step.value;
  // console.log(step.value);
  // console.log(store.state.step);
}
let mainArr = ref(store.state.basket);
const deleteItem = (item , vendor_id , itemm) => {
  store.commit("deleteCheckOut", {vendor_id:vendor_id , itemid:item , arr:mainArr.value , itemm: itemm});
  console.log(props.arrData);
};

let total = computed(() => {
  return store.state.totalNum;
});

// watch([() => store.showBrand], ([val]) => {
//   brand.value = val;
// });
onMounted(() => {
})
</script>
