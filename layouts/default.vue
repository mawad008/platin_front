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
                <div id="mega-menu-id" class="mega-menu" :class="{ 'd-none': activeNav }">
                  <div class="row">
                    <div
                      v-for="(i, index) in 4"
                      class="col-12 col-xl-3 col-lg-3 col-md-6"
                    >
                      <div class="box d-flex flex-column align-item-center">
                        <div
                          class="d-flex align-items-center justify-content-center w-100"
                        >
                          <div class="image" :class="`f${index + 1}`">
                            <img src="~/assets/images/section3.png" alt="" />
                          </div>
                        </div>
                        <div class="text d-flex flex-column gap-3">
                          <h6 class="mt-3">الذهب</h6>
                          <div class="links d-flex align-items-center gap-3 flex-column">
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
        <div class="d-flex align-items-center bg-dange w-100 justify-content-between">
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
                  <div id="mega-menu-id" class="mega-menu">
                    <div class="row">
                      <div
                        v-for="(i, index) in 4"
                        class="col-12 col-xl-3 col-lg-3 col-md-6"
                      >
                        <div class="box d-flex flex-column align-items-center">
                          <div
                            class="d-flex align-items-center justify-content-center w-100"
                          >
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
            <div
              v-if="!activeNav"
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
                  <i class="fab fa-sistrix"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="icons-with-profile d-flex gap-3">
            <div class="icons d-flex align-items-center gap-3">
              <div
                @click="changeLang()"
                class="icon lang d-flex align-items-center gap-1"
              >
                <span>{{ $t("ar") }}</span>
                 <img src="~/assets/images/world.png" alt="">
              </div>
              <nuxt-link to="wishlist">
                <div class="icon border">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </nuxt-link>
              <nuxt-link to="cart">
                <v-badge :content="theNum" color="#B1628C">
                  <div class="icon border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.82541 6.08669L3.643 4.57513C3.5773 3.93433 3.0364 3.44704 2.39089 3.44704H1.71649C1.29919 3.44704 0.960937 3.10954 0.960938 2.69325C0.960938 2.27696 1.29919 1.93945 1.71649 1.93945H2.39089C3.81144 1.93945 5.00168 3.01173 5.14626 4.4217L5.28392 5.76417H20.6172C20.9342 5.76417 21.1724 6.0529 21.1114 6.36328L19.7718 13.1793C19.4475 14.8293 17.998 16.0195 16.3128 16.0195H8.2843C8.51585 17.0389 9.42891 17.7779 10.494 17.7779H16.8175C16.8547 17.7779 16.8917 17.7806 16.8731 17.7839C16.9285 17.7799 16.9842 17.7779 17.0401 17.7779C18.2917 17.7779 19.3063 18.7902 19.3063 20.039C19.3063 21.2877 18.2917 22.3001 17.0401 22.3001C15.7885 22.3001 14.7739 21.2877 14.7739 20.039C14.7739 19.7787 14.8181 19.5247 14.9028 19.2855H12.1277C12.2124 19.5247 12.2566 19.7787 12.2566 20.039C12.2566 21.2877 11.242 22.3001 9.99041 22.3001C8.73881 22.3001 7.72421 21.2877 7.72421 20.039C7.72421 19.4883 7.92289 18.9693 8.27201 18.5647C7.41318 17.9407 6.84663 16.9781 6.73678 15.9038L6.72518 15.7904C5.49555 15.3233 4.58805 14.1879 4.46716 12.809L4.16266 9.33533C4.15752 9.31385 4.15375 9.29178 4.15143 9.26921L3.82541 6.08669ZM9.99041 21.0438C10.5466 21.0438 10.9975 20.5939 10.9975 20.039C10.9975 19.484 10.5466 19.0341 9.99041 19.0341C9.43421 19.0341 8.98331 19.484 8.98331 20.039C8.98331 20.5939 9.43421 21.0438 9.99041 21.0438ZM17.0401 21.0438C17.5963 21.0438 18.0472 20.5939 18.0472 20.039C18.0472 19.484 17.5963 19.0341 17.0401 19.0341C16.4839 19.0341 16.033 19.484 16.033 20.039C16.033 20.5939 16.4839 21.0438 17.0401 21.0438Z"
                        fill="#919EAB"
                      />
                    </svg>
                  </div>
                </v-badge>
              </nuxt-link>

              <nuxt-link to="/auth">
              <div class="icon border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0008 11.5199C9.61491 11.5199 7.68078 9.58575 7.68078 7.19988C7.68078 4.81401 9.61491 2.87988 12.0008 2.87988C14.3867 2.87988 16.3208 4.81401 16.3208 7.19988C16.3208 9.58575 14.3867 11.5199 12.0008 11.5199ZM12.0008 12.4799C15.9772 12.4799 19.2008 15.7034 19.2008 19.6799V21.5999C19.2008 21.865 18.9859 22.0799 18.7208 22.0799H5.28078C5.01568 22.0799 4.80078 21.865 4.80078 21.5999V19.6799C4.80078 15.7034 8.02433 12.4799 12.0008 12.4799Z"
                    fill="#919EAB"
                  />
                </svg>
              </div>
              
              </nuxt-link>
            </div>
            <div v-if="false" class="profile">
              <v-menu class="menu">
                <template v-slot:activator="{ props }">
                  <button v-bind="props" class="d-flex align-items-center gap-2">
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
                  <span @click="goSettings('profile')"> الملف الشخصي </span>

                  <span @click="goSettings('notifications')"> الاشعارات </span>
                  <span @click="goSettings('orders')"> طلباتي </span>
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
                  منصتنا الإلكترونية هي المكان الذي يجمع بين تجار الذهب والمجوهرات في
                  المملكة. نفتخر بتقديم تجربة شراء آمنة وسلسة، مع تشكيلة واسعة وأنيقة تلبي
                  احتياجاتك.
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
const router = useRouter();
const store = useStore;
let activeNav = ref(false);
let activeItemsContainer = ref(false);
let theNum = computed(() => {
  return store.state.basketNum;
});
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
const changeLang = async () => {
  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
  }
  const query = useRoute().query;
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};

const goSettings = (name) => {
  const queryParams = {
    name: name,
  };
  // const url = locale.value + "/settings";

  router.push({ path: "settings", query: queryParams });
};
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
