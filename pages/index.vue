<template>
  <div style="min-height: 100vh">
     <hero></hero>
    <div class="sections container" style="">
      <div
        class="text w-100 d-flex align-items-center justify-content-center text-center flex-column"
      >
        <h3>
          {{ $t("sections") }}
        </h3>
        <span class="p-text">
          {{ $t("explore1") }}
        </span>
      </div>
      <div
        class="row justify-content-center justify-content-xl-start justify-content-lg-start"
      >
        <div
          v-for="(item, index) in categoriesArr"
          class="col-12 col-xl-3 col-lg-3 col-md-6"
        >
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1"
            :class="`f${index + 1}`"
          >
            <img :src="item.image" alt="" />
            <span class="type"> {{ item.name }} </span>
            <span class="count">
              {{ item.products_count }} {{ $t("product") }}
            </span>

            <button
              class="mt-1"
              @click="goTocategory(item.id, item.name, `f${index + 1}`)"
            >
              {{ $t("showProducts") }}
            </button>
          </div>
        </div>
      </div>
    </div>

   
    <div class="offers containe" style="">
      <swiper
        :effect="'fade'"
        :centeredSlides="true"
        :loop="true"
        :centeredSlidesBounds="true"
        :dir="getSwiperDirection"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
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
        }"
        
        :modules="[SwiperPagination, SwiperAutoplay]"
        class=""
      >
        <swiper-slide
          v-for="(item, index) in adsArr"
          class="box"
          :class="`f${index + 1} ff${index % 2 == 0 ? 1 : 2}`"
        >
          <div
            class="h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row"
          >
            <div class="text-container">
              <h2 v-html="item.title"></h2>
              <span class="text">
                {{ item.description }}
              </span>
              <!-- <div class="btn-container">
                <button class="btn1">
                  <span>
                    {{ $t("watch1") }}
                  </span>
                  <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
                </button>
              </div> -->
              <div class="circle">
                <img class="" src="~/assets/images/offer-circle.png" alt="" />
              </div>
            </div>
            <div class="main-img h-100">
              <img :src="item.image" alt="" />
            </div>
          </div>
          <div class="overlay"></div>
          <a class="link" target="_blank"  :href="item.link"></a>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container categories">
      <div
        class="d-flex align-items-center  flex-column flex-xl-row flex-lg-row justify-content-between"
      >
        <div class="text">
          <h3>
            {{ $t("shop1") }}
          </h3>
          <p class="p-text cate  ">
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

      <swiper
        :slidesPerView="2"
        :spaceBetween="10"
        :dir="getSwiperDirection"
        :navigation="{
          nextEl: '.slider-cate-next',
          prevEl: '.slider-cate-prev',
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :modules="[SwiperNavigation, SwiperAutoplay]"
        class=""
      >
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
      <div
        class="header d-flex flex-column align-items-center justify-content-center w-100"
      >
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
          <div
            v-for="(item, index) in tags"
            @click="(tabNav = index), (tab = item.id), getProducts()"
            :class="{ active: tab == item.id }"
            class="tab"
          >
            <span class="choose"> {{ item.name }}</span>
            <border />
          </div>
        </div>
      </div>

      <v-window v-model="tabNav">
        <v-window-item v-for="(item, index) in tags">
          <div class="row">
            <div
              v-for="(item, indexx) in productsTags"
              class="col-6 col-xl-3 col-lg-3 col-md-6 my-2"
            >
              <product-card :product="item" :index="indexx" />
            </div>
          </div>
          <swiper
          :navigation="{
            nextEl: '.slider-cate-next',
            prevEl: '.slider-cate-prev',
          }"
          :spaceBetween="10"
          :breakpoints="{
            '200': {
              slidesPerView: 2,
              spaceBetween: 15,
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
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :dir="getSwiperDirection"
          :modules="[SwiperNavigation, SwiperAutoplay]"
           ref="mySwiper"
          class="mobile-swiper"
        >
          <swiper-slide
            v-for="(item, index) in productsTags"
          >
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
          <div
            v-if="spinnerProducts"
            class="d-flex align-items-center justify-content-center"
          >
            <v-progress-circular
              indeterminate
              color="#dcba95"
            ></v-progress-circular>
          </div>
        </v-window-item>
      </v-window>

      <span @click="goToProducts()" class="more"> {{ $t("more") }} </span>
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
      <div
        class="container d-flex align-items-center flex-column justify-content-center banner-container"
      >
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
        <div class="banner-mobile f1">
        <nuxt-link to="/products">
        <div class="text">
         <h4>{{ $t("add recently") }}</h4>
         <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
        </div>
        </nuxt-link>
          <img class="img-fluid" src="~/assets/images/banner-img1.png" alt="" />
        </div>
        <swiper
          :navigation="{
            nextEl: '.slider-cate-next',
            prevEl: '.slider-cate-prev',
          }"
          :spaceBetween="20"
          :breakpoints="{
            '200': {
              slidesPerView: 2,
              spaceBetween: 10,
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
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :dir="getSwiperDirection"
          :modules="[SwiperNavigation, SwiperAutoplay]"
           ref="mySwiper"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in productsSectionsArr.latestProducts"
          >
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
        <div class="overlay-background f1" :class="{ active: banner1 }">
          <div class="text">
            <h4>{{ $t("add recently") }}</h4>
            <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
            <nuxt-link to="/products">
            <button class="btn1">
              <span> {{ $t("see more") }} </span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
            </nuxt-link>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img1.png" alt="" />
        </div>
      </div>

      <div
        class="container d-flex align-items-center justify-content-center banner-container"
      >
        <div class="arrows d-flex align-items-center gap-4">
          <div @click="banner2 = true" class="arrow second-cate-next">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div @click="banner2 = false" class="arrow second-cate-prev">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
        <div class="banner-mobile f2">
        <nuxt-link to="/products">
        <div class="text">
         <h4>{{ $t("most selling") }}</h4>
         <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
        </div>
        </nuxt-link>
          <img class="img-fluid" src="~/assets/images/banner-img2.png" alt="" />
        </div>
        <swiper
          :navigation="{
            nextEl: '.second-cate-next',
            prevEl: '.second-cate-prev',
          }"
          :spaceBetween="20"
          :breakpoints="{
            '200': {
              slidesPerView: 2,
              spaceBetween: 10,
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
          :dir="getSwiperDirection"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :modules="[SwiperNavigation, SwiperAutoplay]"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in productsSectionsArr.latestProducts"
          >
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
        <div class="overlay-background f2" :class="{ active: banner2 }">
          <div class="text">
            <h4>{{ $t("most selling") }}</h4>
            <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
             <nuxt-link to="/products">
            <button class="btn1">
              <span>{{ $t("see more") }}</span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
             </nuxt-link>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img2.png" alt="" />
        </div>
      </div>

      <div
        class="container d-flex align-items-center justify-content-center banner-container"
      >
        <div class="arrows d-flex align-items-center gap-4">
          <div @click="banner3 = true" class="third-cate-next arrow">
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
          </div>
          <div @click="banner3 = false" class="third-cate-prev arrow">
            <i class="fa-solid fa-chevron-left arrow-icon"></i>
          </div>
        </div>
        <div class="banner-mobile f3">
        <nuxt-link to="/products">
        <div class="text">
         <h4>{{ $t("discounts") }}</h4>
         <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
        </div>
        </nuxt-link>
          <img class="img-fluid" src="~/assets/images/banner-img3.png" alt="" />
        </div>
        <swiper
          :navigation="{
            nextEl: '.third-cate-next',
            prevEl: '.third-cate-prev',
          }"
          :spaceBetween="20"
          :breakpoints="{
            '200': {
              slidesPerView: 2,
              spaceBetween: 10,
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
          :dir="getSwiperDirection"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :modules="[SwiperNavigation, SwiperAutoplay]"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in productsSectionsArr.discountedProducts"
          >
            <product-card :product="item" :index="index" />
          </swiper-slide>
        </swiper>
        <div class="overlay-background f3" :class="{ active: banner3 }">
          <div class="text">
            <h4>{{ $t("discounts") }}</h4>
            <svg
              class="svg arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                fill="white"
              />
              <path
                d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                fill="white"
              />
            </svg>
            <nuxt-link to="/products">
            <button class="btn1">
              <span> {{ $t("see more") }} </span>
              <i class="fa-solid fa-arrow-left-long arrow-icon"></i>
            </button>
            </nuxt-link>
          </div>
          <img class="img-fluid" src="~/assets/images/banner-img3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="brands-container">
      <brands />
    </div>

    <div class="container chart-div">
      <div
        class="text d-flex align-items-center text-center gap-2  justify-content-center flex-column"
      >
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
     <GiftSection />
    </div>

    <div class="info-container container">
      <info-section></info-section>
    </div>
    <loader v-if="pendingPage"></loader>

  </div>
</template>

<script setup>

import axios from "axios";
import { useStore } from "~/store";
const store = useStore;

let pendingPage = ref(true);

const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();


let tab = ref(null);
let tabNav = ref(0);
let banner1 = ref(false);
let banner2 = ref(false);
let banner3 = ref(false);
let spinnerProducts = ref(false);
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
    color: color,
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







const getCategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categoriesArr.value = result.data.data.slice(0, 4);
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


useSeoMeta({
  title: locale.value == "ar" ? "بلاتين" : "platin",
  description: 'This is my amazing site, let me tell you all about it.',
});

onMounted(async () => {
  getCategories();
  getSubcategories();
  getTags();
  getAds();
  getProductsSections();
  //getProducts();
  pendingPage.value = false;
});
</script>

<style lang="scss" scoped></style>
