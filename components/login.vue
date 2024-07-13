<template>
  <div>
    <form @submit.prevent v-if="loginNav == 1" class="form">
      <h3>{{ $t("join") }}</h3>
      <!-- <div class="google">
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
          <span>{{ $t("google") }}</span>
        </div>
      </div>
      <div class="or">
        <span>{{ $t("or") }}</span>
      </div> -->

      <div class="inputs mb-3">
        <div class="main-input">
          <label for=""> {{ $t("email") }}<span>*</span> </label>
          <input
            type="email"
            v-model="form.email"
            placeholder="مثال : Mostafademo@icloud.com"
          />
          <span class="error-msg" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
          <span class="error-msg2" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
        <div>
          <div class="main-input">
            <label for=""> {{ $t("pass") }}<span>*</span> </label>
            <input :type="pass" v-model="form.password" placeholder=" ********** " />
            <div @click="changePass()" class="icon">
                          <svg
                            v-if="pass == 'password'"
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
                            v-if="pass == 'text'"
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
            <span class="error-msg" v-if="v$.password.$error">{{
              v$.password.$errors[0].$message
            }}</span>
            <span class="error-msg2" v-if="errors.password">{{ errors.password[0] }}</span>

            </div>
        </div>
      </div>
      <span class="resend" @click="loginNav = 2"> {{ $t("forget") }}</span>

      <button @keyup.enter="loginFunc()" :disabled="pending" @click="loginFunc()" class="mt-4 gap-3">
        {{ $t("login") }}
        <v-progress-circular
          v-if="pending"
          indeterminate
          :size="30"
          :width="5"
        ></v-progress-circular>
      </button>
      <div class="type" style="margin-top: 20px;">
        <span class="ex"> {{ $t("ex1") }}</span>
        <span class="log" @click="handleButtonClick(1)">
          {{ $t("create") }}
        </span>
      </div>
    </form>
    <form @submit.prevent v-if="loginNav == 2" class="form">
      <div @click="loginNav = 1" class="back">
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
      <h3 class="text-center">{{ $t("forget1") }}</h3>

      <p class="text text-center">{{ $t("forget2") }}</p>
      <div class="inputs mb-3">
        <div class="main-input">
          <label for=""> {{ $t("phone") }}<span>*</span> </label>
          <input type="tel" maxlength="10" v-model="forgetPhone" placeholder="0215984494" />
          <span class="error-msg2" v-if="forgetError"> {{ forgetError }} </span>
        </div>
      </div>

      <button @click="forgetPassFunc1()" :disabled="pendingForget" class="otp gap-3" style="margin:0px !important; margin-bottom:25px">
        
        {{ $t("follow") }}
        <v-progress-circular
          v-if="pendingForget"
          indeterminate
          :size="25"
          :width="4"
        ></v-progress-circular>
      </button>
    </form>
    <form @submit.prevent v-if="loginNav == 4" class="form">
      <div @click="loginNav = 1" class="back">
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
      <h3 class="text-center">{{ $t("forget1") }}</h3>

      <p class="text text-center"> {{ $t('forgetPass') }} </p>
      <div class="inputs mb-3">
        <div>

          <div class="main-input">
            <label for=""> {{ $t("pass") }}<span>*</span> </label>
            <input :type="passType" v-model="forgetForm.password" placeholder="************" />
            
          
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
              <span class="error-msg2" v-if="errors2.password">{{ errors2.password[0] }}</span>
  
            </div>
        </div>
        <div>
          <div class="main-input">
            <label for=""> {{ $t("confirm pass") }}<span>*</span> </label>
            <input :type="passConfType" v-model="forgetForm.password_confirmation" placeholder="************" />
          
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
            <span class="error-msg" v-if="v2$.password_confirmation.$error">{{
              v2$.password_confirmation.$errors[0].$message
            }}</span>
            <span class="error-msg2" v-if="errors2.password_confirmation">{{ errors2.password_confirmation[0] }}</span>
  
            </div>

        </div>
      </div>

      <button @click="forgetPassFunc3()" class="otp gap-3" :disabled="pendingForget3" style="margin-bottom:20px">
        
        {{ $t("confirm") }}
        <v-progress-circular
          v-if="pendingForget3"
          indeterminate
          :size="25"
          :width="4"
        ></v-progress-circular>
      </button>
    </form>

    <div v-if="loginNav == 3" class="form">
      <div @click="loginNav = 2" class="back">
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
        {{ $t("otp2") }} {{ forgetPhone }} {{ $t("otp1") }} {{ $t("otp3") }}
      </p>

      <v-otp-input
        v-model="otpForget"
        :length="5"
        placeholder="-"
        style="direction: ltr !important; margin-bottom: 14px"
      ></v-otp-input>
      <!-- {{ otpForget }} -->
       <span v-if="forgetError2" class="text-danger text-center mb-2" style="font-size: 14px;"> {{ forgetError2 }} </span>
      <span @click="resendOtp()" class="resend text-center"> {{ $t("resend") }}</span>
      <button @click="forgetPassFunc2()" :disabled="pendingForget2" class="otp gap-3" >
        
        {{ $t("follow") }}
         
        <v-progress-circular
          v-if="pendingForget2"
          indeterminate
          :size="25"
          :width="4"
        ></v-progress-circular>
       
       </button>
    </div>
  </div>
