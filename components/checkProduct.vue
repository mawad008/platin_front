<template>
  <div>
    <div v-if="arrData.length > 0" class="product-checkout">
      <div v-for="(item, index) in arrData" class="head my-4">
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
            <div @click="deleteItem(item.id , item.vendor_id)" class="trash">
              <img src="~/assets/images/trash.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <v-divider :thickness="1"></v-divider>

      <div class="total-price">
        <div class="total">
          <span class="word all"> {{ $t("total") }} </span>
          <span class="fw-bold price"> {{ total + (40 + 80) }} {{ $t("curr") }} </span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("price") }} </span>
          <span class="price"> {{ total }} {{ $t("curr") }} </span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("discountss") }}</span>
          <span class="price"> 0 {{ $t("curr") }}</span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("shipping") }}</span>
          <span class="price"> 40 {{ $t("curr") }} </span>
        </div>
        <div class="total">
          <span class="word"> {{ $t("bill") }}</span>
          <span class="price"> 80 {{ $t("curr") }} </span>
        </div>
      </div>

      <div class="btns">
      {{ store.state.step }}
        <button @click="checkFunc()" class="fill gap-3">
        <span>  {{ $t("follow buy") }} </span>        
        <v-progress-circular v-if="pending" indeterminate :size="30" :width="5"></v-progress-circular>
        </button>
        <button @click="checkFunc2()" class="stroke">{{ $t("back btn") }}</button>
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
const props = defineProps(["arrData" , "myFunction" , "pending"]);


const checkFunc = () => {
  props.myFunction();
  // if (store.state.step == 4) {
  //   store.state.finalStep = 2;
  //   return
  // } else {
  //   store.state.step += 1
  // }
 
  // step.value += 1;
  // store.state.step = step.value;
  // console.log(step.value);
  // console.log(store.state.step);
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
const deleteItem = (item , vendor_id) => {
  store.commit("deleteCheckOut", {vendor_id:vendor_id , itemid:item , arr:mainArr.value});
};

let total = computed(() => {
  return store.state.totalNum;
});

onMounted(() => {
})
</script>
