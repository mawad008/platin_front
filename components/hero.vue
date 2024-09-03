<template>
  <div>
    <div class="container hero-container" style="">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :dir="getSwiperDirection"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]"
        class="hero-section"
      >
        <swiper-slide v-for="slider in sliders" class="box" :style="{ backgroundImage: `url(${slider.image})` }">
          <div class="h-100">
            <div class="text-container">
              <!-- {{ index + 1 }} -->
              <h2> {{ slider.title }} </h2>
              <span class="text">
                {{ slider.description }}
              </span>
              <div
                class="d-flex w-100 justify-content-center justify-content-xl-start justify-content-lg-start"
              >
                  <a :href="slider.btn_link" target="_blank" class="btn1">
                    <span> {{ slider.btn_name }} </span>
                    <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                  </a>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const { locale } = useI18n();

let sliders = ref([]);
const getSwiperDirection = computed(() => {
  if (locale.value === "ar") {
    return "rtl"; // Set the direction to RTL
  } else {
    return "ltr"; // Set the direction to LTR
  }
});
const getSliders = async()=>{
  let result = await axios.get(`${getUrl()}/sliders`,{
    headers:{
    "Content-Language": `${locale.value}`,
    }
  });
  if(result.status >= 200){
    sliders.value = result.data.data;
  }
}
getSliders();
</script>
