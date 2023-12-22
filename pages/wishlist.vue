<template>
    <div style="min-height:100vh; margin-top:80px; margin-bottom:140px;">
        <div v-if="favArr.length >= 1" class="container">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-left"></v-icon>
          </template>
        </v-breadcrumbs>


         <div class="wish-list-page">
             <div class="text-content my-4">
                <h4> امنياتك <span>({{ favArr.length }})</span></h4>
                <p>تصفح امنياتك الان كما يمكنك مشاركة امنياتك مع من تحب سواء عن طريق رابط خاص بالمنتج او عن طريق منصات التواصل الاجتماعي</p>
             </div>
             <div class="row">
                <div v-for="item ,index in favArr" class="col-12 col-xl-4 col-lg-4 col-md-6">
                    <product-card :product="item" :index="index" /> 
                </div>
             </div>
         </div>


        </div>
            <div v-else class="container empty-container">
          <div class="empty">
          <client-only>
              <Vue3Lottie :animation-data="cart" :height="200" :width="200" />
          </client-only>
            <h4>قائمة المفضلة لديك فارغة ! </h4>
            <p>قائمة المفضلة لديك خاصتك فارغة الآن. تفضل بتصفح منتجاتنا الراقية واستكمل تجربتك الشخصية بإضافة قطعة فريدة من نوعها
              إلى مجموعتك</p>

            <nuxt-link :to="localePath('/')">
              <button>تسوق الان</button>

            </nuxt-link>

          </div>
        </div>
    </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import cart from "~/assets/animations/empty-cart.json";
const localePath = useLocalePath();
import { useStore } from "~/store";
const store = useStore;


const deleteTofav = (index) => {
  store.commit("deleteFav", index);
};

let favArr = computed(() => {
  return store.state.favArr;
})
let activeIcon = ref(true);
let items = ref([
    {
        title: 'الرئيسية',
        disabled: true,
        href: '/',
    },
    {
        title: 'امنياتك',
        disabled: false,
        href: 'wishlist',
    },
]);


</script>

<style lang="scss" scoped>


</style>