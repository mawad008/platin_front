<template>
    <div style="min-height:100vh;">
        <div class="container our-products my-5">
          <div
            class="header mb-5 d-flex flex-column align-items-center justify-content-center w-100"
          >
            <h3 class="mb-5">منتجاتنا</h3>

            <v-tabs v-model="tab" align-tabs="center">
              <v-tab :value="0" class="head">
                <span class="choose"> الامهات </span>
                <border />
              </v-tab>
              <v-tab :value="1" class="head">
                <span class="choose"> الاطفال </span>
                <border />
              </v-tab>
              <v-tab :value="2" class="head">
                <span class="choose"> البنات </span>
                <border />
              </v-tab>
              <v-tab :value="3" class="head">
                <span class="choose"> الاكثر مبيعا </span>
                <border />
              </v-tab>
            </v-tabs>
          </div>

            <div class="d-flex justify-content-end  gap-3 w-100 my-3">
                                        <div>
                                        
                                            <div class="select-box">
                                                <span> الاقسام </span>
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </div>

                                            <v-overlay activator="parent" location-strategy="connected"
                                                scroll-strategy="reposition">
                                                <div id="select-product" class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                                  <span @click="selectbox1 = 1" :class="{ 'active': selectbox1 == 1 }"> الدهب</span>  
                                                  <span @click="selectbox1 = 2" :class="{ 'active': selectbox1 == 2 }"> الماس </span>  
                                                  <span @click="selectbox1 = 3" :class="{ 'active': selectbox1 == 3 }"> الفضة </span>  
                                                  <span @click="selectbox1 = 4" :class="{ 'active': selectbox1 == 4 }"> الساعات</span>  
                                                </div>
                                            </v-overlay>
                                        </div>
                                        <div>
                                        
                                            <div class="select-box">
                                                <span> التصنيفات </span>
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </div>

                                            <v-overlay activator="parent" location-strategy="connected"
                                                scroll-strategy="reposition">
                                                <div id="select-product" class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                                  <span @click="selectbox2 = 1" :class="{ 'active': selectbox2 == 1 }"> الدهب</span>  
                                                  <span @click="selectbox2 = 2" :class="{ 'active': selectbox2 == 2 }"> الماس </span>  
                                                  <span @click="selectbox2 = 3" :class="{ 'active': selectbox2 == 3 }"> الفضة </span>   
                                                  <span @click="selectbox2 = 4" :class="{ 'active': selectbox2 == 4 }"> الفضة </span>   
                                                  <span @click="selectbox2 = 5" :class="{ 'active': selectbox2 == 5 }"> الفضة </span>   
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
                                                  <span @click="selectbox3 = 1" :class="{ 'active': selectbox3 == 1 }"> الدهب</span>  
                                                  <span @click="selectbox3 = 2" :class="{ 'active': selectbox3 == 2 }"> الماس </span>  
                                                  <span @click="selectbox3 = 3" :class="{ 'active': selectbox3 == 3 }"> الفضة </span>   
                                                </div>
                                            </v-overlay>
                                        </div>
                                    </div>

          <v-window v-model="tab">
            <v-window-item>
              <div class="row">
                <div v-for="i in 8" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                  <product-card />
                </div>
              </div>
            </v-window-item>
            <v-window-item>
              <div class="row">
                <div v-for="i in 3" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                  <product-card />
                </div>
              </div>
            </v-window-item>
            <v-window-item>
              <div class="row">
                <div v-for="i in 2" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                  <product-card />
                </div>
              </div>
            </v-window-item>
            <v-window-item>
              <div class="row">
                <div v-for="i in 6" class="col-12 col-xl-3 col-lg-3 col-md-6 my-2">
                  <product-card />
                </div>
              </div>
            </v-window-item>
          </v-window>
         
        </div>
    </div>
</template>

<script setup>
let tab = ref(null);
let selectbox1 = ref(1);
let selectbox2 = ref(1);
let selectbox3 = ref(1);

</script>

<style lang="scss" scoped>


</style>