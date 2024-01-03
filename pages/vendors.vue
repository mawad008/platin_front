<template>
  <div>
    <div class="container vendors-container">
      <div
        class="d-flex justify-content-end flex-column flex-xl-row flex-xl-row flex-md-row gap-3 w-100"
      >
        <div>
          <div @click="overlayVisible2 = ! overlayVisible2" class="select-box">
            <span> {{text1 == '' ?  $t("city") : text1}} </span>
            <i v-if="overlayVisible2" class="fa-solid fa-chevron-up"></i>
            <i v-else class="fa-solid fa-chevron-down"></i>
          </div>
            <div
              v-if="overlayVisible2"
              id="select-product"
              class="d-flex flex-column "
            >
              <span
                v-for="item in cities"
                @click="selectbox1 = item.id , getVendors() , text1 = item.name ,  overlayVisible2 = false"
                :class="{ active: selectbox1 == item.id }"
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
        <div></div>
      </div>
      <div class="row">
        <div v-for="item in vendors" class="col-12 col-xl-3 col-lg-3 col-md-4">
            <div @click="goToVendor(item.id , item.name)" class="box">
              <div class="d-flex justify-content-center">
                <div class="image">
                  <img :src="item.logo" alt="" />
                </div>
              </div>
              <div class="text text-center">
                <h4>{{ item.name }}</h4>
                <div
                  class="det d-flex align-items-center gap-3 w-100 justify-content-center"
                >
                  <div class="d-flex align-items-center gap-2">
                    <img src="~/assets/images/diamond.svg" alt="" />
                    <span> {{ item.products_count }} {{ $t("product") }} </span>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <img src="~/assets/images/vstar.svg" alt="" />
                    <span> {{ item.rate }} </span>
                  </div>
                </div>
              </div>
              <div class="overlay">
                <button>{{ $t("visit") }}</button>
              </div>
            </div>
     
        </div>
      </div>
        
         <div v-if="spinner" class="d-flex align-items-center justify-content-center" style="min-height:50vh;">
                <v-progress-circular size="70" indeterminate color="#dcba95"></v-progress-circular>
              </div>


      <loader v-if="pending"></loader>


    </div>
  </div>
</template>

<script setup>
import axios from "axios";
let selectbox1 = ref(null);
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const { locale } = useI18n();
let cities = ref([]);
let vendors = ref([]);
let text1 = ref('');
let overlayVisible2 = ref(false);
let spinner = ref(false);
let pending = ref(true);
const getCities = async () => {
  let result = await axios.get(`${getUrl()}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  cities.value = result.data.data.allCities;
};
const getVendors = async () => {
  spinner.value = true;
  let result = await axios.get(`${getUrl()}/vendors`, {
    params: {
        city_id: selectbox1.value,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if (result.status == 200) {
    spinner.value = false;
    pending.value = false;
  }
  vendors.value = result.data.data;
};

const goToVendor = (id, name) => {
      const queryParams = {
        id: id,
        name: name,
      };
      const url = "/vendor";

      const updatedRoute = {
        path: url,
        query: {
          ...queryParams,
        },
      };

      const fullLocalePath = localePath(updatedRoute);


      router.push(fullLocalePath);
    };

onMounted(() => {
  getCities();
  getVendors();
});
</script>

<style lang="scss" scoped></style>
