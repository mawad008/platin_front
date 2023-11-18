<template>
    <div style="min-height:100vh;">
        <div class="container vendor-page">
            <div class="row">
                <div class="col-8">
                    <div class="main-box">
                        <div class="cover">
                            <img src="~/assets/images/c-cover.jpg" alt="">
                            <div class="overlay"></div>
                        </div>

                        <div class="circle-image">
                            <img src="~/assets/images/vendor.svg" alt="">
                        </div>

                        <p> زهرة الياقوت هو عالم من الجمال والرقي في عالم المجوهرات. نقدم لكم تشكيلة متنوعة من المجوهرات
                            الفاخرة، مصنوعة بعناية فائقة من أرقى المواد. </p>


                        <div class="icons">
                            <div class="icon">
                                <div class="image">
                                    <img src="~/assets/images/diamond.svg" alt="">
                                </div>
                                <h6> عدد المنتجات </h6>
                                <span> 450 منتج </span>
                            </div>
                            <div class="icon">
                                <div class="image">
                                    <img src="~/assets/images/vstar.svg" alt="">
                                </div>
                                <h6> اجمالي التقييمات </h6>
                                <span> 4.5 ( الف تقييم ) </span>
                            </div>
                            <div class="icon">
                                <div class="image">
                                    <img src="~/assets/images/vendor-c.svg" alt="">
                                </div>
                                <h6> السجل التجاري </h6>
                                <span> 01858894486 </span>
                            </div>
                            <div class="icon">
                                <div class="image">
                                    <img src="~/assets/images/vendor-b.svg" alt="">
                                </div>
                                <h6> حالة التوثيق </h6>
                                <span> موثق </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="recent">
                        <h4> الاكثر مبيعا </h4>
                        <div class="boxes d-flex flex-column h-100 bg-dange gap-4">
                            <div v-for="i in 4" class="box d-flex align-items-center  gap-2">
                                <div class="image">
                                    <img src="~/assets/images/p1.png" alt="">
                                </div>
                                <div class="text  d-flex flex-column gap-1">
                                    <h5> خاتم ذهب 2.5 جرام صافي عيار 24 قيراط </h5>
                                    <div class="price w-100  d-flex align-items-center justify-content-between">
                                        <span class="item"> 2.5 ج / 24 ق0 </span>
                                        <span class="price-item"> 14800 ر.س </span>
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
                    <v-tabs v-model="tab" bg-color="" class="" style="border-bottom: 1px solid #EBEAED;">
                        <v-tab value="one">
                            <div class="d-flex align-items-center gap-2">
                                <div class="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M17.2727 0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00396
     0 2.72727V17.2727C0 17.996 0.287337 18.6897 0.7988 19.2012C1.31026 19.7127 2.00396 20 2.72727
      20H17.2727C17.996 20 18.6897 19.7127 19.2012 19.2012C19.7127 18.6897 20 17.996 20 17.2727V2.72727C20 2.00396 19.7127 1.31026 19.2012 0.7988C18.6897 
      0.287337 17.996 0 17.2727 0ZM5.45455 15.4545H4.54545C4.30435 15.4545 4.07312 15.3588 3.90263 15.1883C3.73214 15.0178 3.63636 14.7866 3.63636 
      14.5455C3.63636 14.3043 3.73214 14.0731 3.90263 13.9026C4.07312 13.7321 4.30435 13.6364 4.54545 13.6364H5.45455C5.69565 13.6364 5.92688 13.7321 
      6.09737 13.9026C6.26786 14.0731 6.36364 14.3043 6.36364 14.5455C6.36364 14.7866 6.26786 15.0178 6.09737 15.1883C5.92688 15.3588 5.69565 15.4545
       5.45455 15.4545ZM5.45455 10.9091H4.54545C4.30435 10.9091 4.07312 10.8133 3.90263 10.6428C3.73214 10.4723 3.63636 10.2411 3.63636 10C3.63636 9.75889 3.73214 9.52766 3.90263 9.35718C4.07312 9.18669 4.30435 9.09091 4.54545 9.09091H5.45455C5.69565 9.09091 5.92688 9.18669 6.09737 9.35718C6.26786 9.52766 6.36364 9.75889 6.36364 10C6.36364 10.2411 6.26786 10.4723 6.09737 10.6428C5.92688 10.8133 5.69565 10.9091 5.45455 10.9091ZM5.45455 6.36364H4.54545C4.30435 6.36364 4.07312 6.26786 3.90263 6.09737C3.73214 5.92688 3.63636 5.69565 3.63636 5.45455C3.63636 5.21344 3.73214 4.98221 3.90263 4.81172C4.07312 4.64123 4.30435 4.54545 4.54545 4.54545H5.45455C5.69565 4.54545 5.92688 4.64123 6.09737 4.81172C6.26786 4.98221 6.36364 5.21344 6.36364 5.45455C6.36364 5.69565 6.26786 5.92688 6.09737 6.09737C5.92688 6.26786 5.69565 6.36364 5.45455 6.36364ZM15.4545 15.4545H9.09091C8.8498 15.4545 8.61857 15.3588 8.44808 15.1883C8.2776 15.0178 8.18182 14.7866 8.18182 14.5455C8.18182 14.3043 8.2776 14.0731 8.44808 13.9026C8.61857 13.7321 8.8498 13.6364 9.09091 13.6364H15.4545C15.6957 13.6364 15.9269 13.7321
        16.0974 13.9026C16.2679 14.0731 16.3636 14.3043 16.3636 14.5455C16.3636 14.7866 16.2679 15.0178 16.0974 15.1883C15.9269 15.3588 15.6957 15.4545 15.4545 15.4545ZM15.4545 10.9091H9.09091C8.8498 10.9091 8.61857 10.8133 8.44808 10.6428C8.2776 10.4723 8.18182 10.2411 8.18182 10C8.18182 9.75889 8.2776 9.52766 8.44808 9.35718C8.61857 9.18669 8.8498 9.09091 9.09091 9.09091H15.4545C15.6957 9.09091 15.9269 9.18669 16.0974 9.35718C16.2679 9.52766 16.3636 9.75889 16.3636 10C16.3636 10.2411 16.2679 10.4723 16.0974 10.6428C15.9269 10.8133 15.6957 10.9091 15.4545 10.9091ZM15.4545 6.36364H9.09091C8.8498 6.36364 8.61857 6.26786 8.44808 6.09737C8.2776 5.92688 8.18182 5.69565 8.18182 5.45455C8.18182 5.21344 8.2776 4.98221 8.44808 4.81172C8.61857 4.64123 8.8498 4.54545 9.09091 4.54545H15.4545C15.6957 4.54545 15.9269 4.64123 16.0974 4.81172C16.2679 4.98221 16.3636 5.21344 16.3636 5.45455C16.3636 5.69565 16.2679 5.92688 16.0974 6.09737C15.9269 6.26786 15.6957 6.36364 15.4545 6.36364Z" />
                                    </svg>
                                </div>
                                <span style="letter-spacing: 0px;"> المنتجات</span>
                            </div>
                        </v-tab>
                        <v-tab value="two">
                            <div class="d-flex align-items-center gap-2">
                                <div class="circle">
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
                                <span style="letter-spacing: 0px;"> تقييمات العملاء </span>
                            </div>
                        </v-tab>

                    </v-tabs>

                    <v-card-text class="">
                        <v-window v-model="tab">
                            <v-window-item value="one" class=" p-1">

                                <div class="d-flex justify-content-end  gap-3 w-100">
                                    <div>
                                        
                                        <div class="select-box">
                                            <span> الاقسام </span>
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>

                                        <v-overlay activator="parent" location-strategy="connected"
                                            scroll-strategy="reposition">
                                            <div id="select-product" class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                              <span @click="selectbox1 = 1" :class="{'active': selectbox1  == 1}"> الدهب</span>  
                                              <span @click="selectbox1 = 2" :class="{ 'active': selectbox1 == 2 }"> الماس </span>  
                                              <span @click="selectbox1 = 3" :class="{ 'active': selectbox1 == 3 }"> الفضة </span>  
                                              <span @click="selectbox1 = 4" :class="{ 'active': selectbox1 == 4 }"> الساعات</span>  
                                            </div>
                                        </v-overlay>
                                    </div>
                                    <div>
                                        
                                        <div class="select-box">
                                            <span> الماركات</span>
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </div>

                                        <v-overlay activator="parent" location-strategy="connected"
                                            scroll-strategy="reposition">
                                            <div id="select-product" class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                              <span @click="selectbox2 = 1" :class="{'active': selectbox2  == 1}"> الدهب</span>  
                                              <span @click="selectbox2 = 2" :class="{ 'active': selectbox2 == 2 }"> الماس </span>  
                                              <span @click="selectbox2 = 3" :class="{ 'active': selectbox2 == 3 }"> الفضة </span>   
                                            </div>
                                        </v-overlay>
                                    </div>
                                </div>
                                <div class="row">
                                    <div v-for="i in 6" class="col-12 col-xl-4 col-lg-4 col-md-6">
                                        <product-card />
                                    </div>
                                </div>
                            </v-window-item>

                            <v-window-item value="two">
                                <div class="rating-container">

                                    <div class="comments-container">
                                        <div class="head w-100 d-flex align-items-center justify-content-between mt-4">
                                            <div class="text d-flex flex-column gap-2">
                                                <h6> التعليقات </h6>
                                                <span> اجمالي 16 تعليق </span>
                                            </div>
                                            <div class="recommend d-flex align-items-center justify-content-center gap-2"
                                                style="width:fit-content; padding: 25px;">
                                                <!-- <img src="~/assets/images/medal.svg" alt=""> -->
                                                <i style="font-size:30px; color:#ecb43c;" class="fa-solid fa-star"></i>
                                                <div class="textt d-flex flex-column gap-1">
                                                    <span> 4.5 </span>
                                                    <span class="ratio"> (الف تقييم) </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comments d-flex flex-column gap-5 mt-4">

                                            <div v-for="(item, index) in itemsArray" :key="index"
                                                class="comment w-100 d-flex align-items-center justify-content-between">
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
                            </v-window-item>


                        </v-window>
                    </v-card-text>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

let selectbox1 = ref(1);
let selectbox2 = ref(1);
const tab = ref(null);
const maxCharacters = 100;
let commentPerPage = 3;
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

onMounted(() => {
    itemsArray.value.forEach((item) => {
        updateTruncatedText(item);
    });
});

</script>

<style lang="scss" scoped></style>