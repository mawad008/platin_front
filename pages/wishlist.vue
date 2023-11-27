<template>
    <div style="min-height:100vh; margin-top:80px; margin-bottom:60px;">
        <div class="container">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>


         <div class="wish-list-page">
             <div class="text-content my-4">
                <h4> امنياتك <span>(3)</span></h4>
                <p>تصفح امنياتك الان كما يمكنك مشاركة امنياتك مع من تحب سواء عن طريق رابط خاص بالمنتج او عن طريق منصات التواصل الاجتماعي</p>
             </div>
             <div class="row">
                <div v-for="i in 6" class="col-12 col-xl-4 col-lg-4 col-md-6">
                    <product-card :favIcon="true"/> 
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