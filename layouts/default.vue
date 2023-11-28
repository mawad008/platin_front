<template>
  <div>
    <nav class="navbar" :class="{ active: activeNav }">
      <div class="container">
        <div
          class="items-container w-100 d-flex align-items-center justify-content-between"
          :class="{ active: activeNav }"
        >
          <div class="items d-flex align-items-center gap-4">
          <nuxt-link to="/">
            <span>الرئيسية</span>
          </nuxt-link>

            <v-menu>
              <template v-slot:activator="{ props }">
                <button v-bind="props" class="d-flex align-items-center gap-2">
                  <span> الاقسام</span>
                  <i class="fa-solid fa-sort-down"></i>
                </button>
              </template>
              <div>
                <div
                  id="mega-menu-id"
                  class="mega-menu"
                  :class="{ 'd-none': activeNav }"
                >
                  <div class="row">
                    <div v-for="(i, index) in 4" class="col-12 col-xl-3 col-lg-3 col-md-6">
                      <div class="box d-flex flex-column align-item-center ">
                      <div class="d-flex align-items-center justify-content-center w-100 ">
                        <div class="image" :class="`f${index + 1}`">
                          <img src="~/assets/images/section3.png" alt="" />
                        </div>
                      </div>
                        <div class="text d-flex flex-column gap-3">
                          <h6 class="mt-3">الذهب</h6>
                          <div
                            class="links d-flex align-items-center gap-3 flex-column"
                          >
                            <span> الاساور </span>
                            <span> القلادات </span>
                            <span> الاطقم </span>
                            <span> الخواتم </span>
                          </div>
                          <span class="all"> الكل </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-menu>
             <nuxt-link to="gold">
            <span>السبائك</span> 
             </nuxt-link>
             <nuxt-link to="vendors">
            <span>التجار</span> 
             </nuxt-link>
          </div>
          <div class="d-flex align-items-center gap-2 supp">
            <i class="fa-solid fa-headset"></i>
            <span>الدعم الفني</span>
          </div>
        </div>
        <v-divider :class="{ 'd-none': activeNav }" :thickness="1"></v-divider>
        <div
          class="d-flex align-items-center bg-dange w-100 justify-content-between"
        >
          <div class="d-flex align-items-center gap-5">
            <div class="logo">
              <img src="~/assets/images/logo.png" alt="" />
            </div>

            <div v-if="activeNav" class="items d-flex align-items-center gap-4">
          <nuxt-link to="/">
            <span>الرئيسية</span>
          </nuxt-link>

            <v-menu>
              <template v-slot:activator="{ props }">
                <button v-bind="props" class="d-flex align-items-center gap-2">
                  <span> الاقسام</span>
                  <i class="fa-solid fa-sort-down"></i>
                </button>
              </template>
              <div>
                <div
                  id="mega-menu-id"
                  class="mega-menu"
                  
                >
                  <div class="row">
                    <div v-for="(i, index) in 4" class="col-12 col-xl-3 col-lg-3 col-md-6">
                      <div class="box d-flex flex-column align-items-center">
                        <div class="d-flex align-items-center justify-content-center w-100 ">
                        <div class="image" :class="`f${index + 1}`">
                          <img src="~/assets/images/section3.png" alt="" />
                        </div>
                      </div>
                        <div class="text d-flex flex-column gap-3">
                          <h6 class="mt-3">الذهب</h6>
                          <div
                            class="links d-flex align-items-center gap-3 flex-column"
                          >
                            <span> الاساور </span>
                            <span> القلادات </span>
                            <span> الاطقم </span>
                            <span> الخواتم </span>
                          </div>
                          <span class="all"> الكل </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-menu>
             <nuxt-link to="gold">
            <span>السبائك</span> 
             </nuxt-link>
             <nuxt-link to="vendors">
            <span>التجار</span> 
             </nuxt-link>
            <span>الدعم الفني</span>
          </div>
            <div v-if="!activeNav"
              class="search d-flex align-items-center justify-content-between px-1"
              style=""
            >
              <div class="inp">
                <input type="text" :placeholder="$t('search')" style="" />
              </div>
              <div class="d-flex align-item-cente gap-4">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button class="d-flex align-items-center gap-1" v-bind="props">
                    {{ $t("sections") }}
                    <i class="fa-solid fa-caret-down"></i>
                    </button>
                   
                  </template>
                  <v-list>
                    <!-- <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item> -->
                  </v-list>
                </v-menu>
                <div class="search-icon">
                <i class="fab fa-sistrix "></i>
                </div>
              </div>
            </div>
          </div>

          <div class="icons-with-profile d-flex gap-3">
            <div class="icons d-flex align-items-center gap-3">
              <div @click="changeLang()" class="icon lang d-flex align-items-center gap-1">
                <span>{{ $t('ar') }}</span>
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <nuxt-link to="wishlist">
              <div class="icon border">
                <i class="fa-solid fa-heart"></i>
              </div>
              </nuxt-link>
              <nuxt-link to="cart">
                <v-badge :content="theNum" color="#B1628C">
              <div class="icon border">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
                </v-badge>
              </nuxt-link>
            </div>
            <div class="profile">
              <v-menu class="menu">
                <template v-slot:activator="{ props }">
                  <button
                    v-bind="props"
                    class="d-flex align-items-center gap-2"
                  >
                  <div class="iconn">
                    <i class="fa-solid fa-caret-down"></i>
                  </div>
                    <img src="~/assets/images/kk.jpg" alt="" />
                  </button>
                </template>
                <div
                  id="list-profile"
                  class="list d-flex flex-column p-4 gap-4 text-center"
                >
                
                  <span> الملف الشخصي </span>
                  <span> طلباتي </span>
                  <span> الامان </span>
                  <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span> تسجيل الخروج </span>
                  </div>
                </div>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot />

    <footer>
      <div class="footer-container">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-4 col-lg-4 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <img
                  class="img-flui"
                  src="~/assets/images/logo.png"
                  style="width: 123.999px"
                  alt=""
                />
                <p class="">
                  منصتنا الإلكترونية هي المكان الذي يجمع بين تجار الذهب
                  والمجوهرات في المملكة. نفتخر بتقديم تجربة شراء آمنة وسلسة، مع
                  تشكيلة واسعة وأنيقة تلبي احتياجاتك.
                </p>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">الاقسام</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> الذهب </span>
                  <span class="head-link"> الماس </span>
                  <span class="head-link"> الفضة </span>
                  <span class="head-link"> الساعات </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">الراوبط المهمه</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> التقديم كتاجر </span>
                  <span class="head-link"> من نحن </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">الاتصال</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> الرئيسية </span>
                  <span class="head-link"> الرئيسية </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head" style="font-size: 15px">
                  اشترك معنا في القائمة البريدية
                </h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> الرئيسية </span>
                  <div
                    class="input d-flex align-items-center justify-content-center gap-2"
                  >
                    <input type="text" placeholder="ادخل البريد الالكتروني " />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M8.99407 9.73921L12.5546 13.5194C12.5956 13.5628 12.6243 13.6163 12.638 13.6744C12.6517 13.7325 12.6499
                    13.7932 12.6327 13.8504L11.1751 18.6856C11.0459 19.1341 10.4327 19.189 10.2266 18.7701L4.18658
                      6.48894C4.14471 6.40393 4.12735 6.30892 4.13646 6.21459C4.14556 6.12026 4.18077 6.03034 4.23813 5.9549C4.29549 
                      5.87946 4.37273 5.82149 4.46119 5.78749C4.54965 5.7535 4.64583 5.74482 4.73895 5.76244L18.1879 8.29907C18.6466 8.3856 
                      18.7573 8.99174 18.36 9.23559L14.0901 11.9325C14.0396 11.9645 13.9815 11.9826 13.9218 11.9851C13.862 11.9875 13.8027 11.9741 
                      13.7498 11.9463L9.1557 9.5255C9.12727 9.51082 9.09456 9.50663 9.06335 9.51368C9.03213 9.52073 9.0044 9.53856 8.98503 9.56403C8.96566
                      9.58951 8.95589 9.621 8.95745 9.65297C8.959 9.68493 8.97178 9.71532 8.99353 9.7388L8.99407 9.73921Z"
                        fill="#2D3A4A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="head-icons d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <img src="~/assets/images/footer-logo.png" alt="" />
            <div class="icons d-flex align-items-center gap-3">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
          <v-divider :thickness="1"></v-divider>
          <div
            class="foot w-100 d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <span> سياسة الخصوصية والشروط والاحكام </span>
            <div>
              <span> تم تطويره بواسطة </span>
              <img src="~/assets/images/webstdy.png" alt="" />
            </div>
            <span> جميع الحقوق محفوظة © 2023 . </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useStore } from "~/store";
const store = useStore;
let activeNav = ref(false);
let activeItemsContainer = ref(false);
let theNum = ref(store.state.basket.length);
const localePath = useLocalePath();
 const { locale , setLocale } = useI18n();
const changeLang = async()=>{
  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
            useHead({
        htmlAttrs:{
            lang: 'ar',
            dir: 'rtl',
          }
       });
  } else {
    useHead({
        htmlAttrs:{
            lang: 'en',
            dir: 'ltr',
          }
       });
    setLocale("en");
  }
  const query = useRoute().query;
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
}
onMounted(() => {
  window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 300) {
      activeNav.value = true;
      activeItemsContainer.value = true;
    } else if (window.scrollY == 0) {
      activeNav.value = false;
      activeItemsContainer.value = false;
    }
  });
});
</script>

<style lang="scss" scoped></style>
