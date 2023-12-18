<template>
    <div style="min-height:100vh">
        <div class="container gold-page">
            <div class="cover-image cate">
                <div class="text d-flex flex-column align-items-center justify-content-center">
                    <img :src="category_image" alt="">
                    <h4> قسم {{ category_name }}</h4>
                    <span>{{ products_count }} منتج</span>
                </div>
            </div>

            <div class="products">
                <div class="d-flex justify-content-end flex-column flex-xl-row flex-lg-row  gap-3 w-100">
                    <div>
                        <div class="select-box">
                            <span> الاقسام الفرعية  </span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
                            <div id="select-product"
                                class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                <span v-for="item , index in subcategoriesArr" @click="selectbox1 = item.id , getProducts()" :class="{ 'active': selectbox1 == item.id }">{{ item.name }}</span>
                             
                            </div>  
                        </v-overlay>
                    </div>
                    <div>
                        <div class="select-box">
                            <span> الماركات</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
                            <div id="select-product"
                                class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                <span v-for="item , index in brandsArr" @click="selectbox2 = item.id , getProducts()" :class="{ 'active': selectbox2 == item.id }"> {{ item.name }}</span>
                               
                            </div>
                        </v-overlay>
                    </div>
                </div>

                <div class="row">
                    <div v-for="item in products" class="col-12 col-xl-3 col-lg-3 col-md-6 ">
                        <product-card :product="item" style="margin:30px 0px;" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
let subid = route.query.subid;
let selectbox1 = ref(subid ? subid : null);
let selectbox2 = ref(null);
const router = useRouter();
const route = useRoute();
let id = route.query.id;

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let subcategoriesArr = ref([]);
let brandsArr = ref([]);
let products = ref([]);
let category_name = ref(null);
let category_image = ref(null);
let products_count = ref(null);
const getSubcategories = async () => {
  let result = await axios.get(`${getUrl()}/subcategories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  subcategoriesArr.value = result.data.data;
};
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brands`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  brandsArr.value = result.data.data;
};
const getProducts = async () => {
  let result = await axios.get(`${getUrl()}/categories-products/${id}`, {
    params: {
        subcategory_id: selectbox1.value ? selectbox1.value : null,
        brand_id: selectbox2.value ? selectbox2.value : null
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  category_name.value = result.data.data.category_name;
  category_image.value = result.data.data.category_image;
  products_count.value = result.data.data.products_count;
  products.value = result.data.data.products;
};
onMounted(() => {
    getSubcategories();
    getBrands();
    getProducts();
})
</script>

<style lang="scss" scoped></style>