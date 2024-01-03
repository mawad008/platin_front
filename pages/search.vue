<template>
  <div class="container">
    <div class="search-page-mobile">
      <div
        class="search d-flex align-items-center justify-content-between px-1"
        style=""
      >
        <div class="input inp">
          <input
            type="text"
            v-model="store.state.search"
            @keypress.enter="goToProducts()"
            :placeholder="$t('search')"
            style=""
          />
        </div>
        <div class="d-flex align-item-cente gap-4">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                class="d-flex align-items-center gap-1"
                v-bind="props"
                style="color: #2D3A4A; font-size: 14px; font-weight: 400; white-space: nowrap;"
              >
                {{ text7 ? text7 : $t("sections") }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.9465 5.45312H7.79317H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"
                    fill="#2D3A4A"
                  />
                </svg>
              </button>
            </template>
            <div
              class="list-profile list d-flex flex-column p-4 gap-4 text-center"
            >
              <button
                type=""
                v-for="item in categoriesArr"
                @click="(cateId = item.id), (text7 = item.name)"
              >
                {{ item.name }}
              </button>
            </div>
          </v-menu>
          <div @click="goToProducts()" class="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0252 16.45L19.4689 18.9173C20.1478 19.6028 19.1297 20.6313 18.4508 19.9458L16.0069 17.4783C13.0712 19.9237 8.74031 19.7368 6.01897 16.9884C3.11347 14.054 3.11347 9.29635 6.01897 6.36194C8.92447 3.42753 13.6352 3.42753 16.5407 6.36194C19.2623 9.11063 19.4471 13.4851 17.0252 16.45ZM15.5225 7.39031C13.1793 5.02385 9.38035 5.02385 7.0372 7.39031C4.69406 9.75677 4.69406 13.5936 7.0372 15.96C9.38035 18.3265 13.1793 18.3265 15.5225 15.96C17.8656 13.5936 17.8656 9.75677 15.5225 7.39031Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M99.125 78H50.375L55.25 35.75H94.25L99.125 78Z"
            fill="#AFABF9"
          />
          <path
            d="M84.5 42.25C84.069 42.25 83.6557 42.0788 83.351 41.774C83.0462 41.4693 82.875 41.056 82.875 40.625V30.875C82.875 29.1511 82.1902 27.4978 80.9712 26.2788C79.7522 25.0598 78.0989 24.375 76.375 24.375C74.6511 24.375 72.9978 25.0598 71.7788 26.2788C70.5598 27.4978 69.875 29.1511 69.875 30.875V40.625C69.875 41.056 69.7038 41.4693 69.399 41.774C69.0943 42.0788 68.681 42.25 68.25 42.25C67.819 42.25 67.4057 42.0788 67.101 41.774C66.7962 41.4693 66.625 41.056 66.625 40.625V30.875C66.625 28.2891 67.6522 25.8092 69.4807 23.9807C71.3092 22.1522 73.7891 21.125 76.375 21.125C78.9609 21.125 81.4408 22.1522 83.2693 23.9807C85.0978 25.8092 86.125 28.2891 86.125 30.875V40.625C86.125 41.056 85.9538 41.4693 85.649 41.774C85.3443 42.0788 84.931 42.25 84.5 42.25Z"
            fill="#766FF8"
          />
          <path
            d="M53.625 78H4.875L9.75 35.75H48.75L53.625 78Z"
            fill="#7ED5DC"
          />
          <path
            d="M35.75 42.25C35.319 42.25 34.9057 42.0788 34.601 41.774C34.2962 41.4693 34.125 41.056 34.125 40.625V30.875C34.125 29.1511 33.4402 27.4978 32.2212 26.2788C31.0022 25.0598 29.3489 24.375 27.625 24.375C25.9011 24.375 24.2478 25.0598 23.0288 26.2788C21.8098 27.4978 21.125 29.1511 21.125 30.875V40.625C21.125 41.056 20.9538 41.4693 20.649 41.774C20.3443 42.0788 19.931 42.25 19.5 42.25C19.069 42.25 18.6557 42.0788 18.351 41.774C18.0462 41.4693 17.875 41.056 17.875 40.625V30.875C17.875 28.2891 18.9022 25.8092 20.7307 23.9807C22.5592 22.1522 25.0391 21.125 27.625 21.125C30.2109 21.125 32.6908 22.1522 34.5193 23.9807C36.3478 25.8092 37.375 28.2891 37.375 30.875V40.625C37.375 41.056 37.2038 41.4693 36.899 41.774C36.5943 42.0788 36.181 42.25 35.75 42.25Z"
            fill="#38C6D2"
          />
          <path
            d="M78 87.75H25.7969L30.875 32.5H73.125L78 87.75Z"
            fill="#FBCE44"
          />
          <path
            d="M61.75 42.25C61.319 42.25 60.9057 42.0788 60.601 41.774C60.2962 41.4693 60.125 41.056 60.125 40.625V26C60.125 23.8451 59.269 21.7785 57.7452 20.2548C56.2215 18.731 54.1549 17.875 52 17.875C49.8451 17.875 47.7785 18.731 46.2548 20.2548C44.731 21.7785 43.875 23.8451 43.875 26V40.625C43.875 41.056 43.7038 41.4693 43.399 41.774C43.0943 42.0788 42.681 42.25 42.25 42.25C41.819 42.25 41.4057 42.0788 41.101 41.774C40.7962 41.4693 40.625 41.056 40.625 40.625V26C40.625 22.9832 41.8234 20.0899 43.9567 17.9567C46.0899 15.8234 48.9832 14.625 52 14.625C55.0168 14.625 57.9101 15.8234 60.0433 17.9567C62.1766 20.0899 63.375 22.9832 63.375 26V40.625C63.375 41.056 63.2038 41.4693 62.899 41.774C62.5943 42.0788 62.181 42.25 61.75 42.25Z"
            fill="#EDB60B"
          />
          <path
            d="M42.25 48.75C43.1475 48.75 43.875 48.0225 43.875 47.125C43.875 46.2275 43.1475 45.5 42.25 45.5C41.3525 45.5 40.625 46.2275 40.625 47.125C40.625 48.0225 41.3525 48.75 42.25 48.75Z"
            fill="#EDB60B"
          />
          <path
            d="M19.5 48.75C20.3975 48.75 21.125 48.0225 21.125 47.125C21.125 46.2275 20.3975 45.5 19.5 45.5C18.6025 45.5 17.875 46.2275 17.875 47.125C17.875 48.0225 18.6025 48.75 19.5 48.75Z"
            fill="#38C6D2"
          />
          <path
            d="M61.75 48.75C62.6475 48.75 63.375 48.0225 63.375 47.125C63.375 46.2275 62.6475 45.5 61.75 45.5C60.8525 45.5 60.125 46.2275 60.125 47.125C60.125 48.0225 60.8525 48.75 61.75 48.75Z"
            fill="#EDB60B"
          />
          <path
            d="M84.5 48.75C85.3975 48.75 86.125 48.0225 86.125 47.125C86.125 46.2275 85.3975 45.5 84.5 45.5C83.6025 45.5 82.875 46.2275 82.875 47.125C82.875 48.0225 83.6025 48.75 84.5 48.75Z"
            fill="#766FF8"
          />
        </svg>
        <h4>اكتشف تجربة التسوق الفريدة</h4>

        <p>ابحث عن ما تريد و اكتشف افضل المنتجات</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useStore } from "~/store";
const store = useStore;
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

let cateId = ref();
let categoriesArr = ref([]);
const getCategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categoriesArr.value = result.data.data.slice(0, 4);
};
const goToProducts = () => {
  const queryParams = {
    search_value: store.state.search,
    id: cateId.value,
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
onMounted(() => {
  getCategories();
});
</script>

<style lang="scss">
.search-page-mobile {
  margin-top: 50px;
  .search {
    background-color: #fafafa;
    // width: 350px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #ebeaed;

    .input {
      width: 60%;
      input {
        border: none;
        outline: none;
        padding: 0px 8px;
        width: 100%;
      }
    }
    .search-icon {
      // padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 45px;
      height: 44px;
      background: #dcba95;
    }
  }
  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    // margin-top: 50px;
    min-height: 70vh;
    h4 {
      color: #2d3a4a;
      font-size: 20px;

      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      color: #5a7184;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
