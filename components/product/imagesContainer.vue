<template>
    <div>
    
           <div
                class="d-flex flex-column flex-xl-row flex-lg-row main-swiper-container"
                style=""
              >
                <swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :spaceBetween="10"
                  :grabCursor="true"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="[SwiperFreeMode, SwiperThumbs]"
                  class="mySwiper2"
                >
                  <swiper-slide v-for="img in mainProduct.images">
                    <img :src="img.full_image_path" />
                    <button class="size">
                      <span> {{ $t("dir size") }} </span>
                    </button>
                    <div @click="showMultiple" class="zoom">
                      <img src="~/assets/images/zoom.svg" alt="" />
                    </div>
                  </swiper-slide>
                </swiper>

                <div
                  class="d-flex flex-row flex-xl-column flex-lg-column align-items-center justify-content-center swiper-small-imgs"
                >
                  <div @click="setThumbsSwiper" class="slider__prev">
                    <i class="fa-solid fa-chevron-up"></i>
                  </div>
                  <swiper
                    @swiper="setThumbsSwiper"
                    :spaceBetween="15"
                    :slidesPerView="3"
                    :direction="vertical"
                    :freeMode="true"
                    :watchSlidesProgress="true"
                    :navigation="{
                      nextEl: '.slider__next',
                      prevEl: '.slider__prev',
                    }"
                    :breakpoints="{
                      '1062': {
                        direction: 'vertical',
                      },
                    }"
                    :modules="[SwiperNavigation]"
                    class="mySwiper"
                  >
                    <swiper-slide v-for="img in mainProduct.images">
                      <img :src="img.full_image_path" />
                    </swiper-slide>
                  </swiper>
                  <a
                    :href="mainProduct.video_link"
                    target="_blank"
                    class="play-icon"
                  >
                    <div class="circle">
                      <i class="fa-solid fa-play"></i>
                    </div>
                  </a>
                  <div @click="setThumbsSwiper" class="slider__next">
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <button class="size-text">{{ $t("dir size") }}</button>
              </div>

              <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>
    </div>
</template>
<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
let props = defineProps(["mainProduct"]);
const visibleRef = ref(false);
const indexRef = ref(0);
const imgsRef = ref([]);
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const onShow = () => {
  visibleRef.value = true;
};
const showMultiple = () => {
  for (let i = 0; i < props.mainProduct.images.length; i++) {
    imgsRef.value.push(props.mainProduct.images[i].full_image_path);
  }
  indexRef.value = 0;
  onShow();
};
const onHide = () => (visibleRef.value = false);
</script>
<style lang="">
    
</style>