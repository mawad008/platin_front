<template>
    <div style="min-height:100vh;">
        <div class="container vendor-page">
            <div class="row">
                <div class="col-12 col-xl-8 col-lg-8">
                    <div class="main-box">
                        <div class="cover">
                            <img :src="vendor.cover" alt="">
                            <div class="overlay"></div>
                        </div>

                        <div class="circle-image">
                            <img :src="vendor.logo" alt="">
                        </div>

                        <p> زهرة الياقوت هو عالم من الجمال والرقي في عالم المجوهرات. نقدم لكم تشكيلة متنوعة من المجوهرات
                            الفاخرة، مصنوعة بعناية فائقة من أرقى المواد. </p>


                        <div class="icons row">
                            <div class="icon col-6 col-xl-3 my-3 col-lg-3 col-md-4 ">
                                <div class="image">
                                    <img src="~/assets/images/diamond.svg" alt="">
                                </div>
                                <h6> {{ $t("products number") }}</h6>
                                <span> {{ vendor.products_count }} {{ $t("product") }} </span>
                            </div>
                            <div class="icon col-6 col-xl-3 my-3 col-lg-3 col-md-4 ">
                                <div class="image">
                                    <img src="~/assets/images/vstar.svg" alt="">
                                </div>
                                <h6> {{ $t("total rate") }}</h6>
                                <span> {{ vendor.rate }} ( الف تقييم ) </span>
                            </div>
                            <div class="icon col-6 col-xl-3 my-3 col-lg-3 col-md-4 ">
                                <div class="image">
                                    <img src="~/assets/images/vendor-c.svg" alt="">
                                </div>
                                <h6> {{ $t("vendor1") }}</h6>
                                <span> {{ vendor.commercial_register_number }} </span>
                            </div>
                            <div class="icon col-6 col-xl-3 my-3 col-lg-3 col-md-4 ">
                                <div class="image">
                                    <img src="~/assets/images/vendor-b.svg" alt="">
                                </div>
                                <h6> {{ $t("vendor2") }}</h6>
                                <span> {{ $t("vendor3") }} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-4 col-lg-4">
                    <div class="recent">
                        <h4 class="fw-bold mb-4"> {{ $t("most selling") }} </h4>
                        <div class="boxes d-flex flex-column h-100 bg-dange ">
                            <div v-for="item in vendor.bestSellerProducts" class="box d-flex flex-column  my-3 flex-xl-row flex-lg-row flex-md-row align-items-start align-items-xl-center align-items-lg-center  gap-3">
                                <div class="image">
                                    <img :src="item.images[0].full_image_path" alt="">
                                </div>
                                <div class="text w-100 d-flex flex-column gap-1">
                                    <h5> {{ item.name }}</h5>
                                    <div class="price w-100  d-flex align-items-center justify-content-between">
                                        <span class="item">{{ `${item.caliber} / ق` }} {{ `${item.weight} / ق` }}</span>
                                        <span class="price-item"> {{ item.price }} {{ $t("curr") }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="container the-vendor d-flex justify-content-center" style="margin-top:80px">

            <div class="product-details  p-3">
                <div class="h-100">
                    <div class="tabs">
                        <div @click="activeTab = 1 , tab = 'one'" :class="{'active': activeTab == 1}"  class="tab">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                        d="M0.0870261 5.4502C3.14163 6.80127 6.1375 8.13277 9.1921 9.46426C9.1921 12.9105 9.1921 16.435 9.1921 19.9987C8.9963 19.9204 8.82007 19.8617 8.62426 19.7833C6.43121 18.8043 4.23816 17.8448 2.04511 16.8462C0.713612 16.2392 0.00870258 15.1819 0.00870258 13.7133C-0.0108782 11.2657 0.00870258 8.81809 0.00870258 6.37049C0.00870258 6.07678 0.0478645 5.78307 0.0870261 5.4502Z"
                                        fill="#919EAB" />
                                    <path
                                        d="M10.876 19.9998C10.876 16.4361 10.876 12.9115 10.876 9.44571C12.0508 8.93661 13.1865 8.44708 14.3614 7.93798C14.3614 8.29044 14.3614 8.62331 14.3614 8.9366C14.3614 9.2499 14.3614 9.56319 14.3614 9.87648C14.3614 10.366 14.7138 10.738 15.1838 10.7576C15.6537 10.7772 16.0257 10.3856 16.0453 9.89606C16.0453 9.09325 16.0649 8.29044 16.0453 7.48763C16.0453 7.27224 16.1041 7.15475 16.3194 7.05685C17.4747 6.56733 18.6104 6.03865 19.7657 5.52954C19.8244 5.50996 19.9027 5.4708 20.0006 5.43164C20.0398 5.72535 20.0985 5.99948 20.0985 6.27361C20.0985 8.77996 20.1181 11.2863 20.0985 13.7731C20.079 15.1046 19.4524 16.1619 18.2384 16.7298C15.9278 17.8067 13.5781 18.8249 11.248 19.8431C11.1305 19.941 11.013 19.9606 10.876 19.9998Z"
                                        fill="#919EAB" />
                                    <path
                                        d="M6.1377 1.43739C6.80344 1.14368 7.44961 0.830384 8.09578 0.575834C8.56572 0.380026 9.03566 0.184222 9.52518 0.0667373C10.1322 -0.0703283 10.7196 0.00799492 11.2874 0.262545C13.598 1.28075 15.9085 2.29895 18.1995 3.33673C18.5324 3.47379 18.8065 3.72835 19.1394 3.94374C19.0023 4.02206 18.9435 4.04164 18.8848 4.0808C17.7295 4.5899 16.5547 5.11859 15.3994 5.62769C15.3015 5.66685 15.1645 5.68643 15.0665 5.64727C12.149 4.27661 9.23146 2.90596 6.3335 1.5353C6.27476 1.51572 6.2356 1.49614 6.1377 1.43739Z"
                                        fill="#919EAB" />
                                    <path
                                        d="M13.1667 6.62694C12.3835 6.9794 11.659 7.31226 10.8953 7.62556C10.2688 7.88011 9.62259 7.84095 9.01559 7.56682C6.37218 6.39197 3.72877 5.21712 1.10494 4.04227C1.06578 4.02269 1.02662 4.00311 0.928711 3.92479C1.32033 3.68982 1.63362 3.43527 2.00566 3.25904C2.63224 2.94575 3.27841 2.6912 3.905 2.41707C4.0029 2.3779 4.13996 2.3779 4.23787 2.41707C7.15541 3.78772 10.073 5.15838 13.0101 6.52904C13.0492 6.5682 13.0884 6.58778 13.1667 6.62694Z"
                                        fill="#919EAB" />
                                </svg>

                            </div>
                            <span>{{ $t("products") }}</span>
                        </div>
                        <!-- <div @click="activeTab = 2 , tab = 'two'" :class="{'active': activeTab == 2}" class="tab">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M4.56183 4.72808L4.36617 3.5861C4.34254 3.44812 4.38824 3.30736 4.48836 3.20964L5.31722 2.40089C5.56941 2.15483 5.43027 1.72609 5.08172 1.67541L3.93621 1.50881C3.79781 1.48867 3.67816 1.40167 3.61629 1.27612L3.10406 0.237096C2.9482 -0.0790321 2.49785 -0.0790321 2.34199 0.237096L1.82968 1.27612C1.76781 1.40167 1.64816 1.48867 1.50976 1.50881L0.364255 1.67537C0.0157388 1.72609 -0.123402 2.15479 0.128786 2.40089L0.957653 3.20964C1.05781 3.30736 1.10351 3.44816 1.07984 3.5861L0.884177 4.72808C0.824645 5.07552 1.18898 5.34051 1.5007 5.17644L2.52527 4.63729C2.64906 4.57214 2.79695 4.57214 2.92074 4.63729L3.94531 5.17644C4.25703 5.34047 4.62137 5.07552 4.56183 4.72808Z" />
                                    <path
                                        d="M8.23503 3.2096C8.33518 3.30732 8.38088 3.44812 8.35721 3.58607L8.16155 4.72804C8.10202 5.07549 8.46635 5.34047 8.77807 5.1764L9.80264 4.63725C9.92643 4.5721 10.0743 4.5721 10.1981 4.63725L11.2227 5.1764C11.5344 5.34043 11.8987 5.07549 11.8392 4.72804L11.6435 3.58607C11.6199 3.44808 11.6656 3.30732 11.7657 3.2096L12.5946 2.40085C12.8468 2.15479 12.7076 1.72605 12.3591 1.67537L11.2136 1.50877C11.0752 1.48863 10.9555 1.40163 10.8937 1.27608L10.3814 0.237096C10.2255 -0.0790321 9.77518 -0.0790321 9.61932 0.237096L9.10706 1.27612C9.04514 1.40167 8.92553 1.48867 8.78713 1.50881L7.64163 1.67541C7.29311 1.72609 7.15393 2.15483 7.40612 2.40089L8.23503 3.2096Z" />
                                    <path
                                        d="M19.8719 2.40182C20.1241 2.15576 19.985 1.72703 19.6364 1.67635L18.4909 1.50974C18.3525 1.48961 18.2329 1.40261 18.171 1.27705L17.6587 0.238073C17.5029 -0.0780556 17.0525 -0.0780556 16.8967 0.238073L16.3844 1.27705C16.3225 1.40261 16.2029 1.48961 16.0645 1.50974L14.919 1.67635C14.5705 1.72703 14.4313 2.15576 14.6835 2.40182L15.5123 3.21058C15.6125 3.30829 15.6582 3.4491 15.6345 3.58704L15.4389 4.72901C15.3793 5.07646 15.7437 5.34145 16.0554 5.17738L17.0799 4.63822C17.2037 4.57308 17.3516 4.57308 17.4754 4.63822L18.5 5.17738C18.8117 5.34141 19.176 5.07646 19.1165 4.72901L18.9208 3.58704C18.8972 3.44906 18.9429 3.30829 19.043 3.21058L19.8719 2.40182Z" />
                                    <path
                                        d="M5.38113 11.9863H3.47852C3.22289 11.9863 3.01562 12.1938 3.01562 12.4497V18.8996C3.01562 19.1555 3.22285 19.363 3.47852 19.363H5.38113C5.63676 19.363 5.84402 19.1555 5.84402 18.8996V12.4497C5.84402 12.1938 5.63676 11.9863 5.38113 11.9863Z" />
                                    <path
                                        d="M16.7018 13.6059C16.9493 13.3953 17.1063 13.0814 17.1063 12.7307C17.1063 12.1007 16.5992 11.5894 15.9714 11.5828L15.9715 11.5815H12.4955C12.1457 11.5815 11.9045 11.2304 12.0296 10.9034L12.2931 10.235C12.705 9.15847 12.1781 7.95022 11.1094 7.52054C10.9689 7.46404 10.8089 7.52789 10.7457 7.6656L8.99828 11.351C8.63231 12.1484 7.87488 12.6853 7.01562 12.7762V18.6739C7.48289 18.7978 7.91266 19.046 8.25531 19.3994C8.62742 19.7831 9.13891 19.9997 9.67317 19.9997H15.2037L15.2039 19.9981C15.2254 19.9993 15.2471 20.0001 15.269 20.0001C15.9025 20.0001 16.4161 19.486 16.4161 18.8518C16.4161 18.5956 16.3323 18.3591 16.1906 18.1682C16.0801 18.0193 16.1006 17.8067 16.2417 17.6865C16.4892 17.476 16.6462 17.1621 16.6462 16.8114C16.6462 16.5552 16.5623 16.3187 16.4206 16.1278C16.3101 15.9789 16.3306 15.7663 16.4718 15.6462C16.7192 15.4356 16.8762 15.1217 16.8762 14.771C16.8762 14.5148 16.7923 14.2783 16.6506 14.0874C16.5402 13.9386 16.5606 13.726 16.7018 13.6059Z" />
                                </svg>

                            </div>
                            <span style=""> تقييمات العملاء </span>

                        </div> -->
                    </div>
                    <!-- <v-tabs v-model="tab" bg-color="" class="" style="border-bottom: 1px solid #EBEAED;">
                        <v-tab value="one">
                            <div class="d-flex align-items-center gap-2">
                                <div class="circle">
                                </div>
                                <span style="letter-spacing: 0px;"> المنتجات</span>
                            </div>
                        </v-tab>
                        <v-tab value="two">
                            <div class="d-flex align-items-center gap-2">
                                <div class="circle">

                                </div>
                                <span style="letter-spacing: 0px;"> تقييمات العملاء </span>
                            </div>
                        </v-tab>

                    </v-tabs> -->

                    <v-card-text class="">
                        <v-window v-model="tab">
                            <v-window-item value="one" class=" p-1">

                                <div class="d-flex justify-content-end flex-column flex-xl-row flex-xl-row flex-md-row gap-3 w-100">
                                    <div>

                                        <div class="select-box">
                                            <span> {{ $t("sections") }} </span>
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>

                                        <v-overlay activator="parent" location-strategy="connected"
                                            scroll-strategy="reposition">
                                            <div id="select-product"
                                                class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                                <span v-for="item in categories" @click="selectbox1 = item.id , getVendorproducts()" :class="{ 'active': selectbox1 == item.id }"> {{ item.name }} </span>
                                             
                                            </div>
                                        </v-overlay>
                                    </div>
                                    <div>

                                        <div class="select-box">
                                            <span> {{ $t("brands") }}</span>
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>

                                        <v-overlay activator="parent" location-strategy="connected"
                                            scroll-strategy="reposition">
                                            <div id="select-product"
                                                class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                                <span v-for="item in brands" @click="selectbox2 = item.id , getVendorproducts()" :class="{ 'active': selectbox2 == item.id }"> {{ item.name }} </span>

                                            </div>
                                        </v-overlay>
                                    </div>
                                </div>
                                <div class="row">
                                    <div v-for="item in vendors" class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <product-card :product="item" />
                                    </div>
                                </div>
                            </v-window-item>

                            <!-- <v-window-item value="two">
                                <div class="rating-container">

                                    <div class="comments-container">
                                        <div class="head w-100 d-flex align-items-center  justify-content-between mt-4">
                                            <div class="text d-flex flex-column gap-2">
                                                <h6> التعليقات </h6>
                                                <span> اجمالي 16 تعليق </span>
                                            </div>
                                            <div class="recommend d-flex align-items-center justify-content-center gap-2"
                                                style="width:fit-content; padding: 25px;">
                                                <i style="font-size:30px; color:#ecb43c;" class="fa-solid fa-star"></i>
                                                <div class="textt d-flex flex-column gap-1">
                                                    <span> 4.5 </span>
                                                    <span class="ratio"> (الف تقييم) </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comments d-flex flex-column gap-5 mt-5">

                                            <div v-for="(item, index) in itemsArray" :key="index"
                                                class="comment w-100 d-flex flex-column   flex-xl-row flex-lg-row flex-md-row gap-2 align-items-center justify-content-between">
                                                <div class="main d-flex gap-2">
                                                    <img src="~/assets/images/kk.jpg" alt="">
                                                    <div class="text d-flex flex-column gap-1 ">
                                                        <span class="name"> خالد سوادة </span>
                                                        <div class="comment-text"> {{ item.showFullText ? item.fullText :
                                                            item.truncatedText }}
                                                            <button v-if="item.fullText.length > maxCharacters"
                                                                @click="toggleReadMore(index)"> {{
                                                                    item.showFullText ? 'عرض القليل' : 'عرض المزيد' }} </button>
                                                        </div>
                                                        <span class="time"> منذ 4 ساعات </span>
                                                    </div>
                                                </div>
                                                <v-rating style="direction:ltr;" half-increments readonly :length="5"
                                                    :size="29" :model-value="3" color="#919EAB" active-color="#ECB43C" />
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center">
                                                <button @click="showAllComments" class="load-more">
                                                    <i class="fa-solid fa-rotate-left"></i>
                                                    <span> اعرض كل التعليقات </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-window-item> -->


                        </v-window>
                    </v-card-text>
                </div>

            </div>
        </div>
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
let id = route.query.id;
let selectbox1 = ref(null);
let selectbox2 = ref(null);
let activeTab = ref(1);
let brands = ref([]);
let categories = ref([]);
const tab = ref(null);
const maxCharacters = 100;
let commentPerPage = 3;
let vendor = ref({});
let vendors = ref([]);
let AllItems = ref([
    { fullText: "لقد اشتريت هذه القلادة كهدية لعيد ميلاد صديقتي، ولم يمكن أن تكون أكثر سعادة! القلادة رائعة والماسة بريقها لا يصدق. تصميمها الفريد يجعلها تبرز بشكل خاص. تم توصيلها بسرعة وبتعبئة فاخرة ", showFullText: false, truncatedText: "" },
    { fullText: "لم أكن أتوقع أن يكون لدي فرصة امتلاك مثل هذه القلادة الفاخرة. إنها رائعة بكل معنى الكلمة", showFullText: false, truncatedText: "" },
    { fullText: "لقد اشتريت هذه القلادة كهدية لعيد ميلاد صديقتي، ولم يمكن أن تكون أكثر سعادة! القلادة رائعة والماسة بريقها لا يصدق. تصميمها الفريد يجعلها تبرز بشكل خاص. تم توصيلها بسرعة وبتعبئة فاخرة ", showFullText: false, truncatedText: "" },
    { fullText: "لقد اشتريت هذه القلادة كهدية لعيد ميلاد صديقتي، ولم يمكن أن تكون أكثر سعادة! القلادة رائعة والماسة بريقها لا يصدق. تصميمها الفريد يجعلها تبرز بشكل خاص. تم توصيلها بسرعة وبتعبئة فاخرة ", showFullText: false, truncatedText: "" },
    { fullText: "لم أكن أتوقع أن يكون لدي فرصة امتلاك مثل هذه القلادة الفاخرة. إنها رائعة بكل معنى الكلمة", showFullText: false, truncatedText: "" },
    { fullText: "لقد اشتريت هذه القلادة كهدية لعيد ميلاد صديقتي، ولم يمكن أن تكون أكثر سعادة! القلادة رائعة والماسة بريقها لا يصدق. تصميمها الفريد يجعلها تبرز بشكل خاص. تم توصيلها بسرعة وبتعبئة فاخرة ", showFullText: false, truncatedText: "" },
],);

let itemsArray = ref(AllItems.value.slice(0, 3));


const toggleReadMore = (index) => {
    let item = itemsArray.value[index];
    item.showFullText = !item.showFullText;
    updateTruncatedText(item);
};

const updateTruncatedText = (item) => {
    if (!item.showFullText.value) {
        item.truncatedText = item.fullText.length > maxCharacters ? item.fullText.substring(0, maxCharacters) + '...' : item.fullText;
    } else {
        item.truncatedText = item.fullText;
    }
};

const showAllComments = () => {
    itemsArray.value = AllItems.value;
    itemsArray.value.forEach((item) => {
        updateTruncatedText(item);
    });
}
const getVendors = async () => {
  let result = await axios.get(`${getUrl()}/vendors/${id}`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  vendor.value = result.data.data;
};


const getBrands = async () => {
  let result = await axios.get(`${getUrl()}/brands`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  brands.value = result.data.data;
};
const getcategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categories.value = result.data.data;
};
const getVendorproducts = async () => {
  let result = await axios.get(`${getUrl()}/vendors-products/${id}`, {
    params: {
        category_id: selectbox1.value,
        brand_id: selectbox2.value,
    },
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  vendors.value = result.data.data;
};

onMounted(() => {
    itemsArray.value.forEach((item) => {
        updateTruncatedText(item);
    });
    getVendors();
    getBrands();
    getcategories();
    getVendorproducts();
});

</script>

<style lang="scss" scoped></style>