<template>
    <div>
         <div class="product-card">
                   <div class="head w-100 d-flex align-items-center justify-content-between">
                     <div class="octagon">
                     <octagon/>
                     <i class="fa-solid fa-heart"></i>
                     </div>
                     <span> الاكثر مبيعا </span>
                   </div>
                   <div class="image">
                    <!-- <img src="~/assets/images/product.png" alt=""> -->
                   </div>
                    <div class="rate w-100 d-flex align-items-center justify-content-between">
                    <span class="type"> الذهب </span>
                     <div class="star d-flex align-items-center gap-2">
                     <i class="fa-solid fa-star"></i>
                      <span>3.4</span>
                     </div>
                    </div>
                    <h3>خاتم ذهب 2.5 جرام صافي عيار 24 قيراط</h3>
                    <div class="price w-100 d-flex align-items-center justify-content-between">
                     <span class="price-text">2500 ر.س</span>
                     <span> ق24 / 2.5ج </span>
                    </div>

                    <div class="overlay">
                     <div class="head-icons w-100 d-flex align-items-center justify-content-between">
                      <div class="octagon active">
                       <octagon/>
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div class="octagon">
                       <octagon/>
                       <i class="fa-solid fa-share-nodes"></i>
                      </div>
                     </div>

                     <div class="center-icons w-100">
                     <div class="d-flex w-100 align-items-center justify-content-between">
                        <nuxt-link to="/product">
                        
                        <div class="octagon d-flex flex-column gap-3">
                         <octagon/>
                      <i class="fa-solid fa-eye"></i> 
                
                        </div>
                        </nuxt-link> 
                        <div class="octagon d-flex flex-column gap-3">
                         <octagon/>
                      <i class="fa-solid fa-cart-shopping"></i>
               
                        </div>
                        <div class="octagon d-flex flex-column gap-3">
                         <octagon/>
                        <i class="fa-solid fa-cart-shopping"></i>
                
                        </div>
                     </div>
                        <div class="text d-flex text-center w-100 align-items-center justify-content-between"> 
                         <span> شاهد </span>
                           <span> اضف الي السلة </span>
                            <span> مقارنة </span>
                        </div>
                  
                     </div>
              
                    </div>
                  </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>