<template>
    <div>
        <div
            class="text d-flex align-items-center justify-content-center flex-column"
          >
            <h3>{{ $t("brands") }}</h3>
            <span class="p-text textt">
              {{ $t("explore3") }}
            </span>
          </div>
          <swiper
            :centeredSlides="true"
            :loop="true"
            :centeredSlidesBounds="true"
            :grabCursor="true"
            :dir="getSwiperDirection"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[SwiperFreeMode, SwiperThumbs, SwiperAutoplay]"
            :breakpoints="{
                '300': {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                },
                '700': {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 9,
                    spaceBetween: 60,
                },
            }"
            :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="(item, index) in brandsArr" class="px">
              <img :src="item.image" class="w-100" alt="" />
            </swiper-slide>
          </swiper>

          <swiper
            @swiper="setThumbsSwiper"
            :freeMode="true"
            :watchSlidesProgress="true"
            :spaceBetween="60"
            :dir="getSwiperDirection"
            :slidesPerView="1"
            class="mySwiper2"
          >
            <swiper-slide
              v-for="(item, index) in brandsArr"
              class=""
              style="padding: 0px 50px"
            >
              <div
                class="d-flex flex-column align-items-center justify-content-center"
              >
                <p class="p-text text-center" style="">
                  {{ item.description }}
                </p>
                <div
                  class="btn-back d-flex align-items-center w-100 justify-content-center"
                >
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
</template>

<script setup>
import axios from "axios";

let brandsArr = ref([]);
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const router = useRouter();
const localePath = useLocalePath();
const { locale } = useI18n();

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


const getBrands = async () => {
    let result = await axios.get(`${getUrl()}/brands`, {
        headers: {
            "Content-Language": `${locale.value}`,
        },
    });
    brandsArr.value = result.data.data;
};

const getSwiperDirection = computed(() => {
    if (locale.value === "ar") {
        return "rtl"; // Set the direction to RTL
    } else {
        return "ltr"; // Set the direction to LTR
    }
});

onMounted(() => {
    getBrands();
});
</script>

<style lang="scss" scoped>


</style>