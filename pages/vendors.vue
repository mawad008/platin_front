<template>
    <div style="min-height:100vh;">
        <div class="container vendors-container">
         <div class="d-flex justify-content-end flex-column flex-xl-row flex-xl-row flex-md-row gap-3 w-100">
                                      <div>

                                          <div class="select-box">
                                              <span> المدينة </span>
                                              <i class="fa-solid fa-chevron-down"></i>
                                          </div>

                                          <v-overlay activator="parent" location-strategy="connected"
                                              scroll-strategy="reposition">
                                              <div id="select-product"
                                                  class="d-flex  flex-column align-items-center text-center gap-3 justify-content-center">
                                                  <span @click="selectbox1 = 1" :class="{ 'active': selectbox1 == 1 }">
                                                      الدهب</span>
                                                  <span @click="selectbox1 = 2" :class="{ 'active': selectbox1 == 2 }"> الماس
                                                  </span>
                                                  <span @click="selectbox1 = 3" :class="{ 'active': selectbox1 == 3 }"> الفضة
                                                  </span>
                                                  <span @click="selectbox1 = 4" :class="{ 'active': selectbox1 == 4 }">
                                                      الساعات</span>
                                              </div>
                                          </v-overlay>
                                      </div>
                                      <div>

                                    
                                      </div>
                                  </div>
          <div class="row">
            <div v-for="i in 8" class="col-12 col-xl-3 col-lg-3 col-md-4">
            <nuxt-link to="vendor">
             <div class="box">
             <div class="d-flex  justify-content-center">
                
               <div class="image">
                 <img src="~/assets/images/vendor.svg" alt="">
               </div>
             </div>
               <div class="text text-center">
                <h4>  مجوهرات جلامور </h4>
                <div class="det  d-flex align-items-center w-100 justify-content-between">
                    <div class="d-flex align-items-center gap-2">
                        <img src="~/assets/images/diamond.svg" alt="">
                        <span> 200 منتج </span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <img src="~/assets/images/vstar.svg" alt="">
                        <span>  4.5 ( الف تقييم ) </span>
                    </div>
                </div>
               </div>
               <div class="overlay">
                <button>زيارة المتجر</button>
               </div>
             </div>
            
            </nuxt-link>
            </div>
          </div>
        </div>
    </div>
</template>
  
<script setup>

let selectbox1 = ref(0);

</script>

<style lang="scss" scoped>


</style>