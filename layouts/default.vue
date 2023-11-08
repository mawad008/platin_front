<template>
    <div>
       <nav class="navbar">
       <div class="container">
       <div class="items-container w-100 d-flex align-items-center justify-content-between">
        <div class="items d-flex align-items-center gap-3">
          <span>الرئيسية</span>
          <span> الاقسام</span>
          <span>السبائك</span>
          <span>التجار</span>
        </div>
         <div class="d-flex align-items-center gap-2 supp">
         <i class="fa-solid fa-headset"></i>
         <span>الدعم الفني</span>
         </div>
       </div>
       <v-divider :thickness="1"></v-divider>
       <div class="d-flex align-items-center bg-dange w-100 justify-content-between"> 
       <div class="d-flex align-items-center gap-5">  
        <div class="logo">
         <img src="~/assets/images/logo.png" alt="">
        </div>
        <div class="search d-flex align-items-center justify-content-between  px-1" style="">
        <div class="inp">
         <input type="text"  :placeholder="$t('search')" style="">
        </div>
        <div class="d-flex align-item-cente gap-4">
        
         <v-menu>
      <template v-slot:activator="{ props }">

        <button v-bind="props">{{ $t('sections') }}</button>
      </template>
      <v-list>
        <!-- <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item> -->
        
      </v-list>
    </v-menu>
        <i class="fab fa-sistrix search-icon"></i>
        </div>
        </div>
       </div> 

        <div class="icons-with-profile d-flex gap-3">
         <div class="icons d-flex align-items-center gap-3">
          <div class="icon d-flex align-items-center gap-1">
            <span>en</span>
            <i class="fa-solid fa-earth-americas"></i>
          </div>
          <div class="icon">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>3</span>
          </div>
         </div>
           <div class="profile">
             
             <v-menu class="menu">
      <template v-slot:activator="{ props }">
        <button  v-bind="props" class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-caret-down"></i>
              <img  src="~/assets/images/kk.jpg" alt="">
             </button>
      </template>
      <div id="list-profile" class="list d-flex flex-column p-4 gap-4 text-center">
         <span> الملف الشخصي </span>
         <span> طلباتي </span>
         <span> الامان </span>
         <div class="d-flex align-items-center gap-2">
          <span> تسجيل الخروج </span>
          <i class="fa-solid fa-right-from-bracket"></i>
         </div>
      </div>
    </v-menu>
           </div>
        </div>
       </div>
       </div>
       </nav>
        <slot/>

        <footer>
        
        </footer>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>


</style>