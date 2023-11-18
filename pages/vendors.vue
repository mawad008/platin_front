<template>
    <div style="min-height:100vh;">
        <div class="container vendors-container">
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
             </div>
            
            </nuxt-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>