<template>
  <div>
    <div v-if="signNav == 1" class="form">
      <h3>{{ $t("join") }}</h3>
      <div class="google">
        <div class="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <path
              d="M21.1258 11.2139C21.1258 10.4225 21.0603 9.84497 20.9185 9.24609H11.6973V12.818H17.1099C17.0008 13.7057 16.4115 15.0425 15.102 15.9408L15.0836 16.0603L17.9992 18.2738L18.2012 18.2936C20.0563 16.6145 21.1258 14.1441 21.1258 11.2139Z"
              fill="#4285F4"
            />
            <path
              d="M11.6976 20.6258C14.3494 20.6258 16.5755 19.7702 18.2016 18.2944L15.1024 15.9415C14.273 16.5083 13.1599 16.904 11.6976 16.904C9.10043 16.904 6.89609 15.225 6.11031 12.9043L5.99513 12.9139L2.96347 15.2132L2.92383 15.3212C4.53888 18.4654 7.85634 20.6258 11.6976 20.6258Z"
              fill="#34A853"
            />
            <path
              d="M6.10908 12.9038C5.90174 12.305 5.78175 11.6632 5.78175 11.0002C5.78175 10.3371 5.90174 9.69549 6.09817 9.09661L6.09268 8.96906L3.02303 6.63281L2.92259 6.67963C2.25695 7.98437 1.875 9.44953 1.875 11.0002C1.875 12.5509 2.25695 14.016 2.92259 15.3207L6.10908 12.9038Z"
              fill="#FBBC05"
            />
            <path
              d="M11.6977 5.09664C13.5419 5.09664 14.7859 5.87733 15.4953 6.52974L18.2671 3.8775C16.5648 2.32681 14.3494 1.375 11.6977 1.375C7.85637 1.375 4.53889 3.53526 2.92383 6.6794L6.09942 9.09638C6.89612 6.77569 9.10047 5.09664 11.6977 5.09664Z"
              fill="#EB4335"
            />
          </svg>
          <span> {{ $t("google") }}</span>
        </div>
      </div>
      <div class="or">
        <span> {{ $t("or") }}</span>
      </div>

      <div class="inputs">
        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
          <div class="main-input">
            <label for="">
              {{ $t("first name") }}
              <span>*</span>
            </label>
            <input type="text" v-model="form.first_name" placeholder="مثال : محمد" />
            <span class="error-msg" v-if="v$.first_name.$error">{{
              v$.first_name.$errors[0].$message
            }}</span>
            <span class="error-msg" v-if="errors.first_name">{{
              errors.first_name[0]
            }}</span>
          </div>
          <div class="main-input">
            <label for=""> {{ $t("last name") }}<span>*</span> </label>
            <input type="text" v-model="form.last_name" placeholder="مثال : محمد" />
            <span class="error-msg" v-if="v$.last_name.$error">{{
              v$.last_name.$errors[0].$message
            }}</span>
            <span class="error-msg" v-if="errors.last_name">{{
              errors.last_name[0]
            }}</span>
          </div>
        </div>
        <div class="main-input">
          <label for=""> {{ $t("email") }} <span>*</span> </label>
          <input
            type="email"
            v-model="form.email"
            placeholder="مثال : Mostafademo@icloud.com"
          />
          <span class="error-msg" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
          <span class="error-msg" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>

        <div class="main-input">
          <label for=""> {{ $t("phone") }} <span>*</span> </label>
          <input type="tel" v-model="form.phone" placeholder="مثال : +0215984494" />
          <span class="error-msg" v-if="v$.phone.$error">{{
            v$.phone.$errors[0].$message
          }}</span>
          <span class="error-msg" v-if="errors.phone">{{ errors.phone[0] }}</span>
        </div>
        <div class="main-input">
          <label for=""> {{ $t("image") }} </label>
          <input
            type="file"
            @change="handleImageChange"
            placeholder="مثال : +0215984494"
          />
          <span class="error-msg" v-if="errors.image">{{ errors.image[0] }}</span>
        </div>
        <div class="main-input">
          <label for=""> {{ $t("pass") }}<span>*</span> </label>
          <input type="password" v-model="form.password" placeholder=" ********** " />
          <span class="error-msg" v-if="v$.password.$error">{{
            v$.password.$errors[0].$message
          }}</span>
          <span class="error-msg" v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <div class="main-input">
          <label for=""> {{ $t("confirm pass") }}<span>*</span> </label>
          <input
            type="password"
            v-model="form.password_confirmation"
            placeholder=" ********** "
          />
          <span class="error-msg" v-if="v$.password_confirmation.$error">{{
            v$.password_confirmation.$errors[0].$message
          }}</span>
          <span class="error-msg" v-if="errors.password_confirmation">{{
            errors.password_confirmation[0]
          }}</span>
        </div>
      </div>
      <p>
        {{ $t("auth1") }}
        <span>{{ $t("policy1") }}</span> <span>{{ $t("policy") }}</span>
      </p>
      <button class="gap-3" @click="registerFunc()">
        {{ $t("create") }}
        <v-progress-circular
          v-if="pending"
          indeterminate
          :size="30"
          :width="5"
        ></v-progress-circular>
      </button>
      <div class="type">
        <span class="ex"> {{ $t("ex") }}</span>
        <span @click="handleButtonClick(2)" class="log">{{ $t("login") }}</span>
      </div>
    </div>
    <div v-if="signNav == 2" class="form">
      <div @click="signNav = 1" class="back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0886 12.588C10.414 12.2625 10.414 11.7349 10.0886 11.4094L5.67786 6.9987L10.0886 2.58795C10.414 2.26251 10.414 1.73488 10.0886 1.40944C9.76317 1.084 9.23553 1.084 8.91009 1.40944L3.91009 6.40944C3.58466 6.73488 3.58466 7.26252 3.91009 7.58795L8.91009 12.588C9.23553 12.9134 9.76317 12.9134 10.0886 12.588Z"
            fill="#2D3A4A"
          />
        </svg>
      </div>
      <h3 class="text-center">{{ $t("otp") }}</h3>
      <p class="text text-center">
        {{ $t("otp2") }} {{ phoneNum ? phoneNum : "" }} {{ $t("otp1") }} {{ $t("otp3") }}
      </p>

      <v-otp-input
        v-model="otp"
        :length="6"
        placeholder="-"
        style="direction: ltr !important; margin-bottom: 14px"
      ></v-otp-input>
      {{ otp }}
      <span class="resend text-center"> {{ $t("resend") }}</span>
      <button @click="otpFunc()" class="otp">
      {{ $t("follow") }}
      <v-progress-circular
          v-if="pending"
          indeterminate
          :size="30"
          :width="5"
        ></v-progress-circular>
      </button>
    </div>
  </div>
