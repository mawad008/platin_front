<template>
  
  <div style="min-height: 100vh;">
  
    <div class="sections container" style="margin-top: 70px; margin-bottom: 140px;">
      <div
        class="text w-100 d-flex align-items-center justify-content-center text-center flex-column mb-5"
      >
        <h3>
        {{ $t("sections") }}
        </h3>
        <span class="p-text">
        {{ $t("explore1") }}
        </span>
      </div>
      <div
        class="row justify-content-center justify-content-xl-start justify-content-lg-start"
      >
        <div
          v-for="(item, index) in categoriesArr"
          class="col-12 col-xl-3 col-lg-3 col-md-6"
        >
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f1"
            :class="`f${index + 1}`"
          >
            <img :src="item.image" alt="" />
            <span class="type"> {{ item.name }} </span>
            <span class="count"> {{ item.products_count }} {{ $t("product") }} </span>
            
              <button class="mt-1" @click="goTocategory(item.id , item.name , `f${index + 1}`)">{{ $t("showProducts") }}</button>
          </div>
        </div>
      </div>

      <swiper
          :navigation="{
            nextEl: '.slider-cate-next',
            prevEl: '.slider-cate-prev',
          }"
          :spaceBetween="10"
          :breakpoints="{
            '200': {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :dir="getSwiperDirection"
          :modules="[SwiperNavigation, SwiperAutoplay]"
           ref="mySwiper"
          class="mobile-swiper"
        >
          <swiper-slide
            v-for="(item, index) in categoriesArr"
          >
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f1"
            :class="`f${index + 1}`"
          >
            <img :src="item.image" alt="" />
            <span class="type"> {{ item.name }} </span>
            <span class="count"> {{ item.products_count }} {{ $t("product") }} </span>
            
              <button class="mt-1" @click="goTocategory(item.id , item.name , `f${index + 1}`)">{{ $t("showProducts") }}</button>
          </div>
          </swiper-slide>
        </swiper>
    </div>

    <loader v-if="pending"></loader>
  </div>

</template>



<script setup>

import axios from "axios";
const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();
let categoriesArr = ref([]);
let pending = ref(true);
const goTocategory = (id, name , color) => {

const queryParams = {
  id: id,
  name: name,
  color:color
};
const url = "/category";

const updatedRoute = {
  path: url,
  query: {
    ...queryParams,
  },
};

const fullLocalePath = localePath(updatedRoute);
router.push(fullLocalePath);

};

const getCategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if(result.status == 200){
    pending.value = false;
  }
  categoriesArr.value = result.data.data;
//   categoriesArr.value.splice(0 , 1);
//   console.log(categoriesArr.value);
};

onMounted(() => {
    getCategories(); 
});


</script>