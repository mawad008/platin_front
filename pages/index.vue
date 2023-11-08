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
      :pagination="{
        clickable: true,
      }"
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
      :modules="[ SwiperPagination , SwiperNavigation]"
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

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
  </div>      
      </div>
    
    </div>
</template>

<script setup>
let tab = ref(1);
</script>

<style lang="scss" scoped>


</style>