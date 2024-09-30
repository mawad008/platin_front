<template>
    <div>
    
        <div v-if="relatedArr?.length > 0" class="container similar-products">
          <div
            class="head d-flex flex-column gap-3 align-items-center justify-content-center"
          >
            <h3>{{ $t("similar") }}</h3>
            <p>
              {{ $t("similar1") }}
            </p>
          </div>

          <div>
            <swiper
              :navigation="{
                nextEl: '.slider-similar-next',
                prevEl: '.slider-similar-prev',
              }"
              :breakpoints="{
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
              }"
              :modules="[SwiperNavigation]"
              class=""
            >
              <swiper-slide v-for="item in relatedArr">
                <product-card :product="item" />
              </swiper-slide>
            </swiper>

            <div
              class="arrows d-flex align-items-center justify-content-center gap-4"
            >
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
</template>
<script setup>
let props = defineProps(["relatedArr"])
</script>
<style lang="">
    
</style>