</template>

<script setup>
import useValidate from "@vuelidate/core";
import { required, email, sameAs, minLength, helpers } from "@vuelidate/validators";
import { useStore } from "~/store";
import axios from "axios";
const localePath = useLocalePath();
const { locale } = useI18n();
let store = useStore;
const props = defineProps([""]);
let otp = ref("");
let signNav = ref(1);
let pending = ref(false);
let phoneNum = ref(null);


const handleButtonClick = (value) => {
  store.commit("changeFormCheck", value);
  console.log(store.state.checkForm);
};
let form = ref({
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  password: "",
  password_confirmation: "",
  image: "",
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.image = file;
  }
};

const rules = computed(() => {
  return {
    first_name: { required },
    last_name: { required },
    phone: { required },
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    password: { required, minLength: minLength(6) },
    password_confirmation: { required, sameAs: sameAs(form.value.password) },
  };
});

let errors = ref([]);
let emailError = ref(null);
const v$ = useValidate(rules, form);
const registerFunc = async () => {
  let check = await v$.value.$validate();
  let formBody = new FormData();
  formBody.append("first_name", form.value.first_name);
  formBody.append("last_name", form.value.last_name);
  formBody.append("phone", form.value.phone);
  formBody.append("email", form.value.email);
  formBody.append("password", form.value.password);
  formBody.append("password_confirmation", form.value.password_confirmation);
  formBody.append("image", form.value.image);
  if (check) {
    pending.value = true;
    console.log("login");
    try {
      let result = await axios.post(`${getUrl()}/register`, formBody, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        console.log(result.data.data);
        phoneNum.value = result.data.data.customer.phone;
        signNav.value = 2;
        otp.value = result.data.data.customer.otp;
        pending.value = false;
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending.value = false;
        errors.value = errorss.response.data.errors;
      }
    }
  } else {
    console.log("not login");
  }
};

const otpFunc = async () => {
    pending.value = true;
    try{
        let result = await axios.post(
          `${getUrl()}/login-otp/${phoneNum.value}?otp=${parseInt(otp.value)}`,
          {
            //   params: {
            //     otp: parseInt(otp.value),
            // },
            headers: {
              "Content-Language": `${locale.value}`,
            },
          }
        );
        if (result.status >= 200) {
          if (process.client) {
              pending.value = false;
            store.commit("changeFormCheck", 2);
          }
        }
        console.log(result.data.data);
        
    } catch(errorss){
        if (errorss.response) {
        pending.value = false;
        errors.value = errorss.response.data.errors;
      }
    }
};

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
