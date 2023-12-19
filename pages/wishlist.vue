<template>
    <div style="min-height:100vh; margin-top:80px; margin-bottom:60px;">
        <div v-if="favArr.length >= 1" class="container">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>


         <div class="wish-list-page">
             <div class="text-content my-4">
                <h4> امنياتك <span>({{ favArr.length }})</span></h4>
                <p>تصفح امنياتك الان كما يمكنك مشاركة امنياتك مع من تحب سواء عن طريق رابط خاص بالمنتج او عن طريق منصات التواصل الاجتماعي</p>
             </div>
             <div class="row">
                <div v-for="item ,index in favArr" class="col-12 col-xl-4 col-lg-4 col-md-6">
                    <!-- <product-card :favIcon="true"/>  -->
                      <div class="product-card">
              <div
                class="head w-100 d-flex align-items-center justify-content-between"
              >
                <div class="octagon">
                  <octagon />
                  <i class="fa-solid fa-heart"></i>
                </div>
                <span> الاكثر مبيعا </span>
              </div>
              <Swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :effect="'fade'"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
                :modules="[SwiperAutoplay, SwiperEffectFade]"
                class="image"
              >
                <swiper-slide v-for="img in item.images">
                  <img :src="img" alt="" />
                </swiper-slide>
              </Swiper>
              <div
                class="rate w-100 d-flex align-items-center justify-content-between"
              >
                <span class="type"> الذهب </span>
                <div class="star d-flex align-items-center gap-2">
                  <i class="fa-solid fa-star"></i>
                  <span>3.4</span>
                </div>
              </div>
              <h3>{{ item.description }}</h3>
              <div
                class="price w-100 d-flex align-items-center justify-content-between"
              >
                <span class="price-text">2500 ر.س</span>
                <span> ق24 / 2.5ج </span>
              </div>

              <div class="overlay">
                <div class="head-icons w-100">
                  <div
                    class="w-100 d-flex align-items-center justify-content-between"
                  >
                    <div v-if="!store.state.isInFav[index]" @click="addTofav(item, index), favIconFunc(index)" class="octagon " :class="{ 'active': store.state.isInFav[index] == true }">
                      <octagon />
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div v-if="store.state.isInFav[index]" @click="deleteTofav(index)" class="octagon " :class="{ 'active': store.state.isInFav[index] }">
                      <octagon />
                      <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="octagon">
                      <octagon />
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <div class="share-box d-none">
                      <img src="~/assets/images/social1.svg" alt="" />
                      <img src="~/assets/images/social2.svg" alt="" />
                      <img src="~/assets/images/social3.svg" alt="" />
                      <img src="~/assets/images/social4.svg" alt="" />
                      <img src="~/assets/images/social5.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div class="center-icons w-100">
                  <div
                    class="d-flex w-100 align-items-center justify-content-between"
                  >
                    <nuxt-link to="/product">
                      <div class="octagon d-flex flex-column gap-3">
                        <octagon />
                        <i class="fa-solid fa-eye"></i>
                      </div>
                    </nuxt-link>
                    <div class="octagon d-flex flex-column gap-3">
                      <octagon />
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div
                      @click="addToBasket(item)"
                      class="octagon d-flex flex-column gap-3"
                    >
                      <octagon />
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                  <div
                    class="text d-flex text-center w-100 align-items-center justify-content-between"
                  >
                    <span> شاهد </span>
                    <span> اضف الي السلة </span>
                    <span> مقارنة </span>
                  </div>
                </div>
              </div>
            </div>
                </div>
             </div>
         </div>


           <div class="container similar-products">
          <div class="head d-flex flex-column gap-3 align-items-center justify-content-center">
            <h3> منتجات مشابهة </h3>
            <p> استمتع بمجموعتنا المميزة من المنتجات المشابهة التي تلبي احتياجاتك بشكل مثالي. حيث تتشابه هذه المنتجات مع
              المنتج الأصلي فيما يتعلق بالمواد، الوزن، وجودة التصنيع. </p>
          </div>

          <div>
            <swiper :navigation="{
                nextEl: '.slider-similar-next',
                prevEl: '.slider-similar-prev'
            }" :breakpoints="{
    '640': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
    },
}" :modules="[SwiperNavigation]" class="">
              <swiper-slide v-for="i in 8">
                <product-card />
              </swiper-slide>

            </swiper>

            <div class="arrows d-flex align-items-center justify-content-center gap-4">
              <div class="slider-similar-next">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div class="slider-similar-prev">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script setup>

import { useStore } from "~/store";
const store = useStore;


const deleteTofav = (index) => {
  store.commit("deleteFav", index);
};

let favArr = computed(() => {
  return store.state.favArr;
})
let activeIcon = ref(true);
let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'امنياتك',
        disabled: false,
        href: 'wishlist',
    },
]);


</script>

<style lang="scss" scoped>


</style>