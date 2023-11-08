<template>
    <div style="min-height: 100vh;">
      <div class="container" style="margin-top:70px;">
        <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :pagination="{
      clickable: true,
    }"
    :modules="[SwiperEffectFade, SwiperPagination]"
    class="hero-section"
  >
    <swiper-slide v-for="i,index in 3" class="box">
       <div class="h-100">
         <!-- <img src="~/assets/images/banner.jpg" alt=""> -->
         <div class="text-container">
         {{ index + 1 }}
          <h2>  استمتع بلمسة من الأناقة والفخامة مع بلاتين  </h2>
          <span class="text">
            منصتنا الإلكترونية هي المكان الذي يجمع بين تجار الذهب والمجوهرات في المملكة. نفتخر بتقديم تجربة شراء آمنة وسلسة، مع تشكيلة واسعة وأنيقة تلبي احتياجاتك.

          </span>
          <button>
            <span> تسوق الان </span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
         </div>
       </div>
       <div class="overlay"></div>
    </swiper-slide>
  </swiper>
      </div>

      <div class="sections container" style="margin-top: 70px;">
        <div class="text w-100 d-flex align-items-center justify-content-center text-center flex-column mb-5">
         <h3> الاقسام </h3>
         <span>  استكشف مجموعة متنوعة من أقسامنا المميزة، حيث ستجد تشكيلات متنوعة من المنتجات تلبي احتياجاتك وتعبر عن ذوقك الشخصي </span>
        </div>
        <div class="row justify-content-center justify-content-xl-start justify-content-lg-start ">
         <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div class="box d-flex flex-column justify-content-center align-items-center gap-1 f1">
            <img src="~/assets/images/section3.png" alt="">
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1"> عرض المنتجات </button>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div class="box d-flex flex-column justify-content-center align-items-center gap-1 f2">
            <img src="~/assets/images/section2.png" alt="">
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1"> عرض المنتجات </button>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div class="box d-flex flex-column justify-content-center align-items-center gap-1 f3">
            <img src="~/assets/images/section1.png" alt="">
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1"> عرض المنتجات </button>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div class="box d-flex flex-column justify-content-center align-items-center gap-1 f4">
            <img src="~/assets/images/watch.png" alt="">
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1"> عرض المنتجات </button>
          </div>
         </div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>