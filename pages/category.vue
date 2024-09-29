<template>
  <div style="min-height: 100vh">
    <div v-if="!pending" class="container gold-page">
      <div class="cover-image" :class="color">
        <div
          class="text d-flex flex-column align-items-center justify-content-center"
        >
          <img :src="category_image" alt="" />
          <h4>{{ $t("section") }} {{ category_name }}</h4>
          <span>{{ products_count }} {{ $t("product") }}</span>
        </div>
      </div>

      <div class="products">
        <div
          class="d-flex justify-content-end flex-column flex-xl-row flex-lg-row gap-3 w-100"
        >
          <div>
            <div @click="overlayVisible1 = !overlayVisible1" class="select-box">
              <span> {{ text1 == '' ? $t("sub cate") : text1 }} </span>
              <i v-if="overlayVisible1" class="fa-solid fa-chevron-up"></i>
              <i v-else class="fa-solid fa-chevron-down"></i>
            </div>
              <div
              v-if="overlayVisible1"
                id="select-product"
                class="d-flex flex-column align-items-center text-center gap-3 justify-content-center"
              >
                <span
                  v-for="(item, index) in subcategoriesArr"
                  @click="(selectbox1 = item.id), getProducts() , text1 = item.name , overlayVisible1 = false"
                  :class="{ active: selectbox1 == item.id }"
                  >{{ item.name }}</span
                >
              </div>
            <v-overlay
            @click="overlayVisible1 = false"
              activator="parent"
              location-strategy="connected"
              scroll-strategy="reposition"
            >
            </v-overlay>
          </div>
          <div>
            <div @click="overlayVisible2 = !overlayVisible2" class="select-box">
              <span> {{ text2 == '' ? $t("brands") : text2 }}</span>
              <i v-if="overlayVisible2" class="fa-solid fa-chevron-up"></i>
              <i v-else class="fa-solid fa-chevron-down"></i>
            </div>

              <div
              v-if="overlayVisible2"
                id="select-product"
                class="d-flex flex-column align-items-center text-center gap-3 justify-content-center"
              >
                <span
                  v-for="(item, index) in brandsArr"
                  @click="(selectbox2 = item.id), getProducts() , text2 = item.name  , overlayVisible2 = false"
                  :class="{ active: selectbox2 == item.id }"
                >
                  {{ item.name }}</span
                >
              </div>
            <v-overlay
            @click="overlayVisible2 = false"
              activator="parent"
              location-strategy="connected"
              scroll-strategy="reposition"
            >
            </v-overlay>
          </div>
        </div>

        <!-- <div class="row">
          <div
            v-for="item in products"
            class="col-12 col-xl-3 col-lg-3 col-md-6"
          >
            <product-card :product="item" style="margin: 30px 0px" />
          </div>
        </div> -->
          <v-data-iterator :items="products"  :items-per-page="itemsPerPage" :page="page">
        <template v-slot:default="{ items }">
    
            <div class="mt-4">
            <div class="row">
              <div class="col-12 col-xl-3 col-lg-3 col-md-6" v-for="item, index in items" :key="item.id">
               <product-card :product="item.raw" />
              </div>
            </div>
          </div>
        </template>
      </v-data-iterator>

       <div v-if="spinnerProducts" class="d-flex align-items-center justify-content-center" style="min-height:50vh;">
                <v-progress-circular size="70" indeterminate color="#dcba95"></v-progress-circular>
              </div>
          <v-pagination
          v-if="pageCount > 1"
          v-model="page"
          :length="pageCount"
          rounded="circle"
          :total-visible="7"
          @input="updatePage"
        ></v-pagination>
      </div>

    </div>
      <loader v-if="pending"></loader>
  </div>
</template>

<script setup>
import axios from "axios";
const router = useRouter();
const route = useRoute();
let id = ref(route.query.id || '');
let color = ref(route.query.color || null);
let subid = ref(route.query.subid || null);
let selectbox1 = ref(subid.value ? subid.value : null);
let selectbox2 = ref(null);
let text1 = ref('');
let text2 = ref('');
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let subcategoriesArr = ref([]);
let brandsArr = ref([]);
let products = ref([]);
let category_name = ref(null);
let category_image = ref(null);
let products_count = ref(null);
let spinnerProducts = ref(false);
let overlayVisible1 = ref(false);
let overlayVisible2 = ref(false);
let pending = ref(true);

const getSubcategories = async () => {
  let result = await axios.get(`${getUrl()}/subcategories`, {
    params:{
      category_id: id.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  subcategoriesArr.value = result.data.data;
  if(selectbox1.value){
     
   let indexItem = subcategoriesArr.value.find((ele)=>{
      return ele.id == selectbox1.value;
    });
    text1.value = indexItem.name
  }
};
const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brands`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  brandsArr.value = result.data.data;
};
let itemsPerPage = ref(4);
let total = ref();
let page = ref(1);

const getProducts = async () => {
  spinnerProducts.value = true;
  products.value = [];
  let result = await axios.get(`${getUrl()}/categories-products/${id.value}`, {
    params: {
      subcategory_id: selectbox1.value ? selectbox1.value : null,
      brand_id: selectbox2.value ? selectbox2.value : null,
      page: page.value
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if (result.status == 200) {
    spinnerProducts.value = false;
    pending.value = false;
  }
  category_name.value = result.data.data.category_name;
  category_image.value = result.data.data.category_image;
  products_count.value = result.data.data.products_count;
  products.value = result.data.data.products.data;
  itemsPerPage.value = result.data.data?.products?.meta?.per_page;
  total.value = result.data.data?.products?.meta?.total;
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
  console.log('sdsdsd');
  getProducts()
}


useHead({
  title: locale.value == "ar" ? "الفئات" : "categories",
});

watch(()=> page.value , (val)=>{
  if(val){
    getProducts();
  }
})

watch(
  [() => route.query.id, () => route.query.subid, () => route.query.color],
  ([newId, newSup, newColor]) => {
    id.value = newId;
    // subid.value = newSup;
    selectbox1.value = newSup;
    color.value = newColor;
    getSubcategories();
    getProducts();
  }
);
onMounted(() => {
  getSubcategories();
  getBrands();
  getProducts();
});
</script>

<style lang="scss" scoped></style>
