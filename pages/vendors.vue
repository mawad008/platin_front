<template>
  <div style="min-height: 100vh">
    <div class="container vendors-container">
      <div
        class="d-flex justify-content-end flex-column flex-xl-row flex-xl-row flex-md-row gap-3 w-100"
      >
        <div>
          <div class="select-box">
            <span> {{ $t("city") }} </span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

          <v-overlay
            activator="parent"
            location-strategy="connected"
            scroll-strategy="reposition"
          >
            <div
              id="select-product"
              class="d-flex flex-column align-items-center text-center gap-3 justify-content-center"
            >
              <span
                v-for="item in cities"
                @click="selectbox1 = item.id , getVendors()"
                :class="{ active: selectbox1 == item.id }"
              >
                {{ item.name }}</span
              >
            </div>
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
                  class="det d-flex align-items-center w-100 justify-content-between"
                >
                  <div class="d-flex align-items-center gap-2">
                    <img src="~/assets/images/diamond.svg" alt="" />
                    <span> {{ item.products_count }} {{ $t("product") }} </span>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <img src="~/assets/images/vstar.svg" alt="" />
                    <span> {{ item.rate }} ( الف تقييم ) </span>
                  </div>
                </div>
              </div>
              <div class="overlay">
                <button>{{ $t("visit") }}</button>
              </div>
            </div>
     
        </div>
      </div>
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
const getCities = async () => {
  let result = await axios.get(`${getUrl()}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  cities.value = result.data.data.allCities;
};
const getVendors = async () => {
  let result = await axios.get(`${getUrl()}/vendors`, {
    params: {
        city_id: selectbox1.value,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
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
