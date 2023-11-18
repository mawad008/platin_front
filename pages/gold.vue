<template>
    <div style="min-height:100vh">
        <div class="container gold-page">
            <div class="cover-image">
                <div class="text d-flex flex-column align-items-center justify-content-center">
                    <img src="~/assets/images/gold.png" alt="">
                    <h4> السبائك </h4>
                    <span>200 منتج</span>
                </div>
            </div>

            <div class="products">
                <div class="d-flex justify-content-end  gap-3 w-100">
                    <div>
                        <div class="select-box">
                            <span> الماركات</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
                            <div id="select-product"
                                class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                <span @click="selectbox2 = 1" :class="{ 'active': selectbox2 == 1 }"> الدهب</span>
                                <span @click="selectbox2 = 2" :class="{ 'active': selectbox2 == 2 }"> الماس </span>
                                <span @click="selectbox2 = 3" :class="{ 'active': selectbox2 == 3 }"> الفضة </span>
                            </div>
                        </v-overlay>
                    </div>
                </div>

                <div class="row">
                 <div v-for="i in 8" class="col-12 col-xl-3 col-lg-3 col-md-6 ">
                    <product-card style="margin:30px 0px;"/>
                 </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let selectbox1 = ref(1);
let selectbox2 = ref(1);
</script>

<style lang="scss" scoped></style>