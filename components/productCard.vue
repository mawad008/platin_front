<template>
  <div>
    <div v-if="product" class="product-card">
      <div class="head w-100 d-flex align-items-center justify-content-between">
        <div
          v-if="clickedItem(product.id) != product.id"
          @click="addTofav(product, index)"
          class="octagon"
        >
          <octagon />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
              fill="#919EAB"
            />
          </svg>
        </div>
        <div
          v-if="clickedItem(product.id) == product.id"
          @click="deleteTofav(index, product.id)"
          class="octagon active"
        >
          <octagon />
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
              fill="#919EAB"
            />
          </svg>
        </div>
        <span> {{ $t('bestSel') }}</span>
        <client-only>
          <Vue3Lottie
            v-if="anim"
            class="animation"
            :animation-data="fav"
            :height="100"
            :width="100"
          />
        </client-only>
      </div>
      <div class="h-100" @click="goToProductPage2(product.id, product.name)">
        <Swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :effect="'fade'"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="[SwiperAutoplay, SwiperEffectFade]"
          class="image"
        >
          <swiper-slide v-for="img in product.images">
            <img :src="img.full_image_path" alt="" />
          </swiper-slide>
        </Swiper>
        <div
          class="rate w-100 d-flex align-items-center justify-content-between"
        >
          <span class="type"> {{ product.category }} </span>
          <div class="star d-flex align-items-center gap-2">
            <i class="fa-solid fa-star"></i>
            <span>{{ product.rate }}</span>
          </div>
        </div>
        <div
          class="bg-dange d-flex flex-column justify-content-between"
          style="height: 127px"
        >
          <h3>{{ product.name }}</h3>
          <div
            class="price w-100 d-flex align-items-center justify-content-between"
          >
          <div class="d-flex flex-column position-relative">
          <span v-if="product.discount_price" style="font-size: 12px; position:absolute; top:-17px;">{{ $t('startFrom') }}</span>
            <span class="price-text">{{ product.discount_price ? product.discount_price : product.price }} {{ $t("curr") }}
            </span>
          </div>
            <span>
              {{ locale == "ar" ? "ق" : "c" }} {{ product.caliber }} /
              {{ locale == "ar" ? "ج" : "g" }} {{ product.weight }}</span
            >
          </div>
        </div>

        <div class="overlay">
          <div class="head-icons w-100">
            <div
              class="w-100 d-flex align-items-center justify-content-between"
            >
              <div
                v-if="clickedItem(product.id) != product.id"
                @click="addTofav(product, index)"
                class="octagon"
              >
                <octagon class="main" />
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
                    fill="#DCDEE0"
                  />
                </svg>
              </div>
              <client-only>
                <Vue3Lottie
                  v-if="anim"
                  class="animation"
                  :animation-data="fav"
                  :height="100"
                  :width="100"
                />
              </client-only>

              <div
                v-if="clickedItem(product.id) == product.id"
                @click="deleteTofav(index, product.id)"
                class="octagon"
                :class="{ active: clickedItem(product.id) == product.id }"
              >
                <octagon class="main" />
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
                    fill="#DCDEE0"
                  />
                </svg>
              </div>

              <div @click="checkShare = !checkShare" class="octagon">
                <octagon class="main" />
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.2233 5.27988C19.2233 3.9544 18.1488 2.87988 16.8233 2.87988C15.4978 2.87988 14.4233 3.9544 14.4233 5.27988C14.4233 6.60537 15.4978 7.67988 16.8233 7.67988C18.1488 7.67988 19.2233 6.60537 19.2233 5.27988ZM19.2233 17.7599C19.2233 16.4344 18.1488 15.3599 16.8233 15.3599C15.4978 15.3599 14.4233 16.4344 14.4233 17.7599C14.4233 19.0854 15.4978 20.1599 16.8233 20.1599C18.1488 20.1599 19.2233 19.0854 19.2233 17.7599ZM6.26328 9.59988C7.58876 9.59988 8.66328 10.6744 8.66328 11.9999C8.66328 13.3254 7.58876 14.3999 6.26328 14.3999C4.9378 14.3999 3.86328 13.3254 3.86328 11.9999C3.86328 10.6744 4.9378 9.59988 6.26328 9.59988ZM13.6341 6.34043C13.7366 6.64873 13.8825 6.93719 14.0646 7.19855L8.7806 9.77436C8.54693 9.51025 8.27234 9.28319 7.96676 9.1031L13.6341 6.34043ZM13.6647 16.6114C13.5531 16.9183 13.4849 17.2461 13.4676 17.5873L8.04526 14.8489C8.34052 14.6639 8.60496 14.4342 8.82912 14.1693L13.6647 16.6114Z"
                    fill="#DCDEE0"
                  />
                </svg>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div class="share-box" :class="{ check: checkShare }">
                <a
                  target="_blank"
                  :href="`https://t.me/share/url?url=${route}`"
                >
                  <img src="~/assets/images/social1.svg" alt="" />
                </a>
                <a
                  target="_blank"
                  :href="`https://www.facebook.com/sharer/sharer.php?${route}&quote=${name}`"
                >
                  <img src="~/assets/images/social2.svg" alt="" />
                </a>
                <a
                  target="_blank"
                  :href="`https://twitter.com/intent/tweet?url=${route}`"
                >
                  <img src="~/assets/images/social3.svg" alt="" />
                </a>
                <a target="_blank" :href="`https://wa.me/?text=${route}/`">
                  <img src="~/assets/images/social4.svg" alt="" />
                </a>

                <button @click="copyToClipboard()">
                  <img v-if="check" src="~/assets/images/social5.svg" alt="" />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    height="20"
                    width="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="center-icons w-100 text-center">
            <div
              class="d-flex w-100 align-items-center justify-content-center gap-4"
            >
              <!-- <div class="d-flex flex-column align-items-center gap-2">
            <div class="octagon d-flex flex-column gap-3 main">
              <octagon />
           <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M21.588 2.66699H10.4146C5.5613 2.66699 2.66797 5.56033 2.66797 10.4137V21.5737C2.66797 26.4403 5.5613 29.3337 10.4146 29.3337H21.5746C26.428 29.3337 29.3213 26.4403 29.3213 21.587V10.4137C29.3346 5.56033 26.4413 2.66699 21.588 2.66699ZM23.8013 18.8003C23.748 18.9203 23.6813 19.027 23.588 19.1203L19.5346 23.1737C19.3346 23.3737 19.0813 23.467 18.828 23.467C18.5746 23.467 18.3213 23.3737 18.1213 23.1737C17.7346 22.787 17.7346 22.147 18.1213 21.7603L20.468 19.4137H9.13464C8.58797 19.4137 8.13464 18.9603 8.13464 18.4137C8.13464 17.867 8.58797 17.4137 9.13464 17.4137H22.8813C23.0146 17.4137 23.1346 17.4403 23.268 17.4937C23.508 17.6003 23.708 17.787 23.8146 18.0403C23.8946 18.2803 23.8946 18.5603 23.8013 18.8003ZM22.868 14.5737H9.13464C9.0013 14.5737 8.8813 14.547 8.74797 14.4937C8.50797 14.387 8.30797 14.2003 8.2013 13.947C8.09464 13.707 8.09464 13.427 8.2013 13.187C8.25464 13.067 8.3213 12.9603 8.41464 12.867L12.468 8.81366C12.8546 8.42699 13.4946 8.42699 13.8813 8.81366C14.268 9.20033 14.268 9.84033 13.8813 10.227L11.548 12.5737H22.8813C23.428 12.5737 23.8813 13.027 23.8813 13.5737C23.8813 14.1203 23.428 14.5737 22.868 14.5737Z" fill="#B3B8BE"/>
  </svg>
            </div>
           <span> {{ $t("compare") }} </span>
          </div> -->

              <div class="d-flex flex-column align-items-center gap-2">
                <div
                  @click="addToBasket({price:100 , ...product})"
                  class="octagon d-flex flex-column gap-3 main"
                >
                  <octagon />
                  <svg
                    class="icon cart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.10055 8.03523L4.85734 6.03967C4.76973 5.19369 4.04854 4.55038 3.18786 4.55038H2.28865C1.73226 4.55038 1.28125 4.10481 1.28125 3.55522C1.28125 3.00563 1.73226 2.56006 2.28865 2.56006H3.18786C5.08193 2.56006 6.6689 3.97568 6.86168 5.83711L7.04522 7.60943H27.4896C27.9123 7.60943 28.2298 7.99062 28.1485 8.40038L26.3624 17.3989C25.93 19.5772 23.9974 21.1485 21.7505 21.1485H11.0457C11.3545 22.4944 12.5719 23.4699 13.992 23.4699H22.4233C22.473 23.4699 22.5223 23.4735 22.4975 23.4779C22.5714 23.4726 22.6456 23.4699 22.7201 23.4699C24.389 23.4699 25.7417 24.8064 25.7417 26.455C25.7417 28.1036 24.389 29.4401 22.7201 29.4401C21.0513 29.4401 19.6985 28.1036 19.6985 26.455C19.6985 26.1114 19.7575 25.7761 19.8705 25.4602H16.1702C16.2832 25.7761 16.3421 26.1114 16.3421 26.455C16.3421 28.1036 14.9894 29.4401 13.3205 29.4401C11.6517 29.4401 10.299 28.1036 10.299 26.455C10.299 25.7279 10.5638 25.0428 11.0293 24.5087C9.88424 23.6849 9.12883 22.414 8.98237 20.9958L8.9669 20.846C7.3274 20.2294 6.11739 18.7305 5.95622 16.9099L5.55022 12.3241C5.54337 12.2957 5.53833 12.2666 5.53524 12.2368L5.10055 8.03523ZM13.3205 27.7816C14.0622 27.7816 14.6633 27.1876 14.6633 26.455C14.6633 25.7223 14.0622 25.1284 13.3205 25.1284C12.5789 25.1284 11.9778 25.7223 11.9778 26.455C11.9778 27.1876 12.5789 27.7816 13.3205 27.7816ZM22.7201 27.7816C23.4618 27.7816 24.0629 27.1876 24.0629 26.455C24.0629 25.7223 23.4618 25.1284 22.7201 25.1284C21.9785 25.1284 21.3773 25.7223 21.3773 26.455C21.3773 27.1876 21.9785 27.7816 22.7201 27.7816Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span>{{ $t("add to cart") }}</span>
              </div>

              <div class="d-flex flex-column align-items-center gap-2">
                <div
                  @click="goToProductPage(product.id, product.name)"
                  class="octagon d-flex flex-column gap-3 main"
                >
                  <octagon />
                  <svg
                    class="icon cart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28.3346 12.1999C25.2546 7.35991 20.748 4.57324 16.0013 4.57324C13.628 4.57324 11.3213 5.26658 9.21463 6.55991C7.10797 7.86658 5.21464 9.77324 3.66797 12.1999C2.33464 14.2932 2.33464 17.6932 3.66797 19.7866C6.74797 24.6399 11.2546 27.4132 16.0013 27.4132C18.3746 27.4132 20.6813 26.7199 22.788 25.4266C24.8946 24.1199 26.788 22.2132 28.3346 19.7866C29.668 17.7066 29.668 14.2932 28.3346 12.1999ZM16.0013 21.3866C13.0146 21.3866 10.6146 18.9732 10.6146 15.9999C10.6146 13.0266 13.0146 10.6132 16.0013 10.6132C18.988 10.6132 21.388 13.0266 21.388 15.9999C21.388 18.9732 18.988 21.3866 16.0013 21.3866Z"
                      fill="white"
                    />
                    <path
                      d="M15.9992 12.1865C13.9059 12.1865 12.1992 13.8932 12.1992 15.9999C12.1992 18.0932 13.9059 19.7999 15.9992 19.7999C18.0926 19.7999 19.8126 18.0932 19.8126 15.9999C19.8126 13.9065 18.0926 12.1865 15.9992 12.1865Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span> {{ $t("watch") }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store";
