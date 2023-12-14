<template>
  <div>
    <div v-if="arrData.length > 0" class="product-checkout">
      <div v-for="(item, index) in arrData" class="head my-4">
        <v-badge color="#B1628C" :content="item.quantity">
          <div class="image">
            <!-- <img src="~/assets/images/watch.png" alt="" /> -->
            <img :src="item.images[0]" alt="" />
            <!-- <span class="count">3</span> -->
          </div>
        </v-badge>

        <div class="text w-100 d-flex flex-column gap-2">
          <span class="name"> {{ item.description }} </span>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <span class="price"> {{ item.price }} رس</span>
            <div @click="deleteItem(item.id , item.vendor_id)" class="trash">
              <img src="~/assets/images/trash.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <v-divider :thickness="1"></v-divider>

      <div class="total-price">
        <div class="total">
          <span class="word all"> الاجمالي </span>
          <span class="fw-bold price"> {{ total + (40 + 80) }} ر.س </span>
        </div>
        <div class="total">
          <span class="word"> السعر </span>
          <span class="price"> {{ total }} ر.س </span>
        </div>
        <div class="total">
          <span class="word"> الخصومات </span>
          <span class="price"> 0 ر.س </span>
        </div>
        <div class="total">
          <span class="word"> مصاريف الشحن </span>
          <span class="price"> 40 ر.س </span>
        </div>
        <div class="total">
          <span class="word"> ضريبة القيمة المضافة </span>
          <span class="price"> 80 ر.س </span>
        </div>
      </div>

      <div class="btns">
        <button @click="step += 1" class="fill">تابع عملية الشراء</button>
        <button @click="step -= 1" class="stroke">الرجوع</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "~/store";
const store = useStore;
// Define the props you expect
const props = defineProps(["arrData"]);

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
