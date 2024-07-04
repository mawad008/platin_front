<template>
  <div class="">
    <div
      class="auth-container-form"
      :class="{
        first: theimage == 1,
        second: theimage == 2,
        third: theimage == 3,
      }"
    >
      <div @click="goBack() , store.state.activeMobile = 1" class="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M24.4009 7.61425C24.1518 7.36458 23.8136 7.22427 23.4609 7.22427C23.1082 7.22427 22.77 7.36458 22.5209 7.61425L16.0009 14.1209L9.48094 7.60092C9.23183 7.35125 8.89363 7.21094 8.54094 7.21094C8.18825 7.21094 7.85005 7.35125 7.60094 7.60092C7.08094 8.12092 7.08094 8.96092 7.60094 9.48092L14.1209 16.0009L7.60094 22.5209C7.08094 23.0409 7.08094 23.8809 7.60094 24.4009C8.12094 24.9209 8.96094 24.9209 9.48094 24.4009L16.0009 17.8809L22.5209 24.4009C23.0409 24.9209 23.8809 24.9209 24.4009 24.4009C24.9209 23.8809 24.9209 23.0409 24.4009 22.5209L17.8809 16.0009L24.4009 9.48092C24.9076 8.97425 24.9076 8.12092 24.4009 7.61425Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="container ">
      <div class="row justify-content-center justify-content-xl-around justify-content-lg-around align-items-center w-100  main">
       <div class="col-12 col-xl-6 col-lg-6  d-flex justify-content-end">
          <div class="text-container">
             <!-- <logo v-if="locale == 'ar'" :w="157" :h="56"></logo>
             <eLogo v-else :w="157" :h="56" />   -->
             <img src="../assets/images/main-logo.svg" style="width:150px" alt="">
            <h2> {{ $t("landing1") }} </h2>
            <span class="text">
              {{ $t("landing2") }}
            </span>
            <div class="paginations">
              <span
                @click="theimage = 1"
                :class="{ active: theimage == 1 }"
              ></span>
              <span
                @click="theimage = 2"
                :class="{ active: theimage == 2 }"
              ></span>
              <span
                @click="theimage = 3"
                :class="{ active: theimage == 3 }"
              ></span>
            </div>
          </div>
      
        </div>
      <div class="col-12 col-xl-6 col-lg-6 ">
       <div class="main-form  w-100">
           <div v-if="store.state.checkForm == 1" class="sign-up">
               <register/>
           </div>

            <div v-if="store.state.checkForm == 2" class="login">
              <login/>
            </div>
          </div>
      
      </div>
     
       
      </div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/index";
let store = useStore;
let check = ref(store.state.checkForm);
const localePath = useLocalePath();
const { locale } = useI18n();

definePageMeta({
  layout: "custom",
});

let router = ref(useRouter());

const goBack = () =>{
  // router.value.go(-1);
    const fullLocalePath = localePath('/');
  router.value.push(fullLocalePath);
}
let theimage = ref(1);
let authNav = ref(1);
const randomimages = () => {
  let counter = setInterval(() => {
    theimage.value = theimage.value + 1;
    if (theimage.value == 4) {
      theimage.value = 1;
    }
  }, 3000);
};

useHead({
  title: locale.value == "ar" ? "تسجيل الدخول" : "sign in",
});

onMounted(() => {
  randomimages();
});
</script>
