<template>
  <div style="min-height:100vh;">
    <div class="container our-products h-100" style="margin-top: 75px;">
      <div class="header  d-flex flex-column align-items-center justify-content-center w-100">
        <h3 class="">{{ $t("our products") }}</h3>

        <div class="tabs">
          <div v-for="item , index in tags" @click="tabActive = index , tab = item.id , getProducts()" :class="{'active':tab==item.id}" class="tab">
            <span class="choose"> {{ item.name }}</span>
            <border />
          </div>

        </div>
     
      </div>

      <div class="d-flex justify-content-end flex-column flex-xl-row flex-lg-row  gap-3 mb-5 w-100">
        <div>

          <div class="select-box">
            <span> {{item1 == '' ?  $t("sections") : item1 }} </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
            <div id="select-product"
              class="d-flex  flex-column  gap-3 ">
              <span v-for="item in categories" @click="selectbox1 = item.id, item1 = item.name , getProducts()" :class="{ 'active': selectbox1 == item.id }"> {{ item.name }}</span>
            </div>
          </v-overlay>
        </div>
        <div>

          <div class="select-box">
            <span> {{ item2 == '' ? $t("categories") : item2 }} </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
            <div id="select-product"
              class="d-flex  flex-column text-center">
              <span v-for="item in subcategories" @click="selectbox2 = item.id , item2 = item.name , getProducts()" :class="{ 'active': selectbox2 == item.id }"> {{ item.name }}</span>

            </div>
          </v-overlay>
        </div>
        <div>

    
          <div class="select-box">
            <span> {{ item3 == '' ? $t("brands") : item3 }} </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
            <div id="select-product"
              class="d-flex  flex-column text-center">
              <span v-for="item in brands" @click="selectbox3 = item.id , item3 = item.name , getProducts()" :class="{ 'active': selectbox3 == item.id }"> {{ item.name }}</span>

            </div>
          </v-overlay>
        </div>
      </div>

      <v-window v-model="tabActive">
        <v-window-item v-for="(item, index) in tags">
       
        <!-- <v-data-iterator :items="products"  :items-per-page="itemsPerPage" :page="page">
      <template v-slot:default="{ items }">
    
          <div class="">
          <div class="row">
            <div class="col-12 col-xl-3 col-lg-3 col-md-6" v-for="item, index in items" :key="item.id">
             <product-card :product="item.raw" />
            </div>
          </div>
        </div>
      </template>
    </v-data-iterator> -->

    <div class="row">
            <div class="col-12 col-xl-3 col-lg-3 col-md-6" v-for="item, index in products" :key="item.id">
             <product-card :product="item" />
            </div>
          </div>
        </v-window-item>
         

      </v-window>

            <div v-if="spinnerProducts" class="d-flex align-items-center justify-content-center" style="min-height:50vh;">
              <v-progress-circular size="70" indeterminate color="#dcba95"></v-progress-circular>
            </div>


  <v-pagination
        v-if="pageCount >= 1"
        v-model="page"
        :length="pageCount"
        rounded="circle"
        @input="updatePage"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
let tabId = ref(route.query.tagId);
let tab = ref(null);
let tabActive = ref(1);
let selectbox1 = ref(null);
let selectbox2 = ref(null);
let selectbox3 = ref(route.query.brand_id ? route.query.brand_id : null);
let tags = ref([]);
let products = ref([]);
let categories = ref([]);
let subcategories = ref([]);
let brands = ref([]);
let item1 = ref('');
let item2 = ref('');
let item3 = ref('');
let page = ref(1);
let itemsPerPage = ref();
let total = ref();

let spinnerProducts = ref(false);
const getTags = async () => {
  let result = await axios.get(`${getUrl()}/tags`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  tags.value = result.data.data;
  console.log(tags.value);
 tabId.value ? tab.value = tabId.value : tab.value = tags.value[0].id;
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
  spinnerProducts.value = true;
  let result = await axios.get(`${getUrl()}/products`, {
    params: {
      tag_id:tab.value,
      category_id: selectbox1.value ? selectbox1.value : null,
      subcategory_id: selectbox2.value ? selectbox2.value : null,
      brand_id: selectbox3.value ? selectbox3.value : null,
      page:page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
   }
  products.value = result.data.data;
  itemsPerPage.value = result.data.meta.per_page;
  total.value = result.data.meta.total;
};






const pageCount = computed(() => {
  return Math.ceil(total.value / itemsPerPage.value);
});

const paginatedItems = computed(() => {
  const startIndex = (page.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return products.value.slice(startIndex, endIndex);
});

const updatePage = (newPage) => {
  page.value = newPage;
}










onMounted(()=>{
  getTags();
  getcategories();
  getSubcategories();
  getBrands();
})

</script>

<style lang="scss" scoped></style>