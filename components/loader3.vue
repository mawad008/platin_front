<template>
    <div class="loader-page2">
      <div>
        <client-only>
          <Vue3Lottie :animation-data="cart" :height="200" :width="200" />
        </client-only>
        <div class="d-flex align-items-center  justify-content-center flex-column">
        <h4>{{ $t('notFound') }}</h4>
        <p class="p-text">
           {{ $t('sorry2') }}
        </p>
        

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Vue3Lottie } from "vue3-lottie";
  import cart from "~/assets/animations/not-found.json";
  

  
  </script>
  
  <style lang="scss">
  .loader-page2 {
    background-color: #fff;
    border-radius: 24px;
    height: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
      color: #2d3a4a;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 16px;
      margin-top: 40px;
    }
   
  }

  @media(max-width:760px){
    .loader-page2{
    }
  }
  </style>
  