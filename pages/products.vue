<template>
  <div style="min-height:100vh;">
    <div class="container our-products products h-100" style="margin-top: 75px;">
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

          <div  @click="toggleOverlay" id="selectBox1" class="select-box">
            <span> {{item1 == '' ?  $t("sections") : item1 }} </span>
            <i v-if="overlayVisible" class="fa-solid fa-chevron-up"></i>
            <i v-else class="fa-solid fa-chevron-down"></i>
          </div>
              <div v-if="overlayVisible" id="select-product"
                class="d-flex  flex-column  gap-3 ">
                <span v-for="item in categories" @click="selectbox1 = item.id, item1 = item.name, getProducts() , getSubcategories() ,  overlayVisible = false" :class="{ 'active': selectbox1 == item.id }"> {{ item.name }}</span>
              </div>
          <v-overlay v-if="overlayVisible" activator="parent" location-strategy="connected" scroll-strategy="reposition" @click="hideOverlay">
           
          </v-overlay>
        </div>
        <div>

          <div @click="overlayVisible2 = ! overlayVisible2" id="selectBox2" class="select-box" >
            <span> {{ item2 == '' ? $t("categories") : item2 }} </span>
            <i v-if="overlayVisible2" class="fa-solid fa-chevron-up"></i>
            <i v-else class="fa-solid fa-chevron-down"></i>
          </div>

            <div v-if="overlayVisible2" id="select-product"
              class="d-flex  flex-column text-center">
              <span v-for="item in subcategories" @click="selectbox2 = item.id , item2 = item.name , getProducts()  , overlayVisible2 = false " :class="{ 'active': selectbox2 == item.id }"> {{ item.name }}</span>

            </div>

          <v-overlay  activator="parent" location-strategy="connected" @click="overlayVisible2 = false" scroll-strategy="reposition" >
          </v-overlay>
        </div>
        <div>

    
          <div @click="overlayVisible3 = ! overlayVisible3" id="selectBox3" class="select-box">
            <span> {{ item3 == '' ? $t("brands") : item3 }} </span>
            <i v-if="overlayVisible3" class="fa-solid fa-chevron-up"></i>
            <i v-else class="fa-solid fa-chevron-down"></i>
          </div>

            <div v-if="overlayVisible3" id="select-product"
              class="d-flex  flex-column text-center">
              <span v-for="item in brands" @click="selectbox3 = item.id , item3 = item.name , getProducts() , overlayVisible3 = false" :class="{ 'active': selectbox3 == item.id }"> {{ item.name }}</span>

            </div>
          <v-overlay activator="parent" location-strategy="connected"  @click="overlayVisible3 = false" scroll-strategy="reposition" >
          </v-overlay>
        </div>
      </div>
   
      <div class="row">
            <div class="col-6 col-xl-3 col-lg-3 col-md-6" v-for="item, index in products" :key="item.id">
             <product-card class="w-100" :product="item" />
            </div>
          </div>
            <div v-if="spinnerProducts" class="d-flex align-items-center justify-content-center" style="min-height:50vh;">
              <v-progress-circular size="70" indeterminate color="#dcba95"></v-progress-circular>
            </div>
            

            <loader3 v-if="loaderSpan"></loader3>


  <v-pagination
        v-if="pageCount >= 1"
        v-model="page"
        :length="pageCount"
        rounded="circle"
        @input="updatePage"
        :total-visible="7"
        @click="getProducts()"
      ></v-pagination>
    </div>

    <loader v-if="pending"></loader>

   
   
  </div>
</template>

<script setup>
import { useStore } from "~/store";
const store = useStore;
import axios from 'axios';
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
let pending = ref(true);
let tabId = ref(route.query.tagId);
let search_value = ref(route.query.search_value ? route.query.search_value : null );
let tab = ref(null);
let tabActive = ref(1);
let selectbox1 = ref(route.query.id ? route.query.id : null);
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
let loaderSpan = ref(false);

let dropdown1 = ref(false);

const overlayVisible = ref(false);
const overlayVisible2 = ref(false);
const overlayVisible3 = ref(false);

// Event handlers
const toggleOverlay = () => {
  overlayVisible.value = !overlayVisible.value;
};

const hideOverlay = () => {
  overlayVisible.value = false;
};


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
    params:{
      category_id: selectbox1.value
    },
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
  products.value = [];
  let result = await axios.get(`${getUrl()}/products`, {
    params: {
      tag_id:tab.value,
      category_id: selectbox1.value,
      subcategory_id: selectbox2.value ? selectbox2.value : null,
      brand_id: selectbox3.value,
      page:page.value,
      search_value: store.state.search
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  if (result.status == 200) {
    spinnerProducts.value = false;
    pending.value = false;
   }
  products.value = result.data.data;
  if(products.value.length <=0 ){
    loaderSpan.value = true;
  } else{
    loaderSpan.value = false;

  }
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
  console.log('dsdsdsd');
  getProducts();
}


useHead({
  title: locale.value == "ar" ? "المنتجات" : "products",
});


watch(
  [() => route.query.id, () => route.query.search_value,],
  ([newId, newSup]) => {
    selectbox1.value = newId;
    search_value.value = newSup;
    getProducts();
  }
);

function handleButton (){
  if(process.client){
    let dropdownElement = document.getElementById("selectBox1");
    let dropdownElement2 = document.getElementById("selectBox2");
    let dropdownElement3 = document.getElementById("selectBox3");
        if (dropdownElement && !dropdownElement.contains(event.target))
         {
          overlayVisible.value = false;
        }
        if (overlayVisible2.value && dropdownElement2 && !dropdownElement2.contains(event.target)) {
          overlayVisible2.value = false;
        }
        if (overlayVisible3.value && dropdownElement3 && !dropdownElement3.contains(event.target)) {
          overlayVisible3.value = false;
        }
  }
}




onMounted(()=>{
  getTags();
  getcategories();
  getSubcategories();
  getBrands();
  document.addEventListener("click", handleButton);
})

</script>

<style lang="scss" scoped></style>