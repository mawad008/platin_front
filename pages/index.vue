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
          <button class="btn1">
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



    <div class="offers containe " style="margin-top:70px;">
          <swiper
       :slidesPerView="1.4"
      :spaceBetween="20"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :modules="[ SwiperPagination]"
      class=""
    >
      <swiper-slide class="box main">
         <div class=" h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row">
           <div class=" text-container ">
            <h2>  خصم 50 % علي منتجات زهرة الياقوت </h2>
            <span class="text">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى 
            </span>
            <button class="btn1">
              <span> شاهد العروض </span>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            <div class="circle ">
             <img class="" src="~/assets/images/offer-circle.png" alt="">
            </div>
           </div>
         <div class=" main-img  h-100">
           <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
         </div>
         </div>
         <div class="overlay"></div>
      </swiper-slide>
      <swiper-slide class="box f1">
         <div class=" h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row">
           <div class=" text-container ">
            <h2>  الاهتمام مبيطلبش.. معانا تقدري تطلبيه </h2>
            <span class="text">
        مع ميزة 'أمنياتي' الخاصة بنا، يمكنك الآن جمع منتجاتك المفضلة وحلمك في مكان واحد. قم بإضافة أي منتج تشتهر به إلى 'أمنياتي' وشاركه مع من تحب
              </span>
            <button class="btn1">
              <span> شاهد العروض </span>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
           </div>
         <div class=" main-img  h-100">
           <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
         </div>
         </div>
      </swiper-slide>
      <swiper-slide class="box f2">
         <div class=" h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row">
           <div class=" text-container ">
            <h2>  الاهتمام مبيطلبش.. معانا تقدري تطلبيه </h2>
            <span class="text">
        مع ميزة 'أمنياتي' الخاصة بنا، يمكنك الآن جمع منتجاتك المفضلة وحلمك في مكان واحد. قم بإضافة أي منتج تشتهر به إلى 'أمنياتي' وشاركه مع من تحب
              </span>
            <button class="btn1">
              <span> شاهد العروض </span>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
           </div>
         <div class=" main-img  h-100">
           <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
         </div>
         </div>
      </swiper-slide>

    </swiper>
    </div>
    <div class="container categories ">
    <div class="text">
     <h3>تسوق حسب التصنيفات</h3>
     <p>اكتشف تجربة التسوق الفريدة حسب التصنيفات، حيث يمكنك استعراض واختيار المنتجات بسهولة وفقًا لاهتماماتك وتفضيلاتك.</p>
    </div>
          <swiper
      :navigation="true"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
      :modules="[SwiperNavigation]"
      class=""
    >


        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate1.png" alt="">
          </div>
          <span> خواتم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate2.png" alt="">
          </div>
          <span> غوايش </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate3.png" alt="">
          </div>
          <span> هدايا </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate4.png" alt="">
          </div>
          <span> اطقم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate5.png" alt="">
          </div>
          <span> عقد </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate6.png" alt="">
          </div>
          <span> حلق </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate1.png" alt="">
          </div>
          <span> خواتم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate2.png" alt="">
          </div>
          <span> غوايش </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate3.png" alt="">
          </div>
          <span> هدايا </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate4.png" alt="">
          </div>
          <span> اطقم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate5.png" alt="">
          </div>
          <span> عقد </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
          <img src="~/assets/images/cate6.png" alt="">
          </div>
          <span> حلق </span>
        </swiper-slide>
     

    </swiper>
    </div>

      <div class="container our-products my-5">
      <div class="header mb-5 d-flex flex-column align-items-center justify-content-center  w-100">
       <h3 class="mb-5"> منتجاتنا </h3>
 
             <v-tabs
          v-model="tab"
          align-tabs="center"
        >
          <v-tab :value="0" class="head"> 
          <span class="choose"> الامهات </span>
           <border/>
          </v-tab>
          <v-tab :value="1" class="head"> 
          <span class="choose"> الاطفال </span>
           <border/>
          </v-tab>
          <v-tab :value="2" class="head"> 
          <span class="choose"> البنات </span>
           <border/>
          </v-tab >
          <v-tab :value="3" class="head"> 
          <span class="choose"> الاكثر مبيعا </span>
           <border/>
          </v-tab>
        </v-tabs>
      </div>

         <v-window v-model="tab">
          <v-window-item >
           <div class="row">
            <div v-for="i in 4" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
             <product-card/>
            </div>
           </div>
      
          </v-window-item>
          <v-window-item >
           <div class="row">
            <div v-for="i in 3" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                <product-card/>

            </div>
           </div>
      
          </v-window-item>
          <v-window-item >
           <div class="row">
            <div v-for="i in 2" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                <product-card/>

            </div>
           </div>
      
          </v-window-item>
          <v-window-item >
           <div class="row">
            <div v-for="i in 6" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card/>
            </div>
           </div>
      
          </v-window-item>
        </v-window>
          <span class="more mt-5"> المزيد... </span>
      </div>

    
      <div class="container d-flex align-items-center justify-content-center banner-container">
      <!-- :slidesPerView="1"
      :spaceBetween="10" -->
        <swiper
      :navigation="true"
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
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
      }"
     :modules="[SwiperNavigation]"
      class="mySwiper "
    >
      <swiper-slide v-for="i in 4">
       <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08);"/>
      </swiper-slide>
    </swiper>
        <div class="overlay-background">
           <div class="text">
             <h4> مضاف حديثا </h4>
             <button class="btn1">
               <span> شاهد المزيد </span>
              <i class="fa-solid fa-arrow-left-long"></i>
             </button>
           </div>
           <img class="img-fluid " src="~/assets/images/banner-img1.png" alt="">
        </div>
      </div>
      <div class="container d-flex align-items-center  justify-content-center banner-container">
      <!-- :slidesPerView="1"
      :spaceBetween="10" -->
        <swiper
      :navigation="true"
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
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
      }"
     :modules="[SwiperNavigation]"
      class="mySwiper "
    >
      <swiper-slide v-for="i in 4">
       <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08);"/>
      </swiper-slide>
    </swiper>
        <div class="overlay-background f2">
           <div class="text">
             <h4> الاكثر مبيعا </h4>
             <button class="btn1">
               <span> شاهد المزيد </span>
              <i class="fa-solid fa-arrow-left-long"></i>
             </button>
           </div>
           <img class="img-fluid " src="~/assets/images/banner-img2.png" alt="">
        </div>
      </div>
      <div class="container d-flex align-items-center  justify-content-center banner-container">
      <!-- :slidesPerView="1"
      :spaceBetween="10" -->
        <swiper
      :navigation="true"
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
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
      }"
     :modules="[SwiperNavigation]"
      class="mySwiper "
    >
      <swiper-slide v-for="i in 4">
       <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08);"/>
      </swiper-slide>
    </swiper>
        <div class="overlay-background f3">
           <div class="text">
             <h4> خصومات الشهر </h4>
             <button class="btn1">
               <span> شاهد المزيد </span>
              <i class="fa-solid fa-arrow-left-long"></i>
             </button>
           </div>
           <img class="img-fluid " src="~/assets/images/banner-img3.png" alt="">
        </div>
      </div>
        
        <div class="brands-container">
         <div class="text d-flex align-items-center justify-content-center flex-column gap-2 mb-5">  
           <h3> الماركات </h3>
           <span> استكشف مجموعة مذهلة من الماركات العالمية الرائدة في عالم المجوهرات والتصميم على موقع بلاتين  </span>
         </div>
                   <swiper :centeredSlides="true" :looped-slides="true"
        :breakpoints="{
          '640': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 9,
            spaceBetween: 40,
          },
        }"
       :modules="[]"
        class="mySwiper "
      >
        <swiper-slide v-for="i,index in 11">
          <img src="~/assets/images/brand-logo1.png" alt="">
        </swiper-slide>
      </swiper>
 

       <p class="mb-5"> لازوردي إحدى كبريات المجموعات المعنية بتصنيع المجوهرات بأنواعها "الذهب والألماس والأحجار الكريمة" وتوزيعها عبر شبكة أفرعها المنتشرة بالسعودية </p>
        <div class="btn-back d-flex align-items-center w-100 justify-content-center"> 
          <button class="btn1">
           <span> عرض المنتجات </span>
            <i class="fa-solid fa-arrow-left-long"></i>  
          </button>
         </div>
       <div class="overlay-bg"></div>
        </div>
        <div class="container chart-div">
          <chart  />
        </div>
      </div>
</template>

<script setup>
let tab = ref(null);


</script>

<style lang="scss" scoped>


</style>