import { Vue3Lottie } from "vue3-lottie";
import fav from "~/assets/animations/fav-icon.json";
// import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
// import moshaToastify from 'mosha-vue-toastify';
// const { createToast } = moshaToastify;
const props = defineProps(["favIcon", "product", "index"]);
const store = useStore;
let anim = ref(false);
const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();
let checkShare = ref(false);
const goToProductPage = (id, name) => {
  const queryParams = {
    id: id,
    name: name,
  };
  const url = "/product";
  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);

  router.push(fullLocalePath);
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
const goToProductPage2 = (id, name) => {
  if (process.client) {
    if (window.innerWidth <= 768) {
      const queryParams = {
        id: id,
        name: name,
      };
      const url = "/product";

      const updatedRoute = {
        path: url,
        query: {
          ...queryParams,
        },
      };

      const fullLocalePath = localePath(updatedRoute);
      router.push(fullLocalePath);
    }
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  }
};

const MainRoute = useRoute();
let route = ref(MainRoute.fullPath);
let name = MainRoute.query.name;
if (process.client) {
  route.value = `${window.location.origin}/product?id=${props.product.id}&name=${props.product.name}`;
}
function copyToClipboard() {
  if (process.client) {
    check.value = false;
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(route.value).then(() => {});

    setTimeout(() => {
      check.value = true;
    }, 1000);
  }
}
let check = ref(true);

