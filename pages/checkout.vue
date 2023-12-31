<template>
  <div>
    <div class="container checkout-page" style="">
      <!-- <v-stepper class="w-100" v-model="store.state.step" :items="items" show-actions v-if="finalStep == 1">
        <template v-slot:item.1>
          <div class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <div class="form-box">
                <div class="first-info d-flex flex-column gap-3">
                  <div class="radio-inputs flex-column flex-xl-row flex-lg-row d-flex align-items-center gap-3">
                    <label>
                      <input type="radio" v-model="personalorGift" name="card_id" checked value="1" />
                      <div class="radio-input">
                        <div class="head d-flex align-items-center justify-content-between">
                          <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z"
                              fill="" />
                            <path d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z" fill="" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z" fill="" />
                          </svg>

                          <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                            <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95" />
                          </svg>

                          <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                            viewBox="0 0 25 24" fill="none">
                            <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                          </svg>
                        </div>
                        <div class="text">
                          <h4>{{ $t("gift") }}</h4>
                          <span>
                            {{ $t("giftt1") }}
                          </span>
                        </div>
                      </div>
                    </label>
                    <label>
                      <input type="radio" v-model="personalorGift" name="card_id" value="2" />
                      <div class="radio-input">
                        <div class="head d-flex align-items-center justify-content-between">
                          <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z"
                              fill="" />
                            <path d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z" fill="" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z" fill="" />
                          </svg>

                          <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                            <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95" />
                          </svg>

                          <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                            viewBox="0 0 25 24" fill="none">
                            <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                          </svg>
                        </div>
                        <div class="text">
                          <h4>{{ $t("personaly") }}</h4>
                          <span> {{ $t("giftt2") }}</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div v-if="personalorGift == 2" class="inputs">
                    <div class="d-flex flex-column gap-5" v-if="auth">
                      <div class="d-flex my-4 flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for="">
                            {{ $t("first name") }}
                            <span>*</span>
                          </label>
                          <input type="text" readonly v-model="userdata1.first_name" placeholder="مثال : محمد" />
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("last name") }} <span>*</span>
                          </label>
                          <input type="text" readonly v-model="userdata1.last_name" placeholder="مثال : محمد" />
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for=""> {{ $t("phone") }} </label>
                          <input type="tel" readonly v-model="userdata1.phone" placeholder="+201066333725" />
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("email") }} <span>*</span>
                          </label>
                          <input type="email" readonly v-model="userdata1.email" placeholder="مثال : m.info@icloud.com" />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column gap-5" v-else>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for="">
                            {{ $t("first name") }}
                            <span>*</span>
                          </label>
                          <input type="text" v-model="userdata1.first_name" placeholder="مثال : محمد" />
                          <span class="error-msg" v-if="v$.first_name.$error">{{
                            v$.first_name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.first_name">{{
                            errors.first_name[0]
                          }}</span>
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("last name") }} <span>*</span>
                          </label>
                          <input type="text" v-model="userdata1.last_name" placeholder="مثال : محمد" />
                          <span class="error-msg" v-if="v$.last_name.$error">{{
                            v$.last_name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.last_name">{{
                            errors.last_name[0]
                          }}</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for=""> {{ $t("phone") }} </label>
                          <input type="tel" v-model="userdata1.phone" placeholder="+201066333725" />
                          <span class="error-msg" v-if="v$.phone.$error">{{
                            v$.phone.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.phone">{{
                            errors.phone[0]
                          }}</span>
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("email") }} <span>*</span>
                          </label>
                          <input type="email" v-model="userdata1.email" placeholder="مثال : m.info@icloud.com" />
                          <span class="error-msg" v-if="v$.email.$error">{{
                            v$.email.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.email">{{
                            errors.email[0]
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="personalorGift == 1" class="inputs">
                    <h4>{{ $t("main gift") }}</h4>
                    <div class="d-flex flex-column gap-5" v-if="auth">
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for="">
                            {{ $t("first name") }}
                            <span>*</span>
                          </label>
                          <input type="text" readonly v-model="userdata1.first_name" placeholder="مثال : محمد" />
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("last name") }} <span>*</span>
                          </label>
                          <input type="text" readonly v-model="userdata1.last_name" placeholder="مثال : محمد" />
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for=""> {{ $t("phone") }}</label>
                          <input type="tel" readonly v-model="userdata1.phone" placeholder="+201066333725" />
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("email") }} <span>*</span>
                          </label>
                          <input type="email" readonly v-model="userdata1.email" placeholder="مثال : m.info@icloud.com" />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column gap-5" v-else>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for="">
                            {{ $t("first name") }}
                            <span>*</span>
                          </label>
                          <input type="text" v-model="userdata1.first_name" placeholder="مثال : محمد" />
                          <span class="error-msg" v-if="v$.first_name.$error">{{
                            v$.first_name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.first_name">{{
                            errors.first_name[0]
                          }}</span>
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("last name") }} <span>*</span>
                          </label>
                          <input type="text" v-model="userdata1.last_name" placeholder="مثال : محمد" />
                          <span class="error-msg" v-if="v$.last_name.$error">{{
                            v$.last_name.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.last_name">{{
                            errors.last_name[0]
                          }}</span>
                        </div>
                      </div>
                      <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                        <div class="main-input">
                          <label for=""> {{ $t("phone") }} </label>
                          <input type="tel" v-model="userdata1.phone" placeholder="+201066333725" />
                          <span class="error-msg" v-if="v$.phone.$error">{{
                            v$.phone.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.phone">{{
                            errors.phone[0]
                          }}</span>
                        </div>
                        <div class="main-input">
                          <label for="">
                            {{ $t("email") }} <span>*</span>
                          </label>
                          <input type="email" v-model="userdata1.email" placeholder="مثال : m.info@icloud.com" />
                          <span class="error-msg" v-if="v$.email.$error">{{
                            v$.email.$errors[0].$message
                          }}</span>
                          <span class="error-msg" v-if="errors.email">{{
                            errors.email[0]
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <h4 class="mt-3">{{ $t("main gift1") }}</h4>
                    <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                      <div class="main-input">
                        <label for="">
                          {{ $t("first name") }}
                          <span>*</span>
                        </label>
                        <input type="text" v-model="gift_owner_name" placeholder="مثال : محمد" />
                        <span class="error-msg" v-if="errors.gift_owner_name">{{
                          errors.gift_owner_name[0]
                        }}</span>
                      </div>
                      <div class="main-input">
                        <label for=""> {{ $t("last name") }} </label>
                        <input type="tel" v-model="gift_owner_phone" placeholder="+201066333725" />
                        <span class="error-msg" v-if="errors.gift_owner_phone">{{ errors.gift_owner_phone[0] }}</span>
                      </div>
                    </div>
                    <h4>{{ $t("gift text") }}</h4>
                    <div class="main-input textarea">
                      <textarea name="" v-model="gift_text" :placeholder="$t('gift text1')" id="" cols="20"
                        rows="5"></textarea>

                      <span class="error-msg" v-if="errors.gift_text">{{
                        errors.gift_text[0]
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-xl-4 col-lg-4">
              <checkProduct :arrData="arrData" :newArr="newArr" :myFunction="checkoutFunc" :pending="pending" />

            </div>
          </div>
        </template>

        <template v-slot:item.2>
          <div class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <form class="form-box">
                <div class="first-info d-flex flex-column gap-3">
                  <form @submit.prevent
                    class="radio-inputs d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                    <label for="first-input2">
                      <input id="first-input2" v-model="chooseCity" name="card" type="radio" checked value="1" />
                      <div class="radio-input">
                        <div class="head d-flex align-items-center justify-content-between">
                          <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z"
                              fill="" />
                            <path d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z" fill="" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z" fill="" />
                          </svg>

                          <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                            <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95" />
                          </svg>

                          <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                            viewBox="0 0 25 24" fill="none">
                            <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                          </svg>
                        </div>
                        <div class="text">
                          <h4>{{ $t("normal shipping") }}</h4>
                          <span>
                            {{ $t("normal shipping1") }}
                          </span>
                        </div>
                      </div>
                    </label>
                    <label for="second-input2">
                      <input id="second-input2" v-model="chooseCity" name="card" type="radio" value="2" />
                      <div class="radio-input">
                        <div class="head d-flex align-items-center justify-content-between">
                          <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_550_23886)">
                              <path d="M2.09266 8.64355H2.08187C1.4779 8.64355 0.988281 9.13317 0.988281 9.73715V9.74793C0.988281 10.3519 1.4779 10.8415 2.08187 10.8415H2.09266C2.69663 
      10.8415 3.18625 10.3519 3.18625 9.74793V9.73715C3.18625 9.13317 2.69663 8.64355 2.09266 8.64355Z" fill="" />
                              <path
                                d="M23.9416 8.26265C23.9116 7.01624 23.2076 5.76468 22.0287 5.1464C20.0885 4.1189 17.9585 3.24046 16.0085 2.56827C15.2203 2.29756 14.3644 2.29756 13.5762 2.56827C12.9916 2.77124 12.3945 2.99015 11.7907 3.22452C14.3782 4.07343 17.4105 5.21999 20.2526 6.6239C20.5235 6.75735 20.7546 6.95952 20.923 7.21022C21.0914 7.46092 21.1911 7.75139 21.2121 8.05265C21.2899 9.46499 21.3274 10.9219 21.3185 12.375C21.3185 12.5301 21.1634 12.63 21.0373 12.555L20.3515 12.1453C20.319 12.1261 20.2806 12.1196 20.2437 12.1273C20.2067 12.1349 20.174 12.156 20.1518 12.1866C19.853 12.5784 19.5468 12.9753 19.233 13.3772C19.2078 13.4119 19.172 13.4376 19.1311 13.4504C19.0901 13.4633 19.0461 13.4626 19.0055 13.4485C18.965 13.4345 18.93 13.4077 18.9058 13.3722C18.8816 13.3368 18.8695 13.2945 18.8712 13.2516C18.8899 11.7937 18.8754 10.3158 18.8295 8.88702C18.8156 8.57586 18.7152 8.27474 18.5394 8.01759C18.3637 7.76044 18.1196 7.55747 17.8348 7.43155C14.8755 6.1064 11.9412 5.04093 9.43523 4.22811H9.42773H9.42398H2.6468C2.35684 4.22824 2.0788 4.34351 1.87381 4.54859C1.66883 4.75366 1.55367 5.03175 1.55367 5.32171V5.33296C1.55367 5.62287 1.66884 5.90091 1.87384 6.10591C2.07884 6.31092 2.35688 6.42608 2.6468 6.42608H6.1957V6.42936C6.47115 6.44949 6.72878 6.57309 6.91685 6.77533C7.10493 6.97758 7.20952 7.2435 7.20961 7.51968V7.53093C7.20967 7.6747 7.18138 7.81707 7.12636 7.9499C7.07135 8.08272 6.99068 8.2034 6.88897 8.30502C6.78727 8.40663 6.66652 8.4872 6.53365 8.5421C6.40078 8.59701 6.25838 8.62517 6.11461 8.62499H4.93195C4.64224 8.62499 4.36436 8.73995 4.15933 8.94463C3.95429 9.14932 3.83886 9.42699 3.83836 9.71671V9.72796C3.83848 10.018 3.95374 10.296 4.1588 10.5011C4.36386 10.7062 4.64195 10.8214 4.93195 10.8216H6.11461C6.2582 10.8216 6.40038 10.8498 6.53304 10.9048C6.66569 10.9598 6.78622 11.0403 6.88773 11.1419C6.98924 11.2434 7.06975 11.364 7.12466 11.4967C7.17957 11.6294 7.2078 11.7716 7.20773 11.9151V11.9259C7.2078 12.0695 7.17957 12.2117 7.12466 12.3444C7.06975 12.4771 6.98924 12.5976 6.88773 12.6992C6.78622 12.8007 6.66569 12.8813 6.53304 12.9363C6.40038 12.9912 6.2582 13.0195 6.11461 13.0195H1.08773C0.797695 13.0195 0.519535 13.1347 0.314447 13.3398C0.109358 13.5449 -0.00585937 13.8231 -0.00585938 14.1131V14.1239C-0.00585937 14.4139 0.109358 14.6921 0.314447 14.8972C0.519535 15.1023 0.797695 15.2175 1.08773 15.2175H6.11461C6.2583 15.2176 6.40057 15.2459 6.53329 15.301C6.66601 15.3561 6.78657 15.4368 6.88809 15.5385C6.98961 15.6402 7.07009 15.7609 7.12494 15.8937C7.17978 16.0265 7.20792 16.1688 7.20773 16.3125V16.3237C7.20773 16.6137 7.09257 16.8917 6.88757 17.0967C6.68257 17.3017 6.40452 17.4169 6.11461 17.4169H4.11773C3.82778 17.417 3.54974 17.5323 3.34475 17.7373C3.13976 17.9424 3.02461 18.2205 3.02461 18.5105V18.5217C3.02461 18.8117 3.13976 19.0898 3.34475 19.2948C3.54974 19.4999 3.82778 19.6152 4.11773 19.6153H9.08039C10.5457 20.3005 12.0464 20.9073 13.5762 21.4331C14.3644 21.7038 15.2203 21.7038 16.0085 21.4331C17.9585 20.7609 20.0866 19.8825 22.0287 18.855C23.2076 18.2367 23.9116 16.9851 23.9416 15.7387C24.0185 13.2462 24.0185 10.7542 23.9416 8.26265Z"
                                fill="" />
                            </g>
                            <defs>
                              <clipPath id="clip0_550_23886">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                            <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95" />
                          </svg>

                          <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                            viewBox="0 0 25 24" fill="none">
                            <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                          </svg>
                        </div>
                        <div class="text">
                          <h4>{{ $t("fast shipp") }}</h4>
                          <span>
                            {{ $t("fast shipp1") }}
                          </span>
                        </div>
                      </div>
                    </label>
                  </form>

                  <div class="inputs address">
                    <h4>العنوانين المحفوظة</h4>
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="main-input">
                        <Dropdown @click="dropDownActive += 1" :class="{ active: dropDownActive == 1 }"
                          v-model="selectedCountry" :options="countries" filter optionLabel="name"
                          placeholder="مثال : مصرف الجارحي" class="">
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="row main-inputs-container">
                    <div class="col-12 col-xl-7 col-lg-7">
                      <div class="inputs ">
                        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                          <div class="main-input">
                            <label for="">
                              {{ $t("city") }}
                              <span>*</span>
                            </label>
                            <Dropdown v-if="chooseCity == 1" v-model="selectedCity1" :options="normalCity" filter
                              optionLabel="name" placeholder="مثال : الرياض" class="">
                              <template #option="slotProps">
                                <div class="flex align-items-center">
                                  <div>{{ slotProps.option.name }}</div>
                                </div>
                              </template>
                            </Dropdown>
                            <Dropdown v-if="chooseCity == 2" v-model="selectedCity1" :options="fastCity" filter
                              optionLabel="name" placeholder="مثال : الرياض" class="">
                              <template #option="slotProps">
                                <div class="flex align-items-center">
                                  <div>{{ slotProps.option.name }}</div>
                                </div>
                              </template>
                            </Dropdown>
                            <span class="error-msg" v-if="v2$.city.$error">{{
                              v2$.city.$errors[0].$message
                            }}</span>
                            <span class="error-msg" v-if="errors1.city">{{
                              errors1.city[0]
                            }}</span>
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("street name") }} <span>*</span>
                            </label>
                            <input type="text" v-model="userdata2.street_name" placeholder=" مثال : شارع المملكة " />
                            <span class="error-msg" v-if="v2$.street_name.$error">{{ v2$.street_name.$errors[0].$message
                            }}</span>
                            <span class="error-msg" v-if="errors1.street_name">{{ errors1.street_name[0] }}</span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                          <div class="main-input">
                            <label for="">
                              {{ $t("dist") }}<span>*</span>
                            </label>
                            <input type="text" v-model="userdata2.district" placeholder="مثال : الحي الخامس" />
                            <span class="error-msg" v-if="v2$.district.$error">{{ v2$.district.$errors[0].$message
                            }}</span>
                            <span class="error-msg" v-if="errors1.district">{{
                              errors1.district[0]
                            }}</span>
                          </div>

                          <div class="main-input">
                            <label for=""> {{ $t("bulding number") }}</label>
                            <input type="text" v-model="userdata2.building_number" placeholder="45 ب" />
                            <span class="error-msg" v-if="v2$.building_number.$error">{{
                              v2$.building_number.$errors[0].$message
                            }}</span>
                            <span class="error-msg" v-if="errors1.building_number">{{ errors1.building_number[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="main-input mt-4">
                        <label for=""> {{ $t("special") }}</label>
                        <input type="text" v-model="userdata2.marks"
                          placeholder="مثال : المنزل , المكتب , الشركة ..الخ" />
                      </div>

                      <v-checkbox :label="$t('save data')" color="#DCBA95"></v-checkbox>
                    </div>
                    <div class="map-image col-12 col-xl-5 col-lg-5">
                      <img class="image" src="~/assets/images/map.png" alt="" />
                      <div class="overlay">
                        <div class="text d-flex flex-column gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                            <path
                              d="M19.5422 8.45C18.5583 3.83 14.7821 1.75 11.4651 1.75C11.4651 1.75 11.4651 1.75 11.4558 1.75C8.14813 1.75 4.36262 3.82 3.37876 8.44C2.28246 13.6 5.24341 17.97 7.92325 20.72C8.91648 21.74 10.1908 22.25 11.4651 22.25C12.7395 22.25 14.0138 21.74 14.9977 20.72C17.6775 17.97 20.6384 13.61 19.5422 8.45ZM11.4651 13.46C9.83475 13.46 8.51357 12.05 8.51357 10.31C8.51357 8.57 9.83475 7.16 11.4651 7.16C13.0955 7.16 14.4167 8.57 14.4167 10.31C14.4167 12.05 13.0955 13.46 11.4651 13.46Z"
                              fill="white" />
                          </svg>
                          <span> {{ $t("address") }}</span>
                          <span> {{ $t("map") }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-12 col-xl-4 col-lg-4">
              <checkProduct :arrData="arrData" :myFunction="checkoutFunc1" :pending="pending" />


            </div>
          </div>
        </template>

        <template v-slot:item.3>
          <div class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <form @submit.prevent class="form-box">
                <div class="first-info d-flex flex-column gap-3">
                  <div class="radio-inputs d-flex flex-column gap-4">
                    <div class="row">
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" checked value="1" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="23" viewBox="0 0 56 23"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.4756 4.26733C8.52571 4.35487 9.57582 3.74212 10.2321 2.96525C10.8775 2.16649 11.3041 1.09419 11.1947 0C10.265 0.0437675 9.1164 0.612745 8.46008 1.4115C7.85845 2.10084 7.34433 3.21691 7.4756 4.26733ZM19.9671 18.3606V1.30218H26.3662C29.6697 1.30218 31.9778 3.57809 31.9778 6.90442C31.9778 10.2307 29.626 12.5285 26.2787 12.5285H22.6143V18.3606H19.9671ZM11.1838 4.47546C10.2587 4.4222 9.41456 4.75377 8.73273 5.02158C8.29395 5.19393 7.92239 5.33987 7.63971 5.33987C7.32248 5.33987 6.93558 5.18612 6.50117 5.0135C5.93196 4.78731 5.28119 4.5287 4.59876 4.54112C3.03453 4.563 1.57969 5.44929 0.781167 6.86079C-0.859631 9.68379 0.35456 13.8636 1.94067 16.1614C2.71731 17.2993 3.6471 18.5467 4.87222 18.5029C5.41121 18.4826 5.79892 18.318 6.20017 18.1477C6.66211 17.9516 7.14199 17.748 7.89129 17.748C8.61462 17.748 9.07351 17.9463 9.51402 18.1368C9.93288 18.3178 10.3351 18.4917 10.9322 18.4811C12.2011 18.4592 12.9996 17.3431 13.7763 16.2052C14.6144 14.9838 14.9827 13.7919 15.0386 13.611L15.0452 13.59C15.0438 13.5887 15.0335 13.584 15.0152 13.5756C14.735 13.4473 12.5936 12.4666 12.573 9.83698C12.5524 7.62976 14.2716 6.51144 14.5422 6.3354L14.5422 6.33539C14.5587 6.32468 14.5698 6.31746 14.5748 6.3137C13.4809 4.6943 11.7745 4.51923 11.1838 4.47546ZM36.8128 18.4917C38.4755 18.4917 40.0178 17.6492 40.7179 16.3143H40.7726V18.3604H43.2228V9.8695C43.2228 7.40758 41.2539 5.82101 38.2239 5.82101C35.4126 5.82101 33.3343 7.42946 33.2577 9.63972H35.6423C35.8392 8.5893 36.8128 7.89996 38.1473 7.89996C39.7662 7.89996 40.6741 8.65495 40.6741 10.0446V10.9856L37.3706 11.1825C34.2969 11.3685 32.6342 12.6268 32.6342 14.8152C32.6342 17.0255 34.3516 18.4917 36.8128 18.4917ZM37.5243 16.4674C36.1132 16.4674 35.2163 15.789 35.2163 14.7495C35.2163 13.6772 36.0804 13.0535 37.7322 12.955L40.6747 12.769V13.7319C40.6747 15.3294 39.3183 16.4674 37.5243 16.4674ZM51.3511 19.0281C50.29 22.0152 49.0758 23 46.4943 23C46.2974 23 45.6411 22.9781 45.4879 22.9343V20.8882C45.652 20.9101 46.0568 20.932 46.2646 20.932C47.435 20.932 48.0914 20.4396 48.4961 19.1594L48.7367 18.4044L44.2519 5.98539H47.0194L50.1369 16.0629H50.1916L53.3091 5.98539H56L51.3511 19.0281ZM22.6146 3.5341H25.6665C27.9636 3.5341 29.2763 4.75959 29.2763 6.91514C29.2763 9.07069 27.9636 10.3071 25.6556 10.3071H22.6146V3.5341Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> {{ $t("payment1") }} </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="2" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="23" viewBox="0 0 56 23"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.4756 4.26733C8.52571 4.35487 9.57582 3.74212 10.2321 2.96525C10.8775 2.16649 11.3041 1.09419 11.1947 0C10.265 0.0437675 9.1164 0.612745 8.46008 1.4115C7.85845 2.10084 7.34433 3.21691 7.4756 4.26733ZM19.9671 18.3606V1.30218H26.3662C29.6697 1.30218 31.9778 3.57809 31.9778 6.90442C31.9778 10.2307 29.626 12.5285 26.2787 12.5285H22.6143V18.3606H19.9671ZM11.1838 4.47546C10.2587 4.4222 9.41456 4.75377 8.73273 5.02158C8.29395 5.19393 7.92239 5.33987 7.63971 5.33987C7.32248 5.33987 6.93558 5.18612 6.50117 5.0135C5.93196 4.78731 5.28119 4.5287 4.59876 4.54112C3.03453 4.563 1.57969 5.44929 0.781167 6.86079C-0.859631 9.68379 0.35456 13.8636 1.94067 16.1614C2.71731 17.2993 3.6471 18.5467 4.87222 18.5029C5.41121 18.4826 5.79892 18.318 6.20017 18.1477C6.66211 17.9516 7.14199 17.748 7.89129 17.748C8.61462 17.748 9.07351 17.9463 9.51402 18.1368C9.93288 18.3178 10.3351 18.4917 10.9322 18.4811C12.2011 18.4592 12.9996 17.3431 13.7763 16.2052C14.6144 14.9838 14.9827 13.7919 15.0386 13.611L15.0452 13.59C15.0438 13.5887 15.0335 13.584 15.0152 13.5756C14.735 13.4473 12.5936 12.4666 12.573 9.83698C12.5524 7.62976 14.2716 6.51144 14.5422 6.3354L14.5422 6.33539C14.5587 6.32468 14.5698 6.31746 14.5748 6.3137C13.4809 4.6943 11.7745 4.51923 11.1838 4.47546ZM36.8128 18.4917C38.4755 18.4917 40.0178 17.6492 40.7179 16.3143H40.7726V18.3604H43.2228V9.8695C43.2228 7.40758 41.2539 5.82101 38.2239 5.82101C35.4126 5.82101 33.3343 7.42946 33.2577 9.63972H35.6423C35.8392 8.5893 36.8128 7.89996 38.1473 7.89996C39.7662 7.89996 40.6741 8.65495 40.6741 10.0446V10.9856L37.3706 11.1825C34.2969 11.3685 32.6342 12.6268 32.6342 14.8152C32.6342 17.0255 34.3516 18.4917 36.8128 18.4917ZM37.5243 16.4674C36.1132 16.4674 35.2163 15.789 35.2163 14.7495C35.2163 13.6772 36.0804 13.0535 37.7322 12.955L40.6747 12.769V13.7319C40.6747 15.3294 39.3183 16.4674 37.5243 16.4674ZM51.3511 19.0281C50.29 22.0152 49.0758 23 46.4943 23C46.2974 23 45.6411 22.9781 45.4879 22.9343V20.8882C45.652 20.9101 46.0568 20.932 46.2646 20.932C47.435 20.932 48.0914 20.4396 48.4961 19.1594L48.7367 18.4044L44.2519 5.98539H47.0194L50.1369 16.0629H50.1916L53.3091 5.98539H56L51.3511 19.0281ZM22.6146 3.5341H25.6665C27.9636 3.5341 29.2763 4.75959 29.2763 6.91514C29.2763 9.07069 27.9636 10.3071 25.6556 10.3071H22.6146V3.5341Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> ابل باي </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="1" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24"
                                fill="none">
                                <path
                                  d="M7.88553 24C10.3894 24 12.4412 23.2168 13.7888 21.9028C14.7973 20.8934 15.3972 19.5446 15.3972 17.9782C15.3972 16.5598 14.8756 15.2893 13.9018 14.3147C12.9281 13.3401 11.5457 12.6352 9.78953 12.2959L6.91179 11.7389C5.7207 11.5127 5.04256 10.921 5.04256 10.0943C5.04256 9.01523 6.08585 8.26686 7.7725 8.26686C8.81579 8.26686 9.71128 8.60623 10.3112 9.19797C10.685 9.60696 10.9458 10.1378 11.0241 10.7295L15.1712 9.7984C15.0581 8.60624 14.5017 7.5533 13.641 6.6918C12.2934 5.343 10.2068 4.49021 7.73773 4.49021C5.45988 4.49021 3.55588 5.23858 2.24307 6.43075C1.12154 7.47498 0.486869 8.9021 0.486869 10.4685C0.486869 11.8521 0.938961 13.0094 1.83445 13.9057C2.72994 14.802 4.04275 15.4721 5.75548 15.8898L8.59844 16.5598C10.0156 16.8992 10.6502 17.4213 10.6502 18.3524C10.6502 19.5098 9.60696 20.1885 7.88553 20.1885C6.65097 20.1885 5.64246 19.7795 5.00779 19.1008C4.5557 18.6483 4.29487 18.0566 4.2601 17.3778L0 18.3089C0.113023 19.5794 0.712914 20.702 1.6084 21.5983C3.03423 23.1037 5.31208 24 7.88553 24ZM39.4103 24C42.175 24 44.305 22.9906 45.7569 21.5722C46.9132 20.4496 47.6262 19.1443 48 17.7955L43.6269 16.3336C43.4443 17.0036 43.0705 17.7172 42.4706 18.2741C41.7577 18.9442 40.7926 19.4315 39.4103 19.4315C38.1409 19.4315 36.9411 18.9442 36.0804 18.0827C35.2197 17.1864 34.6981 15.8724 34.6981 14.2277C34.6981 12.5482 35.2197 11.2777 36.0804 10.3814C36.9411 9.51994 38.0974 9.07614 39.3668 9.07614C40.7144 9.07614 41.6446 9.52864 42.3141 10.1987C42.8705 10.7643 43.2096 11.4692 43.4356 12.1827L47.8783 10.686C47.5392 9.38071 46.835 8.06671 45.783 6.98767C44.2876 5.52574 42.1228 4.48151 39.2451 4.48151C36.5934 4.48151 34.2025 5.49093 32.4811 7.21392C30.7857 8.97172 29.7424 11.3996 29.7424 14.2451C29.7424 17.0906 30.8292 19.5185 32.5767 21.2763C34.2981 22.9906 36.7238 24 39.4103 24ZM24.326 24C26.2648 24 27.6472 23.3996 28.2471 22.8774V18.8397C27.795 19.1791 26.8995 19.5881 25.7432 19.5881C24.9172 19.5881 24.326 19.3967 23.8739 18.9877C23.5001 18.6135 23.3175 17.9782 23.3175 17.1167V0H18.388V5.04713H28.2471V9.83321H18.3793V18.3176C18.3793 20.0406 18.9009 21.4242 19.8399 22.3901C20.8832 23.4431 22.4133 24 24.326 24Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> اس تي سي </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="2" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24.9605 6.40039H7.04055C4.56631 6.40039 2.56055 8.40615 2.56055 10.8804V11.5204H29.4405V10.8804C29.4405 8.40615 27.4348 6.40039 24.9605 6.40039ZM2.56055 22.4004V16.6404H29.4405V22.4004C29.4405 24.8746 27.4348 26.8804 24.9605 26.8804H7.04055C4.56631 26.8804 2.56055 24.8746 2.56055 22.4004ZM24.9605 23.0404H19.8405C19.4871 23.0404 19.2005 22.7539 19.2005 22.4004C19.2005 22.0469 19.4871 21.7604 19.8405 21.7604H24.9605C25.314 21.7604 25.6005 22.0469 25.6005 22.4004C25.6005 22.7539 25.314 23.0404 24.9605 23.0404ZM2.56055 15.3604V12.8004H29.4405V15.3604H2.56055Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> البطاقة الائتمانية </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="cards-inputs mt-3">
                    <span> اختر البطاقة </span>
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 my-3">
                      <label class="img-btn">
                        <input type="radio" name="card-input" value="1" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>

                      <label class="img-btn">
                        <input type="radio" name="card-input" value="2" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>

                      <label class="img-btn">
                        <input type="radio" name="card-input" value="3" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>
                    </div>
                  </div>

                  <div class="row main-inputs-container">
                    <div class="col-12">
                      <div class="inputs">
                        <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                          <div class="main-input">
                            <label for="">
                              اسم حامل البطاقة <span>*</span>
                            </label>
                            <input type="text" placeholder="مثال : محمد" />
                          </div>
                          <div class="main-input">
                            <label for=""> رقم البطاقة </label>
                            <input type="text" placeholder="مثال : محمد" />
                          </div>
                        </div>
                        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row  gap-3">
                          <div class="main-input">
                            <label for=""> تاريخ الانتهاء<span>*</span> </label>
                            <input type="text" placeholder="+201066333725" />
                          </div>
                          <div class="main-input">
                            <label for=""> CVV</label>
                            <input type="text" placeholder="مثال : m.info@icloud.com" />
                          </div>
                        </div>
                      </div>

                      <v-checkbox label="حفظ البيانات لاستخدامها مره أخرى" color="#DCBA95"></v-checkbox>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-12 col-xl-4 col-lg-4">
              <checkProduct :arrData="arrData" :myFunction="checkoutFunc2" :pending="pending" />
            </div>
          </div>
        </template>
        <template v-slot:item.4>
          <div class="row">
            <div class="col-12 col-xl-8 col-lg-8">
              <div class="row">
                <div class="col-12">
                  <div class="show-card">
                    <span class="word px-3"> {{ $t("del to") }}</span>
                    <div class="card-container">
                      <div class="head d-flex align-items-center gap-2">
                        <div class="image">
                          <img src="~/assets/images/kk.jpg" alt="" />
                        </div>
                        <div class="text d-flex flex-column">
                          <h6>
                            {{ userdata1.first_name }} {{ userdata1.last_name }}
                          </h6>
                          <span class="text-word"> {{ userdata1.email }} </span>
                        </div>
                      </div>
                      <div class="details d-flex flex-column gap-3 mt-3">
                        <div class="d-flex align-items-center gap-2">
                          <i class="fa-solid fa-house"></i>
                          <span class="text-word">
                            {{ userdata2.city.name }} .
                            {{ userdata2.street_name }}
                            {{ userdata2.building_number }}
                            {{ userdata2.district }} . {{ userdata2.marks }}
                          </span>
                        </div>
                        <div
                          class="d-flex w-100 align-items-center mt-2 flex-column flex-xl-row flex-lg-row gap-3 justify-content-between">
                          <div class="d-flex align-items-center gap-2">
                            <i class="fa-solid fa-phone"></i>
                            <span class="text-word">
                              {{ userdata1.phone }}
                            </span>
                          </div>
                          <button @click="store.state.step = 1" class="d-flex align-items-center gap-2">
                            <span class="edit"> {{ $t("edit") }} </span>
                            <img src="~/assets/images/edit.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="show-card">
                    <span class="word px-3"> {{ $t("payment method") }}</span>
                    <div class="card-container">
                      <div
                        class="head d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 justify-content-between">
                        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48"
                            fill="none">
                            <rect x="0.5" y="0.5" width="103" height="47" rx="5.5" stroke="#2566AF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M64.054 15.7749L63.3971 19.5915C61.4272 18.5005 56.9442 18.2423 56.9437 20.2519C56.9437 21.0502 57.9581 21.5992 59.1806 22.261C61.0347 23.2646 63.3677 24.5274 63.3677 27.3122C63.3677 31.762 58.6288 33.397 55.4875 33.397C52.3472 33.397 50.2918 32.3934 50.2918 32.3934L50.9761 28.4028C52.8608 29.9236 58.5716 30.3558 58.5716 27.944C58.5716 26.9306 57.4474 26.3329 56.1438 25.6399C54.3451 24.6836 52.2048 23.5458 52.2048 20.8837C52.2048 16.0036 57.6295 15 59.9138 15C62.0269 15 64.054 15.7749 64.054 15.7749ZM38.9799 15.3174L34.5914 27.5417L34.0721 24.9093L34.0726 24.9103L32.5237 16.9177C32.5237 16.9177 32.3364 15.3174 30.3401 15.3174H23.0851L23 15.6184C23 15.6184 25.2186 16.0824 27.8151 17.6498L31.8143 33.0907H36.6104L43.934 15.3174H38.9799ZM47.4548 33.0902H42.8516L45.7285 15.3174H50.3322L47.4548 33.0902ZM79.4132 33.0907H75.1864L74.6473 30.4507H68.7955L67.8359 33.0907H63.0374L69.9027 16.6419C69.9027 16.6419 70.3189 15.3174 72.0276 15.3174H75.728L79.4132 33.0907ZM70.1215 26.8033L72.5402 20.1523L73.9008 26.8033H70.1215Z"
                              fill="#2566AF" />
                          </svg>
                          <div class="d-flex flex-column">
                            <h6 style="font-size: 14px">
                              {{ $t("payment1") }}
                            </h6>
                            <span class="text-word">
                              {{ userdata1.phone }}</span>
                          </div>
                        </div>

                        <button @click="store.state.step = 3" class="d-flex align-items-center gap-2">
                          <span class="edit"> {{ $t("edit") }}</span>
                          <img src="~/assets/images/edit.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="show-card">
                    <span class="word px-3"> {{ $t("ship") }}</span>
                    <div class="card-container">
                      <div
                        class="head d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 justify-content-between">
                        <div class="d-flex align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_505_10232)">
                              <path
                                d="M2.09266 8.64355H2.08187C1.4779 8.64355 0.988281 9.13317 0.988281 9.73715V9.74793C0.988281 10.3519 1.4779 10.8415 2.08187 10.8415H2.09266C2.69663 10.8415 3.18625 10.3519 3.18625 9.74793V9.73715C3.18625 9.13317 2.69663 8.64355 2.09266 8.64355Z"
                                fill="#DCBA95" />
                              <path
                                d="M23.9426 8.26265C23.9126 7.01624 23.2086 5.76468 22.0296 5.1464C20.0895 4.1189 17.9595 3.24046 16.0095 2.56827C15.2213 2.29756 14.3653 2.29756 13.5771 2.56827C12.9926 2.77124 12.3954 2.99015 11.7917 3.22452C14.3792 4.07343 17.4115 5.21999 20.2536 6.6239C20.5245 6.75735 20.7556 6.95952 20.924 7.21022C21.0924 7.46092 21.192 7.75139 21.2131 8.05265C21.2909 9.46499 21.3284 10.9219 21.3195 12.375C21.3195 12.5301 21.1643 12.63 21.0382 12.555L20.3525 12.1453C20.32 12.1261 20.2816 12.1196 20.2446 12.1273C20.2077 12.1349 20.1749 12.156 20.1528 12.1866C19.854 12.5784 19.5478 12.9753 19.234 13.3772C19.2088 13.4119 19.173 13.4376 19.132 13.4504C19.0911 13.4633 19.0471 13.4626 19.0065 13.4485C18.9659 13.4345 18.931 13.4077 18.9068 13.3722C18.8826 13.3368 18.8705 13.2945 18.8721 13.2516C18.8909 11.7937 18.8764 10.3158 18.8304 8.88702C18.8166 8.57586 18.7162 8.27474 18.5404 8.01759C18.3647 7.76044 18.1206 7.55747 17.8357 7.43155C14.8765 6.1064 11.9421 5.04093 9.43621 4.22811H9.42871H9.42496H2.64777C2.35782 4.22824 2.07978 4.34351 1.87479 4.54859C1.6698 4.75366 1.55465 5.03175 1.55465 5.32171V5.33296C1.55465 5.62287 1.66982 5.90091 1.87482 6.10591C2.07982 6.31092 2.35786 6.42608 2.64777 6.42608H6.19668V6.42936C6.47213 6.44949 6.72976 6.57309 6.91783 6.77533C7.1059 6.97758 7.21049 7.2435 7.21059 7.51968V7.53093C7.21065 7.6747 7.18236 7.81707 7.12734 7.9499C7.07232 8.08272 6.99165 8.2034 6.88995 8.30502C6.78824 8.40663 6.6675 8.4872 6.53463 8.5421C6.40175 8.59701 6.25936 8.62517 6.11559 8.62499H4.93293C4.64322 8.62499 4.36534 8.73995 4.1603 8.94463C3.95527 9.14932 3.83983 9.42699 3.83934 9.71671V9.72796C3.83946 10.018 3.95472 10.296 4.15978 10.5011C4.36484 10.7062 4.64293 10.8214 4.93293 10.8216H6.11559C6.25918 10.8216 6.40136 10.8498 6.53402 10.9048C6.66667 10.9598 6.7872 11.0403 6.88871 11.1419C6.99022 11.2434 7.07073 11.364 7.12564 11.4967C7.18054 11.6294 7.20877 11.7716 7.20871 11.9151V11.9259C7.20877 12.0695 7.18054 12.2117 7.12564 12.3444C7.07073 12.4771 6.99022 12.5976 6.88871 12.6992C6.7872 12.8007 6.66667 12.8813 6.53402 12.9363C6.40136 12.9912 6.25918 13.0195 6.11559 13.0195H1.08871C0.798672 13.0195 0.520512 13.1347 0.315423 13.3398C0.110335 13.5449 -0.00488281 13.8231 -0.00488281 14.1131V14.1239C-0.00488281 14.4139 0.110335 14.6921 0.315423 14.8972C0.520512 15.1023 0.798672 15.2175 1.08871 15.2175H6.11559C6.25928 15.2176 6.40155 15.2459 6.53427 15.301C6.66699 15.3561 6.78755 15.4368 6.88907 15.5385C6.99059 15.6402 7.07107 15.7609 7.12592 15.8937C7.18076 16.0265 7.2089 16.1688 7.20871 16.3125V16.3237C7.20871 16.6137 7.09354 16.8917 6.88854 17.0967C6.68354 17.3017 6.4055 17.4169 6.11559 17.4169H4.11871C3.82875 17.417 3.55071 17.5323 3.34573 17.7373C3.14074 17.9424 3.02559 18.2205 3.02559 18.5105V18.5217C3.02559 18.8117 3.14074 19.0898 3.34573 19.2948C3.55071 19.4999 3.82875 19.6152 4.11871 19.6153H9.08137C10.5467 20.3005 12.0474 20.9073 13.5771 21.4331C14.3653 21.7038 15.2213 21.7038 16.0095 21.4331C17.9595 20.7609 20.0876 19.8825 22.0296 18.855C23.2086 18.2367 23.9126 16.9851 23.9426 15.7387C24.0195 13.2462 24.0195 10.7542 23.9426 8.26265Z"
                                fill="#DCBA95" />
                            </g>
                            <defs>
                              <clipPath id="clip0_505_10232">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div class="d-flex flex-column">
                            <h6 style="font-size: 14px">
                              {{
                                chooseCity == 1
                                ? $t("normal shipping")
                                : $t("fast shipp")
                              }}
                            </h6>
                            <span class="text-word">
                              وقت التسليم المقدر 20 يناير - 04 مايو
                            </span>
                          </div>
                        </div>

                        <button @click="store.state.step = 2" class="d-flex align-items-center gap-2">
                          <span class="edit"> {{ $t("edit") }}</span>
                          <img src="~/assets/images/edit.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-xl-4 col-lg-4">
              <checkProduct :arrData="arrData" :myFunction="checkoutFunc3" :pending="pending" />
            </div>
          </div>
        </template>
      </v-stepper> -->
      <final-order
        v-if="finalStep == 2"
        :finalObj="finalObj"
        :arrData="arrData"
      />

      <div v-if="finalStep == 1" class="custom-stepper">
        <checkHeader />

        <div class="main-stepper">
          <div v-if="store.state.step == 1">
            <div class="row">
              <div class="col-12 col-xl-8 col-lg-8">
                <div class="form-box">
                  <div class="first-info d-flex flex-column gap-3">
                    <div
                      class="radio-inputs flex-column flex-xl-row flex-lg-row d-flex align-items-center gap-3"
                    >
                      <label>
                        <input
                          type="radio"
                          v-model="personalorGift"
                          name="card_id"
                          checked
                          value="1"
                        />
                        <div class="radio-input">
                          <div
                            class="head d-flex align-items-center justify-content-between"
                          >         

                            <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M18 5.25H2C1.0335 5.25 0.25 6.0335 0.25 7V9C0.25 9.9665 1.0335 10.75 2 10.75H18C18.9665 10.75 19.75 9.9665 19.75 9V7C19.75 6.0335 18.9665 5.25 18 5.25Z" fill="#919EAB"/>
  <path d="M11.4147 6.751C11.0948 6.78869 10.7706 6.73981 10.4759 6.60947C10.1813 6.47913 9.92707 6.27211 9.73974 6.01C9.44974 5.494 9.62274 4.895 10.1397 3.115C10.3557 2.389 11.1507 0.25 13.1817 0.25C13.9954 0.251851 14.7751 0.576092 15.3502 1.1517C15.9252 1.72731 16.2487 2.50736 16.2497 3.321C16.2497 5.235 14.2267 6.035 13.4637 6.335C12.811 6.59471 12.1171 6.73559 11.4147 6.751ZM11.1207 5.231C11.7284 5.27407 12.3377 5.17548 12.9007 4.943C13.7667 4.601 14.7477 4.111 14.7477 3.319C14.7467 2.9032 14.581 2.50473 14.287 2.21072C13.993 1.9167 13.5945 1.75106 13.1787 1.75C12.1857 1.75 11.7147 3.069 11.5947 3.473C11.3807 4.213 11.1877 4.885 11.1227 5.233L11.1207 5.231Z" fill="#919EAB"/>
  <path d="M8.566 6.74712C7.86939 6.72257 7.18227 6.57777 6.535 6.31912C5.853 6.04911 3.778 5.22811 3.75 3.31911C3.75462 2.91472 3.84017 2.51534 4.00161 2.14453C4.16305 1.77373 4.39712 1.43901 4.69 1.16011C4.9652 0.86948 5.29735 0.638678 5.66572 0.48211C6.03408 0.325542 6.43076 0.246568 6.831 0.250114C8.425 0.292114 9.182 1.77711 9.79 2.97011C10.227 3.82811 10.89 5.12411 10.185 6.07112C9.98853 6.30465 9.73909 6.48784 9.45747 6.60543C9.17585 6.72302 8.8702 6.7716 8.566 6.74712ZM6.766 1.74711C6.37662 1.77106 6.01107 1.94275 5.744 2.22711C5.5937 2.36326 5.47206 2.52802 5.38621 2.71175C5.30036 2.89547 5.25201 3.09448 5.244 3.29711C5.256 4.09711 6.231 4.58511 7.08 4.92111C7.66564 5.22079 8.33678 5.30909 8.98 5.17111C9.064 5.01612 8.888 4.50312 8.453 3.65012L9.12 3.30812L8.452 3.64912C7.89 2.54911 7.441 1.76411 6.79 1.74911L6.766 1.74711Z" fill="#919EAB"/>
  <path d="M8.75 11.75H11.25V21.75H8.75V11.75Z" fill="#919EAB"/>
  <path d="M7.25 11.7504V21.7504H4C3.63879 21.7507 3.28107 21.6797 2.94731 21.5416C2.61355 21.4035 2.31028 21.2009 2.05487 20.9455C1.79946 20.6901 1.5969 20.3868 1.4588 20.0531C1.32069 19.7193 1.24974 19.3616 1.25 19.0004V11.6504C1.49495 11.7144 1.74684 11.748 2 11.7504H7.25Z" fill="#919EAB"/>
  <path d="M18.75 11.6504V19.0004C18.7503 19.3616 18.6793 19.7193 18.5412 20.0531C18.4031 20.3868 18.2005 20.6901 17.9451 20.9455C17.6897 21.2009 17.3865 21.4035 17.0527 21.5416C16.7189 21.6797 16.3612 21.7507 16 21.7504H12.75V11.7504H18C18.2532 11.748 18.5051 11.7144 18.75 11.6504Z" fill="#919EAB"/>
</svg>
                            <svg
                              class="checked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="22"
                                height="22"
                                rx="11"
                                stroke="#DCBA95"
                                stroke-width="2"
                              />
                              <rect
                                x="4.28516"
                                y="4.28516"
                                width="15.4286"
                                height="15.4286"
                                rx="7.71429"
                                fill="#DCBA95"
                              />
                            </svg>

                            <svg
                              class="unchecked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <rect
                                x="0.925781"
                                y="0.5"
                                width="22.6712"
                                height="23"
                                rx="11.3356"
                                stroke="#EBEAED"
                              />
                            </svg>
                          </div>
                          <div class="text">
                            <h4>{{ $t("gift") }}</h4>
                            <span>
                              {{ $t("giftt1") }}
                            </span>
                          </div>
                        </div>
                      </label>
                      <label>
                        <input
                          type="radio"
                          v-model="personalorGift"
                          name="card_id"
                          value="2"
                        />
                        <div class="radio-input">
                          <div
                            class="head d-flex align-items-center justify-content-between"
                          >
                            <svg
                              class="main-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z"
                                fill=""
                              />
                              <path
                                d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z"
                                fill=""
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z"
                                fill=""
                              />
                            </svg>

                            <svg
                              class="checked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="22"
                                height="22"
                                rx="11"
                                stroke="#DCBA95"
                                stroke-width="2"
                              />
                              <rect
                                x="4.28516"
                                y="4.28516"
                                width="15.4286"
                                height="15.4286"
                                rx="7.71429"
                                fill="#DCBA95"
                              />
                            </svg>

                            <svg
                              class="unchecked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <rect
                                x="0.925781"
                                y="0.5"
                                width="22.6712"
                                height="23"
                                rx="11.3356"
                                stroke="#EBEAED"
                              />
                            </svg>
                          </div>
                          <div class="text">
                            <h4>{{ $t("personaly") }}</h4>
                            <span> {{ $t("giftt2") }}</span>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div v-if="personalorGift == 2" class="inputs">
                      <div class="d-flex flex-column gap-5" v-if="auth">
                        <div
                          class="d-flex my-4 flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for="">
                              {{ $t("first name") }}
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              readonly
                              v-model="userdata1.first_name"
                              placeholder="مثال : محمد"
                            />
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("last name") }} <span>*</span>
                            </label>
                            <input
                              type="text"
                              readonly
                              v-model="userdata1.last_name"
                              placeholder="مثال : محمد"
                            />
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for=""> {{ $t("phone") }} </label>
                            <input
                              type="tel"
                              readonly
                              v-model="userdata1.phone"
                              placeholder="+201066333725"
                            />
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("email") }} <span>*</span>
                            </label>
                            <input
                              type="email"
                              readonly
                              v-model="userdata1.email"
                              placeholder="مثال : m.info@icloud.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column gap-5" v-else>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for="">
                              {{ $t("first name") }}
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              v-model="userdata1.first_name"
                              placeholder="مثال : محمد"
                            />
                            <span
                              class="error-msg"
                              v-if="v$.first_name.$error"
                              >{{ v$.first_name.$errors[0].$message }}</span
                            >
                            <span class="error-msg2" v-if="errors.first_name">{{
                              errors.first_name[0]
                            }}</span>
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("last name") }} <span>*</span>
                            </label>
                            <input
                              type="text"
                              v-model="userdata1.last_name"
                              placeholder="مثال : محمد"
                            />
                            <span
                              class="error-msg"
                              v-if="v$.last_name.$error"
                              >{{ v$.last_name.$errors[0].$message }}</span
                            >
                            <span class="error-msg2" v-if="errors.last_name">{{
                              errors.last_name[0]
                            }}</span>
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for=""> {{ $t("phone") }} </label>
                            <input
                              type="tel"
                              v-model="userdata1.phone"
                              placeholder="+201066333725"
                            />
                            <span class="error-msg" v-if="v$.phone.$error">{{
                              v$.phone.$errors[0].$message
                            }}</span>
                            <span class="error-msg2" v-if="errors.phone">{{
                              errors.phone[0]
                            }}</span>
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("email") }} <span>*</span>
                            </label>
                            <input
                              type="email"
                              v-model="userdata1.email"
                              placeholder="مثال : m.info@icloud.com"
                            />
                            <span class="error-msg" v-if="v$.email.$error">{{
                              v$.email.$errors[0].$message
                            }}</span>
                            <span class="error-msg2" v-if="errors.email">{{
                              errors.email[0]
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="personalorGift == 1" class="inputs">
                      <h4>{{ $t("main gift") }}</h4>
                      <div class="d-flex flex-column gap-5" v-if="auth">
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for="">
                              {{ $t("first name") }}
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              readonly
                              v-model="userdata1.first_name"
                              placeholder="مثال : محمد"
                            />
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("last name") }} <span>*</span>
                            </label>
                            <input
                              type="text"
                              readonly
                              v-model="userdata1.last_name"
                              placeholder="مثال : محمد"
                            />
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for=""> {{ $t("phone") }}</label>
                            <input
                              type="tel"
                              readonly
                              v-model="userdata1.phone"
                              placeholder="+201066333725"
                            />
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("email") }} <span>*</span>
                            </label>
                            <input
                              type="email"
                              readonly
                              v-model="userdata1.email"
                              placeholder="مثال : m.info@icloud.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="d-flex flex-column gap-5" v-else>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for="">
                              {{ $t("first name") }}
                              <span>*</span>
                            </label>
                            <input
                              type="text"
                              v-model="userdata1.first_name"
                              placeholder="مثال : محمد"
                            />
                            <span
                              class="error-msg"
                              v-if="v$.first_name.$error"
                              >{{ v$.first_name.$errors[0].$message }}</span
                            >
                            <span class="error-msg2" v-if="errors.first_name">{{
                              errors.first_name[0]
                            }}</span>
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("last name") }} <span>*</span>
                            </label>
                            <input
                              type="text"
                              v-model="userdata1.last_name"
                              placeholder="مثال : محمد"
                            />
                            <span
                              class="error-msg"
                              v-if="v$.last_name.$error"
                              >{{ v$.last_name.$errors[0].$message }}</span
                            >
                            <span class="error-msg2" v-if="errors.last_name">{{
                              errors.last_name[0]
                            }}</span>
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                        >
                          <div class="main-input">
                            <label for=""> {{ $t("phone") }} </label>
                            <input
                              type="tel"
                              v-model="userdata1.phone"
                              placeholder="+201066333725"
                            />
                            <span class="error-msg" v-if="v$.phone.$error">{{
                              v$.phone.$errors[0].$message
                            }}</span>
                            <span class="error-msg2" v-if="errors.phone">{{
                              errors.phone[0]
                            }}</span>
                          </div>
                          <div class="main-input">
                            <label for="">
                              {{ $t("email") }} <span>*</span>
                            </label>
                            <input
                              type="email"
                              v-model="userdata1.email"
                              placeholder="مثال : m.info@icloud.com"
                            />
                            <span class="error-msg" v-if="v$.email.$error">{{
                              v$.email.$errors[0].$message
                            }}</span>
                            <span class="error-msg2" v-if="errors.email">{{
                              errors.email[0]
                            }}</span>
                          </div>
                        </div>
                      </div>
                      <h4 class="mt-3">{{ $t("main gift1") }}</h4>
                      <div
                        class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                      >
                        <div class="main-input">
                          <label for="">
                            {{ $t("first name") }}
                            <span>*</span>
                          </label>
                          <input
                            type="text"
                            v-model="gift_owner_name"
                            placeholder="مثال : محمد"
                          />
                          <span
                            class="error-msg2"
                            v-if="errors.gift_owner_name"
                            >{{ errors.gift_owner_name[0] }}</span
                          >
                        </div>
                        <div class="main-input">
                          <label for=""> {{ $t("phone") }} </label>
                          <input
                            type="tel"
                            v-model="gift_owner_phone"
                            placeholder="+201066333725"
                          />
                          <span
                            class="error-msg2"
                            v-if="errors.gift_owner_phone"
                            >{{ errors.gift_owner_phone[0] }}</span
                          >
                        </div>
                      </div>
                      <h4>{{ $t("gift text") }}</h4>
                      <div class="main-input textarea">
                        <textarea
                          name=""
                          v-model="gift_text"
                          :placeholder="$t('gift text1')"
                          id=""
                          cols="20"
                          rows="5"
                        ></textarea>

                        <span class="error-msg2" v-if="errors.gift_text">{{
                          errors.gift_text[0]
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-xl-4 col-lg-4">
                <checkProduct
                  :arrData="arrData"
                  :newArr="newArr"
                  :myFunction="checkoutFunc"
                  :pending="pending"
                  :cartBtn="cartBtn"
                  :text="text1"
                />
              </div>
            </div>
          </div>

          <div v-if="store.state.step == 2">
            <div class="row">
              <div class="col-12 col-xl-8 col-lg-8">
                <form class="form-box">
                  <div class="first-info d-flex flex-column gap-3">
                    <form
                      @submit.prevent
                      class="radio-inputs d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3"
                    >
                      <label for="first-input2">
                        <input
                          id="first-input2"
                          v-model="chooseCity"
                          name="card"
                          type="radio"
                          checked
                          value="1"
                        />
                        <div class="radio-input">
                          <div
                            class="head d-flex align-items-center justify-content-between"
                          >
                            <svg
                              class="main-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="18"
                              viewBox="0 0 28 18"
                              fill="none"
                            >
                              <path
                                d="M23.0988 13.1685C21.7864 13.1685 20.7188 14.2525 20.7188 15.5843C20.7188 16.9164 21.7864 18.0001 23.0988 18.0001C24.4108 18.0001 25.4788 16.9164 25.4788 15.5843C25.4788 14.2525 24.4108 13.1685 23.0988 13.1685ZM23.0988 16.2948C22.7127 16.2948 22.3988 15.9762 22.3988 15.5843C22.3988 15.1924 22.7127 14.8738 23.0988 14.8738C23.4849 14.8738 23.7988 15.1924 23.7988 15.5843C23.7988 15.9762 23.4849 16.2948 23.0988 16.2948Z"
                                fill="#919EAB"
                              />
                              <path
                                d="M22.8713 3.12598H18.7592C18.4498 3.12598 18.1992 3.38066 18.1992 3.69441V14.7788C18.1992 15.0926 18.4498 15.3473 18.7592 15.3473H19.3531C19.6303 15.3473 19.8759 15.1446 19.9117 14.8656C20.1315 13.1563 21.4747 12.0962 23.0995 12.0962C24.7243 12.0962 26.0675 13.1563 26.2873 14.8656C26.3231 15.1447 26.5684 15.3473 26.8459 15.3473H27.4392C27.7483 15.3473 27.9992 15.0926 27.9992 14.7788V9.23663C27.9992 9.10307 27.953 8.97401 27.8687 8.87198L23.3008 3.32976C23.1944 3.20075 23.0371 3.12598 22.8713 3.12598ZM19.3192 7.67344V4.83128C19.3192 4.51752 19.5698 4.26284 19.8792 4.26284H22.346C22.5121 4.26284 22.6697 4.33789 22.7761 4.46746L25.1093 7.30962C25.4131 7.67994 25.1538 8.24187 24.679 8.24187H19.8792C19.5698 8.24187 19.3192 7.98752 19.3192 7.67344Z"
                                fill="#919EAB"
                              />
                              <path
                                d="M0.560001 15.3477H1.99391C2.27111 15.3477 2.51666 15.145 2.55249 14.866C2.77228 13.1567 4.11546 12.0966 5.74028 12.0966C7.36511 12.0966 8.70829 13.1567 8.92808 14.866C8.9639 15.1451 9.20918 15.3477 9.48666 15.3477H16.52C16.8292 15.3477 17.08 15.093 17.08 14.7793V0.568433C17.08 0.25468 16.8291 0 16.52 0H0.560001C0.250582 0 0 0.25468 0 0.568433V14.7793C0 15.0931 0.250582 15.3477 0.560001 15.3477Z"
                                fill="#919EAB"
                              />
                              <path
                                d="M5.73938 13.1685C4.42704 13.1685 3.35938 14.2525 3.35938 15.5843C3.35938 16.9164 4.42704 18.0001 5.73938 18.0001C7.05145 18.0001 8.11938 16.9164 8.11938 15.5843C8.11938 14.2525 7.05145 13.1685 5.73938 13.1685ZM5.73938 16.2948C5.35328 16.2948 5.03938 15.9762 5.03938 15.5843C5.03938 15.1924 5.35328 14.8738 5.73938 14.8738C6.12548 14.8738 6.43938 15.1924 6.43938 15.5843C6.43938 15.9762 6.12548 16.2948 5.73938 16.2948Z"
                                fill="#919EAB"
                              />
                            </svg>

                            <svg
                              class="checked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="22"
                                height="22"
                                rx="11"
                                stroke="#DCBA95"
                                stroke-width="2"
                              />
                              <rect
                                x="4.28516"
                                y="4.28516"
                                width="15.4286"
                                height="15.4286"
                                rx="7.71429"
                                fill="#DCBA95"
                              />
                            </svg>

                            <svg
                              class="unchecked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <rect
                                x="0.925781"
                                y="0.5"
                                width="22.6712"
                                height="23"
                                rx="11.3356"
                                stroke="#EBEAED"
                              />
                            </svg>
                          </div>
                          <div class="text">
                            <h4>{{ $t("normal shipping") }}</h4>
                            <span>
                              {{ $t("normal shipping1") }}
                            </span>
                          </div>
                        </div>
                      </label>
                      <label for="second-input2">
                        <input
                          id="second-input2"
                          v-model="chooseCity"
                          name="card"
                          type="radio"
                          value="2"
                        />
                        <div class="radio-input">
                          <div
                            class="head d-flex align-items-center justify-content-between"
                          >
                            <svg
                              class="main-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_550_23886)">
                                <path
                                  d="M2.09266 8.64355H2.08187C1.4779 8.64355 0.988281 9.13317 0.988281 9.73715V9.74793C0.988281 10.3519 1.4779 10.8415 2.08187 10.8415H2.09266C2.69663 
      10.8415 3.18625 10.3519 3.18625 9.74793V9.73715C3.18625 9.13317 2.69663 8.64355 2.09266 8.64355Z"
                                  fill=""
                                />
                                <path
                                  d="M23.9416 8.26265C23.9116 7.01624 23.2076 5.76468 22.0287 5.1464C20.0885 4.1189 17.9585 3.24046 16.0085 2.56827C15.2203 2.29756 14.3644 2.29756 13.5762 2.56827C12.9916 2.77124 12.3945 2.99015 11.7907 3.22452C14.3782 4.07343 17.4105 5.21999 20.2526 6.6239C20.5235 6.75735 20.7546 6.95952 20.923 7.21022C21.0914 7.46092 21.1911 7.75139 21.2121 8.05265C21.2899 9.46499 21.3274 10.9219 21.3185 12.375C21.3185 12.5301 21.1634 12.63 21.0373 12.555L20.3515 12.1453C20.319 12.1261 20.2806 12.1196 20.2437 12.1273C20.2067 12.1349 20.174 12.156 20.1518 12.1866C19.853 12.5784 19.5468 12.9753 19.233 13.3772C19.2078 13.4119 19.172 13.4376 19.1311 13.4504C19.0901 13.4633 19.0461 13.4626 19.0055 13.4485C18.965 13.4345 18.93 13.4077 18.9058 13.3722C18.8816 13.3368 18.8695 13.2945 18.8712 13.2516C18.8899 11.7937 18.8754 10.3158 18.8295 8.88702C18.8156 8.57586 18.7152 8.27474 18.5394 8.01759C18.3637 7.76044 18.1196 7.55747 17.8348 7.43155C14.8755 6.1064 11.9412 5.04093 9.43523 4.22811H9.42773H9.42398H2.6468C2.35684 4.22824 2.0788 4.34351 1.87381 4.54859C1.66883 4.75366 1.55367 5.03175 1.55367 5.32171V5.33296C1.55367 5.62287 1.66884 5.90091 1.87384 6.10591C2.07884 6.31092 2.35688 6.42608 2.6468 6.42608H6.1957V6.42936C6.47115 6.44949 6.72878 6.57309 6.91685 6.77533C7.10493 6.97758 7.20952 7.2435 7.20961 7.51968V7.53093C7.20967 7.6747 7.18138 7.81707 7.12636 7.9499C7.07135 8.08272 6.99068 8.2034 6.88897 8.30502C6.78727 8.40663 6.66652 8.4872 6.53365 8.5421C6.40078 8.59701 6.25838 8.62517 6.11461 8.62499H4.93195C4.64224 8.62499 4.36436 8.73995 4.15933 8.94463C3.95429 9.14932 3.83886 9.42699 3.83836 9.71671V9.72796C3.83848 10.018 3.95374 10.296 4.1588 10.5011C4.36386 10.7062 4.64195 10.8214 4.93195 10.8216H6.11461C6.2582 10.8216 6.40038 10.8498 6.53304 10.9048C6.66569 10.9598 6.78622 11.0403 6.88773 11.1419C6.98924 11.2434 7.06975 11.364 7.12466 11.4967C7.17957 11.6294 7.2078 11.7716 7.20773 11.9151V11.9259C7.2078 12.0695 7.17957 12.2117 7.12466 12.3444C7.06975 12.4771 6.98924 12.5976 6.88773 12.6992C6.78622 12.8007 6.66569 12.8813 6.53304 12.9363C6.40038 12.9912 6.2582 13.0195 6.11461 13.0195H1.08773C0.797695 13.0195 0.519535 13.1347 0.314447 13.3398C0.109358 13.5449 -0.00585937 13.8231 -0.00585938 14.1131V14.1239C-0.00585937 14.4139 0.109358 14.6921 0.314447 14.8972C0.519535 15.1023 0.797695 15.2175 1.08773 15.2175H6.11461C6.2583 15.2176 6.40057 15.2459 6.53329 15.301C6.66601 15.3561 6.78657 15.4368 6.88809 15.5385C6.98961 15.6402 7.07009 15.7609 7.12494 15.8937C7.17978 16.0265 7.20792 16.1688 7.20773 16.3125V16.3237C7.20773 16.6137 7.09257 16.8917 6.88757 17.0967C6.68257 17.3017 6.40452 17.4169 6.11461 17.4169H4.11773C3.82778 17.417 3.54974 17.5323 3.34475 17.7373C3.13976 17.9424 3.02461 18.2205 3.02461 18.5105V18.5217C3.02461 18.8117 3.13976 19.0898 3.34475 19.2948C3.54974 19.4999 3.82778 19.6152 4.11773 19.6153H9.08039C10.5457 20.3005 12.0464 20.9073 13.5762 21.4331C14.3644 21.7038 15.2203 21.7038 16.0085 21.4331C17.9585 20.7609 20.0866 19.8825 22.0287 18.855C23.2076 18.2367 23.9116 16.9851 23.9416 15.7387C24.0185 13.2462 24.0185 10.7542 23.9416 8.26265Z"
                                  fill=""
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_550_23886">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <svg
                              class="checked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="22"
                                height="22"
                                rx="11"
                                stroke="#DCBA95"
                                stroke-width="2"
                              />
                              <rect
                                x="4.28516"
                                y="4.28516"
                                width="15.4286"
                                height="15.4286"
                                rx="7.71429"
                                fill="#DCBA95"
                              />
                            </svg>

                            <svg
                              class="unchecked-svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                            >
                              <rect
                                x="0.925781"
                                y="0.5"
                                width="22.6712"
                                height="23"
                                rx="11.3356"
                                stroke="#EBEAED"
                              />
                            </svg>
                          </div>
                          <div class="text">
                            <h4>{{ $t("fast shipp") }}</h4>
                            <span>
                              {{ $t("fast shipp1") }}
                            </span>
                          </div>
                        </div>
                      </label>
                    </form>

                    <!-- <div class="inputs address">
                    <h4>العنوانين المحفوظة</h4>
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3">
                      <div class="main-input">
                        <Dropdown @click="dropDownActive += 1" :class="{ active: dropDownActive == 1 }"
                          v-model="selectedCountry" :options="countries" filter optionLabel="name"
                          placeholder="مثال : مصرف الجارحي" class="">
                          <template #option="slotProps">
                            <div class="flex align-items-center">
                              <div>{{ slotProps.option.name }}</div>
                            </div>
                          </template>
                        </Dropdown>
                      </div>
                    </div>
                  </div> -->
                    <div class="row main-inputs-container">
                      <div class="col-12 col-xl-7 col-lg-7">
                        <div class="inputs gap-3">
                          <div
                            class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3"
                          >
                            <div class="main-input">
                              <label for="">
                                {{ $t("city") }}
                                <span>*</span>
                              </label>
                              <Dropdown
                                v-if="chooseCity == 1"
                                v-model="selectedCity1"
                                :options="normalCity"
                                filter
                                optionLabel="name"
                                placeholder="مثال : الرياض"
                                class=""
                              >
                                <template #option="slotProps">
                                  <div class="flex align-items-center">
                                    <div>{{ slotProps.option.name }}</div>
                                  </div>
                                </template>
                              </Dropdown>
                              <Dropdown
                                v-if="chooseCity == 2"
                                v-model="selectedCity1"
                                :options="fastCity"
                                filter
                                optionLabel="name"
                                placeholder="مثال : الرياض"
                                class=""
                              >
                                <template #option="slotProps">
                                  <div class="flex align-items-center">
                                    <div>{{ slotProps.option.name }}</div>
                                  </div>
                                </template>
                              </Dropdown>
                              <span class="error-msg" v-if="v2$.city.$error">{{
                                v2$.city.$errors[0].$message
                              }}</span>
                              <span class="error-msg2" v-if="errors1.city">{{
                                errors1.city[0]
                              }}</span>
                            </div>
                            <div class="main-input">
                              <label for="">
                                {{ $t("street name") }} <span>*</span>
                              </label>
                              <input
                                type="text"
                                v-model="userdata2.street_name"
                                placeholder=" مثال : شارع المملكة "
                              />
                              <span
                                class="error-msg"
                                v-if="v2$.street_name.$error"
                                >{{ v2$.street_name.$errors[0].$message }}</span
                              >
                              <span
                                class="error-msg2"
                                v-if="errors1.street_name"
                                >{{ errors1.street_name[0] }}</span
                              >
                            </div>
                          </div>
                          <div
                            class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3"
                          >
                            <div class="main-input">
                              <label for="">
                                {{ $t("dist") }}<span>*</span>
                              </label>
                              <input
                                type="text"
                                v-model="userdata2.district"
                                placeholder="مثال : الحي الخامس"
                              />
                              <span
                                class="error-msg"
                                v-if="v2$.district.$error"
                                >{{ v2$.district.$errors[0].$message }}</span
                              >
                              <span
                                class="error-msg2"
                                v-if="errors1.district"
                                >{{ errors1.district[0] }}</span
                              >
                            </div>

                            <div class="main-input">
                              <label for=""> {{ $t("bulding number") }}</label>
                              <input
                                type="text"
                                v-model="userdata2.building_number"
                                placeholder="45 ب"
                              />
                              <span
                                class="error-msg"
                                v-if="v2$.building_number.$error"
                                >{{
                                  v2$.building_number.$errors[0].$message
                                }}</span
                              >
                              <span
                                class="error-msg2"
                                v-if="errors1.building_number"
                                >{{ errors1.building_number[0] }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="main-input mt-4">
                          <label for=""> {{ $t("special") }}</label>
                          <input
                            type="text"
                            v-model="userdata2.marks"
                            placeholder="مثال : المنزل , المكتب , الشركة ..الخ"
                          />
                        </div>

                        <!-- <v-checkbox :label="$t('save data')" color="#DCBA95"></v-checkbox> -->
                      </div>
                      <div class="map-image col-12 col-xl-5 col-lg-5">
                        <img
                          class="image"
                          src="~/assets/images/map.png"
                          alt=""
                        />
                        <div class="overlay">
                          <div class="text d-flex flex-column gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="24"
                              viewBox="0 0 23 24"
                              fill="none"
                            >
                              <path
                                d="M19.5422 8.45C18.5583 3.83 14.7821 1.75 11.4651 1.75C11.4651 1.75 11.4651 1.75 11.4558 1.75C8.14813 1.75 4.36262 3.82 3.37876 8.44C2.28246 13.6 5.24341 17.97 7.92325 20.72C8.91648 21.74 10.1908 22.25 11.4651 22.25C12.7395 22.25 14.0138 21.74 14.9977 20.72C17.6775 17.97 20.6384 13.61 19.5422 8.45ZM11.4651 13.46C9.83475 13.46 8.51357 12.05 8.51357 10.31C8.51357 8.57 9.83475 7.16 11.4651 7.16C13.0955 7.16 14.4167 8.57 14.4167 10.31C14.4167 12.05 13.0955 13.46 11.4651 13.46Z"
                                fill="white"
                              />
                            </svg>
                            <span> {{ $t("address") }}</span>
                            <span> {{ $t("map") }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-12 col-xl-4 col-lg-4">
                <checkProduct
                  :arrData="arrData"
                  :myFunction="checkoutFunc1"
                  :text="text2"
                  :pending="pending"
                />
              </div>
            </div>
          </div>
          <div v-if="store.state.step == 3">
            <div class="row">
              <div class="col-12 col-xl-8 col-lg-8">
                <form @submit.prevent class="form-box">
                  <div class="first-info d-flex flex-column gap-3">
                    <div class="radio-inputs d-flex flex-column gap-4">
                      <div class="row">
                        <div class="col-12 col-xl-6 col-lg-6">
                          <label class="third-labels">
                            <input name="card" type="radio" checked value="1" />
                            <div class="radio-input">
                              <div class="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
  <path d="M26.2232 18.4786C26.1343 18.1577 25.8484 17.9368 25.5217 17.9368L21.0898 17.9383L17.8115 18.2025C16.4684 18.4055 15.3134 17.3278 15.3134 15.986C15.3134 15.4666 15.4709 14.9725 15.7684 14.5545L18.0623 11.3289C18.7011 10.3468 18.5756 9.0273 17.7589 8.19147C16.8416 7.25258 15.2404 7.25258 14.3246 8.19147L10.6277 11.9753C9.7585 12.0245 8.93894 12.2917 8.21269 12.7216L8.57875 13.0754C8.73912 13.2306 8.82375 13.4545 8.80331 13.6814L8.74206 14.3993C8.39644 18.4593 7.23706 22.1923 7.18894 22.3505L7.07812 22.7073L14.3844 23.8536C14.7169 23.9507 15.1879 24 15.7873 24C16.9175 24 19.2363 23.785 20.1317 22.9865L25.9067 19.3176C26.1823 19.1414 26.3121 18.7997 26.2232 18.4786Z" fill="#919EAB"/>
  <path d="M7.06419 13.6633C5.78669 12.4245 1.61144 12.0348 0.786064 11.9691C0.574629 11.9571 0.383564 12.0259 0.233379 12.1647C0.0859961 12.3049 0 12.505 0 12.7125V23.1609C0 23.5728 0.326689 23.9072 0.729189 23.9072C2.72275 23.9072 5.355 22.3817 5.46581 22.316C5.62331 22.2235 5.74287 22.0728 5.79975 21.8951C5.84644 21.7429 6.95912 18.1471 7.28868 14.2693C7.30912 14.0424 7.22463 13.8185 7.06419 13.6633Z" fill="#919EAB"/>
  <path d="M34.2715 0H10.9382C10.5357 0 10.209 0.334372 10.209 0.746338V10.2932L13.2934 7.13628C14.7634 5.63325 17.3213 5.63325 18.7912 7.13628C20.0979 8.4737 20.3006 10.5857 19.2769 12.1575L16.9479 15.4339C16.8327 15.5951 16.7715 15.7876 16.7715 15.9877C16.7715 16.1518 16.8327 16.2966 16.9202 16.4205H34.2715C34.674 16.4205 35.0007 16.0862 35.0007 15.6742V0.747807C35.0007 0.332833 34.674 0 34.2715 0ZM16.7715 4.47789H15.9169C15.6165 5.3466 14.8057 5.97049 13.8549 5.97049C13.4524 5.97049 13.1257 5.63612 13.1257 5.22415C13.1257 4.81219 13.4524 4.47782 13.8549 4.47782C14.2559 4.47782 14.5841 4.14344 14.5841 3.73148C14.5841 3.31951 14.9107 2.98514 15.3132 2.98514H16.7716C17.1741 2.98514 17.5007 3.31951 17.5007 3.73148C17.5007 4.14351 17.174 4.47789 16.7715 4.47789ZM22.5976 13.4321C21.6599 13.4321 20.7119 13.1679 19.8646 12.6171C19.5263 12.3962 19.4242 11.9335 19.6415 11.5872C19.8587 11.238 20.3123 11.1394 20.6477 11.3589C22.3438 12.4649 24.6027 11.9514 25.6804 10.214C26.2025 9.37368 26.376 8.37505 26.1631 7.40034C25.9517 6.4271 25.3829 5.59722 24.5604 5.06288C22.8629 3.95838 20.6054 4.4718 19.5277 6.20775C19.3105 6.55702 18.8598 6.65701 18.5215 6.43612C18.1832 6.21517 18.081 5.75247 18.2984 5.40621C19.8106 2.97626 22.9723 2.25972 25.3451 3.80459C26.4957 4.5524 27.2919 5.71665 27.588 7.07793C27.8841 8.43921 27.6434 9.83931 26.9114 11.017C25.9386 12.5768 24.2849 13.4321 22.5976 13.4321ZM32.084 11.1947C32.084 11.6067 31.7573 11.9411 31.3548 11.9411C30.9537 11.9411 30.6256 12.2754 30.6256 12.6874C30.6256 13.0994 30.2989 13.4337 29.8964 13.4337H28.4382C28.0357 13.4337 27.709 13.0994 27.709 12.6874C27.709 12.2754 28.0357 11.9411 28.4382 11.9411H29.2927C29.5115 11.3052 30.0044 10.8007 30.6257 10.5753V5.84217C30.0044 5.61681 29.5115 5.11228 29.2927 4.47642H28.4382C28.0357 4.47642 27.709 4.14204 27.709 3.73008C27.709 3.31811 28.0357 2.98374 28.4382 2.98374H29.8965C30.299 2.98374 30.6257 3.31811 30.6257 3.73008C30.6257 4.14204 30.9538 4.47642 31.3549 4.47642C31.7574 4.47642 32.0841 4.81079 32.0841 5.22275V11.1947H32.084Z" fill="#919EAB"/>
</svg>
                                <span class="pay"> {{ $t("payment1") }} </span>
                              </div>

                              <svg
                                class="checked-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  x="1"
                                  y="1"
                                  width="22"
                                  height="22"
                                  rx="11"
                                  stroke="#DCBA95"
                                  stroke-width="2"
                                />
                                <rect
                                  x="4.28516"
                                  y="4.28516"
                                  width="15.4286"
                                  height="15.4286"
                                  rx="7.71429"
                                  fill="#DCBA95"
                                />
                              </svg>

                              <svg
                                class="unchecked-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <rect
                                  x="0.925781"
                                  y="0.5"
                                  width="22.6712"
                                  height="23"
                                  rx="11.3356"
                                  stroke="#EBEAED"
                                />
                              </svg>
                            </div>
                          </label>
                        </div>
                        <!-- <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="2" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="23" viewBox="0 0 56 23"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.4756 4.26733C8.52571 4.35487 9.57582 3.74212 10.2321 2.96525C10.8775 2.16649 11.3041 1.09419 11.1947 0C10.265 0.0437675 9.1164 0.612745 8.46008 1.4115C7.85845 2.10084 7.34433 3.21691 7.4756 4.26733ZM19.9671 18.3606V1.30218H26.3662C29.6697 1.30218 31.9778 3.57809 31.9778 6.90442C31.9778 10.2307 29.626 12.5285 26.2787 12.5285H22.6143V18.3606H19.9671ZM11.1838 4.47546C10.2587 4.4222 9.41456 4.75377 8.73273 5.02158C8.29395 5.19393 7.92239 5.33987 7.63971 5.33987C7.32248 5.33987 6.93558 5.18612 6.50117 5.0135C5.93196 4.78731 5.28119 4.5287 4.59876 4.54112C3.03453 4.563 1.57969 5.44929 0.781167 6.86079C-0.859631 9.68379 0.35456 13.8636 1.94067 16.1614C2.71731 17.2993 3.6471 18.5467 4.87222 18.5029C5.41121 18.4826 5.79892 18.318 6.20017 18.1477C6.66211 17.9516 7.14199 17.748 7.89129 17.748C8.61462 17.748 9.07351 17.9463 9.51402 18.1368C9.93288 18.3178 10.3351 18.4917 10.9322 18.4811C12.2011 18.4592 12.9996 17.3431 13.7763 16.2052C14.6144 14.9838 14.9827 13.7919 15.0386 13.611L15.0452 13.59C15.0438 13.5887 15.0335 13.584 15.0152 13.5756C14.735 13.4473 12.5936 12.4666 12.573 9.83698C12.5524 7.62976 14.2716 6.51144 14.5422 6.3354L14.5422 6.33539C14.5587 6.32468 14.5698 6.31746 14.5748 6.3137C13.4809 4.6943 11.7745 4.51923 11.1838 4.47546ZM36.8128 18.4917C38.4755 18.4917 40.0178 17.6492 40.7179 16.3143H40.7726V18.3604H43.2228V9.8695C43.2228 7.40758 41.2539 5.82101 38.2239 5.82101C35.4126 5.82101 33.3343 7.42946 33.2577 9.63972H35.6423C35.8392 8.5893 36.8128 7.89996 38.1473 7.89996C39.7662 7.89996 40.6741 8.65495 40.6741 10.0446V10.9856L37.3706 11.1825C34.2969 11.3685 32.6342 12.6268 32.6342 14.8152C32.6342 17.0255 34.3516 18.4917 36.8128 18.4917ZM37.5243 16.4674C36.1132 16.4674 35.2163 15.789 35.2163 14.7495C35.2163 13.6772 36.0804 13.0535 37.7322 12.955L40.6747 12.769V13.7319C40.6747 15.3294 39.3183 16.4674 37.5243 16.4674ZM51.3511 19.0281C50.29 22.0152 49.0758 23 46.4943 23C46.2974 23 45.6411 22.9781 45.4879 22.9343V20.8882C45.652 20.9101 46.0568 20.932 46.2646 20.932C47.435 20.932 48.0914 20.4396 48.4961 19.1594L48.7367 18.4044L44.2519 5.98539H47.0194L50.1369 16.0629H50.1916L53.3091 5.98539H56L51.3511 19.0281ZM22.6146 3.5341H25.6665C27.9636 3.5341 29.2763 4.75959 29.2763 6.91514C29.2763 9.07069 27.9636 10.3071 25.6556 10.3071H22.6146V3.5341Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> ابل باي </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div> -->
                      </div>
                      <!-- <div class="row">
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="1" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24"
                                fill="none">
                                <path
                                  d="M7.88553 24C10.3894 24 12.4412 23.2168 13.7888 21.9028C14.7973 20.8934 15.3972 19.5446 15.3972 17.9782C15.3972 16.5598 14.8756 15.2893 13.9018 14.3147C12.9281 13.3401 11.5457 12.6352 9.78953 12.2959L6.91179 11.7389C5.7207 11.5127 5.04256 10.921 5.04256 10.0943C5.04256 9.01523 6.08585 8.26686 7.7725 8.26686C8.81579 8.26686 9.71128 8.60623 10.3112 9.19797C10.685 9.60696 10.9458 10.1378 11.0241 10.7295L15.1712 9.7984C15.0581 8.60624 14.5017 7.5533 13.641 6.6918C12.2934 5.343 10.2068 4.49021 7.73773 4.49021C5.45988 4.49021 3.55588 5.23858 2.24307 6.43075C1.12154 7.47498 0.486869 8.9021 0.486869 10.4685C0.486869 11.8521 0.938961 13.0094 1.83445 13.9057C2.72994 14.802 4.04275 15.4721 5.75548 15.8898L8.59844 16.5598C10.0156 16.8992 10.6502 17.4213 10.6502 18.3524C10.6502 19.5098 9.60696 20.1885 7.88553 20.1885C6.65097 20.1885 5.64246 19.7795 5.00779 19.1008C4.5557 18.6483 4.29487 18.0566 4.2601 17.3778L0 18.3089C0.113023 19.5794 0.712914 20.702 1.6084 21.5983C3.03423 23.1037 5.31208 24 7.88553 24ZM39.4103 24C42.175 24 44.305 22.9906 45.7569 21.5722C46.9132 20.4496 47.6262 19.1443 48 17.7955L43.6269 16.3336C43.4443 17.0036 43.0705 17.7172 42.4706 18.2741C41.7577 18.9442 40.7926 19.4315 39.4103 19.4315C38.1409 19.4315 36.9411 18.9442 36.0804 18.0827C35.2197 17.1864 34.6981 15.8724 34.6981 14.2277C34.6981 12.5482 35.2197 11.2777 36.0804 10.3814C36.9411 9.51994 38.0974 9.07614 39.3668 9.07614C40.7144 9.07614 41.6446 9.52864 42.3141 10.1987C42.8705 10.7643 43.2096 11.4692 43.4356 12.1827L47.8783 10.686C47.5392 9.38071 46.835 8.06671 45.783 6.98767C44.2876 5.52574 42.1228 4.48151 39.2451 4.48151C36.5934 4.48151 34.2025 5.49093 32.4811 7.21392C30.7857 8.97172 29.7424 11.3996 29.7424 14.2451C29.7424 17.0906 30.8292 19.5185 32.5767 21.2763C34.2981 22.9906 36.7238 24 39.4103 24ZM24.326 24C26.2648 24 27.6472 23.3996 28.2471 22.8774V18.8397C27.795 19.1791 26.8995 19.5881 25.7432 19.5881C24.9172 19.5881 24.326 19.3967 23.8739 18.9877C23.5001 18.6135 23.3175 17.9782 23.3175 17.1167V0H18.388V5.04713H28.2471V9.83321H18.3793V18.3176C18.3793 20.0406 18.9009 21.4242 19.8399 22.3901C20.8832 23.4431 22.4133 24 24.326 24Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> اس تي سي </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                      <div class="col-12 col-xl-6 col-lg-6">
                        <label class="third-labels">
                          <input name="card" type="radio" value="2" />
                          <div class="radio-input">
                            <div class="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24.9605 6.40039H7.04055C4.56631 6.40039 2.56055 8.40615 2.56055 10.8804V11.5204H29.4405V10.8804C29.4405 8.40615 27.4348 6.40039 24.9605 6.40039ZM2.56055 22.4004V16.6404H29.4405V22.4004C29.4405 24.8746 27.4348 26.8804 24.9605 26.8804H7.04055C4.56631 26.8804 2.56055 24.8746 2.56055 22.4004ZM24.9605 23.0404H19.8405C19.4871 23.0404 19.2005 22.7539 19.2005 22.4004C19.2005 22.0469 19.4871 21.7604 19.8405 21.7604H24.9605C25.314 21.7604 25.6005 22.0469 25.6005 22.4004C25.6005 22.7539 25.314 23.0404 24.9605 23.0404ZM2.56055 15.3604V12.8004H29.4405V15.3604H2.56055Z"
                                  fill="#919EAB" />
                              </svg>
                              <span> البطاقة الائتمانية </span>
                            </div>

                            <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 24 24" fill="none">
                              <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2" />
                              <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429"
                                fill="#DCBA95" />
                            </svg>

                            <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                              viewBox="0 0 25 24" fill="none">
                              <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED" />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </div> -->
                    </div>

                    <!-- <div class="cards-inputs mt-3">
                    <span> اختر البطاقة </span>
                    <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 my-3">
                      <label class="img-btn">
                        <input type="radio" name="card-input" value="1" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>

                      <label class="img-btn">
                        <input type="radio" name="card-input" value="2" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>

                      <label class="img-btn">
                        <input type="radio" name="card-input" value="3" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48" fill="none">
                          <rect class="border" x="0.5" y="0.5" width="103" height="47" rx="7.5" stroke="" />
                          <path class="f1" d="M57.1178 33.8159H46V13.7314H57.1181L57.1178 33.8159Z" fill="" />
                          <path class="f2"
                            d="M46.7047 23.7733C46.7047 19.6992 48.6024 16.0699 51.5575 13.731C49.3206 11.958 46.554 10.9958 43.7054 11C36.6882 11 31 16.7187 31 23.7733C31 30.8278 36.6882 36.5466 43.7054 36.5466C46.554 36.5508 49.3208 35.5886 51.5577 33.8155C48.6028 31.4771 46.7047 27.8476 46.7047 23.7733Z"
                            fill="" />
                          <path class="f3"
                            d="M72.1173 23.7733C72.1173 30.8278 66.4291 36.5465 59.412 36.5465C56.563 36.5507 53.7959 35.5885 51.5586 33.8155C54.5145 31.4767 56.4122 27.8476 56.4122 23.7733C56.4122 19.6989 54.5145 16.0699 51.5586 13.731C53.7959 11.9581 56.5628 10.9959 59.4118 11C66.4289 11 72.1171 16.7187 72.1171 23.7733"
                            fill="" />
                        </svg>
                      </label>
                    </div>
                  </div> -->

                    <!-- <div class="row main-inputs-container">
                    <div class="col-12">
                      <div class="inputs">
                        <div class="d-flex flex-column flex-xl-row flex-lg-row align-items-center gap-3">
                          <div class="main-input">
                            <label for="">
                              اسم حامل البطاقة <span>*</span>
                            </label>
                            <input type="text" placeholder="مثال : محمد" />
                          </div>
                          <div class="main-input">
                            <label for=""> رقم البطاقة </label>
                            <input type="text" placeholder="مثال : محمد" />
                          </div>
                        </div>
                        <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row  gap-3">
                          <div class="main-input">
                            <label for=""> تاريخ الانتهاء<span>*</span> </label>
                            <input type="text" placeholder="+201066333725" />
                          </div>
                          <div class="main-input">
                            <label for=""> CVV</label>
                            <input type="text" placeholder="مثال : m.info@icloud.com" />
                          </div>
                        </div>
                      </div>

                      <v-checkbox label="حفظ البيانات لاستخدامها مره أخرى" color="#DCBA95"></v-checkbox>
                    </div>
                  </div> -->
                  </div>
                </form>
              </div>

              <div class="col-12 col-xl-4 col-lg-4">
                <checkProduct
                  :arrData="arrData"
                  :myFunction="checkoutFunc2"
                  :text="text3"
                  :pending="pending"
                />
              </div>
            </div>
          </div>
          <div v-if="store.state.step == 4">
            <div class="row">
              <div class="col-12 col-xl-8 col-lg-8">
                <div class="row">
                  <div class="col-12">
                    <div class="show-card">
                      <span class="word px-3"> {{ $t("del to") }}</span>
                      <div class="card-container">
                        <div class="head d-flex align-items-center gap-2">
                          <div v-if="user.image" class="image">
                            <img :src="user.image" alt="" />
                          </div>
                          <div class="text d-flex flex-column">
                            <h6>
                              {{ userdata1.first_name }}
                              {{ userdata1.last_name }}
                            </h6>
                            <span class="text-word">
                              {{ userdata1.email }}
                            </span>
                          </div>
                        </div>
                        <div class="details d-flex flex-column gap-3 mt-3">
                          <div class="d-flex align-items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.5204 13.744V16.1157C11.5204 16.2717 11.4937 16.4213 11.4445 16.5604H12.5581C13.7861 16.5604 14.7816 15.5649 14.7816 14.3369V7.53458L15.8229 8.44569C16.0077 8.60742 16.2887 8.58869 16.4504 8.40386C16.6121 8.21902 16.5934 7.93807 16.4086 7.77634L9.29327 1.55046C9.1256 1.40375 8.87525 1.40375 8.70759 1.55046L1.5923 7.77634C1.40746 7.93807 1.38873 8.21902 1.55047 8.40386C1.7122 8.58869 1.99315 8.60742 2.17798 8.44569L3.21926 7.53458V14.3369C3.21926 15.5649 4.21476 16.5604 5.44279 16.5604H6.55634C6.50718 16.4213 6.48043 16.2717 6.48043 16.1157V13.744C6.48043 12.5159 7.603 11.5204 8.83102 11.5204H9.16984C10.3979 11.5204 11.5204 12.5159 11.5204 13.744ZM7.20043 13.7524C7.20043 12.9174 7.87737 12.2404 8.71243 12.2404H9.28843C10.1235 12.2404 10.8004 12.9174 10.8004 13.7524V16.0564C10.8004 16.3348 10.5748 16.5604 10.2964 16.5604H7.70443C7.42608 16.5604 7.20043 16.3348 7.20043 16.0564V13.7524Z"
                                fill="#919EAB"
                              />
                            </svg>
                            <span class="text-word">
                              {{ userdata2.city.name }} .
                              {{ userdata2.street_name }}
                              {{ userdata2.building_number }}
                              {{ userdata2.district }} . {{ userdata2.marks }}
                            </span>
                          </div>
                          <div
                            class="d-flex w-100 align-items-center mt-2 flex-column flex-xl-row flex-lg-row gap-3 justify-content-between"
                          >
                            <div class="d-flex align-items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M6.78612 8.3367L9.29803 10.9808C9.57036 11.2675 10.0636 11.3084 10.6131 11.0383C12.0115 10.46 12.4767 10.319 12.7423 10.5986L15.6298 13.638C15.9711 13.9973 15.88 14.5957 15.4984 14.9975C13.5165 17.0837 10.2952 17.0837 8.3133 14.9975L2.91939 9.31969C0.947442 7.24395 0.947442 3.88578 2.91939 1.81005C3.30913 1.3998 3.90763 1.29886 4.26181 1.67168L7.14927 4.71111C7.39954 4.97455 7.26534 5.46523 6.71893 6.92723C6.46491 7.49792 6.50561 8.04143 6.78612 8.3367Z"
                                  fill="#919EAB"
                                />
                              </svg>
                              <span class="text-word">
                                {{ userdata1.phone }}
                              </span>
                            </div>
                            <button
                              @click="store.state.step = 1"
                              class="d-flex align-items-center gap-2"
                            >
                              <span class="edit"> {{ $t("edit") }} </span>
                              <img src="~/assets/images/edit.svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="show-card">
                      <span class="word px-3"> {{ $t("payment method") }}</span>
                      <div class="card-container">
                        <div
                          class="head d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 justify-content-between"
                        >
                          <div
                            class="d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 gap-3"
                          >
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 104 48"
                            fill="none">
                            <rect x="0.5" y="0.5" width="103" height="47" rx="5.5" stroke="#2566AF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M64.054 15.7749L63.3971 19.5915C61.4272 18.5005 56.9442 18.2423 56.9437 20.2519C56.9437 21.0502 57.9581 21.5992 59.1806 22.261C61.0347 23.2646 63.3677 24.5274 63.3677 27.3122C63.3677 31.762 58.6288 33.397 55.4875 33.397C52.3472 33.397 50.2918 32.3934 50.2918 32.3934L50.9761 28.4028C52.8608 29.9236 58.5716 30.3558 58.5716 27.944C58.5716 26.9306 57.4474 26.3329 56.1438 25.6399C54.3451 24.6836 52.2048 23.5458 52.2048 20.8837C52.2048 16.0036 57.6295 15 59.9138 15C62.0269 15 64.054 15.7749 64.054 15.7749ZM38.9799 15.3174L34.5914 27.5417L34.0721 24.9093L34.0726 24.9103L32.5237 16.9177C32.5237 16.9177 32.3364 15.3174 30.3401 15.3174H23.0851L23 15.6184C23 15.6184 25.2186 16.0824 27.8151 17.6498L31.8143 33.0907H36.6104L43.934 15.3174H38.9799ZM47.4548 33.0902H42.8516L45.7285 15.3174H50.3322L47.4548 33.0902ZM79.4132 33.0907H75.1864L74.6473 30.4507H68.7955L67.8359 33.0907H63.0374L69.9027 16.6419C69.9027 16.6419 70.3189 15.3174 72.0276 15.3174H75.728L79.4132 33.0907ZM70.1215 26.8033L72.5402 20.1523L73.9008 26.8033H70.1215Z"
                              fill="#2566AF" />
                          </svg> -->
                            <div class="d-flex flex-column">
                              <h6 style="font-size: 14px">
                                {{ $t("payment1") }}
                              </h6>
                              <span class="text-word">
                                {{ userdata1.phone }}</span
                              >
                            </div>
                          </div>

                          <button
                            @click="store.state.step = 3"
                            class="d-flex align-items-center gap-2"
                          >
                            <span class="edit"> {{ $t("edit") }}</span>
                            <img src="~/assets/images/edit.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="show-card">
                      <span class="word px-3"> {{ $t("ship") }}</span>
                      <div class="card-container">
                        <div
                          class="head d-flex align-items-center flex-column flex-xl-row flex-lg-row gap-3 justify-content-between"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <div class="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_505_10232)">
                                  <path
                                    d="M2.09266 8.64355H2.08187C1.4779 8.64355 0.988281 9.13317 0.988281 9.73715V9.74793C0.988281 10.3519 1.4779 10.8415 2.08187 10.8415H2.09266C2.69663 10.8415 3.18625 10.3519 3.18625 9.74793V9.73715C3.18625 9.13317 2.69663 8.64355 2.09266 8.64355Z"
                                    fill="#DCBA95"
                                  />
                                  <path
                                    d="M23.9426 8.26265C23.9126 7.01624 23.2086 5.76468 22.0296 5.1464C20.0895 4.1189 17.9595 3.24046 16.0095 2.56827C15.2213 2.29756 14.3653 2.29756 13.5771 2.56827C12.9926 2.77124 12.3954 2.99015 11.7917 3.22452C14.3792 4.07343 17.4115 5.21999 20.2536 6.6239C20.5245 6.75735 20.7556 6.95952 20.924 7.21022C21.0924 7.46092 21.192 7.75139 21.2131 8.05265C21.2909 9.46499 21.3284 10.9219 21.3195 12.375C21.3195 12.5301 21.1643 12.63 21.0382 12.555L20.3525 12.1453C20.32 12.1261 20.2816 12.1196 20.2446 12.1273C20.2077 12.1349 20.1749 12.156 20.1528 12.1866C19.854 12.5784 19.5478 12.9753 19.234 13.3772C19.2088 13.4119 19.173 13.4376 19.132 13.4504C19.0911 13.4633 19.0471 13.4626 19.0065 13.4485C18.9659 13.4345 18.931 13.4077 18.9068 13.3722C18.8826 13.3368 18.8705 13.2945 18.8721 13.2516C18.8909 11.7937 18.8764 10.3158 18.8304 8.88702C18.8166 8.57586 18.7162 8.27474 18.5404 8.01759C18.3647 7.76044 18.1206 7.55747 17.8357 7.43155C14.8765 6.1064 11.9421 5.04093 9.43621 4.22811H9.42871H9.42496H2.64777C2.35782 4.22824 2.07978 4.34351 1.87479 4.54859C1.6698 4.75366 1.55465 5.03175 1.55465 5.32171V5.33296C1.55465 5.62287 1.66982 5.90091 1.87482 6.10591C2.07982 6.31092 2.35786 6.42608 2.64777 6.42608H6.19668V6.42936C6.47213 6.44949 6.72976 6.57309 6.91783 6.77533C7.1059 6.97758 7.21049 7.2435 7.21059 7.51968V7.53093C7.21065 7.6747 7.18236 7.81707 7.12734 7.9499C7.07232 8.08272 6.99165 8.2034 6.88995 8.30502C6.78824 8.40663 6.6675 8.4872 6.53463 8.5421C6.40175 8.59701 6.25936 8.62517 6.11559 8.62499H4.93293C4.64322 8.62499 4.36534 8.73995 4.1603 8.94463C3.95527 9.14932 3.83983 9.42699 3.83934 9.71671V9.72796C3.83946 10.018 3.95472 10.296 4.15978 10.5011C4.36484 10.7062 4.64293 10.8214 4.93293 10.8216H6.11559C6.25918 10.8216 6.40136 10.8498 6.53402 10.9048C6.66667 10.9598 6.7872 11.0403 6.88871 11.1419C6.99022 11.2434 7.07073 11.364 7.12564 11.4967C7.18054 11.6294 7.20877 11.7716 7.20871 11.9151V11.9259C7.20877 12.0695 7.18054 12.2117 7.12564 12.3444C7.07073 12.4771 6.99022 12.5976 6.88871 12.6992C6.7872 12.8007 6.66667 12.8813 6.53402 12.9363C6.40136 12.9912 6.25918 13.0195 6.11559 13.0195H1.08871C0.798672 13.0195 0.520512 13.1347 0.315423 13.3398C0.110335 13.5449 -0.00488281 13.8231 -0.00488281 14.1131V14.1239C-0.00488281 14.4139 0.110335 14.6921 0.315423 14.8972C0.520512 15.1023 0.798672 15.2175 1.08871 15.2175H6.11559C6.25928 15.2176 6.40155 15.2459 6.53427 15.301C6.66699 15.3561 6.78755 15.4368 6.88907 15.5385C6.99059 15.6402 7.07107 15.7609 7.12592 15.8937C7.18076 16.0265 7.2089 16.1688 7.20871 16.3125V16.3237C7.20871 16.6137 7.09354 16.8917 6.88854 17.0967C6.68354 17.3017 6.4055 17.4169 6.11559 17.4169H4.11871C3.82875 17.417 3.55071 17.5323 3.34573 17.7373C3.14074 17.9424 3.02559 18.2205 3.02559 18.5105V18.5217C3.02559 18.8117 3.14074 19.0898 3.34573 19.2948C3.55071 19.4999 3.82875 19.6152 4.11871 19.6153H9.08137C10.5467 20.3005 12.0474 20.9073 13.5771 21.4331C14.3653 21.7038 15.2213 21.7038 16.0095 21.4331C17.9595 20.7609 20.0876 19.8825 22.0296 18.855C23.2086 18.2367 23.9126 16.9851 23.9426 15.7387C24.0195 13.2462 24.0195 10.7542 23.9426 8.26265Z"
                                    fill="#DCBA95"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_505_10232">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div class="d-flex flex-column">
                              <h6
                                style="
                                  font-size: 14px;
                                  color: #2d3a4a;
                                  font-weight: 700;
                                "
                              >
                                {{
                                  chooseCity == 1
                                    ? $t("normal shipping")
                                    : $t("fast shipp")
                                }}
                              </h6>
                              <span class="text-word">
                                <!-- وقت التسليم المقدر 20 يناير - 04 مايو -->
                              </span>
                            </div>
                          </div>

                          <button
                            @click="store.state.step = 2"
                            class="d-flex align-items-center gap-2"
                          >
                            <span class="edit"> {{ $t("edit") }}</span>
                            <img src="~/assets/images/edit.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-xl-4 col-lg-4">
                <checkProduct
                  :arrData="arrData"
                  :myFunction="checkoutFunc3"
                  :text="text4"
                  :text1="text5"
                  :pending="pending"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import axios from "axios";
import { useStore } from "~/store";
const store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();

let text1 = ref("الرجوع للسلة");
let text2 = ref("الرجوع الي معلومات المستلم");
let text3 = ref("الرجوع الي الشحن والعنوان");
let text4 = ref("الرجوع الي طرق الدفع");
let text5 = ref("تأكيد عملية الشراء");
let cartBtn = ref(true);

if (locale.value == "ar") {
  text1.value = "الرجوع للسلة";
  text2.value = "الرجوع الي معلومات المستلم";
  text3.value = "الرجوع الي الشحن والعنوان";
  text4.value = "الرجوع الي طرق الدفع";
  text5.value = "تأكيد عملية الشراء";
} else {
  text1.value = "back to cart";
  text2.value = "Return to Receiver Information";
  text3.value = "Return to Shipping and Address";
  text4.value = "Return to Payment Methods";
  text5.value = "Confirm Purchase";
}
let user = ref(store.state.user);
let auth = ref(store.state.authenticated);
let finalStep = computed(() => {
  return store.state.finalStep;
});
let personalorGift = ref(1);

let arrData = computed(() => {
  return store.state.basketCheck;
});

let newArr = computed(() => {
  return arrData.value.map((item) => ({
    vendor_id: item.vendor_id,
    quantity: item.quantity,
    price: item.price,
    id: item.id,
  }));
});
// let arrData = ref();

let userdata1 = ref({
  type: personalorGift.value == 1 ? "Gift" : "Personal",
  first_name: user.value ? user.value.first_name : "",
  last_name: user.value ? user.value.last_name : "",
  phone: user.value ? user.value.phone : "",
  email: user.value ? user.value.email : "",
});

let gift_owner_name = ref("");
let gift_owner_phone = ref("");
let gift_text = ref("");
let errors = ref([]);
let value1 = ref("value is required");
let value2 = ref("The email field is required");
let value3 = ref("Invalid email format");
if (locale.value == "ar") {
  value1.value = "هذا الحقل مطلوبة";
  value2.value = "حقل البريد الإلكتروني مطلوب";
  value3.value = "تنسيق البريد الإلكتروني غير صالح";
} else {
  value1.value = "value is required";
  value2.value = "The email field is required";
  value3.value = "Invalid email format";
}
const rules = computed(() => {
  return {
    first_name: {
      required: helpers.withMessage(value1.value, required),
    },
    last_name: { required: helpers.withMessage(value1.value, required) },
    phone: { required: helpers.withMessage(value1.value, required) },
    email: {
      required: helpers.withMessage(value2.value, required),
      email: helpers.withMessage(value3.value, email),
    },
  };
});
const v$ = useValidate(rules, userdata1);
let pending = ref(false);
const checkoutFunc = async () => {
  let check = await v$.value.$validate();
  let formBody = new FormData();
  formBody.append("type", personalorGift.value == 1 ? "Gift" : "Personal");
  formBody.append("first_name", userdata1.value.first_name);
  formBody.append("last_name", userdata1.value.last_name);
  formBody.append("phone", userdata1.value.phone);
  formBody.append("email", userdata1.value.email);
  if (personalorGift.value == 1) {
    formBody.append("gift_owner_name", gift_owner_name.value);
    formBody.append("gift_owner_phone", gift_owner_phone.value);
    formBody.append("gift_text", gift_text.value);
  }
  if (check) {
    pending.value = true;
    try {
      let result = await axios.post(`${getUrl()}/orders-checkout/0`, formBody, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        pending.value = false;
        store.state.step = 2;
        store.state.check2 = true;
        store.state.lineActive1 = true;
      }
    } catch (errorss) {
      if (errorss.response) {
        pending.value = false;

        errors.value = errorss.response.data.errors;
      }
    }
  } else {
    console.log(check);
  }
};

let dropDownActive = ref(0);
let chooseCity = ref(1);
const selectedCity1 = ref("");
const selectedCity2 = ref("");
let normalCity = ref([]);
let fastCity = ref([]);

const getCities = async () => {
  let result = await axios.get(`${getUrl()}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

  normalCity.value = result.data.data.normalCities;
  fastCity.value = result.data.data.fastShippingCities;
};

let userdata2 = ref({
  city: selectedCity1,
  street_name: "",
  building_number: "",
  district: "",
  street_name: "",
  marks: "",
});
const rules2 = computed(() => {
  return {
    city: { required: helpers.withMessage(value1.value, required) },
    street_name: { required: helpers.withMessage(value1.value, required) },
    building_number: { required: helpers.withMessage(value1.value, required) },
    district: { required: helpers.withMessage(value1.value, required) },
  };
});
const v2$ = useValidate(rules2, userdata2);
let errors1 = ref([]);
const checkoutFunc1 = async () => {
  let check = await v2$.value.$validate();
  let formBody = new FormData();
  formBody.append("city", userdata2.value.city.id);
  formBody.append("street_name", userdata2.value.street_name);
  formBody.append("building_number", userdata2.value.building_number);
  formBody.append("district", userdata2.value.district);
  formBody.append("marks", userdata2.value.marks);
  formBody.append("fast_shipping", userdata2.value.marks);
  if (check) {
    pending.value = true;
    try {
      let result = await axios.post(`${getUrl()}/orders-checkout/1`, formBody, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if (result.status >= 200) {
        pending.value = false;
        store.state.step = 3;
        store.state.check3 = true;
        store.state.lineActive2 = true;
      }
    } catch (errorss) {
      if (errorss.response) {
        pending.value = false;
        errors1.value = errorss.response.data.errors;
      }
    }
  }
};
const checkoutFunc2 = async () => {
  let formBody = new FormData();
  // const productsArray = JSON.stringify(newArr.value);

  // formBody.append("products", newArr.value);
  pending.value = true;

  try {
    let result = await axios.post(
      `${getUrl()}/orders-checkout/2`,
      { products: newArr.value },
      {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      }
    );
    if (result.status >= 200) {
      pending.value = false;
      store.state.step = 4;
      store.state.check4 = true;
      store.state.lineActive3 = true;
    }
  } catch (errorss) {
    console.log(errorss);
  }
};

let finalObj = ref({});
const checkoutFunc3 = async () => {
  pending.value = true;

  try {
    let result = await axios.post(
      `${getUrl()}/orders-checkout`,
      {
        type: personalorGift.value == 1 ? "Gift" : "Personal",
        first_name: userdata1.value.first_name,
        last_name: userdata1.value.last_name,
        phone: userdata1.value.phone,
        email: userdata1.value.email,
        gift_owner_name:
          personalorGift.value == 1 ? gift_owner_name.value : null,
        gift_owner_phone:
          personalorGift.value == 1 ? gift_owner_phone.value : null,
        gift_text: personalorGift.value == 1 ? gift_text.value : null,
        city: userdata2.value.city.id,
        street_name: userdata2.value.street_name,
        building_number: userdata2.value.building_number,
        district: userdata2.value.district,
        products: newArr.value,
      },
      {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      }
    );
    if (result.status >= 200) {
      pending.value = false;
      store.state.step = 5;
      store.state.finalStep = 2;
      store.state.check4 = true;
      store.state.lineActive3 = true;
      finalObj.value = result.data.data;
      // store.state.finalStep = 1;
    }
  } catch (errorss) {
    console.log(errorss);
  }
};

let step = computed(() => {
  return store.state.step;
});
let items = ref();
if (locale.value == "ar") {
  items.value = [
    "معلومات المستلم",
    "الشحن والعنوان",
    "طرق الدفع",
    "مراجعة الطلب",
  ];
} else if (locale.value == "en") {
  items.value = [
    "Recipient Information",
    "Shipping and Address",
    "Payment Methods",
    "Order Review",
  ];
}
onMounted(() => {
  console.log(arrData.value);
  console.log(store.state.basket);
  console.log(newArr.value);
  getCities();
});
</script>

<style lang="scss" scoped></style>
