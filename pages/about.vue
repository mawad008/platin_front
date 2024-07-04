<template>
    <div style="min-height: 100vh;">
        <div class="container about-us-page">
        <h3>{{ $t('aboutUs') }}</h3>
        <div class="about-container">
         <div class="row justify-content-betwee">
          
          <div class="col-12 col-xl-6 col-lg-6">
           <div v-if="generalArr.about_us" class="text-container">
            <h4>{{ generalArr.about_us.label }}</h4>
            <p> {{ generalArr.about_us.description  }} </p>
           </div>
          </div>
          <div class="col-12 col-xl-6 col-lg-6">
           <div class="image">
             <img src="~/assets/images/about.jpg" alt="">
            <div class="overlay"></div>
           </div>
          </div>
         </div>
        
        </div>
        
        </div>
        <loader v-if="pending"></loader>
    </div>
</template>


<script setup>
import axios from 'axios';
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
  title: locale.value == "ar" ? "من نحن" : "about us",
});
onMounted(()=>{
  getGeneral();
});

</script>