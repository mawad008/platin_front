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
        <swiper-slide class="box" :style="{ backgroundImage: `url(${img1})` }">
          <div class="h-100">
            <div class="text-container">
              <!-- {{ index + 1 }} -->
              <h2>{{ $t("landing1") }}</h2>
              <span class="text">
                {{ $t("landing2") }}
              </span>
              <div
                class="d-flex w-100 justify-content-center justify-content-xl-start justify-content-lg-start"
              >
                <nuxt-link to="/products">
                  <button class="btn1">
                    <span> {{ $t("shopNow") }}</span>
                    <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
        <swiper-slide class="box" :style="{ backgroundImage: `url(${img2})` }">
          <div class="h-100">
            <div class="text-container">
              <!-- {{ index + 1 }} -->
              <h2>أضف لمسة من الجمال والرقي مع بلاتين</h2>
              <span class="text"
                >منصتنا الإلكترونية هي المكان المثالي لتجار المجوهرات والأحجار
                الكريمة في الوطن العربي. نقدم تجربة شراء آمنة وسلسة، مع تشكيلة
                متنوعة تناسب كل الأذواق.</span
              >

              <div
                class="d-flex w-100 justify-content-center justify-content-xl-start justify-content-lg-start"
              >
                <nuxt-link to="/products">
                  <button class="btn1">
                    <span> {{ $t("shopNow") }}</span>
                    <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
        <swiper-slide class="box" :style="{ backgroundImage: `url(${img3})` }">
          <div class="h-100">
            <div class="text-container">
              <!-- {{ index + 1 }} -->
              <h2>اختبر الرفاهية والأناقة مع بلاتين</h2>
              <span class="text"
                >منصتنا الإلكترونية هي الوجهة المثالية لتجار الذهب والمجوهرات في
                العالم العربي. نقدم تجربة شراء آمنة وسلسة، مع مجموعة مختارة تلبي
                تطلعاتك.</span
              >

              <div
                class="d-flex w-100 justify-content-center justify-content-xl-start justify-content-lg-start"
              >
                <nuxt-link to="/products">
                  <button class="btn1">
                    <span> {{ $t("shopNow") }}</span>
                    <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                  </button>
                </nuxt-link>
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
import img1 from "../assets/images/banner.jpg";
import img2 from "../assets/images/hero3.jpg";
import img3 from "../assets/images/hero4.jpg";
</script>
