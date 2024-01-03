<template>
  <div>
    <nav
      v-if="
        route.name !=
        `${locale == 'ar' ? 'checkout___ar___default' : 'checkout___en'}`
      "
      class="navbar"
      :class="{ active: activeNav }"
    >
      <div class="container">
        <div
          class="items-container w-100 d-flex align-items-center justify-content-between"
          :class="{ active: activeNav }"
        >
          <div class="items d-flex align-items-center gap-4">
            <nuxt-link :to="localePath('/')">
              <span>{{ $t("home") }}</span>
            </nuxt-link>

            <v-menu>
              <template v-slot:activator="{ props }">
                <button v-bind="props" class="d-flex align-items-center gap-2">
                  <span>{{ $t("sections") }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.9465 5.45312H7.79317H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"
                      fill="#919EAB"
                    />
                  </svg>
                </button>
              </template>
              <div>
                <div
                  id="mega-menu-id"
                  class="mega-menu"
                  :class="{ 'd-none': activeNav }"
                >
                  <div class="row">
                    <div
                      v-for="(item, index) in categoriesArr"
                      class="col-12 col-xl-3 col-lg-3 col-md-6"
                    >
                      <div class="box d-flex flex-column align-item-center">
                        <div
                          class="d-flex align-items-center justify-content-center w-100"
                        >
                          <div class="image" :class="`f${index + 1}`">
                            <img :src="item.image" alt="" />
                          </div>
                        </div>
                        <div class="text d-flex flex-column gap-3">
                          <h6 class="mt-3">{{ item.name }}</h6>
                          <div
                            class="links d-flex align-items-center gap-3 flex-column"
                          >
                            <span
                              v-for="i in item.subcategories"
                              @click="
                                goTocategorysub(
                                  item.id,
                                  item.name,
                                  i.id,
                                  `f${index + 1}`
                                )
                              "
                            >
                              {{ i.name }}
                            </span>
                          </div>
                          <span
                            class="all"
                            @click="
                              goTocategory(item.id, item.name, `f${index + 1}`)
                            "
                          >
                            {{ $t("alll") }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-menu>
            <div style="cursor: pointer" @click="goTocategory(5, 'gold')">
              <nuxt-link :to="localePath('/category')">
                <span>{{ $t("gold bars") }}</span>
              </nuxt-link>
            </div>
            <nuxt-link :to="localePath('/vendors')">
              <span>{{ $t("vendors") }}</span>
            </nuxt-link>
          </div>
          <!-- <div class="d-flex align-items-center gap-2 supp">
            <i class="fa-solid fa-headset"></i>
            <span>الدعم الفني</span>
          </div> -->
        </div>
        <v-divider
          class="line"
          :class="{ 'd-none': activeNav }"
          :thickness="1"
        ></v-divider>
        <div
          class="d-flex align-items-center bg-dange w-100 justify-content-between"
        >
          <div class="d-flex align-items-center gap-5">
            <nuxt-link :to="localePath('/')" class="logo">
              <!-- <img src="~/assets/images/logo.png" alt="" /> -->
              <logo v-if="locale == 'ar'" class="a-logo" :w="87" :h="31"></logo>
              <e-logo
                v-if="locale == 'en'"
                class="e-logo"
                :w="87"
                :h="31"
              ></e-logo>
            </nuxt-link>

            <div v-if="activeNav" class="items-container">
              <div class="items d-flex align-items-center gap-4">
                <nuxt-link :to="localePath('/')">
                  <span>{{ $t("home") }}</span>
                </nuxt-link>

                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      v-bind="props"
                      class="d-flex align-items-center gap-2"
                    >
                      <span> {{ $t("sections") }}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.9465 5.45312H7.79317H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"
                          fill="#2D3A4A"
                        />
                      </svg>
                    </button>
                  </template>
                  <div>
                    <div id="mega-menu-id" class="mega-menu">
                      <div class="row justify-content-end">
                        <div
                          v-for="(item, index) in categoriesArr"
                          class="col-12 col-xl-3 col-lg-3 col-md-6"
                        >
                          <div
                            class="box d-flex flex-column align-items-center"
                          >
                            <div
                              class="d-flex align-items-center justify-content-center w-100"
                            >
                              <div class="image" :class="`f${index + 1}`">
                                <img :src="item.image" alt="" />
                              </div>
                            </div>
                            <div class="text d-flex flex-column gap-3">
                              <h6 class="mt-3">{{ item.name }}</h6>
                              <div
                                class="links d-flex align-items-center gap-3 flex-column"
                              >
                                <span
                                  v-for="i in item.subcategories"
                                  @click="
                                    goTocategorysub(
                                      item.id,
                                      item.name,
                                      i.id,
                                      `f${index + 1}`
                                    )
                                  "
                                >
                                  {{ i.name }}
                                </span>
                              </div>
                              <span
                                class="all"
                                @click="
                                  goTocategory(
                                    item.id,
                                    item.name,
                                    `f${index + 1}`
                                  )
                                "
                              >
                                {{ $t("alll") }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-menu>
                <div style="cursor: pointer" @click="goTocategory(5, 'gold')">
                  <span>{{ $t("gold bars") }}</span>
                </div>
                <nuxt-link :to="localePath('/vendors')">
                  <span>{{ $t("vendors") }}</span>
                </nuxt-link>
              </div>
              <!-- <span>الدعم الفني</span> -->
            </div>
            <div
              v-if="!activeNav"
              class="search d-flex align-items-center justify-content-between px-1"
              style=""
            >
              <div class="input inp">
                <input
                  type="text"
                  v-model="store.state.search"
                  @keypress.enter="goToProducts()"
                  :placeholder="$t('search')"
                  style=""
                />
              </div>
              <div class="d-flex align-item-cente gap-4">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button
                      class="d-flex align-items-center gap-1"
                      v-bind="props"
                      style="color: #2d3a4a; font-size: 14px; font-weight: 400"
                    >
                      {{ text7 ? text7 : $t("sections") }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.9465 5.45312H7.79317H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"
                          fill="#2D3A4A"
                        />
                      </svg>
                    </button>
                  </template>
                  <div
                    class="list-profile list d-flex flex-column p-4 gap-4 text-center"
                  >
                    <button
                      type=""
                      v-for="item in categoriesArr"
                      @click="(cateId = item.id), (text7 = item.name)"
                    >
                      {{ item.name }}
                    </button>
                  </div>
                </v-menu>
                <div @click="goToProducts()" class="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.0252 16.45L19.4689 18.9173C20.1478 19.6028 19.1297 20.6313 18.4508 19.9458L16.0069 17.4783C13.0712 19.9237 8.74031 19.7368 6.01897 16.9884C3.11347 14.054 3.11347 9.29635 6.01897 6.36194C8.92447 3.42753 13.6352 3.42753 16.5407 6.36194C19.2623 9.11063 19.4471 13.4851 17.0252 16.45ZM15.5225 7.39031C13.1793 5.02385 9.38035 5.02385 7.0372 7.39031C4.69406 9.75677 4.69406 13.5936 7.0372 15.96C9.38035 18.3265 13.1793 18.3265 15.5225 15.96C17.8656 13.5936 17.8656 9.75677 15.5225 7.39031Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="icons-with-profile d-flex gap-3">
            <div class="icons d-flex align-items-center gap-3">
              <div
                @click="changeLang()"
                class="icon lang d-flex align-items-center gap-1"
              >
                <span>{{ $t("ar") }}</span>
                <img src="~/assets/images/world.png" alt="" />
              </div>
              <nuxt-link :to="localePath('/wishlist')">
                <div class="icon border">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </nuxt-link>
              <nuxt-link :to="localePath('/cart')">
                <div v-if="!store.state.animCart">
                  <v-badge v-if="theNum > 0" :content="theNum" color="#B1628C">
                    <div class="icon border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.82541 6.08669L3.643 4.57513C3.5773 3.93433 3.0364 3.44704 2.39089 3.44704H1.71649C1.29919 3.44704 0.960937 3.10954 0.960938 2.69325C0.960938 2.27696 1.29919 1.93945 1.71649 1.93945H2.39089C3.81144 1.93945 5.00168 3.01173 5.14626 4.4217L5.28392 5.76417H20.6172C20.9342 5.76417 21.1724 6.0529 21.1114 6.36328L19.7718 13.1793C19.4475 14.8293 17.998 16.0195 16.3128 16.0195H8.2843C8.51585 17.0389 9.42891 17.7779 10.494 17.7779H16.8175C16.8547 17.7779 16.8917 17.7806 16.8731 17.7839C16.9285 17.7799 16.9842 17.7779 17.0401 17.7779C18.2917 17.7779 19.3063 18.7902 19.3063 20.039C19.3063 21.2877 18.2917 22.3001 17.0401 22.3001C15.7885 22.3001 14.7739 21.2877 14.7739 20.039C14.7739 19.7787 14.8181 19.5247 14.9028 19.2855H12.1277C12.2124 19.5247 12.2566 19.7787 12.2566 20.039C12.2566 21.2877 11.242 22.3001 9.99041 22.3001C8.73881 22.3001 7.72421 21.2877 7.72421 20.039C7.72421 19.4883 7.92289 18.9693 8.27201 18.5647C7.41318 17.9407 6.84663 16.9781 6.73678 15.9038L6.72518 15.7904C5.49555 15.3233 4.58805 14.1879 4.46716 12.809L4.16266 9.33533C4.15752 9.31385 4.15375 9.29178 4.15143 9.26921L3.82541 6.08669ZM9.99041 21.0438C10.5466 21.0438 10.9975 20.5939 10.9975 20.039C10.9975 19.484 10.5466 19.0341 9.99041 19.0341C9.43421 19.0341 8.98331 19.484 8.98331 20.039C8.98331 20.5939 9.43421 21.0438 9.99041 21.0438ZM17.0401 21.0438C17.5963 21.0438 18.0472 20.5939 18.0472 20.039C18.0472 19.484 17.5963 19.0341 17.0401 19.0341C16.4839 19.0341 16.033 19.484 16.033 20.039C16.033 20.5939 16.4839 21.0438 17.0401 21.0438Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div>
                  </v-badge>
                  <div v-if="theNum <= 0" class="icon border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.82541 6.08669L3.643 4.57513C3.5773 3.93433 3.0364 3.44704 2.39089 3.44704H1.71649C1.29919 3.44704 0.960937 3.10954 0.960938 2.69325C0.960938 2.27696 1.29919 1.93945 1.71649 1.93945H2.39089C3.81144 1.93945 5.00168 3.01173 5.14626 4.4217L5.28392 5.76417H20.6172C20.9342 5.76417 21.1724 6.0529 21.1114 6.36328L19.7718 13.1793C19.4475 14.8293 17.998 16.0195 16.3128 16.0195H8.2843C8.51585 17.0389 9.42891 17.7779 10.494 17.7779H16.8175C16.8547 17.7779 16.8917 17.7806 16.8731 17.7839C16.9285 17.7799 16.9842 17.7779 17.0401 17.7779C18.2917 17.7779 19.3063 18.7902 19.3063 20.039C19.3063 21.2877 18.2917 22.3001 17.0401 22.3001C15.7885 22.3001 14.7739 21.2877 14.7739 20.039C14.7739 19.7787 14.8181 19.5247 14.9028 19.2855H12.1277C12.2124 19.5247 12.2566 19.7787 12.2566 20.039C12.2566 21.2877 11.242 22.3001 9.99041 22.3001C8.73881 22.3001 7.72421 21.2877 7.72421 20.039C7.72421 19.4883 7.92289 18.9693 8.27201 18.5647C7.41318 17.9407 6.84663 16.9781 6.73678 15.9038L6.72518 15.7904C5.49555 15.3233 4.58805 14.1879 4.46716 12.809L4.16266 9.33533C4.15752 9.31385 4.15375 9.29178 4.15143 9.26921L3.82541 6.08669ZM9.99041 21.0438C10.5466 21.0438 10.9975 20.5939 10.9975 20.039C10.9975 19.484 10.5466 19.0341 9.99041 19.0341C9.43421 19.0341 8.98331 19.484 8.98331 20.039C8.98331 20.5939 9.43421 21.0438 9.99041 21.0438ZM17.0401 21.0438C17.5963 21.0438 18.0472 20.5939 18.0472 20.039C18.0472 19.484 17.5963 19.0341 17.0401 19.0341C16.4839 19.0341 16.033 19.484 16.033 20.039C16.033 20.5939 16.4839 21.0438 17.0401 21.0438Z"
                        fill="#919EAB"
                      />
                    </svg>
                  </div>
                </div>
                <client-only>
                  <Vue3Lottie
                    v-if="store.state.animCart"
                    class="icon border"
                    :animation-data="cartIcon"
                    :height="20"
                    :width="20"
                  />
                </client-only>
              </nuxt-link>

              <nuxt-link
                v-if="!store.state.authenticated"
                class="icon-auth"
                :to="localePath('/auth')"
              >
                <div class="icon border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0008 11.5199C9.61491 11.5199 7.68078 9.58575 7.68078 7.19988C7.68078 4.81401 9.61491 2.87988 12.0008 2.87988C14.3867 2.87988 16.3208 4.81401 16.3208 7.19988C16.3208 9.58575 14.3867 11.5199 12.0008 11.5199ZM12.0008 12.4799C15.9772 12.4799 19.2008 15.7034 19.2008 19.6799V21.5999C19.2008 21.865 18.9859 22.0799 18.7208 22.0799H5.28078C5.01568 22.0799 4.80078 21.865 4.80078 21.5999V19.6799C4.80078 15.7034 8.02433 12.4799 12.0008 12.4799Z"
                      fill="#919EAB"
                    />
                  </svg>
                </div>
              </nuxt-link>
            </div>
            <div v-if="store.state.authenticated" class="profile">
              <v-menu class="menu">
                <template v-slot:activator="{ props }">
                  <button
                    v-bind="props"
                    class="d-flex align-items-center gap-2"
                  >
                    <div class="iconn">
                      <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <img v-if="user.image" :src="user.image" alt="" />
                    <img v-else src="~/assets/images/kk.jpg" alt="" />
                  </button>
                </template>
                <div
                  id="list-profile"
                  class="list d-flex flex-column justify-content-start p-4 gap-4 text-center"
                >
                  <span @click="goSettings('profile')">
                    {{ $t("personal") }}</span
                  >

                  <!-- <span @click="goSettings('notifications')"> الاشعارات </span>
                  <span @click="goSettings('orders')"> طلباتي </span> -->
                  <div
                    @click="logOut()"
                    class="d-flex align-items-center gap-2"
                  >
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>{{ $t("log out") }}</span>
                  </div>
                </div>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav
      class="container"
      v-if="
        route.name ==
        `${locale == 'ar' ? 'checkout___ar___default' : 'checkout___en'}`
      "
    >
      <div class="checkout-nav">
        <nuxt-link @click="clearCheck()" :to="localePath('/')">
          <logo v-if="locale == 'ar'" class="a-logo" :w="124" :h="45"></logo>
          <e-logo
            v-if="locale == 'en'"
            class="e-logo"
            :w="124"
            :h="45"
          ></e-logo>
        </nuxt-link>

        <nuxt-link :to="localePath('/')">
          <button @click="clearCheck()">
            {{ $t("back2") }}
          </button>
        </nuxt-link>
      </div>
    </nav>

    <Loader2 v-if="checkInt"></Loader2>
    <slot />

    <footer class="footer-container">
      <div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-4 col-lg-4 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <!-- <img
                  class="img-flui"
                  src="~/assets/images/logo.png"
                  style="width: 123.999px"
                  alt=""
                /> -->
                <logo
                  v-if="locale == 'ar'"
                  class="a-logo"
                  :w="124"
                  :h="45"
                ></logo>
                <e-logo
                  v-if="locale == 'en'"
                  class="e-logo"
                  :w="124"
                  :h="45"
                ></e-logo>
                <p class="">
                  {{ $t("landing2") }}
                </p>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">{{ $t("sections") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <span
                    v-for="(item, index) in categoriesArr"
                    @click="goTocategory(item.id, item.name, `f${index + 1}`)"
                    class="head-link"
                  >
                    {{ item.name }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">{{ $t("links") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <!-- <span class="head-link"> {{ $t("vendor app") }}</span> -->
                  <nuxt-link :to="localePath('about')">
                    <span class="head-link"> {{ $t("about") }} </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head">{{ $t("contact") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> {{ $t("home") }} </span>
                  <span class="head-link"> {{ $t("home") }} </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 col-md-6">
              <div class="box-container d-flex flex-column gap-3">
                <h6 class="head" style="font-size: 15px; white-space: nowrap">
                  {{ $t("sub") }}
                </h6>
                <div class="links d-flex flex-column gap-4">
                  <div
                    class="input d-flex align-items-center justify-content-center gap-2"
                  >
                    <input type="text" :placeholder="$t('enter')" />

                    <svg
                      class="arrow-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M8.99407 9.73921L12.5546 13.5194C12.5956 13.5628 12.6243 13.6163 12.638 13.6744C12.6517 13.7325 12.6499
                    13.7932 12.6327 13.8504L11.1751 18.6856C11.0459 19.1341 10.4327 19.189 10.2266 18.7701L4.18658
                      6.48894C4.14471 6.40393 4.12735 6.30892 4.13646 6.21459C4.14556 6.12026 4.18077 6.03034 4.23813 5.9549C4.29549 
                      5.87946 4.37273 5.82149 4.46119 5.78749C4.54965 5.7535 4.64583 5.74482 4.73895 5.76244L18.1879 8.29907C18.6466 8.3856 
                      18.7573 8.99174 18.36 9.23559L14.0901 11.9325C14.0396 11.9645 13.9815 11.9826 13.9218 11.9851C13.862 11.9875 13.8027 11.9741 
                      13.7498 11.9463L9.1557 9.5255C9.12727 9.51082 9.09456 9.50663 9.06335 9.51368C9.03213 9.52073 9.0044 9.53856 8.98503 9.56403C8.96566
                      9.58951 8.95589 9.621 8.95745 9.65297C8.959 9.68493 8.97178 9.71532 8.99353 9.7388L8.99407 9.73921Z"
                        fill="#2D3A4A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="head-icons d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <img src="~/assets/images/footer-logo.png" alt="" />
            <div class="icons d-flex align-items-center gap-3">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
          <v-divider :thickness="1"></v-divider>
          <div
            class="foot w-100 d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <span> {{ $t("policy2") }}</span>
            <div class="d-flex align-items-center" style="gap: 10px">
              <span> {{ $t("dev") }}</span>
              <img src="~/assets/images/webstdy.png" alt="" />
            </div>
            <span> {{ $t("rights") }} © 2023 . </span>
          </div>
        </div>
      </div>
    </footer>
    <footer class="mobile-footer">
      <div class="icons">
        <nuxt-link class="icon" :to="localePath('/')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
              fill="#919EAB"
            />
          </svg>
        </nuxt-link>
        <nuxt-link :to="localePath('/sections')" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
        <nuxt-link :to="localePath('search')" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 6.03 6.03 2 11 2"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 5H20"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 8H17"
              stroke="#919EAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
        <nuxt-link class="icon" :to="localePath('mobile-nav')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
              stroke="#919EAB"
              stroke-width="1.5"
            />
            <path
              d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
              stroke="#919EAB"
              stroke-width="1.5"
            />
            <path
              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              stroke="#919EAB"
              stroke-width="1.5"
            />
          </svg>
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import axios from "axios";
import Cookies from "js-cookie";
import { Vue3Lottie } from "vue3-lottie";
import cartIcon from "~/assets/animations/cart-icon.json";
import { useStore } from "~/store";
const store = useStore;
const router = useRouter();
const route = useRoute();
let categoriesArr = ref([]);
let activeNav = ref(false);
let activeItemsContainer = ref(false);
let theNum = computed(() => {
  return store.state.basketNum;
});

let checkInt = ref(false);

let cateId = ref();
let text7 = ref("");

let user = ref(store.state.user);
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
const changeLang = async () => {
  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
    store.state.lang = "ar";
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
    store.state.lang = "en";
  }
  const query = useRoute().query;
  getCategories();
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};

const goTocategory = (id, name, color) => {
  const queryParams = {
    id: id,
    name: name,
    color: color,
  };
  const url = "/category";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};
const goTocategorysub = (id, name, subid, color) => {
  const queryParams = {
    id: id,
    name: name,
    subid: subid,
    color: color,
  };
  const url = "/category";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

const goSettings = (name) => {
  const queryParams = {
    name: name,
  };
  const url = "/settings";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

let search_value = ref("");
const goToProducts = () => {
  const queryParams = {
    search_value: store.state.search,
    id: cateId.value,
  };
  const url = "/products";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};

const logOut = () => {
  if (process.client) {
    store.state.user = {};
    store.state.authenticated = false;

    Cookies.remove("user");
    Cookies.remove("token");
    Cookies.remove("auth");
    const localee = localePath("/");
    router.push(localee);
  }
};

const clearCheck = () => {
  store.state.finalStep = 1;
  store.state.step = 1;
  store.state.check2 = false;
  store.state.check3 = false;
  store.state.check4 = false;
  store.state.lineActive1 = false;
  store.state.lineActive2 = false;
  store.state.lineActive3 = false;
};
const getCategories = async () => {
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categoriesArr.value = result.data.data.slice(0, 4);
};
const updateLang = () => {
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else if (locale.value == "en") {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
  }
};
// watch(locale, (newLocale) => {
//   if (newLocale === "ar") {
//     setLocale("ar");
//     useHead({
//       htmlAttrs: {
//         lang: "ar",
//         dir: "rtl",
//       },
//     });
//   } else if (newLocale === "en") {
//     useHead({
//       htmlAttrs: {
//         lang: "en",
//         dir: "ltr",
//       },
//     });
//     setLocale("en");
//   }
// });
onMounted(() => {
  window.addEventListener("online", function () {
    checkInt.value = false;
  });
  window.addEventListener("offline", function () {
    checkInt.value = true;
    console.log("offfff");
  });

  updateLang();
  store.dispatch("loadBasketFromLocalStorage");
  window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 300) {
      activeNav.value = true;
      activeItemsContainer.value = true;
    } else if (window.scrollY == 0) {
      activeNav.value = false;
      activeItemsContainer.value = false;
    }
  });
  getCategories();

  user.value = store.state.user;
  console.log(user.value);
});
onBeforeMount(() => {
  store.dispatch("loadBasketFromLocalStorage");
  updateLang();
});
</script>

<style lang="scss">
nav {
  .checkout-nav {
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      display: flex;
      width: 157px;
      height: 56px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border: 1px solid #dbdde0;
      color: #5a7184;
      font-size: 16px;
      font-weight: 400;
    }
  }
}

@media (max-width: 760px) {
  nav {
    .checkout-nav {
      button {
        width: 108px;
        height: 45px;
        font-size: 12px;
      }
      svg {
        width: 100px !important;
      }
    }
  }
}
</style>