</template>

<script setup>
import Cookies from "js-cookie";
import { useStore } from "~/store";
import axios from "axios";
import useValidate from "@vuelidate/core";
// import "mosha-vue-toastify/dist/style.css";
import { required, email, sameAs, minLength, helpers } from "@vuelidate/validators";
const localePath = useLocalePath();
const { locale } = useI18n();
let store = useStore;
let loginNav = ref(1);
let pending = ref(false);
const router = useRouter();
let otpForget = ref('');
const handleButtonClick = (value) => {
  store.commit("changeFormCheck", value);
};

let passType = ref("password");
let pass = ref("password");
let passConfType = ref("password");

const changePass = () => {
  pass.value = pass.value === "password" ? "text" : "password";
};
const changePass1 = () => {
  passType.value = passType.value === "password" ? "text" : "password";
};
const changePass2 = () => {
  passConfType.value = passConfType.value === "password" ? "text" : "password";
};

let form = ref({
  email: "",
  password: "",
});

let forgetForm = ref({
  password:"",
  password_confirmation:""
})


let valuee3 = ref( locale.value == 'ar' ? " تم ارسال الكود بنجاح" : "The code has been sent successfully");
let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
let value4 = ref("This field should be at least 8 characters long");
let value6 = ref( locale.value == 'en' ? "The value must be equal to the other value" : "يجب أن تكون القيمة مساوية للقيمة الأخرى");
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوب";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
  value4.value = "يجب أن يكون هذا الحقل 8 أحرف على الأقل";
} else {
    value1.value = 'value is required';
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
  value4.value = "This field should be at least 8 characters long";
}

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage(value2.value, required),
      email: helpers.withMessage(value3.value, email),
    },
    password: {
      required: helpers.withMessage(value1.value , required),
      minLength: helpers.withMessage(value4.value, minLength(8)),
    },
  };
});
const rules2 = computed(() => {
  return {
    password: {
      required: helpers.withMessage(value1.value , required),
      minLength: helpers.withMessage(value4.value, minLength(8)),
    },
    password_confirmation: {
      required:helpers.withMessage(value1.value, required),
      sameAs: helpers.withMessage(value6.value, sameAs(forgetForm.value.password)) 
    },
  };
});

let errors = ref([]);
const v$ = useValidate(rules, form);
const v2$ = useValidate(rules2, forgetForm);

