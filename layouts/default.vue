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
            
                <button v-bind="props" class="d-flex align-items-center btn-navv gap-2"  :class="{ active: isExpanded }" @click="toggleExpanded" :aria-expanded="isExpanded.toString()">
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
            <div style="cursor: pointer" @click="goTogold(5, 'gold')">
              <nuxt-link :to="localePath('/gold')">
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
            <nuxt-link :to="localePath('/')"  @click="store.state.activeMobile = 1" class="logo">
              <!-- <img src="~/assets/images/logo.png" alt="" /> -->
              <!-- <logo v-if="locale == 'ar'" class="a-logo" :w="87" :h="31"></logo> -->
              <img class="" style="" src="../assets/images/platin-logo.svg" alt="">
              <!-- <e-logo
                v-if="locale == 'en'"
                class="e-logo"
                :w="87"
                :h="31"
              ></e-logo> -->
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
                      class="d-flex align-items-center gap-2 btn-navv"
                      :class="{ active: isExpanded2 }" @click="toggleExpanded2" :aria-expanded="isExpanded2.toString()"
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
                <div style="cursor: pointer" @click="goTogold(5, 'gold')">
                  <nuxt-link :to="localePath('/gold')">
                <span>{{ $t("gold bars") }}</span>
              </nuxt-link>
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
                <div>
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
                <!-- <client-only>
                  <Vue3Lottie
                    v-if="store.state.animCart"
                    class="icon border"
                    :animation-data="cartIcon"
                    :height="20"
                    :width="20"
                  />
                </client-only> -->
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
                    <!-- <img v-else src="~/assets/images/kk.jpg" alt="" /> -->
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
        <nuxt-link @click="clearCheck() , store.state.activeMobile = 1" :to="localePath('/')">
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
          <div class="row justify-content-between">
            <div class="col-12 col-xl-3 col-lg-3 col-md-6">
              <div class="box-container  d-flex flex-column gap-3">
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
            <div class="col-12 col-xl-2 col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
              <div class="box-container bg-dange w-100 d-flex flex-column align-items-center text-center gap-3">
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
            <div class="col-12 col-xl-2 col-lg-3 bg-dange d-flex justify-content-center col-md-6">
              <div class="box-container d-flex flex-column align-items-center text-center w-100 gap-3">
                <h6 class="head">{{ $t("links") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <!-- <span class="head-link"> {{ $t("vendor app") }}</span> -->
                  <nuxt-link :to="localePath('about')">
                    <span class="head-link"> {{ $t("about") }} </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-2 col-lg-3 d-flex justify-content-center col-md-6">
              <div class="box-container d-flex flex-column align-items-center text-center w-100 gap-3">
                <h6 class="head">{{ $t("contact") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> {{ $t("home") }} </span>
                  <span class="head-link"> {{ $t("home") }} </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-3  col-lg-3 col-md-6   d-flex justify-content-center">
              <div class="box-container d-flex flex-column align-items-center text-center w-100  gap-3">
                <h6 class="head" style="font-size: 15px; white-space: nowrap">
                  {{ $t("sub") }}
                </h6>
                <div class="links w-100 d-flex flex-column gap-2">
                  <div
                    class="input w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <input type="email" v-model="email" @keypress.enter="subscripe()"  :placeholder="$t('enter')" />
                     
                     <button  @click="subscripe()">                 
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
                     </button>
                  </div>
                  
                    <span v-if="error" class="text-center" style="color:#b1628c; font-size: 14px;">{{ error.email[0] }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="head-icons d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <img src="~/assets/images/footer-logo.png" alt="" />
            <div class="icons d-flex align-items-center gap-3">
            <a :href="generalArr.youtube_link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
  <path d="M15.7727 19.8446L10.3536 19.7433C8.59905 19.708 6.84011 19.7785 5.11993 19.4128C2.50315 18.8665 2.31777 16.1879 2.12379 13.9411C1.8565 10.7823 1.95997 7.56625 2.46438 4.43385C2.74914 2.67625 3.86976 1.62747 5.60277 1.51335C11.453 1.09917 17.342 1.14825 23.1792 1.34148C23.7957 1.3592 24.4165 1.45601 25.0243 1.56622C28.025 2.10372 28.0982 5.13917 28.2927 7.69444C28.4866 10.2761 28.4047 12.871 28.034 15.435C27.7365 17.558 27.1674 19.3383 24.7656 19.5102C21.7564 19.7349 18.8162 19.9159 15.7985 19.8583C15.7986 19.8446 15.7813 19.8446 15.7727 19.8446ZM12.5868 14.4698C14.8545 13.1393 17.079 11.8309 19.3337 10.5092C17.0618 9.17863 14.8416 7.87023 12.5868 6.54858V14.4698Z" fill="#2D3A4A"/>
</svg>
            </a>
            <a :href="generalArr.linkedin_link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
  <path d="M1.50067 4.42213C1.50067 3.65211 1.77109 3.01686 2.3119 2.51638C2.85272 2.01587 3.5558 1.76562 4.42111 1.76562C5.27098 1.76562 5.95858 2.01201 6.48396 2.50483C7.02478 3.01303 7.29519 3.67521 7.29519 4.49143C7.29519 5.23063 7.03252 5.84662 6.50714 6.33943C5.96632 6.84763 5.25552 7.10173 4.37475 7.10173H4.35158C3.50171 7.10173 2.8141 6.84763 2.28873 6.33943C1.76335 5.83123 1.50067 5.19212 1.50067 4.42213ZM1.80199 24.6347V9.20384H6.94752V24.6347H1.80199ZM9.79843 24.6347H14.944V16.0183C14.944 15.4793 15.0058 15.0635 15.1294 14.7709C15.3457 14.2473 15.6741 13.8046 16.1145 13.4427C16.5548 13.0808 17.1072 12.8998 17.7717 12.8998C19.5023 12.8998 20.3676 14.0625 20.3676 16.3879V24.6347H25.5132V15.7873C25.5132 13.5081 24.9724 11.7795 23.8907 10.6014C22.8091 9.42329 21.3798 8.83424 19.6028 8.83424C17.6094 8.83424 16.0565 9.68894 14.944 11.3983V11.4445H14.9208L14.944 11.3983V9.20384H9.79843C9.82932 9.69663 9.84478 11.2289 9.84478 13.8007C9.84478 16.3725 9.82932 19.9838 9.79843 24.6347Z" fill="#2D3A4A"/>
</svg>
            </a>
            <a :href="generalArr.instagram_link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1546 12.5336C1.1546 7.73758 1.1546 5.33957 2.29745 3.61235C2.80779 2.84107 3.46833 2.18053 4.23961 1.67019C5.96683 0.527344 8.36484 0.527344 13.1609 0.527344C17.9569 0.527344 20.3549 0.527344 22.0821 1.67019C22.8534 2.18053 23.5139 2.84107 24.0243 3.61235C25.1671 5.33957 25.1671 7.73757 25.1671 12.5336V12.5336V12.5336C25.1671 17.3296 25.1671 19.7276 24.0243 21.4548C23.5139 22.2261 22.8534 22.8867 22.0821 23.397C20.3549 24.5398 17.9569 24.5398 13.1609 24.5398H13.1609H13.1608C8.36483 24.5398 5.96683 24.5398 4.23961 23.397C3.46833 22.8867 2.80779 22.2261 2.29745 21.4548C1.1546 19.7276 1.1546 17.3296 1.1546 12.5336ZM19.3762 12.5332C19.3762 15.966 16.5933 18.7489 13.1604 18.7489C9.72754 18.7489 6.94464 15.966 6.94464 12.5332C6.94464 9.10028 9.72754 6.31738 13.1604 6.31738C16.5933 6.31738 19.3762 9.10028 19.3762 12.5332ZM13.1604 16.646C15.4319 16.646 17.2732 14.8046 17.2732 12.5332C17.2732 10.2617 15.4319 8.42035 13.1604 8.42035C10.889 8.42035 9.04761 10.2617 9.04761 12.5332C9.04761 14.8046 10.889 16.646 13.1604 16.646ZM19.6218 7.46581C20.4284 7.46581 21.0823 6.81191 21.0823 6.00528C21.0823 5.19866 20.4284 4.54476 19.6218 4.54476C18.8152 4.54476 18.1613 5.19866 18.1613 6.00528C18.1613 6.81191 18.8152 7.46581 19.6218 7.46581Z" fill="#2D3A4A"/>
</svg>
            </a>
            <a :href="generalArr.twitter_link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 512 512"><path fill="#2D3A4A" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </a>
            <a :href="generalArr.facebook_link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none">
  <path d="M9.7561 24.5398V13.5866H13.6177L14.1958 9.31792H9.75599V6.59254C9.75599 5.35666 10.1164 4.51447 11.978 4.51447L14.3521 4.51341V0.695527C13.9415 0.643599 12.5321 0.527344 10.8926 0.527344C7.46944 0.527344 5.1259 2.51661 5.1259 6.16991V9.31792H1.25439V13.5866H5.1259V24.5397H9.7561V24.5398Z" fill="#2D3A4A"/>
</svg>
            </a>
            </div>
          </div>
          <v-divider :thickness="1"></v-divider>
          <div
            class="foot w-100 d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >

          <div class="d-flex align-items-center gap-2 ">
          <nuxt-link :to="localePath('/policy')">
            <span> {{ $t("policy2") }}</span>
          </nuxt-link>
              /
              <nuxt-link :to="localePath('/terms')">
            <span> {{ $t("policy3") }}</span>  
              </nuxt-link>

          </div>
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
        <nuxt-link class="icon" @click="store.state.activeMobile = 1" :class="{'activeMobile': store.state.activeMobile == 1}" :to="localePath('/')">
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
          <span> {{ $t('home') }} </span>
        </nuxt-link>
        <nuxt-link :to="localePath('/sections')" @click="store.state.activeMobile = 2" :class="{'activeMobile': store.state.activeMobile == 2}" class="icon">
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
          <span> {{ $t('sections2') }} </span>
        </nuxt-link>
        <nuxt-link :to="localePath('search')" @click="store.state.activeMobile = 3" :class="{'activeMobile': store.state.activeMobile == 3}" class="icon">
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
          <span> {{ $t('search2') }} </span>

        </nuxt-link>
        <nuxt-link class="icon" @click="store.state.activeMobile = 4" :class="{'activeMobile': store.state.activeMobile == 4}" :to="localePath('mobile-nav')">
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
          <span> {{ $t('settings') }} </span>

        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
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

let activeMobile = ref(store.state.activeMobile);

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
const goTogold = (id, name, color) => {
  const queryParams = {
    id: id,
    name: name,
    color: color,
  };
  const url = "/gold";

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

let generalArr = ref([]);
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


const isExpanded = ref(false);
const isExpanded2 = ref(false);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
const toggleExpanded2 = () => {
  isExpanded2.value = !isExpanded2.value;
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
  text7.value = '';
  let result = await axios.get(`${getUrl()}/categories`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  categoriesArr.value = result.data.data.slice(0, 4);
};


const getGeneral = async () => {
  let result = await axios.get(`${getUrl()}/general`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  generalArr.value = result.data.data;
};


let email = ref('');
let error = ref();
let emailText = ref('تم الاشتراك بنجاح');
if(locale.value == 'ar'){
  emailText.value = 'تم الاشتراك بنجاح';
} else{
  emailText.value = 'You have successfully subscribed'
}
const subscripe = async()=>{
  if(email.value != ''){
    try{
      let result = await axios.post(
      `${getUrl()}/news-letter`,
      { email: email.value },
      {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      }
    );

      if(result.status >= 200){
        error.value = '';
        email.value = '';
        createToast({
          title: emailText.value
        },
        {
        type: 'success',
        transition: 'bounce',
        showIcon: 'true',
        timeout: 3000,
        toastBackgroundColor: '#dcba95',
        });
      }

    }catch(errors){
      if (errors.response) {
                error.value = errors.response.data.errors;
            }

    }

  }
}
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
  getGeneral();
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
