<template>
    <div >
      <div class="container policy-container">
        <h3>{{ $t('back') }}</h3>
        <div class="policy-page" >
          <div class="text" >
          <div v-html="generalArr.return_policy"></div>
             <!-- <p>{{ generalArr.terms }}</p> -->
          </div>
        </div>
      </div>

    <loader v-if="pending"></loader>

    </div>
  </template>
  
  <script setup>
import axios from "axios";
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let generalArr = ref([]);
let pending = ref(true);

const getGeneral = async () => {
  let result = await axios.get(`${getUrl()}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  if(result.status == 200){
    pending.value = false;
  }
  generalArr.value = result.data.data;
};

useHead({
  title: locale.value == "ar" ? " سياسة الاسترجاع " : " return policy ",
});
onMounted(()=>{
    getGeneral();
})
  
  </script>
  
  <style lang="scss">
  .policy-container {
      margin-top: 75px;
      margin-bottom: 120px;
    h3 {
      text-align: center;
      margin-bottom: 80px;
    }
    .policy-page {
      border-radius: 16px;
      background: #fff;
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h5 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        color: #2d3a4a;
        margin-bottom: 16px;
      }
      p {
        color: #5a7184;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
      }
    }
  }
  </style>
  