const loginFunc = async () => {
  let check = await v$.value.$validate();
  let formBody = new FormData();
  formBody.append("email", form.value.email);
  formBody.append("password", form.value.password);
  if (check) {
    pending.value = true;
    console.log("login");
    try {
      let result = await axios.post(`${getUrl()}/login`, formBody, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        console.log(result.data.data);
        if (process.client) {
          document.cookie = `token=${result.data.data.token}; path=/;`; // Set token in cookie
          store.state.user = result.data.data.user;
          store.state.authenticated = true;

          const userObjectString = JSON.stringify(result.data.data.user);
          Cookies.set("user", userObjectString);
          Cookies.set("auth", true);

          //  localStorage.setItem("user", JSON.stringify(result.data.data.user));
          // localStorage.setItem("auth", true);
          pending.value = false;
          errors.value = [];
          store.state.activeMobile = 1;
            const fullLocalePath = localePath('/');
          router.push(fullLocalePath);
        }
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pending.value = false;
        errors.value = errorss.response.data.errors;
      }

      // Optionally, set an expiration date for the cookie
      // Example: Expires in 7 days
      // const expirationDate = new Date();
      // expirationDate.setDate(expirationDate.getDate() + 7);
      // Cookies.set('user', userObjectString, { expires: expirationDate });
    }
  } else {
    console.log("not login");
  }
};
let forgetPhone = ref('');
let pendingForget = ref(false);
let pendingForget2 = ref(false);
let pendingForget3 = ref(false);
let forgetError = ref();
let forgetError2 = ref();
let errors2 = ref([]);
const forgetPassFunc1 = async () => {
  console.log(forgetPhone.value);
  if (forgetPhone.value) {
    pendingForget.value = true;
    try {
      let result = await axios.post(`${getUrl()}/send-otp/${forgetPhone.value}`, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        pendingForget.value = false;
        otpForget.value = result.data.data.customer.otp;
        loginNav.value = 3;
      }
    } catch (errorss) {
      if (errorss.response) {
        pendingForget.value = false;
        forgetError.value = errorss.response.data.message;
      }
    }
  }
};
const forgetPassFunc2 = async () => {
  let formBody = new FormData();
  formBody.append("otp" ,  otpForget.value);
  if (otpForget.value) {
    pendingForget2.value = true;
    try {
      let result = await axios.post(`${getUrl()}/check-otp/${forgetPhone.value}`, formBody,{
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        pendingForget2.value = false;
        loginNav.value = 4;
      }
    } catch (errorss) {
      if (errorss.response) {
        pendingForget2.value = false;
        forgetError2.value = errorss.response.data.message;
      }
    }
  }
};
const resendOtp = async () => {
  try {
    let result = await axios.get(`${getUrl()}/resend-otp/${forgetPhone.value}`,{
      headers: {
        "Content-Language": `${locale.value}`,
      },
    });
    if (result.status >= 200) {
      // loginNav.value = 4;
      const moshaToastify = await import("mosha-vue-toastify");
        const { createToast } = moshaToastify;
        createToast(
          {
            title: valuee3.value,
          },
          {
            showIcon: "true",
            type: "success",
            toastBackgroundColor: "#dcba95",
            timeout: 2000,
          }
        );
      otpForget.value = result.data.data.customer.otp;
    }
  } catch (errorss) {
    if (errorss.response) {
      pendingForget2.value = false;
      forgetError2.value = errorss.response.data.message;
    }
  }
};
const forgetPassFunc3 = async () => {
  let check = await v2$.value.$validate();
  let formBody = new FormData();
  formBody.append("password" ,  forgetForm.value.password);
  formBody.append("password_confirmation" ,  forgetForm.value.password_confirmation);
  if (check) {
    pendingForget3.value = true;
    try {
      let result = await axios.post(`${getUrl()}/change-password/${forgetPhone.value}`, formBody,{
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
      pendingForget3.value = false;
        loginNav.value = 1;
        errors2.value = [];
      }
    } catch (errorss) {
      if (errorss.response) {
        pendingForget3.value = false;
        errors2.value = errorss.response.data.errors;
      }
    }
  }
};

</script>

<style lang="scss" scoped></style>
