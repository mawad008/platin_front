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
            <div class="text-container mb-4">
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
         <!-- <div class="main-form  w-100">
            </div> -->
            <div class="card-popup-container vendor">
          <div class="main">
            <h2>{{ $t("applyVendor") }}</h2>
            <div class="row w-100">
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for=""> {{ $t("name") }} <span>*</span> </label>
                  <input
                    type="text"
                    v-model="objVendor.name"
                    :placeholder="$t('name')"
                  />
                  <span class="error-msg" v-if="v2$.name.$error">{{
                    v2$.name.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors2.name">{{
                    errors2.name[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for=""> {{ $t("email") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.email"
                    type="email"
                    :placeholder="$t('email')"
                  />
                  <span class="error-msg" v-if="v2$.email.$error">{{
                    v2$.email.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors2.email">{{
                    errors2.email[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for=""> {{ $t("phone") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.phone"
                    type="tel"
                    maxlength="10"
                    name="phone"
                    :placeholder="$t('phone')"
                  />
                  <div class="num">966+</div>
                  <span class="error-msg" v-if="v2$.phone.$error">{{
                    v2$.phone.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors2.phone">{{
                    errors2.phone[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for="">
                    {{ $t("commercialNum") }} <span>*</span>
                  </label>
                  <input
                    v-model="objVendor.commercial_register_number"
                    type="number"
                    min="1"
                    :placeholder="$t('commercialNum')"
                  />
                  <span
                    class="error-msg"
                    v-if="v2$.commercial_register_number.$error"
                    >{{
                      v2$.commercial_register_number.$errors[0].$message
                    }}</span
                  >
                  <span
                    class="error-msg2"
                    v-if="errors2.commercial_register_number"
                    >{{ errors2.commercial_register_number[0] }}</span
                  >
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for=""> {{ $t("pass") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.password"
                    :type="passType"
                    :placeholder="$t('pass')"
                  />
                  <div @click="changePass1()" class="icon">
                        <svg
                          v-if="passType == 'password'"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          fill="none"
                        >
                          <path
                            d="M23.9204 7.6296C23.2116 6.0552 19.9696 0 12 0C4.0304 0 0.7884 6.0552 0.0796 7.6296C0.0264 7.748 0 7.8744 0 8C0 8.1256 0.0264 8.252 0.0796 8.3704C0.7884 9.9444 4.0304 16 12 16C19.9696 16 23.2116 9.9444 23.9204 8.3704C23.9736 8.252 24 8.1256 24 8C24 7.8744 23.9736 7.748 23.9204 7.6296ZM12 13.2C9.128 13.2 6.8 10.872 6.8 8C6.8 5.128 9.128 2.8 12 2.8C14.872 2.8 17.2 5.128 17.2 8C17.2 10.872 14.872 13.2 12 13.2Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M11.9999 11.6C13.9881 11.6 15.5999 9.98826 15.5999 8.00002C15.5999 6.01178 13.9881 4.40002 11.9999 4.40002C10.0117 4.40002 8.3999 6.01178 8.3999 8.00002C8.3999 9.98826 10.0117 11.6 11.9999 11.6Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        <svg
                          v-if="passType == 'text'"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M14.0201 9.98014L9.98014 14.0201C9.47014 13.5001 9.14014 12.7801 9.14014 12.0001C9.14014 10.4301 10.4201 9.14014 12.0001 9.14014C12.7801 9.14014 13.5001 9.47014 14.0201 9.98014Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z"
                            fill="#90A3BF"
                          />
                        </svg>
                      </div>
             
                </div>
                <div class="error-container2">
                    <span class="error-msg" v-if="v2$.password.$error">{{
                    v2$.password.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors2.password">{{
                    errors2.password[0]
                  }}</span>
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for="">
                    {{ $t("confirm pass") }} <span>*</span>
                  </label>
                  <input
                    :type="passConfType"
                    v-model="objVendor.password_confirmation"
                    :placeholder="$t('confirm pass')"
                  />
                  <div @click="changePass2()" class="icon">
                        <svg
                          v-if="passConfType == 'password'"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          fill="none"
                        >
                          <path
                            d="M23.9204 7.6296C23.2116 6.0552 19.9696 0 12 0C4.0304 0 0.7884 6.0552 0.0796 7.6296C0.0264 7.748 0 7.8744 0 8C0 8.1256 0.0264 8.252 0.0796 8.3704C0.7884 9.9444 4.0304 16 12 16C19.9696 16 23.2116 9.9444 23.9204 8.3704C23.9736 8.252 24 8.1256 24 8C24 7.8744 23.9736 7.748 23.9204 7.6296ZM12 13.2C9.128 13.2 6.8 10.872 6.8 8C6.8 5.128 9.128 2.8 12 2.8C14.872 2.8 17.2 5.128 17.2 8C17.2 10.872 14.872 13.2 12 13.2Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M11.9999 11.6C13.9881 11.6 15.5999 9.98826 15.5999 8.00002C15.5999 6.01178 13.9881 4.40002 11.9999 4.40002C10.0117 4.40002 8.3999 6.01178 8.3999 8.00002C8.3999 9.98826 10.0117 11.6 11.9999 11.6Z"
                            fill="#90A3BF"
                          />
                        </svg>
                        <svg
                          v-if="passConfType == 'text'"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.2699 9.17981C20.9799 8.71981 20.6699 8.28981 20.3499 7.88981C19.9799 7.41981 19.2799 7.37981 18.8599 7.79981L15.8599 10.7998C16.0799 11.4598 16.1199 12.2198 15.9199 13.0098C15.5699 14.4198 14.4299 15.5598 13.0199 15.9098C12.2299 16.1098 11.4699 16.0698 10.8099 15.8498C10.8099 15.8498 9.37995 17.2798 8.34995 18.3098C7.84995 18.8098 8.00995 19.6898 8.67995 19.9498C9.74995 20.3598 10.8599 20.5698 11.9999 20.5698C13.7799 20.5698 15.5099 20.0498 17.0899 19.0798C18.6999 18.0798 20.1499 16.6098 21.3199 14.7398C22.2699 13.2298 22.2199 10.6898 21.2699 9.17981Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M14.0201 9.98014L9.98014 14.0201C9.47014 13.5001 9.14014 12.7801 9.14014 12.0001C9.14014 10.4301 10.4201 9.14014 12.0001 9.14014C12.7801 9.14014 13.5001 9.47014 14.0201 9.98014Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M18.25 5.75018L14.86 9.14018C14.13 8.40018 13.12 7.96018 12 7.96018C9.76 7.96018 7.96 9.77018 7.96 12.0002C7.96 13.1202 8.41 14.1302 9.14 14.8602L5.76 18.2502H5.75C4.64 17.3502 3.62 16.2002 2.75 14.8402C1.75 13.2702 1.75 10.7202 2.75 9.15018C3.91 7.33017 5.33 5.90018 6.91 4.92018C8.49 3.96018 10.22 3.43018 12 3.43018C14.23 3.43018 16.39 4.25018 18.25 5.75018Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
                            fill="#90A3BF"
                          />
                          <path
                            d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z"
                            fill="#90A3BF"
                          />
                        </svg>
                      </div>
                
                </div>
                <div class="error-container2">
                    <span
                    class="error-msg"
                    v-if="v2$.password_confirmation.$error"
                    >{{ v2$.password_confirmation.$errors[0].$message }}</span
                  >
                  <span
                    class="error-msg2"
                    v-if="errors2.password_confirmation"
                    >{{ errors2.password_confirmation[0] }}</span
                  >
                </div>
              </div>
              <div class="col-12 mb-4">
                <div class="main-input">
                  <label for=""> {{ $t("nationalNum") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.national_id"
                    type="number"
                    min="1"
                    :placeholder="$t('nationalNum')"
                  />
                  <span class="error-msg" v-if="v2$.national_id.$error">{{
                    v2$.national_id.$errors[0].$message
                  }}</span>
                  <span class="error-msg2" v-if="errors2.national_id">{{
                    errors2.national_id[0]
                  }}</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
             <input type="checkbox" v-model="objVendor.privacy_flag" id="vebdorReg">
            <label for="vebdorReg">
            <p class="" style="width:auto;">
              {{ $t("auth1") }}
              <nuxt-link @click="dialog = false" :to="localePath('/policy')">
                <span>{{ $t("policy2") }}</span>
              </nuxt-link>
              -
              <nuxt-link @click="dialog = false" :to="localePath('/terms')"
                ><span>{{ $t("policy3") }}</span></nuxt-link
              >
            </p>
            </label>
            </div>
            <span class="error-msg2" v-if="errors2.privacy_flag">{{
                    errors2.privacy_flag[0]
                  }}</span>
            <div class="btns">
              <button
                @click="AddVendor()"
                class="fill d-flex align-items-center gap-3 reg" :class="{'act': objVendor.privacy_flag}"
              >
                {{ $t("apply") }}
                <v-progress-circular
                  v-if="pending"
                  indeterminate
                  :size="25"
                  :width="5"
                ></v-progress-circular>
              </button>
            </div>
          
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
  import useValidate from "@vuelidate/core";
  import axios from 'axios';
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
  let store = useStore;
  let check = ref(store.state.checkForm);
  const localePath = useLocalePath();
  const { locale } = useI18n();
  
  definePageMeta({
    layout: "custom",
  });
  
  const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(value2.value, required),
    },
    commercial_register_number: {
      required: helpers.withMessage(value2.value, required),
    },
    email: {
      required: helpers.withMessage(value2.value, required),
      email: helpers.withMessage(value3.value, email),
    },
    national_id: {
      required: helpers.withMessage(value2.value, required),
    },
    phone: {
      required: helpers.withMessage(value2.value, required),
    },
    password: {
      required: helpers.withMessage(value1.value, required),
      minLength: helpers.withMessage(value4.value, minLength(8)),
    },
    password_confirmation: {
      required: helpers.withMessage(value1.value, required),
      minLength: helpers.withMessage(value4.value, minLength(8)),
      sameAs: helpers.withMessage(
        passVal.value,
        sameAs(objVendor.value.password)
      ),
    },
  };
});


let passType = ref("password");
let passConfType = ref("password");
const changePass1 = () => {
  passType.value = passType.value === "password" ? "text" : "password";
};
const changePass2 = () => {
  passConfType.value = passConfType.value === "password" ? "text" : "password";
};

let titleVendor = ref(" تم التسجيل بنجاح ");
let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value4 = ref("This field should be at least 8 characters long");
let passVal = ref("يجب أن تكون القيمة مساوية للقيمة الأخرى");
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوبة";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
  value4.value = "يجب أن يكون هذا الحقل 8 أحرف على الأقل";
  titleVendor.value = "تم التسجيل بنجاح ";
  passVal.value = "يجب أن تكون القيمة مساوية للقيمة الأخرى";
} else {
  value1.value = "value is required";
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value4.value = "This field should be at least 8 characters long";
  titleVendor.value = "successfully registered";
  passVal.value = "The value must be equal to the other value";
}

  let router = ref(useRouter());
  
  const goBack = () =>{
    // router.value.go(-1);
      const fullLocalePath = localePath('/');
    router.value.push(fullLocalePath);
  }
  let objVendor = ref({
  name: "",
  commercial_register_number: "",
  email: "",
  national_id: "",
  phone: "",
  password: "",
  password_confirmation: "",
  privacy_flag: false
});

const v2$ = useValidate(rules, objVendor);
let pending = ref(false);
let errors2 = ref([]);
const AddVendor = async () => {
  let check = await v2$.value.$validate();
  let formDat = new FormData();
  formDat.append("name", objVendor.value.name);
  formDat.append(
    "commercial_register_number",
    objVendor.value.commercial_register_number
  );
  formDat.append("national_id", objVendor.value.national_id);
  formDat.append("email", objVendor.value.email);
  formDat.append("phone", objVendor.value.phone);
  formDat.append("password", objVendor.value.password);
  formDat.append("privacy_flag", objVendor.value.privacy_flag);
  formDat.append(
    "password_confirmation",
    objVendor.value.password_confirmation
  );

  if (check && objVendor.value.privacy_flag) {
    pending.value = true;
    try {
      let result = await axios.post(`${getUrl()}/vendors`, formDat, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        pending.value = false;
        for (const key of Object.keys(objVendor.value)) {
          objVendor.value[key] = "";
        }
        v2$.value.$reset();
        errors2.value = [];
        const moshaToastify = await import("mosha-vue-toastify");
        const { createToast } = moshaToastify;
        createToast(
          {
            title: titleVendor.value,
          },
          {
            type: "success",
            transition: "bounce",
            showIcon: "true",
            timeout: 3000,
            toastBackgroundColor: "#dcba95",
          }
        );
      }
    } catch (errorss) {
      if (errorss.response) {
        pending.value = false;
        errors2.value = errorss.response.data.errors;
      }
    }
  }
};
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
  