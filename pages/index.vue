<template>
  <div style="min-height: 100vh">
    <div class="container hero-container" style="">
      <swiper :spaceBetween="30" :effect="'fade'" :dir="getSwiperDirection"  :pagination="{
        clickable: true,
      }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="[SwiperEffectFade, SwiperPagination, SwiperAutoplay]" class="hero-section">
        <swiper-slide v-for="(i, index) in 3" class="box">
          <div class="h-100">
            <!-- <img src="~/assets/images/banner.jpg" alt=""> -->
            <div class="text-container">
              <!-- {{ index + 1 }} -->
              <h2>{{ $t("landing1") }}</h2>
              <span class="text">
                {{ $t("landing2") }}
              </span>
              <button class="btn1">
                <span> {{ $t("shopNow") }}</span>
                <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
              </button>
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="sections container" style="">
      <div class="text w-100 d-flex align-items-center justify-content-center text-center flex-column ">
        <h3>
          {{ $t("sections") }}
        </h3>
        <span class="p-text">
          {{ $t("explore1") }}
        </span>
      </div>
      <div class="row justify-content-center justify-content-xl-start justify-content-lg-start">
        <div v-for="(item, index) in categoriesArr" class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div class="box d-flex flex-column justify-content-center align-items-center gap-1" :class="`f${index + 1}`">
            <img :src="item.image" alt="" />
            <span class="type"> {{ item.name }} </span>
            <span class="count">
              {{ item.products_count }} {{ $t("product") }}
            </span>

            <button class="mt-1" @click="goTocategory(item.id, item.name, `f${index + 1}`)">
              {{ $t("showProducts") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="offers containe" style="">
      <swiper :effect="'fade'" :centeredSlides="true" :dir="getSwiperDirection" :pagination="{
        clickable: true,
      }" :breakpoints="{
  '300': {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  '768': {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
}" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="[SwiperPagination, SwiperAutoplay]" class="">
        <swiper-slide v-for="(item, index) in adsArr" class="box" :class="`f${index + 1}`">
          <div class="h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row">
            <div class="text-container">
              <h2 v-html="item.title"></h2>
              <span class="text">
                {{ item.description }}
              </span>
             <div class="btn-container ">
                <button class="btn1">
                  <span>
                    {{ $t("watch1") }}
                  </span>
                  <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                </button>
              
                </div>
              <div class="circle">
                <img class="" src="~/assets/images/offer-circle.png" alt="" />
              </div>
            </div>
            <div class="main-img h-100">
              <img :src="item.image" alt="" />
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container categories">
      <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row justify-content-between">
        <div class="text">
          <h3>
            {{ $t("shop1") }}
          </h3>
          <p class="p-text cate">
            {{ $t("explore2") }}
          </p>
        </div>
        <div class="d-flex align-items-center gap-4 arrows">
          <div class="slider-cate-next">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div class="slider-cate-prev">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
      </div>

      <swiper :slidesPerView="2" :spaceBetween="10" :dir="getSwiperDirection" :navigation="{
        nextEl: '.slider-cate-next',
        prevEl: '.slider-cate-prev',
      }" :breakpoints="{
  '768': {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 6,
    spaceBetween: 30,
  },
}" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="[SwiperNavigation, SwiperAutoplay]" class="">
        <swiper-slide v-for="item in subcategoriesArr">
          <div class="box">
            <div class="image">
              <img :src="item.image" alt="" />
            </div>
            <span> {{ item.name }} </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container our-products">
      <div class="header d-flex flex-column align-items-center justify-content-center w-100">
        <h3 class="">{{ $t("our products") }}</h3>

        <!-- <v-tabs v-model="tabNav" align-tabs="center">
          <v-tab v-for="(item, index) in tags" :value="index" class="head">
            <span @click="(tab = item.id), getProducts()" class="choose">
              {{ item.name }}
            </span>
            <border />
          </v-tab>
        </v-tabs> -->

        <div class="tabs">
          <div v-for="(item, index) in tags" @click="(tabNav = index), (tab = item.id), getProducts()"
            :class="{ active: tab == item.id }" class="tab">
            <span class="choose"> {{ item.name }}</span>
            <border />
          </div>
        </div>
      </div>

      <v-window v-model="tabNav">
        <v-window-item v-for="(item, index) in tags">
          <div class="row">
            <div v-for="(item, indexx) in productsTags" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card :product="item" :index="indexx" />
            </div>
          </div>
          <div v-if="spinnerProducts" class="d-flex align-items-center justify-content-center">
            <v-progress-circular indeterminate color="#dcba95"></v-progress-circular>
          </div>
        </v-window-item>
      </v-window>
      
        <span @click="goToProducts();" class="more mt-5"> {{ $t("more") }} </span>

    </div>

    <!-- <div class="container">
      <div class="row">
        <div class="col" v-for="item, index in products" :key="item.id">
          <div class="product-card">
            <div class="head w-100 d-flex align-items-center justify-content-between">
              <div class="octagon">
                <octagon />
                <i class="fa-solid fa-heart"></i>
              </div>
              <span>{{ $t("most selling") }}</span>
            </div>
            <Swiper :spaceBetween="30" :centeredSlides="true" :effect="'fade'" :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :modules="[SwiperAutoplay, SwiperEffectFade]" class="image">
              <swiper-slide v-for="img in item.images">
                <img :src="img" alt="" />
              </swiper-slide>
            </Swiper>
            <div class="rate w-100 d-flex align-items-center justify-content-between">
              <span class="type"> الذهب </span>
              <div class="star d-flex align-items-center gap-2">
                <i class="fa-solid fa-star"></i>
                <span>3.4</span>
              </div>
            </div>
            <h3>{{ item.name }}</h3>
            <div class="price w-100 d-flex align-items-center justify-content-between">
              <span class="price-text">2500 ر.س</span>
              <span> ق24 / 2.5ج </span>
            </div>

            <div class="overlay">
              <div class="head-icons w-100">
                <div class="w-100 d-flex align-items-center justify-content-between">
                  <div v-if="!store.state.isInFav[index]" @click="addTofav(item, index), favIconFunc(index)"
                    class="octagon " :class="{ 'active': store.state.isInFav[index] == true }">
                    <octagon />
                    <i class="fa-solid fa-heart"></i>
                  </div>
                  <div v-if="store.state.isInFav[index]" @click="deleteTofav(index)" class="octagon "
                    :class="{ 'active': store.state.isInFav[index] }">
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
                <div class="d-flex w-100 align-items-center justify-content-between">
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
                  <div @click="addToBasket(item)" class="octagon d-flex flex-column gap-3">
                    <octagon />
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
                <div class="text d-flex text-center w-100 align-items-center justify-content-between">
                  <span> شاهد </span>
                  <span> اضف الي السلة </span>
                  <span> مقارنة </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="main-banner-container">
      <div class="container d-flex align-items-center justify-content-center banner-container">
        <!-- :slidesPerView="1"
      :spaceBetween="10" -->
        <div class="arrows d-flex align-items-center gap-4">
          <div @click="banner1 = true" class="slider-cate-next arrow">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div @click="banner1 = false" class="slider-cate-prev arrow">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
        <swiper :navigation="{
          nextEl: '.slider-cate-next',
          prevEl: '.slider-cate-prev',
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
    slidesPerView: 3.5,
    spaceBetween: 50,
  },
}" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :dir="getSwiperDirection" :modules="[SwiperNavigation, SwiperAutoplay]" class="mySwiper">
          <swiper-slide v-for="(item, index) in productsSectionsArr.latestProducts">
            <product-card :product="item" :index="index"/>
          </swiper-slide>
        </swiper>
        <div class="overlay-background f1" :class="{ active: banner1 }">
          <div class="text">
            <h4>{{ $t("add recently") }}</h4>
            <svg class="svg arrow-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none">
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white" />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white" />
            </svg>
            <button class="btn1">
              <span> {{ $t("see more") }} </span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img1.png" alt="" />
        </div>
      </div>

      <div class="container d-flex align-items-center justify-content-center banner-container">
        <div class="arrows d-flex align-items-center gap-4">
          <div @click="banner2 = true" class="arrow second-cate-next">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div @click="banner2 = false" class="arrow second-cate-prev">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
        <swiper :navigation="{
          nextEl: '.second-cate-next',
          prevEl: '.second-cate-prev',
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
    slidesPerView: 3.5,
    spaceBetween: 50,
  },
}" :dir="getSwiperDirection" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="[SwiperNavigation, SwiperAutoplay]" class="mySwiper">
          <swiper-slide v-for="(item, index) in productsSectionsArr.latestProducts">
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
        <div class="overlay-background f2" :class="{ active: banner2 }">
          <div class="text">
            <h4>{{ $t("most selling") }}</h4>
             <svg class="svg arrow-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                  fill="white" />
                <path
                  d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                  fill="white" />
              </svg>
            <button class="btn1">
              <span>{{ $t("see more") }}</span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img2.png" alt="" />
        </div>
      </div>

      <div class="container d-flex align-items-center justify-content-center banner-container">
        <div class="arrows d-flex align-items-center gap-4">
          <div @click="banner3 = true" class="third-cate-next arrow">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div @click="banner3 = false" class="third-cate-prev arrow">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
        <swiper :navigation="{
          nextEl: '.third-cate-next',
          prevEl: '.third-cate-prev',
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
    slidesPerView: 3.5,
    spaceBetween: 50,
  },
}"  :dir="getSwiperDirection" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="[SwiperNavigation, SwiperAutoplay]" class="mySwiper">
          <swiper-slide v-for="(item, index) in productsSectionsArr.discountedProducts">
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
        <div class="overlay-background f3" :class="{ active: banner3 }">
          <div class="text">
            <h4>{{ $t("discounts") }}</h4>
             <svg class="svg arrow-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                  fill="white" />
                <path
                  d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                  fill="white" />
              </svg>
            <button class="btn1">
              <span> {{ $t("see more") }} </span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="brands-container">
      <div class="text d-flex align-items-center justify-content-center flex-column ">
        <h3>{{ $t("brands") }}</h3>
        <span class="p-text">
          {{ $t("explore3") }}
        </span>
      </div>
      <swiper :centeredSlides="true" :grabCursor="true" :dir="getSwiperDirection" :thumbs="{ swiper: thumbsSwiper }"
        :modules="[SwiperFreeMode, SwiperThumbs, SwiperAutoplay]" :breakpoints="{
  '300': {
    slidesPerView: 2,
    spaceBetween: 80,
  },
  '700': {
    slidesPerView: 5,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 9,
    spaceBetween: 60,
  },
}" class="mySwiper">
        <swiper-slide v-for="(item, index) in brandsArr" class="px">
          <img :src="item.image" class="w-100" alt="" />
        </swiper-slide>
      </swiper>

      <swiper @swiper="setThumbsSwiper" :freeMode="true" :watchSlidesProgress="true" :spaceBetween="60"
        :dir="getSwiperDirection" :slidesPerView="1">
        <swiper-slide v-for="(item, index) in brandsArr" class="" style="padding: 0px 50px">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <p class="p-text text-center" style="">
              {{ item.description }}
            </p>
            <div class="btn-back d-flex align-items-center w-100 justify-content-center">
              <button @click="goToProductsByBrandId(item.id)" class="btn1">
                <span> {{ $t("showProducts") }} </span>
                <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="overlay-bg"></div>
    </div>

    <div class="container chart-div">
      <div class="text d-flex align-items-center text-center gap-2 mb-5 justify-content-center flex-column">
        <h3>{{ $t("about market") }}</h3>
        <span class="p-text">
          {{ $t("market desc") }}
        </span>
      </div>
      <div class="chart-container">
        <chart />
      </div>
    </div>

    <div class="gift-container">
      <div class="text d-flex align-items-center justify-content-center flex-column text-center">
        <h3>{{ $t("gift1") }}</h3>
        <p class="p-text">
          {{ $t("gift desc1") }}
        </p>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-12 col-xl-5 col-lg-5 box-container">
          <div class="box">
            <div class="head d-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="37" viewBox="0 0 34 37" fill="none">
                <path
                  d="M30.3333 8.44434H3.66667C2.05584 8.44434 0.75 9.75361 0.75 11.3687V14.7108C0.75 16.3259 2.05584 
    17.6351 3.66667 17.6351H30.3333C31.9442 17.6351 33.25 16.3259 33.25 14.7108V11.3687C33.25 9.75361 31.9442 8.44434 30.3333 8.44434Z"
                  fill="white" />
                <path d="M19.3592 10.9524C18.8259 11.0154 18.2856 10.9337 17.7945 10.7159C17.3035 10.4981 16.8797 10.1521 
    16.5675 9.71413C16.0842 8.85187 16.3725 7.85091 17.2342 4.87643C17.5942 3.66325 18.9192 0.0888672 22.3042 
    0.0888672C23.6603 0.0919611 24.9598 0.633785 25.9182 1.59566C26.8766 2.55753 27.4158 3.86104 27.4175 5.22067C27.4175
     8.41907 24.0459 9.75591 22.7742 10.2572C21.6863 10.6912 20.5298 10.9266 19.3592 10.9524ZM18.8692 8.41238C19.8819
      8.48435 20.8975 8.3196 21.8359 7.93112C23.2792 7.35962 24.9142 6.5408 24.9142 5.21733C24.9124 4.5225 24.6364 
      3.85664 24.1463 3.36533C23.6563 2.87401 22.9922 2.59721 22.2992 2.59545C20.6442 2.59545 19.8592 4.79956 
      19.6592 5.47467C19.3025 6.71125 18.9809 7.8342 18.8725 8.41572L18.8692 8.41238Z" fill="white" />
                <path
                  d="M14.6107 10.9459C13.4496 10.9049 12.3044 10.6629 11.2257 10.2307C10.089 9.77949 6.63065 8.40756
     6.58398 5.21752C6.59168 4.54175 6.73426 3.87436 7.00334 3.25473C7.27241 2.63509 7.66252 2.07576 8.15065
      1.60972C8.60933 1.12405 9.1629 0.738368 9.77684 0.476735C10.3908 0.215102 11.0519 0.0831315 11.719 
      0.0890583C14.3757 0.159243 15.6373 2.64076 16.6507 4.63432C17.379 6.06809 18.484 8.23377 17.309 
      9.81626C16.9815 10.2065 16.5658 10.5126 16.0964 10.7091C15.6271 10.9056 15.1177 10.9868 14.6107 
      10.9459ZM11.6107 2.59062C10.9617 2.63064 10.3524 2.91754 9.90732 3.39273C9.65682 3.62024 9.45409
       3.89556 9.311 4.20257C9.16791 4.50959 9.08734 4.84214 9.07398 5.18076C9.09398 6.5176 10.719 
       7.33307 12.134 7.89455C13.11 8.39531 14.2286 8.54288 15.3007 8.31231C15.4407 8.0533 15.1473 
       7.19605 14.4223 5.77064L15.534 5.19914L14.4207 5.76897C13.484 3.93081 12.7357 2.61903 11.6507 2.59397L11.6107 2.59062Z"
                  fill="white" />
                <path d="M14.916 19.3062H19.0827V36.0167H14.916V19.3062Z" fill="white" />
                <path d="M12.416 19.3063V36.0168H6.99935C6.39734 36.0172 5.80114 35.8987 5.24487 35.6679C4.68859 35.4371
     4.18316 35.0986 3.75747 34.6718C3.33178 34.245 2.99419 33.7382 2.76401 33.1805C2.53383 32.6228 2.41558 
     32.025 2.41602 31.4214V19.1392C2.82426 19.2461 3.24409 19.3022 3.66602 19.3063H12.416Z" fill="white" />
                <path d="M31.584 19.1392V31.4214C31.5844 32.025 31.4662 32.6228 31.236 33.1805C31.0058 33.7382 30.6682
     34.245 30.2425 34.6718C29.8168 35.0986 29.3114 35.4371 28.7551 35.6679C28.1989 35.8987 27.6027 
     36.0172 27.0007 36.0168H21.584V19.3063H30.334C30.7559 19.3022 31.1757 19.2461 31.584 19.1392Z" fill="white" />
              </svg>
              <span class="fw-bold">1. {{ $t("gift2") }}</span>
            </div>

            <p class="mt-2 px-5">
              {{ $t("gift desc2") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-5 col-lg-5 box-container">
          <div class="box">
            <div class="head d-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                <path d="M34 0H6C4.41016 0.00474869 2.8868 0.638482 1.7626 1.76279C0.638414 2.8871 0.00474818 4.41063 0
     6.00064V22.0023C0.00474818 23.5923 0.638414 25.1159 1.7626 26.2402C2.8868 27.3645 4.41016 27.9982 6 
     28.003V32.0034C5.99836 32.3734 6.10059 32.7363 6.29505 33.0511C6.48952 33.3658 6.76841 33.6196 7.1 
     33.7836C7.43209 33.9521 7.80462 34.0245 8.17564 33.9927C8.54665 33.9609 8.90142 33.8261 9.2 33.6036L16.66 
     28.003H34C35.5898 27.9982 37.1132 27.3645 38.2374 26.2402C39.3616 25.1159 39.9953 23.5923 40 22.0023V6.00064C39.9953
      4.41063 39.3616 2.8871 38.2374 1.76279C37.1132 0.638482 35.5898 0.00474869 34 0ZM8 18.0019C8 17.4714 8.21071 16.9627 
      8.58579 16.5875C8.96086 16.2124 9.46957 16.0017 10 16.0017H26C26.5304 16.0017 27.0391 16.2124 27.4142 16.5875C27.7893
       16.9627 28 17.4714 28 18.0019C28 18.5324 27.7893 19.0412 27.4142 19.4163C27.0391 19.7914 26.5304 20.0021 26 20.0021H10C9.46957 
       20.0021 8.96086 19.7914 8.58579 19.4163C8.21071 19.0412 8 18.5324 8 18.0019ZM8 10.0011C8 9.47057 8.21071 8.96181 8.58579 8.5867C8.96086 
       8.21159 9.46957 8.00085 10 8.00085H16C16.5304 8.00085 17.0391 8.21159 17.4142 8.5867C17.7893 8.96181 18 9.47057 18 10.0011C18 10.5316 17.7893
        11.0403 17.4142 11.4154C17.0391 11.7905 16.5304 12.0013 16 12.0013H10C9.46957 12.0013 8.96086 11.7905 8.58579 11.4154C8.21071 11.0403 
        8 10.5316 8 10.0011Z" fill="white" />
              </svg>
              <span class="fw-bold">2.{{ $t("gift3") }}</span>
            </div>

            <p class="mt-2 px-5">
              {{ $t("gift desc3") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-5 col-lg-5 box-container">
          <div class="box active">
            <div class="head d-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0755 7.29945V9.04483C20.0211 10.9991 19.1968 12.8552
   17.7783 14.2184C16.3599 15.5816 14.4591 16.3443 12.4801 16.3443C10.5012 16.3443 8.60033 15.5816 7.18183
    14.2184C5.76333 12.8552 4.93915 10.9991 4.88468 9.04483V7.29945C4.93923 5.34523 5.76341 3.48911 7.18183
     2.12592C8.60033 0.762725 10.5012 0 12.48 0C14.459 0 16.3598 0.762725 17.7782 2.12592C19.1968 3.48911
      20.0211 5.34523 20.0755 7.29945ZM25.6643 26.2422H38.0435C38.295 26.2559 38.547 26.2189 38.7836 
      26.1334C39.0205 26.0478 39.237 25.9153 39.4202 25.7444C39.6034 25.5732 39.7492 25.367 39.849 
      25.1382C39.9486 24.9096 40 24.663 40 24.414C40 24.165 39.9486 23.9186 39.849 23.6898C39.7491 
      23.4612 39.6034 23.2548 39.4202 23.0839C39.237 22.9127 39.0204 22.7803 38.7836 22.6946C38.547 
      22.609 38.295 22.572 38.0435 22.586H25.6643C25.1915 22.612 24.7465 22.816 24.4211 23.1561C24.0957 
      23.4961 23.9143 23.9463 23.9143 24.4141C23.9143 24.8821 24.0957 25.3323 24.4211 25.6723C24.7465
       26.012 25.1915 26.216 25.6643 26.2422ZM25.6643 29.4533H38.0435C38.295 29.4396 38.547 29.4766 
       38.7836 29.5621C39.0205 29.6477 39.237 29.7802 39.4202 29.9511C39.6034 30.1223 39.7492 30.3285
        39.849 30.5573C39.9486 30.7859 40 31.0325 40 31.2815C40 31.5305 39.9486 31.7769 39.849 
        32.0057C39.7491 32.2344 39.6034 32.4407 39.4202 32.6116C39.237 32.7828 39.0204 32.9152 
        38.7836 33.0009C38.547 33.0865 38.295 33.1235 38.0435 33.1095H25.6643C25.1915 33.0835 
        24.7465 32.8795 24.4211 32.5394C24.0957 32.1994 23.9143 31.7492 23.9143 31.2814C23.9143
         30.8134 24.0957 30.3632 24.4211 30.0234C24.7465 29.6835 25.1915 29.4795 25.6643 29.4533ZM31.1031
          36.3323H25.6642C25.1914 36.3583 24.7465 36.5623 24.421 36.9023C24.0956 37.2424 23.9142 
          37.6926 23.9142 38.1604C23.9142 38.6284 24.0956 39.0785 24.421 39.4186C24.7465 39.7586 25.1915 39.9623
           25.6642 39.9886H31.1031C31.355 40.0024 31.607 39.9656 31.8435 39.88C32.0804 39.7943 32.2969 39.6619 32.4801 39.4908C32.6631 39.3196 32.8091 39.1133 32.9087 
           38.8845C33.0086 38.6559 33.0599 38.4096 33.0599 38.1604C33.0599 37.9114 33.0085 37.665 32.9087 37.4362C32.8091 37.2076 32.6631 37.0014 32.4801
            36.8302C32.2969 36.659 32.0803 36.5266 31.8435 36.441C31.607 36.3554 31.355 36.3184 31.1031 36.3323ZM20.8704 39.462C21.2177 39.119 21.4134 
            38.6542 21.4151 38.169C21.4184 38.1074 21.4106 38.0456 21.3918 37.9865V23.4416C21.374 22.9356 21.1564 22.4564 20.7856 22.1068C18.9879 
            20.5282 16.767 19.496 14.3897 19.1343C12.0125 18.7727 9.58012 19.0968 7.38486 20.0678C5.1896 21.039 3.32492 22.6156 2.01487 
            24.6084C0.70482 26.6012 0.00516802 28.9254 0 31.3016V34.935C0.00303519 36.2774 0.544201 37.5638 1.50504 38.5132C2.46588 39.4624
             3.76823 39.997 5.12709 40H19.5615C20.0527 39.9984 20.5233 39.8049 20.8704 39.462Z" fill="white" />
              </svg>
              <span class="fw-bold">3.{{ $t("gift4") }}</span>
            </div>

            <p class="mt-2 px-5">
              {{ $t("gift desc4") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-5 col-lg-5 box-container">
          <div class="box active">
            <div class="head d-flex align-items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
                <path d="M22.3438 0H27.0312V8.16667H22.3438V0Z" fill="white" />
                <path
                  d="M38.8281 0H29.375V9.33333C29.375 9.97764 28.8503 10.5 28.2031 10.5H21.1719C20.5247 10.5 20 9.97764 20 9.33333V0H10.625C9.97781 0 9.45312 0.522355 9.45312 1.16667V15.2285C9.83898 15.1723 10.2305 15.1431 10.625 15.1431C12.7848 15.1431 14.8569 16.0071 16.3742 17.4999H21.1719C23.7566 17.4999 25.8594 19.5934 25.8594 22.1666C25.8594 24.7398 23.7566 26.8333 21.1719 26.8333H29.375C31.5552 26.8333 33.3925 28.3228 33.9141 30.3333H38.8281C39.4753 30.3333 40 29.8109 40 29.1666V1.16667C40 0.522355 39.4753 0 38.8281 0Z"
                  fill="white" />
                <path
                  d="M29.375 29.1667H18.8281C16.2393 29.1667 14.1406 27.0774 14.1406 24.5001H21.1719C22.4663 24.5001 23.5156 23.4554 23.5156 22.1667C23.5156 20.878 22.4663 19.8334 21.1719 19.8334H15.3125C14.2146 18.3513 12.4748 17.4766 10.625 17.4766C8.77523 17.4766 7.03539 18.3513 5.9375 19.8334H4.76562V19.0556C4.76562 18.4113 4.24094 17.8889 3.59375 17.8889H1.17188C0.524687 17.8889 0 18.4113 0 19.0556V33.8334C0 34.4777 0.524687 35.0001 1.17188 35.0001H3.59375C4.24094 35.0001 4.76562 34.4777 4.76562 33.8334V31.5001H5.9375L13.2812 33.8334H29.375C30.6695 33.8334 31.7188 32.7888 31.7188 31.5001C31.7188 30.2114 30.6695 29.1667 29.375 29.1667Z"
                  fill="white" />
              </svg>
              <span class="fw-bold"> 4.{{ $t("gift5") }}</span>
            </div>

            <p class="mt-2 px-5">
              {{ $t("gift desc5") }}
            </p>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>

    <div class="info-container container">
      <div class="row justify-content-center bg">
        <div class="col-12 bg col-xl-5 col-lg-5 cover-box my-2">
          <div class="img-box">
            <div class="image bg-dang">
              <img src="~/assets/images/info-bg.png" alt="" />
              <div class="overlay"></div>
            </div>
          </div>
          <img class="cover" src="~/assets/images/info-bg-overlay.png" alt="" />
        </div>
        <div class="col-12 bg- col-xl-5 col-lg-5 my-2">
          <div class="all-boxes d-flex flex-column h-100 justify-content-center">
            <div class="box my">
              <div class="head d-flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_481_7023)">
                    <path d="M3.48906 14.4062H3.47109C2.46447 14.4062 1.64844 15.2223 1.64844 16.2289V16.2469C1.64844 17.2535 2.46447
                       18.0695 3.47109 18.0695H3.48906C4.49569 18.0695 5.31172 17.2535 5.31172 16.2469V16.2289C5.31172 15.2223 
                       4.49569 14.4062 3.48906 14.4062Z" fill="#919EAB" />
                    <path
                      d="M39.9047 13.7709C39.8547 11.6936 38.6812 9.60763 36.7164 8.57716C33.4828 6.86466 29.9328 5.4006 26.6828 
                      4.28029C25.3692 3.8291 23.9425 3.8291 22.6289 4.28029C21.6547 4.61857 20.6594 4.98341 19.6531 5.37404C23.9656 
                      6.78888 29.0195 8.69982 33.7562 11.0397C34.2078 11.2621 34.593 11.599 34.8736 12.0169C35.1543 12.4347 35.3204
                       12.9188 35.3555 13.4209C35.4852 15.7748 35.5477 18.2029 35.5328 20.6248C35.5328 20.8834 35.2742 21.0498 35.0641 
                       20.9248L33.9211 20.242C33.867 20.21 33.8029 20.1992 33.7414 20.212C33.6798 20.2247 33.6252 20.2599 33.5883 20.3108C33.0904 
                       20.9639 32.5799 21.6253 32.057 22.2951C32.0149 22.353 31.9554 22.3958 31.8871 22.4172C31.8188 22.4386 31.7454 22.4375 
                       31.6778 22.4141C31.6102 22.3906 31.552 22.346 31.5116 22.2869C31.4713 22.2278 31.4511 22.1573 31.4539 22.0858C31.4852
                        19.6561 31.4609 17.1928 31.3844 14.8115C31.3613 14.2929 31.1939 13.7911 30.901 13.3625C30.6081 12.9339 30.2014 
                        12.5956 29.7266 12.3858C24.7945 10.1772 19.9039 8.40138 15.7273 7.04669H15.7148H15.7086H4.41328C3.93002 
                        7.0469 3.46662 7.23902 3.12497 7.58081C2.78333 7.92261 2.59141 8.38609 2.59141 8.86935V8.8881C2.59141 
                        9.37129 2.78335 9.83469 3.12502 10.1764C3.46669 10.518 3.93009 10.71 4.41328 10.71H10.3281V10.7154C10.7872 10.749 11.2166 10.955 11.53 11.2921C11.8435 11.6291 12.0178 12.0723 12.018 12.5326V12.5514C12.0181 12.791 11.9709 13.0283 11.8792 13.2497C11.7875 13.471 11.6531 13.6722 11.4836 13.8415C11.3141 14.0109 11.1128 14.1452 10.8914 14.2367C10.6699 14.3282 10.4326 14.3751 10.193 14.3748H8.22188C7.73902 14.3748 7.27589 14.5664 6.93417 14.9076C6.59244 15.2487 6.40005 15.7115 6.39922 16.1944V16.2131C6.39943 16.6964 6.59152 17.1599 6.93329 17.5017C7.27506 17.8435 7.73854 18.0356 8.22188 18.0358H10.193C10.4323 18.0358 10.6693 18.0829 10.8904 18.1745C11.1114 18.2661 11.3123 18.4004 11.4815 18.5696C11.6507 18.7389 11.7849 18.9398 11.8764 19.161C11.9679 19.3821 12.0149 19.6191 12.0148 19.8584V19.8764C12.0149 20.1157 11.9679 20.3527 11.8764 20.5738C11.7849 20.795 11.6507 20.9959 11.4815 21.1651C11.3123 21.3344 11.1114 21.4687 10.8904 21.5603C10.6693 21.6519 10.4323 21.699 10.193 21.699H1.81484C1.33145 21.699 0.867846 21.8911 0.526031 22.2329C0.184217 22.5747 -0.0078125 23.0383 -0.0078125 23.5217V23.5397C-0.0078125 24.0231 0.184217 24.4867 0.526031 24.8285C0.867846 25.1703 1.33145 25.3623 1.81484 25.3623H10.193C10.4325 25.3624 10.6696 25.4097 10.8908 25.5015C11.112 25.5933 11.3129 25.7278 11.4821 25.8973C11.6513 26.0668 11.7854 26.2679 11.8769 26.4893C11.9683 26.7106 12.0152 26.9478 12.0148 27.1873V27.2061C12.0148 27.6893 11.8229 28.1527 11.4812 28.4943C11.1396 28.836 10.6762 29.0279 10.193 29.0279H6.86484C6.38158 29.0282 5.91818 29.2203 5.57654 29.5621C5.23489 29.9039 5.04297 30.3673 5.04297 30.8506V30.8694C5.04297 31.3526 5.23489 31.8161 5.57654 32.1579C5.91818 32.4997 6.38158 32.6918 6.86484 32.692H15.1359C17.5781 33.834 20.0793 34.8454 22.6289 35.7217C23.9425 36.1729 25.3692 36.1729 26.6828 35.7217C29.9328 34.6014 33.4797 33.1373 36.7164 31.4248C38.6812 30.3944 39.8547 28.3084 39.9047 26.2311C40.0328 22.0769 40.0328 17.9235 39.9047 13.7709Z"
                      fill="#919EAB" />
                  </g>
                  <defs>
                    <clipPath id="clip0_481_7023">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div class="p-head">
                  <span class="border-line"> {{ $t("info1") }} </span>
                  <p>
                    {{ $t("info desc1") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="box my">
              <div class="head d-flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.79922 3.2002H31.1992C34.292 3.2002 36.7992 5.7074 36.7992 8.8002V20.0002C36.7992 23.093 34.292 25.6002 31.1992 25.6002H8.79922C5.70642 25.6002 3.19922 23.093 3.19922 20.0002V8.8002C3.19922 5.7074 5.70642 3.2002 8.79922 3.2002ZM36.7992 24.8002V24.0002C36.7992 24.0002 35.5903 26.9289 31.1992 27.2002H8.79922C4.31413 26.869 3.19922 24.0002 3.19922 24.0002V24.8002C3.19922 27.893 5.70642 30.4002 8.79922 30.4002H31.1992C34.292 30.4002 36.7992 27.893 36.7992 24.8002ZM36.7992 29.6002V28.8002C36.7992 28.8002 35.5903 31.7289 31.1992 32.0002H8.79922C4.31413 31.669 3.19922 28.8002 3.19922 28.8002V29.6002C3.19922 32.693 5.70642 35.2002 8.79922 35.2002H31.1992C34.292 35.2002 36.7992 32.693 36.7992 29.6002ZM23.1992 9.6002H20.7992V8.8002C20.7992 8.35837 20.441 8.0002 19.9992 8.0002C19.5574 8.0002 19.1992 8.35837 19.1992 8.8002V9.6002H18.4215C17.096 9.6002 16.0215 10.6747 16.0215 12.0002V12.8014C16.0215 14.1269 17.096 15.2014 18.4215 15.2014H21.5992C22.0411 15.2014 22.3992 15.5596 22.3992 16.0014V16.8002C22.3992 17.242 22.0411 17.6002 21.5992 17.6002H17.6188C17.5859 17.1999 17.2568 16.8797 16.8458 16.8672C16.4042 16.8537 16.0353 17.2009 16.0219 17.6425L15.9996 18.3759C15.9859 18.827 16.3479 19.2002 16.7992 19.2002H19.1992V19.9862C19.1992 20.428 19.5574 20.7862 19.9992 20.7862C20.441 20.7862 20.7992 20.428 20.7992 19.9862V19.2002H21.5992C22.9247 19.2002 23.9992 18.1257 23.9992 16.8002V16.0014C23.9992 14.6759 22.9247 13.6014 21.5992 13.6014H18.4215C17.9797 13.6014 17.6215 13.2432 17.6215 12.8014V12.0002C17.6215 11.5584 17.9797 11.2002 18.4215 11.2002H22.423C22.5098 11.5481 22.8244 11.8059 23.1992 11.8059C23.6411 11.8059 23.9992 11.4477 23.9992 11.0059V10.4002C23.9992 9.95837 23.6411 9.6002 23.1992 9.6002Z"
                    fill="#919EAB" />
                </svg>
                <div class="p-head">
                  <span class="border-line"> {{ $t("info2") }} </span>
                  <p>
                    {{ $t("info desc2") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="box my">
              <div class="head d-flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M36.7992 25.0742C36.1501 24.272 35.332 23.6121 34.3992 23.1485V20.0001C34.3992 11.8263 28.173 5.64854 19.9992 5.64854C11.8254 5.64854 5.59922 11.8263 5.59922 20.0001V23.1485C4.66639 23.6121 3.84837 24.272 3.19922 25.0742V20.0001C3.19922 10.5008 10.4999 3.24854 19.9992 3.24854C29.4985 3.24854 36.7992 10.5008 36.7992 20.0001V25.0742ZM8.06998 24.0471C8.02353 24.291 7.99922 24.5427 7.99922 24.8001V34.4001C7.99922 34.6575 8.02353 34.9092 8.06998 35.153C5.32173 34.7957 3.19922 32.4457 3.19922 29.6001C3.19922 26.7544 5.32173 24.4045 8.06998 24.0471ZM31.9992 34.4001C31.9992 34.6575 31.9749 34.9092 31.9285 35.153C34.6767 34.7957 36.7992 32.4457 36.7992 29.6001C36.7992 26.7544 34.6767 24.4045 31.9285 24.0471C31.9749 24.291 31.9992 24.5427 31.9992 24.8001V34.4001ZM11.9992 22.4001H13.5992C14.9247 22.4001 15.9992 23.4746 15.9992 24.8001V34.4001C15.9992 35.7256 14.9247 36.8001 13.5992 36.8001H11.9992C10.6737 36.8001 9.59922 35.7256 9.59922 34.4001V24.8001C9.59922 23.4746 10.6737 22.4001 11.9992 22.4001ZM27.9992 22.4001H26.3992C25.0737 22.4001 23.9992 23.4746 23.9992 24.8001V34.4001C23.9992 35.7256 25.0737 36.8001 26.3992 36.8001H27.9992C29.3247 36.8001 30.3992 35.7256 30.3992 34.4001V24.8001C30.3992 23.4746 29.3247 22.4001 27.9992 22.4001Z"
                    fill="#919EAB" />
                </svg>
                <div class="p-head">
                  <span class="border-line"> {{ $t("info3") }} </span>
                  <p>
                    {{ $t("info desc3") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="box my">
              <div class="head d-flex  gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M31.1992 8H8.79922C5.70642 8 3.19922 10.5072 3.19922 13.6V14.4H36.7992V13.6C36.7992 10.5072 34.292 8 31.1992 8ZM3.19922 28V20.8H36.7992V28C36.7992 31.0928 34.292 33.6 31.1992 33.6H8.79922C5.70642 33.6 3.19922 31.0928 3.19922 28ZM31.1992 28.8H24.7992C24.3574 28.8 23.9992 28.4418 23.9992 28C23.9992 27.5582 24.3574 27.2 24.7992 27.2H31.1992C31.641 27.2 31.9992 27.5582 31.9992 28C31.9992 28.4418 31.641 28.8 31.1992 28.8ZM3.19922 19.2V16H36.7992V19.2H3.19922Z"
                    fill="#919EAB" />
                </svg>
                <div class="p-head">
                  <span class="border-line"> {{ $t("info4") }} </span>
                  <p>
                    {{ $t("info desc4") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useStore } from "~/store";
const store = useStore;

const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

let tab = ref(null);
let tabNav = ref(0);
let banner1 = ref(false);
let banner2 = ref(false);
let banner3 = ref(false);
let spinnerProducts = ref(false);
let brandsArr = ref([]);
let categoriesArr = ref([]);
let subcategoriesArr = ref([]);
let tags = ref([]);
let productsTags = ref([]);
let adsArr = ref([]);
let productsSectionsArr = ref([]);

const goTocategory = (id, name, color) => {
  const queryParams = {
    id: id,
    name: name,
    color: color
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

const goToProducts = () => {
    const queryParams = {
    tagId: tab.value,
  };
  const url = "/products";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
}

const goToProductsByBrandId = (id) => {
  const queryParams = {
    brand_id: id,
  };
  const url = "/products";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

const goTocategorysub = (id, name, subid) => {
  const queryParams = {
    id: id,
    name: name,
    subid: subid,
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

let products = ref([
  {
    vendor_id: 1,
    vendorName: "زهرة الياقوت",
    id: 1,
    name: "خاتم 23",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1702141258459-6dd8f817e79a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701031977495-0351a1c8d889?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    vendor_id: 1,
    vendorName: "زهرة الياقوت",
    id: 2,
    name: "خاتم 25",
    price: 121,
    images: [
      "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1702141258459-6dd8f817e79a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701031977495-0351a1c8d889?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    vendor_id: 2,
    vendorName: "زهرة البستان",
    id: 3,
    name: "خاتم 22",
    price: 124,
    images: [
      "https://images.unsplash.com/photo-1702141258459-6dd8f817e79a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701031977495-0351a1c8d889?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    vendor_id: 3,
    vendorName: "زهرة",
    id: 4,
    name: "خاتم 21",
    price: 123,
    images: [
      "https://images.unsplash.com/photo-1701031977495-0351a1c8d889?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1702141258459-6dd8f817e79a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
]);

let basket = ref([]);

const addToBasket = (itemm) => {
  store.commit("add", { mainItem: itemm });
};
const addTofav = (item, index) => {
  store.commit("addFav", { item: item, index: index });
};
const deleteTofav = (index) => {
  store.commit("deleteFav", index);
};
const favIconFunc = (index) => {
  store.commit("favIcon", index);
};

const isFav = computed(() => {
  return store.state.isInFav;
});
const getCategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categoriesArr.value = result.data.data.slice(0, 4);
};
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brands`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  brandsArr.value = result.data.data;
};

const getSubcategories = async () => {
  let result = await axios.get(`${getUrl()}/subcategories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  subcategoriesArr.value = result.data.data;
};
const getAds = async () => {
  let result = await axios.get(`${getUrl()}/ads`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  adsArr.value = result.data.data;
};
const getProductsSections = async () => {
  let result = await axios.get(`${getUrl()}/product-sections`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  productsSectionsArr.value = result.data.data;
};

const getTags = async () => {
  let result = await axios.get(`${getUrl()}/tags`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  tags.value = result.data.data;
  console.log(tags.value);
  if (tags.value.length >= 1) {
    tab.value = tags.value[0].id;
    if (tab.value) {
      getProducts();
    }
  }
};

const getProducts = async () => {
  spinnerProducts.value = true;
  productsTags.value = [];
  let result = await axios.get(`${getUrl()}/products`, {
    params: {
      tag_id: tab.value,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
  }
  productsTags.value = result.data.data;
};

const getSwiperDirection = computed(() => {
  if (locale.value === "ar") {
    return "rtl"; // Set the direction to RTL
  } else {
    return "ltr"; // Set the direction to LTR
  }
});

onMounted(async () => {
  getBrands();
  getCategories();
  getSubcategories();
  getTags();
  getAds();
  getProductsSections();
  //getProducts();
});
</script>

<style lang="scss" scoped></style>
