<template>
  <div style="min-height:100vh;">
    <div class="container our-products ">
      <div class="header mb-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h3 class="mb-5">منتجاتنا</h3>

        <div class="tabs">
          <div v-for="item , index in tags" @click="tabActive = index , tab = item.id , getProducts()" :class="{'active':tab==item.id}" class="tab">
            <span class="choose"> {{ item.name }}</span>
            <border />
          </div>

        </div>
     
      </div>

      <div class="d-flex justify-content-end flex-column flex-xl-row flex-lg-row  gap-3 w-100 my-3">
        <div>

          <div class="select-box">
            <span> الاقسام </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
            <div id="select-product"
              class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
              <span v-for="item in categories" @click="selectbox1 = item.id , getProducts()" :class="{ 'active': selectbox1 == item.id }"> {{ item.name }}</span>
            </div>
          </v-overlay>
        </div>
        <div>

          <div class="select-box">
            <span> التصنيفات </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
            <div id="select-product"
              class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
              <span v-for="item in subcategories" @click="selectbox2 = item.id , getProducts()" :class="{ 'active': selectbox2 == item.id }"> {{ item.name }}</span>

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
              <span v-for="item in brands" @click="selectbox3 = item.id , getProducts()" :class="{ 'active': selectbox3 == item.id }"> {{ item.name }}</span>

            </div>
          </v-overlay>
        </div>
      </div>

      <v-window v-model="tabActive">
        <v-window-item v-for="(item, index) in tags">
          <div class="row">
            <div v-for="item in products" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
              <product-card :product="item" />
            </div>
          </div>
        </v-window-item>
      </v-window>

    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
let tab = ref(null);
let tabActive = ref(1);
let selectbox1 = ref(null);
let selectbox2 = ref(null);
let selectbox3 = ref(null);
let tags = ref([]);
let products = ref([]);
let categories = ref([]);
let subcategories = ref([]);
let brands = ref([]);
const getTags = async () => {
  let result = await axios.get(`${getUrl()}/tags`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  tags.value = result.data.data;
  console.log(tags.value);
  tab.value = tags.value[0].id;
  if (tab.value) {
    getProducts();
  }
  console.log(tab.value);
};
const getcategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categories.value = result.data.data;
};
const getSubcategories = async () => {
  let result = await axios.get(`${getUrl()}/subcategories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  subcategories.value = result.data.data;
};
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brands`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  brands.value = result.data.data;
};
const getProducts = async () => {
  let result = await axios.get(`${getUrl()}/products`, {
    params: {
      tag_id: tab.value,
      category_id: selectbox1.value ? selectbox1.value : null,
      subcategory_id: selectbox2.value ? selectbox2.value : null,
      brand_id: selectbox3.value ? selectbox3.value : null,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  products.value = result.data.data;
};


onMounted(()=>{
  getTags();
  getcategories();
  getSubcategories();
  getBrands();
})

</script>

<style lang="scss" scoped></style>