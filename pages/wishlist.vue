<template>
    <div style=" margin-top:80px; margin-bottom:140px;">
        <div  class="container">
        <!-- <v-breadcrumbs v-if="favArr.length >= 1" :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left" class="arrow-icon"></v-icon>
          </template>
        </v-breadcrumbs> -->

         <div v-if="favArr.length >= 1" class="wish-list-page">
             <div class="text-content">
                <h4> {{ $t("wish") }}<span>({{ favArr.length }})</span></h4>
                <p class="">
                  {{ $t("wish1") }}
                </p>
             </div>
             <div class="row">
                <div v-for="item ,index in favArr" class="col-12 col-xl-4 col-lg-4 col-md-6">
                    <product-card :product="item" :index="index" /> 
                </div>
             </div>
         </div>


        </div>
            <div v-if="favArr.length < 1" class="container empty-container">
          <div class="empty">
          <client-only>
              <Vue3Lottie :animation-data="cart" :height="200" :width="200" />
          </client-only>
            <h4> {{ $t("empty fav") }} </h4>
            <p>
              {{ $t("empty fav1") }}   
              </p>

            <nuxt-link :to="localePath('/products')">
              <button> {{ $t("shopNow") }} </button>

            </nuxt-link>

          </div>
        </div>
    </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import cart from "~/assets/animations/fav.json";
const localePath = useLocalePath();
import { useStore } from "~/store";
const store = useStore;
const { locale } = useI18n();


const deleteTofav = (index) => {
  store.commit("deleteFav", index);
};

let favArr = computed(() => {
  return store.state.favArr;
})
let activeIcon = ref(true);
let items = ref([
    {
        title: locale.value == 'ar' ? 'الرئيسية' : 'home',
        disabled: true,
        href: '/',
    },
    {
        title: locale.value == 'ar' ? 'امنياتك' : 'wishlist',
        disabled: false,
        href: 'wishlist',
    },
]);

useHead({
  title: locale.value == "ar" ? "المفضلة" : "wishlist",
});

</script>

<style lang="scss" scoped>


</style>