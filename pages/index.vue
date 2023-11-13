<template>
  <div style="min-height: 100vh">
    <div class="container" style="margin-top: 70px">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :pagination="{
          clickable: true,
        }"
        :modules="[SwiperEffectFade, SwiperPagination]"
        class="hero-section"
      >
        <swiper-slide v-for="(i, index) in 3" class="box">
          <div class="h-100">
            <!-- <img src="~/assets/images/banner.jpg" alt=""> -->
            <div class="text-container">
              {{ index + 1 }}
              <h2>استمتع بلمسة من الأناقة والفخامة مع بلاتين</h2>
              <span class="text">
                منصتنا الإلكترونية هي المكان الذي يجمع بين تجار الذهب والمجوهرات في
                المملكة. نفتخر بتقديم تجربة شراء آمنة وسلسة، مع تشكيلة واسعة وأنيقة تلبي
                احتياجاتك.
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

    <div class="sections container" style="margin-top: 70px">
      <div
        class="text w-100 d-flex align-items-center justify-content-center text-center flex-column mb-5"
      >
        <h3>الاقسام</h3>
        <span>
          استكشف مجموعة متنوعة من أقسامنا المميزة، حيث ستجد تشكيلات متنوعة من المنتجات
          تلبي احتياجاتك وتعبر عن ذوقك الشخصي
        </span>
      </div>
      <div
        class="row justify-content-center justify-content-xl-start justify-content-lg-start"
      >
        <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f1"
          >
            <img src="~/assets/images/section3.png" alt="" />
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1">عرض المنتجات</button>
          </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f2"
          >
            <img src="~/assets/images/section2.png" alt="" />
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1">عرض المنتجات</button>
          </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f3"
          >
            <img src="~/assets/images/section1.png" alt="" />
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1">عرض المنتجات</button>
          </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-3 col-md-6">
          <div
            class="box d-flex flex-column justify-content-center align-items-center gap-1 f4"
          >
            <img src="~/assets/images/watch.png" alt="" />
            <span class="type"> الساعات </span>
            <span class="count"> 200 منتج </span>
            <button class="mt-1">عرض المنتجات</button>
          </div>
        </div>
      </div>
    </div>

    <div class="offers containe" style="margin-top: 70px">
      <swiper
        :slidesPerView="1.4"
        :spaceBetween="20"
        :effect="'fade'"
        :pagination="{
          clickable: true,
        }"
        :modules="[SwiperPagination]"
        class=""
      >
        <swiper-slide class="box main">
          <div
            class="h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row"
          >
            <div class="text-container">
              <h2>خصم 50 % علي منتجات زهرة الياقوت</h2>
              <span class="text">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
                من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
                الأخرى
              </span>
              <button class="btn1">
                <span> شاهد العروض </span>
                <i class="fa-solid fa-arrow-left-long"></i>
              </button>
              <div class="circle">
                <img class="" src="~/assets/images/offer-circle.png" alt="" />
              </div>
            </div>
            <div class="main-img h-100">
              <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
            </div>
          </div>
          <div class="overlay"></div>
        </swiper-slide>
        <swiper-slide class="box f1">
          <div
            class="h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row"
          >
            <div class="text-container">
              <h2>الاهتمام مبيطلبش.. معانا تقدري تطلبيه</h2>
              <span class="text">
                مع ميزة 'أمنياتي' الخاصة بنا، يمكنك الآن جمع منتجاتك المفضلة وحلمك في مكان
                واحد. قم بإضافة أي منتج تشتهر به إلى 'أمنياتي' وشاركه مع من تحب
              </span>
              <button class="btn1">
                <span> شاهد العروض </span>
                <i class="fa-solid fa-arrow-left-long"></i>
              </button>
            </div>
            <div class="main-img h-100">
              <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="box f2">
          <div
            class="h-100 d-flex align-items-center flex-column flex-xl-row flex-lg-row"
          >
            <div class="text-container">
              <h2>الاهتمام مبيطلبش.. معانا تقدري تطلبيه</h2>
              <span class="text">
                مع ميزة 'أمنياتي' الخاصة بنا، يمكنك الآن جمع منتجاتك المفضلة وحلمك في مكان
                واحد. قم بإضافة أي منتج تشتهر به إلى 'أمنياتي' وشاركه مع من تحب
              </span>
              <button class="btn1">
                <span> شاهد العروض </span>
                <i class="fa-solid fa-arrow-left-long"></i>
              </button>
            </div>
            <div class="main-img h-100">
              <!-- <img src="~/assets/images/offer-pic.png" alt=""> -->
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container categories">
      <div class="text">
        <h3>تسوق حسب التصنيفات</h3>
        <p>
          اكتشف تجربة التسوق الفريدة حسب التصنيفات، حيث يمكنك استعراض واختيار المنتجات
          بسهولة وفقًا لاهتماماتك وتفضيلاتك.
        </p>
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
            <img src="~/assets/images/cate1.png" alt="" />
          </div>
          <span> خواتم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate2.png" alt="" />
          </div>
          <span> غوايش </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate3.png" alt="" />
          </div>
          <span> هدايا </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate4.png" alt="" />
          </div>
          <span> اطقم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate5.png" alt="" />
          </div>
          <span> عقد </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate6.png" alt="" />
          </div>
          <span> حلق </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate1.png" alt="" />
          </div>
          <span> خواتم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate2.png" alt="" />
          </div>
          <span> غوايش </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate3.png" alt="" />
          </div>
          <span> هدايا </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate4.png" alt="" />
          </div>
          <span> اطقم </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate5.png" alt="" />
          </div>
          <span> عقد </span>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="image">
            <img src="~/assets/images/cate6.png" alt="" />
          </div>
          <span> حلق </span>
        </swiper-slide>
      </swiper>
    </div>

    <div class="container our-products my-5">
      <div
        class="header mb-5 d-flex flex-column align-items-center justify-content-center w-100"
      >
        <h3 class="mb-5">منتجاتنا</h3>

        <v-tabs v-model="tab" align-tabs="center">
          <v-tab :value="0" class="head">
            <span class="choose"> الامهات </span>
            <border />
          </v-tab>
          <v-tab :value="1" class="head">
            <span class="choose"> الاطفال </span>
            <border />
          </v-tab>
          <v-tab :value="2" class="head">
            <span class="choose"> البنات </span>
            <border />
          </v-tab>
          <v-tab :value="3" class="head">
            <span class="choose"> الاكثر مبيعا </span>
            <border />
          </v-tab>
        </v-tabs>
      </div>

      <v-window v-model="tab">
        <v-window-item>
          <div class="row">
            <div v-for="i in 4" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card />
            </div>
          </div>
        </v-window-item>
        <v-window-item>
          <div class="row">
            <div v-for="i in 3" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card />
            </div>
          </div>
        </v-window-item>
        <v-window-item>
          <div class="row">
            <div v-for="i in 2" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card />
            </div>
          </div>
        </v-window-item>
        <v-window-item>
          <div class="row">
            <div v-for="i in 6" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card />
            </div>
          </div>
        </v-window-item>
      </v-window>
      <span class="more mt-5"> المزيد... </span>
    </div>

    <div
      class="container d-flex align-items-center justify-content-center banner-container"
    >
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
        class="mySwiper"
      >
        <swiper-slide v-for="i in 4">
          <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08)" />
        </swiper-slide>
      </swiper>
      <div class="overlay-background">
        <div class="text">
          <h4>مضاف حديثا</h4>
          <button class="btn1">
            <span> شاهد المزيد </span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
        <img class="img-fluid" src="~/assets/images/banner-img1.png" alt="" />
      </div>
    </div>

    <div
      class="container d-flex align-items-center justify-content-center banner-container"
    >
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
        class="mySwiper"
      >
        <swiper-slide v-for="i in 4">
          <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08)" />
        </swiper-slide>
      </swiper>
      <div class="overlay-background f2">
        <div class="text">
          <h4>الاكثر مبيعا</h4>
          <button class="btn1">
            <span> شاهد المزيد </span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
        <img class="img-fluid" src="~/assets/images/banner-img2.png" alt="" />
      </div>
    </div>

    <div
      class="container d-flex align-items-center justify-content-center banner-container"
    >
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
        class="mySwiper"
      >
        <swiper-slide v-for="i in 4">
          <product-card style="box-shadow: 0px 16px 32px 0px rgba(113, 128, 150, 0.08)" />
        </swiper-slide>
      </swiper>
      <div class="overlay-background f3">
        <div class="text">
          <h4>خصومات الشهر</h4>
          <button class="btn1">
            <span> شاهد المزيد </span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
        <img class="img-fluid" src="~/assets/images/banner-img3.png" alt="" />
      </div>
    </div>

    <div class="brands-container">
      <div
        class="text d-flex align-items-center justify-content-center flex-column gap-2 mb-5"
      >
        <h3>الماركات</h3>
        <span>
          استكشف مجموعة مذهلة من الماركات العالمية الرائدة في عالم المجوهرات والتصميم على
          موقع بلاتين
        </span>
      </div>
      <swiper
        :centeredSlides="true"
        :looped-slides="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
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
        class="mySwiper"
      >
        <swiper-slide v-for="(i, index) in 11">
          <img src="~/assets/images/vector.svg" class="img-fluid" alt="" />
        </swiper-slide>
      </swiper>

      <p class="mb-5">
        لازوردي إحدى كبريات المجموعات المعنية بتصنيع المجوهرات بأنواعها "الذهب والألماس
        والأحجار الكريمة" وتوزيعها عبر شبكة أفرعها المنتشرة بالسعودية
      </p>
      <div class="btn-back d-flex align-items-center w-100 justify-content-center">
        <button class="btn1">
          <span> عرض المنتجات </span>
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
      </div>
      <div class="overlay-bg"></div>
    </div>

    <div class="container chart-div">
      <div
        class="text d-flex align-items-center text-center gap-2 mb-5 justify-content-center flex-column"
      >
        <h3>عن السوق</h3>
        <span>
          نحن هنا لنوفر لك أحدث الأسعار على الفور، لنضمن أنك دائمًا في علم بتقلبات <br />
          سوق الذهب وفرص الشراء والبيع في الوقت المناسب.
        </span>
      </div>
      <div class="chart-container">
        <chart />
      </div>
    </div>

    <div class="gift-container">
      <div
        class="text d-flex align-items-center mb-5 justify-content-center gap-3 flex-column text-center"
      >
        <h3>تهادوا تحابوا</h3>
        <p>
          نقدم لك ميزة استثنائية تتيح لك إرسال هدية خاصة إلى من تحب. تمتع مع بلاتين بتجربة
          فريدة من نوعها مع توصيل مشاعرك بأسلوب خاص ومميز.
        </p>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-12 col-xl-6 col-lg-6 box-container">
          <div class="box">
            <div class="head d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="37"
                viewBox="0 0 34 37"
                fill="none"
              >
                <path
                  d="M30.3333 8.44434H3.66667C2.05584 8.44434 0.75 9.75361 0.75 11.3687V14.7108C0.75 16.3259 2.05584 
    17.6351 3.66667 17.6351H30.3333C31.9442 17.6351 33.25 16.3259 33.25 14.7108V11.3687C33.25 9.75361 31.9442 8.44434 30.3333 8.44434Z"
                  fill="white"
                />
                <path
                  d="M19.3592 10.9524C18.8259 11.0154 18.2856 10.9337 17.7945 10.7159C17.3035 10.4981 16.8797 10.1521 
    16.5675 9.71413C16.0842 8.85187 16.3725 7.85091 17.2342 4.87643C17.5942 3.66325 18.9192 0.0888672 22.3042 
    0.0888672C23.6603 0.0919611 24.9598 0.633785 25.9182 1.59566C26.8766 2.55753 27.4158 3.86104 27.4175 5.22067C27.4175
     8.41907 24.0459 9.75591 22.7742 10.2572C21.6863 10.6912 20.5298 10.9266 19.3592 10.9524ZM18.8692 8.41238C19.8819
      8.48435 20.8975 8.3196 21.8359 7.93112C23.2792 7.35962 24.9142 6.5408 24.9142 5.21733C24.9124 4.5225 24.6364 
      3.85664 24.1463 3.36533C23.6563 2.87401 22.9922 2.59721 22.2992 2.59545C20.6442 2.59545 19.8592 4.79956 
      19.6592 5.47467C19.3025 6.71125 18.9809 7.8342 18.8725 8.41572L18.8692 8.41238Z"
                  fill="white"
                />
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
                  fill="white"
                />
                <path d="M14.916 19.3062H19.0827V36.0167H14.916V19.3062Z" fill="white" />
                <path
                  d="M12.416 19.3063V36.0168H6.99935C6.39734 36.0172 5.80114 35.8987 5.24487 35.6679C4.68859 35.4371
     4.18316 35.0986 3.75747 34.6718C3.33178 34.245 2.99419 33.7382 2.76401 33.1805C2.53383 32.6228 2.41558 
     32.025 2.41602 31.4214V19.1392C2.82426 19.2461 3.24409 19.3022 3.66602 19.3063H12.416Z"
                  fill="white"
                />
                <path
                  d="M31.584 19.1392V31.4214C31.5844 32.025 31.4662 32.6228 31.236 33.1805C31.0058 33.7382 30.6682
     34.245 30.2425 34.6718C29.8168 35.0986 29.3114 35.4371 28.7551 35.6679C28.1989 35.8987 27.6027 
     36.0172 27.0007 36.0168H21.584V19.3063H30.334C30.7559 19.3022 31.1757 19.2461 31.584 19.1392Z"
                  fill="white"
                />
              </svg>
              <span class="fw-bold">1.اختر الهدية التي تليق بذوقك</span>
            </div>

            <p class="mt-2">
              استعرض مجموعة متنوعة من الهدايا المتاحة وحدد الهدية المثالية للشخص الذي ترغب
              في إرسالها. بمجرد اختيار الهدية، انتقل إلى المرحلة التالية لإدخال معلومات
              المستلم.
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 box-container">
          <div class="box">
            <div class="head d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="34"
                viewBox="0 0 40 34"
                fill="none"
              >
                <path
                  d="M34 0H6C4.41016 0.00474869 2.8868 0.638482 1.7626 1.76279C0.638414 2.8871 0.00474818 4.41063 0
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
        8 10.5316 8 10.0011Z"
                  fill="white"
                />
              </svg>
              <span class="fw-bold">3.معلومات المستلم</span>
            </div>

            <p class="mt-2">
              أدخل معلومات المستلم، بما في ذلك اسمه وعنوانه ورقم هاتفه. ثم قم بكتابة رسالة
              شخصية ترافق الهدية.
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 box-container">
          <div class="box active">
            <div class="head d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0755 7.29945V9.04483C20.0211 10.9991 19.1968 12.8552
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
             3.76823 39.997 5.12709 40H19.5615C20.0527 39.9984 20.5233 39.8049 20.8704 39.462Z"
                  fill="white"
                />
              </svg>
              <span class="fw-bold">2.التشويق</span>
            </div>

            <p class="mt-2">
              في هذه المرحلة، سيكون لديك السيطرة على إرسال رسالة نصية للمستلم لإعلامه بقرب
              وصول الهدية. يمكنك تحديد ما إذا كنت ترغب في إرسال الرسالة النصية أم لا.
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 box-container">
          <div class="box active">
            <div class="head d-flex align-items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="35"
                viewBox="0 0 40 35"
                fill="none"
              >
                <path d="M22.3438 0H27.0312V8.16667H22.3438V0Z" fill="white" />
                <path
                  d="M38.8281 0H29.375V9.33333C29.375 9.97764 28.8503 10.5 28.2031 10.5H21.1719C20.5247 10.5 20 9.97764 20 9.33333V0H10.625C9.97781 0 9.45312 0.522355 9.45312 1.16667V15.2285C9.83898 15.1723 10.2305 15.1431 10.625 15.1431C12.7848 15.1431 14.8569 16.0071 16.3742 17.4999H21.1719C23.7566 17.4999 25.8594 19.5934 25.8594 22.1666C25.8594 24.7398 23.7566 26.8333 21.1719 26.8333H29.375C31.5552 26.8333 33.3925 28.3228 33.9141 30.3333H38.8281C39.4753 30.3333 40 29.8109 40 29.1666V1.16667C40 0.522355 39.4753 0 38.8281 0Z"
                  fill="white"
                />
                <path
                  d="M29.375 29.1667H18.8281C16.2393 29.1667 14.1406 27.0774 14.1406 24.5001H21.1719C22.4663 24.5001 23.5156 23.4554 23.5156 22.1667C23.5156 20.878 22.4663 19.8334 21.1719 19.8334H15.3125C14.2146 18.3513 12.4748 17.4766 10.625 17.4766C8.77523 17.4766 7.03539 18.3513 5.9375 19.8334H4.76562V19.0556C4.76562 18.4113 4.24094 17.8889 3.59375 17.8889H1.17188C0.524687 17.8889 0 18.4113 0 19.0556V33.8334C0 34.4777 0.524687 35.0001 1.17188 35.0001H3.59375C4.24094 35.0001 4.76562 34.4777 4.76562 33.8334V31.5001H5.9375L13.2812 33.8334H29.375C30.6695 33.8334 31.7188 32.7888 31.7188 31.5001C31.7188 30.2114 30.6695 29.1667 29.375 29.1667Z"
                  fill="white"
                />
              </svg>
              <span class="fw-bold"> 4.التوصيل </span>
            </div>

            <p class="mt-2">
              تأكد من توصيل الهدية بأمان وسلامة إلى المستلم. نهدف دائمًا إلى تقديم تجربة
              فريدة ومميزة، حيث نضع اهتمامًا خاصًا بكل تفاصيل الهدية وعملية التوصيل لجعلها
              لحظة لا تُنسى.
            </p>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>

    <div class="info-container container">
      <div class="row">
        <div class="col-12 col-xl-6 col-lg-6  my-2" style="">
        <div class="img-box">    
        <div class="image bg-dang">
           <img src="~/assets/images/info-bg.png" alt="">
          <div class="overlay"></div>
        </div>
        </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6  my-2">
          <div class="all-boxes d-flex flex-column  h-100 justify-content-between ">
            <div v-for="i in 4" class="box">
              <div class="head d-flex align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_481_7023)">
                    <path
                      d="M3.48906 14.4062H3.47109C2.46447 14.4062 1.64844 15.2223 1.64844 16.2289V16.2469C1.64844 17.2535 2.46447
                       18.0695 3.47109 18.0695H3.48906C4.49569 18.0695 5.31172 17.2535 5.31172 16.2469V16.2289C5.31172 15.2223 
                       4.49569 14.4062 3.48906 14.4062Z"
                      fill="#919EAB"
                    />
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
                      fill="#919EAB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_481_7023">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span> الشحن السريع  </span>
              </div>
              <p> توصيل سريع وموثوق لمنتجاتك مع شركات شحن معروفة. نهدف لضمان استلامك للطلبات في أقرب وقت ممكن.  </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
let tab = ref(null);
</script>

<style lang="scss" scoped></style>