let text1 = ref("تم الاضافة الي قائمة المفضلات");
let text2 = ref("تم الاضافة الي السلة");
let text3 = ref("تم الحذف من قائمة المفضلات");

if (locale.value == "ar") {
  text1.value = "تم الاضافة الي قائمة المفضلات";
  text2.value = "تم الاضافة الي السلة";
  text3.value = "تم الحذف من قائمة المفضلات";
} else if (locale.value == "en") {
  text1.value = "added to wishlist";
  text2.value = "added to cart";
  text3.value = "removed from wishlist";
}

const addToBasket = async (itemm) => {
  store.commit("add", { mainItem: itemm });
  const moshaToastify = await import("mosha-vue-toastify");
  const { createToast } = moshaToastify;
  createToast(
    {
      title: text2.value,
    },
    {
      showIcon: "true",
      type: "success",
      toastBackgroundColor: "#dcba95",
      timeout: 2000,
    }
  );
  store.state.animCart = true;
  setTimeout(() => {
    store.state.animCart = false;
  }, 2000);
};
const addTofav = async (item, index) => {
  store.commit("addFav", { item: item, index: index });
  anim.value = true;
  const moshaToastify = await import("mosha-vue-toastify");
  const { createToast } = moshaToastify;
  createToast(
    {
      title: text1.value,
    },
    {
      showIcon: "true",
      type: "success",
      toastBackgroundColor: "#dcba95",
      timeout: 2000,
    }
  );
  setTimeout(() => {
    anim.value = false;
  }, 2000);
};
const deleteTofav = async (index, itemId) => {
  store.commit("deleteFav", { index: index, itemId: itemId });
  const moshaToastify = await import("mosha-vue-toastify");
  const { createToast } = moshaToastify;
  createToast(
    {
      title: text3.value,
    },
    {
      showIcon: "true",
      type: "success",
      toastBackgroundColor: "#dcba95",
      timeout: 2000,
    }
  );
};

const clickedItem = (id) => {
  return store.state.isInFav.find((item) => item == id);
};
</script>

<style lang="scss" scoped></style>
