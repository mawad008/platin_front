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
                <button
                  v-bind="props"
                  class="d-flex align-items-center btn-navv gap-2"
                  :class="{ active: isExpanded }"
                  @click="toggleExpanded"
                  :aria-expanded="isExpanded.toString()"
                >
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
            <nuxt-link
              :to="localePath('/')"
              @click="store.state.activeMobile = 1"
              class="logo"
            >
              <!-- <img src="~/assets/images/logo.png" alt="" /> -->
              <!-- <logo v-if="locale == 'ar'" class="a-logo" :w="87" :h="31"></logo> -->
              <img
                class=""
                style=""
                src="../assets/images/platin-logo.svg"
                alt=""
              />
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
                      :class="{ active: isExpanded2 }"
                      @click="toggleExpanded2"
                      :aria-expanded="isExpanded2.toString()"
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
        <nuxt-link
          @click="clearCheck(), (store.state.activeMobile = 1)"
          :to="localePath('/')"
        >
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
            <div
              class="col-12 col-xl-2 col-lg-3 col-md-6 d-flex justify-content-center align-items-center"
            >
              <div
                class="box-container bg-dange w-100 d-flex flex-column align-items-center text-center gap-3"
              >
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
            <div
              class="col-12 col-xl-2 col-lg-3 bg-dange d-flex justify-content-center col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center text-center w-100 gap-3"
              >
                <h6 class="head">{{ $t("links") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <!-- <span class="head-link"> {{ $t("vendor app") }}</span> -->
                  <nuxt-link :to="localePath('about')">
                    <span class="head-link"> {{ $t("about") }} </span>
                  </nuxt-link>
                    <span @click="dialog = true" class="head-link"> {{ $t("addVendor") }} </span>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-xl-2 col-lg-3 d-flex justify-content-center col-md-6"
            >
              <div
                class="box-container d-flex flex-column align-items-center text-center w-100 gap-3"
              >
                <h6 class="head">{{ $t("contact") }}</h6>
                <div class="links d-flex flex-column gap-4">
                  <span class="head-link"> {{ $t("home") }} </span>
                  <span class="head-link"> {{ $t("home") }} </span>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-xl-3 col-lg-3 col-md-6 d-flex justify-content-center"
            >
              <div
                class="box-container d-flex flex-column align-items-center text-center w-100 gap-3"
              >
                <h6 class="head" style="font-size: 15px; white-space: nowrap">
                  {{ $t("sub") }}
                </h6>
                <div class="links w-100 d-flex flex-column gap-2">
                  <div
                    class="input w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <input
                      type="email"
                      v-model="emaill"
                      @keypress.enter="subscripe()"
                      :placeholder="$t('enter')"
                    />

                    <button @click="subscripe()">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                      >
                        <path
                          d="M8.99407 9.73921L12.5546 13.5194C12.5956 13.5628 12.6243 13.6163 12.638 13.6744C12.6517 13.7325 12.6499 13.7932 12.6327 13.8504L11.1751 18.6856C11.0459 19.1341 10.4327 19.189 10.2266 18.7701L4.18658 6.48894C4.14471 6.40393 4.12735 6.30892 4.13646 6.21459C4.14556 6.12026 4.18077 6.03034 4.23813 5.9549C4.29549 5.87946 4.37273 5.82149 4.46119 5.78749C4.54965 5.7535 4.64583 5.74482 4.73895 5.76244L18.1879 8.29907C18.6466 8.3856 18.7573 8.99174 18.36 9.23559L14.0901 11.9325C14.0396 11.9645 13.9815 11.9826 13.9218 11.9851C13.862 11.9875 13.8027 11.9741 13.7498 11.9463L9.1557 9.5255C9.12727 9.51082 9.09456 9.50663 9.06335 9.51368C9.03213 9.52073 9.0044 9.53856 8.98503 9.56403C8.96566 9.58951 8.95589 9.621 8.95745 9.65297C8.959 9.68493 8.97178 9.71532 8.99353 9.7388L8.99407 9.73921Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>

                  <span
                    v-if="error"
                    class="text-center"
                    style="color: #b1628c; font-size: 14px"
                    >{{ error.email[0] }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="head-icons d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <!-- <img src="~/assets/images/footer-logo.png" alt="" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.05568 2.15248C9.87356 1.09558 11.8819 0.408638 13.9656 0.130951C14.6258 0.0446707 15.291 0.000979065 15.9567 0C17.3818 0.000856682 18.8001 0.194468 20.1733 0.575447C22.204 1.14967 24.1103 2.0974 25.7945 3.37019C27.4693 4.64481 28.859 6.25635 29.8743 8.10127C30.9112 9.94032 31.5891 11.9603 31.8716 14.0531C32.1398 16.1387 31.9869 18.2569 31.4217 20.2821C30.5241 23.6802 28.5043 26.6739 25.6911 28.7759C25.1423 29.2028 24.5676 29.5953 23.9704 29.9511C23.8944 29.9968 23.6756 30.1246 23.0402 30.4291C22.4372 30.7109 21.8144 30.9481 21.1766 31.1384C20.2728 31.4139 19.3517 31.6286 18.4192 31.7808C17.6653 31.9118 15.9143 32 15.9143 32C21.5317 27.3546 22.6567 25.6672 24.1542 23.4216C24.3035 23.1976 24.4565 22.9683 24.6179 22.7297C25.4406 21.5771 26.0652 20.295 26.4664 18.9363C26.8743 17.5548 26.9902 16.1032 26.8069 14.6742C26.6139 13.2531 26.1494 11.8824 25.4387 10.6373C24.7372 9.3836 23.7851 8.28815 22.6419 7.41935C21.5012 6.54946 20.2022 5.91049 18.8174 5.53784C16.0379 4.77049 13.0667 5.15796 10.5758 6.61248C9.30399 7.32206 8.19569 8.29207 7.32297 9.45911C6.49065 10.5826 5.86955 11.8484 5.4898 13.1946C4.71585 15.9867 5.08569 18.9726 6.51732 21.4906C6.77103 21.9286 7.18028 22.2548 7.66344 22.4039C8.1755 22.5577 8.72879 22.4846 9.18344 22.203C9.61582 21.9698 9.93745 21.5737 10.0772 21.1023C10.217 20.6309 10.1634 20.1231 9.92827 19.6914L9.85533 19.5574C9.41365 18.8185 9.12323 17.9988 9.00109 17.1462C8.87773 16.3022 8.90135 15.4432 9.07097 14.6072C9.2357 13.7907 9.5446 13.0103 9.9831 12.3026C10.4326 11.5805 11.0071 10.9445 11.6794 10.4241L11.7098 10.3997C11.8056 10.3165 11.9072 10.2403 12.0138 10.1715L12.4485 9.91267C13.2604 9.42007 14.1687 9.10861 15.1117 8.99932C16.0275 8.89003 16.9556 8.95404 17.8477 9.18816C18.7246 9.42864 19.5443 9.84266 20.2585 10.4059C21.014 10.9906 21.6516 11.7138 22.1372 12.537C22.5593 13.2922 22.8425 14.1171 22.9733 14.9726C23.1026 15.8016 23.082 16.6472 22.9125 17.469C22.7436 18.2947 22.4351 19.0854 22.0005 19.8071C21.5609 20.5273 20.9943 21.1618 20.3284 21.6794C20.2856 21.7089 20.2379 21.7415 20.1891 21.7749C20.082 21.8481 19.9691 21.9253 19.8876 21.9838C19.7691 22.0691 19.6383 22.1543 19.5258 22.2213C18.1024 23.0467 16.4339 23.3432 14.8137 23.0586L14.0871 22.9337L13.7497 23.5882C13.3167 24.4087 12.7159 25.1287 11.9865 25.7011L11.9409 25.7407C11.863 25.809 11.7786 25.8692 11.6885 25.9203L11.2569 26.1791C10.4986 26.6324 9.65707 26.9284 8.78227 27.0497C7.91531 27.1668 7.03476 27.1318 6.17991 26.9463C5.34183 26.7624 4.54634 26.4203 3.83603 25.9386C3.11985 25.4531 2.52225 24.8121 2.08791 24.0632C-0.00386206 20.3639 -0.55018 15.9865 0.567912 11.8855C1.12316 9.88427 2.05156 8.0063 3.30403 6.35071C4.58649 4.64248 6.20329 3.2139 8.05568 2.15248ZM13.707 17.3352C14.0287 17.9614 14.6089 18.4145 15.2939 18.5743H15.2605C15.496 18.6342 15.7379 18.6649 15.981 18.6656C16.4033 18.6656 16.8198 18.5666 17.197 18.3764L17.2578 18.3429C17.4049 18.257 17.5373 18.1481 17.65 18.0202C18.5781 17.216 18.8301 15.8774 18.258 14.79L18.2245 14.7292C17.471 13.505 15.8832 13.1006 14.6372 13.8158L14.4397 13.9315L14.315 14.0229C13.8372 14.4122 13.5139 14.9595 13.403 15.5664C13.2836 16.1733 13.3918 16.8031 13.707 17.3352Z"
                fill="url(#paint0_linear_10_2611)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_2611"
                  x1="5.42764e-05"
                  y1="16"
                  x2="32"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#005C9F" />
                  <stop offset="1" stop-color="#00A090" />
                </linearGradient>
              </defs>
            </svg>
            <div class="icons d-flex align-items-center gap-3">
              <a :href="generalArr.youtube_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="21"
                  viewBox="0 0 29 21"
                  fill="none"
                >
                  <path
                    d="M15.7725 19.8445L10.3534 19.7432C8.59887 19.7079 6.83993 19.7783 5.11975 19.4127C2.50297 18.8664 2.31759 16.1878 2.1236 13.941C1.85632 10.7822 1.95979 7.56613 2.4642 4.43373C2.74895 2.67613 3.86958 1.62735 5.60259 1.51323C11.4528 1.09904 17.3419 1.14813 23.1791 1.34136C23.7955 1.35907 24.4163 1.45589 25.0242 1.5661C28.0248 2.1036 28.098 5.13904 28.2925 7.69432C28.4865 10.276 28.4046 12.8709 28.0338 15.4349C27.7363 17.5579 27.1672 19.3382 24.7655 19.5101C21.7562 19.7348 18.816 19.9157 15.7983 19.8581C15.7985 19.8445 15.7811 19.8445 15.7725 19.8445ZM12.5866 14.4697C14.8543 13.1391 17.0788 11.8307 19.3335 10.5091C17.0616 9.1785 14.8414 7.8701 12.5866 6.54845V14.4697Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="generalArr.linkedin_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M1.50049 4.42213C1.50049 3.65211 1.77091 3.01686 2.31172 2.51638C2.85254 2.01587 3.55562 1.76562 4.42093 1.76562C5.2708 1.76562 5.9584 2.01201 6.48378 2.50483C7.02459 3.01303 7.29501 3.67521 7.29501 4.49143C7.29501 5.23063 7.03233 5.84662 6.50696 6.33943C5.96614 6.84763 5.25534 7.10173 4.37457 7.10173H4.35139C3.50152 7.10173 2.81392 6.84763 2.28854 6.33943C1.76317 5.83123 1.50049 5.19212 1.50049 4.42213ZM1.8018 24.6347V9.20384H6.94734V24.6347H1.8018ZM9.79824 24.6347H14.9438V16.0183C14.9438 15.4793 15.0056 15.0635 15.1292 14.7709C15.3455 14.2473 15.6739 13.8046 16.1143 13.4427C16.5547 13.0808 17.1071 12.8998 17.7715 12.8998C19.5021 12.8998 20.3675 14.0625 20.3675 16.3879V24.6347H25.513V15.7873C25.513 13.5081 24.9722 11.7795 23.8905 10.6014C22.8089 9.42329 21.3796 8.83424 19.6026 8.83424C17.6093 8.83424 16.0563 9.68894 14.9438 11.3983V11.4445H14.9206L14.9438 11.3983V9.20384H9.79824C9.82914 9.69663 9.8446 11.2289 9.8446 13.8007C9.8446 16.3725 9.82914 19.9838 9.79824 24.6347Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="generalArr.instagram_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.15479 12.5336C1.15479 7.73758 1.15479 5.33957 2.29764 3.61235C2.80797 2.84107 3.46851 2.18053 4.23979 1.67019C5.96701 0.527344 8.36502 0.527344 13.161 0.527344C17.9571 0.527344 20.3551 0.527344 22.0823 1.67019C22.8536 2.18053 23.5141 2.84107 24.0244 3.61235C25.1673 5.33957 25.1673 7.73757 25.1673 12.5336V12.5336V12.5336C25.1673 17.3296 25.1673 19.7276 24.0244 21.4548C23.5141 22.2261 22.8536 22.8867 22.0823 23.397C20.3551 24.5398 17.9571 24.5398 13.1611 24.5398H13.161H13.161C8.36501 24.5398 5.96701 24.5398 4.23979 23.397C3.46851 22.8867 2.80797 22.2261 2.29764 21.4548C1.15479 19.7276 1.15479 17.3296 1.15479 12.5336ZM19.3764 12.5332C19.3764 15.966 16.5935 18.7489 13.1606 18.7489C9.72773 18.7489 6.94482 15.966 6.94482 12.5332C6.94482 9.10028 9.72773 6.31738 13.1606 6.31738C16.5935 6.31738 19.3764 9.10028 19.3764 12.5332ZM13.1606 16.646C15.432 16.646 17.2734 14.8046 17.2734 12.5332C17.2734 10.2617 15.432 8.42035 13.1606 8.42035C10.8892 8.42035 9.04779 10.2617 9.04779 12.5332C9.04779 14.8046 10.8892 16.646 13.1606 16.646ZM19.622 7.46581C20.4286 7.46581 21.0825 6.81191 21.0825 6.00528C21.0825 5.19866 20.4286 4.54476 19.622 4.54476C18.8154 4.54476 18.1615 5.19866 18.1615 6.00528C18.1615 6.81191 18.8154 7.46581 19.622 7.46581Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="generalArr.twitter_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="21"
                  viewBox="0 0 27 21"
                  fill="none"
                >
                  <path
                    d="M17.852 0.797415V0.793091H18.978L19.3894 0.875256C19.6636 0.928599 19.9126 0.998504 20.1364 1.08499C20.3601 1.17148 20.5766 1.2724 20.7859 1.38771C20.9953 1.50302 21.1851 1.62052 21.3554 1.74015C21.5243 1.85836 21.6759 1.98378 21.8101 2.11639C21.9429 2.25045 22.15 2.28504 22.4315 2.22017C22.713 2.15531 23.0161 2.06521 23.3409 1.94989C23.6657 1.83458 23.9869 1.70485 24.3044 1.56069C24.622 1.41653 24.8155 1.325 24.8848 1.28608C24.9526 1.24574 24.9887 1.22411 24.993 1.22122L24.9973 1.21473L25.019 1.20392L25.0406 1.19311L25.0623 1.1823L25.0839 1.17148L25.0883 1.165L25.0948 1.16067L25.1013 1.15635L25.1056 1.14986L25.1272 1.14337L25.1489 1.13905L25.1446 1.17148L25.1381 1.20392L25.1272 1.23635L25.1164 1.26879L25.1056 1.29041L25.0948 1.31203L25.0839 1.34446C25.0767 1.36609 25.0695 1.39491 25.0623 1.43095C25.0551 1.467 24.9865 1.61113 24.8566 1.8634C24.7267 2.11567 24.5643 2.37153 24.3694 2.631C24.1745 2.89047 23.9999 3.0865 23.8454 3.21913C23.6895 3.35319 23.5863 3.44688 23.5358 3.50022C23.4853 3.55499 23.4239 3.60544 23.3517 3.65158L23.2435 3.72293L23.2218 3.73375L23.2002 3.74456L23.1959 3.75104L23.1894 3.75537L23.1829 3.75969L23.1785 3.76618L23.1569 3.77699L23.1352 3.7878L23.1309 3.79429L23.1244 3.79861L23.1179 3.80294L23.1136 3.80942L23.1093 3.81591L23.1027 3.82024L23.0962 3.82456L23.0919 3.83105H23.2002L23.8064 3.70131C24.2106 3.61482 24.5968 3.51032 24.9648 3.38779L25.5495 3.19318L25.6144 3.17156L25.6469 3.16075L25.6686 3.14994L25.6902 3.13913L25.7119 3.12832L25.7335 3.11751L25.7768 3.11102L25.8201 3.10669V3.14994L25.8093 3.15426L25.7985 3.16075L25.7942 3.16724L25.7876 3.17156L25.7811 3.17589L25.7768 3.18237L25.7725 3.18886L25.766 3.19318L25.7595 3.19751L25.7552 3.204L25.7509 3.21048L25.7443 3.21481L25.7335 3.23643L25.7227 3.25805L25.7162 3.26238C25.7133 3.2667 25.6217 3.38921 25.4412 3.62996C25.2608 3.87213 25.1633 3.99464 25.1489 3.99754C25.1345 4.00186 25.1142 4.02349 25.0883 4.06241C25.0637 4.10276 24.9107 4.2635 24.6292 4.54459C24.3478 4.82568 24.0721 5.07577 23.8021 5.29489C23.5308 5.51544 23.3936 5.78643 23.3907 6.10789C23.3864 6.42791 23.3698 6.78974 23.3409 7.19334C23.3121 7.59697 23.2579 8.03301 23.1785 8.5015C23.0991 8.96999 22.9764 9.49974 22.8104 10.0908C22.6444 10.6818 22.4423 11.2584 22.2042 11.8205C21.966 12.3827 21.717 12.8872 21.4572 13.3341C21.1973 13.781 20.9592 14.1594 20.7426 14.4693C20.5261 14.7792 20.306 15.0711 20.0822 15.345C19.8585 15.6189 19.5756 15.9274 19.2335 16.2705C18.8899 16.6121 18.7023 16.7995 18.6705 16.8326C18.6373 16.8644 18.4959 16.9826 18.2461 17.1872C17.9978 17.3934 17.7308 17.5995 17.445 17.8056C17.1606 18.0103 16.8993 18.1812 16.6612 18.3181C16.423 18.455 16.1357 18.6114 15.7994 18.7873C15.4645 18.9646 15.1022 19.1289 14.7124 19.2803C14.3227 19.4317 13.9113 19.5722 13.4783 19.7019C13.0452 19.8317 12.6266 19.9326 12.2224 20.0047C11.8183 20.0767 11.3599 20.138 10.8475 20.1884L10.0788 20.2641V20.2749H8.67142V20.2641L8.48738 20.2533C8.3647 20.2461 8.26365 20.2389 8.18425 20.2317C8.10487 20.2245 7.80533 20.1848 7.28567 20.1128C6.76601 20.0407 6.35823 19.9686 6.06231 19.8965C5.76641 19.8245 5.32613 19.6875 4.74152 19.4857C4.1569 19.2839 3.65673 19.0799 3.24101 18.8738C2.82673 18.6691 2.5669 18.5394 2.46152 18.4846C2.35759 18.4312 2.24066 18.365 2.11075 18.2857L1.91588 18.1667L1.91157 18.1603L1.90505 18.1559L1.89856 18.1516L1.89423 18.1451L1.87257 18.1343L1.85092 18.1235L1.84661 18.117L1.8401 18.1127L1.8336 18.1084L1.82927 18.1019L1.82496 18.0954L1.81844 18.0911H1.80762V18.0478L1.82927 18.0521L1.85092 18.0586L1.94836 18.0694C2.01331 18.0766 2.19015 18.0875 2.47884 18.1019C2.76755 18.1163 3.07428 18.1163 3.39907 18.1019C3.72385 18.0875 4.05587 18.055 4.39508 18.0046C4.73431 17.9541 5.13487 17.8676 5.59679 17.7451C6.05872 17.6226 6.4831 17.477 6.86997 17.3083C7.25538 17.1382 7.52963 17.0114 7.69276 16.9278C7.85441 16.8456 8.10125 16.6928 8.43325 16.4694L8.93125 16.1342L8.93558 16.1277L8.94208 16.1234L8.9486 16.1191L8.95291 16.1126L8.95724 16.1061L8.96373 16.1018L8.97025 16.0975L8.97456 16.091L8.99621 16.0845L9.01786 16.0802L9.02219 16.0586L9.02869 16.0369L9.03521 16.0326L9.03952 16.0261L8.8663 16.0153C8.75082 16.0081 8.63895 16.0009 8.53068 15.9937C8.42242 15.9865 8.25282 15.9541 8.02185 15.8964C7.79091 15.8387 7.54191 15.7522 7.27485 15.6369C7.00781 15.5216 6.74798 15.3846 6.49536 15.2261C6.24276 15.0675 6.06015 14.9356 5.94755 14.8304C5.83641 14.7266 5.69206 14.5796 5.51451 14.3893C5.33841 14.1976 5.18539 14.0008 5.05548 13.799C4.92556 13.5972 4.80143 13.3644 4.68308 13.1006L4.50334 12.7071L4.49251 12.6746L4.48169 12.6422L4.47519 12.6206L4.47086 12.599L4.50334 12.6033L4.53582 12.6098L4.77399 12.6422C4.93279 12.6638 5.1818 12.671 5.521 12.6638C5.86023 12.6566 6.09479 12.6422 6.2247 12.6206C6.35462 12.599 6.43402 12.5845 6.46288 12.5773L6.50619 12.5665L6.56032 12.5557L6.61445 12.5449L6.61878 12.5384L6.62527 12.5341L6.63179 12.5298L6.6361 12.5233L6.5928 12.5125L6.54949 12.5017L6.50619 12.4908L6.46288 12.48L6.41958 12.4692C6.39071 12.462 6.3402 12.4476 6.26801 12.426C6.19584 12.4044 6.00097 12.3251 5.68339 12.1881C5.36584 12.0512 5.11322 11.9178 4.92556 11.7881C4.73743 11.658 4.55806 11.5157 4.38858 11.3622C4.21969 11.2065 4.03422 11.0061 3.83212 10.761C3.63003 10.516 3.4496 10.2313 3.29081 9.90696C3.13203 9.58262 3.01294 9.27271 2.93354 8.97719C2.85446 8.68342 2.80229 8.38307 2.77767 8.07986L2.73867 7.62579L2.76032 7.63012L2.78197 7.6366L2.80363 7.64741L2.82528 7.65822L2.84693 7.66903L2.86858 7.67985L3.2042 7.8312C3.42795 7.93212 3.70582 8.01861 4.03781 8.09067C4.36983 8.16274 4.5683 8.2024 4.63325 8.2096L4.73069 8.22041H4.92556L4.92125 8.21392L4.91474 8.2096L4.90824 8.20527L4.90391 8.19879L4.8996 8.1923L4.89308 8.18797L4.88659 8.18365L4.88226 8.17716L4.8606 8.16635L4.83895 8.15554L4.83464 8.14905L4.82813 8.14473L4.82163 8.1404L4.8173 8.13392L4.79565 8.12311L4.77399 8.1123L4.76969 8.10581C4.76536 8.10291 4.70328 8.05679 4.58345 7.96742C4.46508 7.87661 4.34095 7.75914 4.21103 7.61498C4.08112 7.47082 3.9512 7.31946 3.82129 7.16091C3.69114 7.00199 3.57521 6.83196 3.47485 6.65278C3.37382 6.4726 3.26699 6.24338 3.1544 5.96518C3.04325 5.68842 2.95881 5.40949 2.90106 5.1284C2.84334 4.8473 2.81086 4.56982 2.80363 4.29593C2.79642 4.02204 2.80363 3.7878 2.82528 3.5932C2.84693 3.3986 2.89024 3.17876 2.95519 2.93371C3.02015 2.68867 3.11399 2.4292 3.23667 2.15531L3.42072 1.74448L3.43155 1.71205L3.44237 1.67961L3.44889 1.67529L3.4532 1.6688L3.45753 1.66231L3.46403 1.65799L3.47054 1.66231L3.47485 1.6688L3.47918 1.67529L3.48568 1.67961L3.49219 1.68394L3.4965 1.69042L3.50083 1.69691L3.50733 1.70123L3.51816 1.72286L3.52898 1.74448L3.5355 1.7488L3.53981 1.75529L3.83212 2.07963C4.02699 2.29585 4.25795 2.53731 4.52499 2.80398C4.79205 3.07065 4.94 3.20903 4.96887 3.21913C4.99775 3.23066 5.03382 3.2638 5.07713 3.31859C5.12043 3.37194 5.26479 3.49951 5.51018 3.70131C5.75558 3.90312 6.07675 4.13737 6.47371 4.40404C6.87068 4.67071 7.31094 4.93379 7.7945 5.19326C8.27809 5.45273 8.79774 5.68697 9.35348 5.89599C9.90923 6.10502 10.299 6.24195 10.5227 6.30682C10.7465 6.37169 11.129 6.45457 11.6703 6.55548C12.2116 6.65639 12.6194 6.72126 12.8936 6.75008C13.1679 6.7789 13.3556 6.79549 13.4566 6.79981L13.6082 6.80414L13.6039 6.7717L13.5973 6.73927L13.554 6.46899C13.5252 6.28881 13.5107 6.03654 13.5107 5.7122C13.5107 5.38787 13.536 5.08876 13.5865 4.81487C13.6371 4.54098 13.7128 4.2635 13.8139 3.9824C13.9149 3.70131 14.0138 3.4757 14.1105 3.30562C14.2087 3.13697 14.3371 2.94453 14.4959 2.7283C14.6547 2.51208 14.8604 2.28865 15.113 2.05801C15.3656 1.82736 15.6543 1.62194 15.9791 1.44176C16.3039 1.26158 16.6034 1.12463 16.8777 1.03094C17.152 0.937248 17.3829 0.87597 17.5706 0.847147C17.7582 0.818324 17.852 0.80174 17.852 0.797415Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="generalArr.facebook_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                >
                  <path
                    d="M9.7561 24.5398V13.5866H13.6177L14.1958 9.31792H9.75599V6.59254C9.75599 5.35666 10.1164 4.51447 11.978 4.51447L14.3521 4.51341V0.695527C13.9415 0.643599 12.5321 0.527344 10.8926 0.527344C7.46944 0.527344 5.1259 2.51661 5.1259 6.16991V9.31792H1.25439V13.5866H5.1259V24.5397H9.7561V24.5398Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <v-divider :thickness="1"></v-divider>
          <div
            class="foot w-100 d-flex flex-column flex-xl-row flex-lg-row align-items-center justify-content-between"
          >
            <div class="d-flex align-items-center gap-2">
              <nuxt-link :to="localePath('/policy')">
                <span> {{ $t("policy2") }}</span>
              </nuxt-link>
              /
              <nuxt-link :to="localePath('/terms')">
                <span> {{ $t("policy3") }}</span>
              </nuxt-link>
            </div>
            <a
              href="https://webstdy.com/ar?utm_source=platin-foorter&utm_medium=referral"
              target="_blank"
              class="d-flex align-items-center"
              style="gap: 10px"
            >
              <span> {{ $t("dev") }}</span>
              <img src="~/assets/images/webstdy.png" alt="" />
            </a>
            <span> {{ $t("rights") }} © {{ dataYear }} . </span>
          </div>
        </div>
      </div>
      <v-dialog v-model="dialog">
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
                    :placeholder="$t('phone')"
                  />
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
                    type="tel"
                    :placeholder="$t('commercialNum')"
                  />
                  <span class="error-msg" v-if="v2$.commercial_register_number.$error">{{
                v2$.commercial_register_number.$errors[0].$message
              }}</span>
              <span class="error-msg2" v-if="errors2.commercial_register_number">{{
                errors2.commercial_register_number[0]
              }}</span>
                </div>
              </div>
              <div class="col-12 mb-4 col-xl-6 col-lg-6 col-md-6">
                <div class="main-input">
                  <label for=""> {{ $t("pass") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.password"
                    type="password"
                    :placeholder="$t('pass')"
                  />
                  <span class="error-msg2" v-if="v2$.password.$error">{{
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
                    type="password"
                    v-model="objVendor.password_confirmation"
                    :placeholder="$t('confirm pass')"
                  />
                  <span class="error-msg2" v-if="v2$.password_confirmation.$error">{{
                v2$.password_confirmation.$errors[0].$message
              }}</span>
              <span class="error-msg2" v-if="errors2.password_confirmation">{{
                errors2.password_confirmation[0]
              }}</span>
                </div>
              </div>
              <div class="col-12 mb-4">
                <div class="main-input">
                  <label for=""> {{ $t("nationalNum") }} <span>*</span> </label>
                  <input
                    v-model="objVendor.national_id"
                    type="tel"
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
            <p>
              {{ $t("auth1") }}
              <nuxt-link @click="dialog = false" :to="localePath('/policy')">
                <span>{{ $t("policy2") }}</span>
              </nuxt-link>
              -
              <nuxt-link @click="dialog = false" :to="localePath('/terms')"
                ><span>{{ $t("policy3") }}</span></nuxt-link
              >
            </p>
            <div class="btns">
              <button @click="AddVendor()" class="fill d-flex align-items-center gap-3">{{ $t("apply") }}
                <v-progress-circular
          v-if="pending"
          indeterminate
          :size="25"
          :width="5"
        ></v-progress-circular>
              </button>
            </div>

            <div @click="dialog = false" class="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.3007 5.70971C18.1139 5.52246 17.8602 5.41723 17.5957 5.41723C17.3312 5.41723 17.0775 5.52246 16.8907 5.70971L12.0007 10.5897L7.1107 5.69971C6.92387 5.51246 6.67022 5.40723 6.4057 5.40723C6.14119 5.40723 5.88753 5.51246 5.7007 5.69971C5.3107 6.08971 5.3107 6.71971 5.7007 7.10971L10.5907 11.9997L5.7007 16.8897C5.3107 17.2797 5.3107 17.9097 5.7007 18.2997C6.0907 18.6897 6.7207 18.6897 7.1107 18.2997L12.0007 13.4097L16.8907 18.2997C17.2807 18.6897 17.9107 18.6897 18.3007 18.2997C18.6907 17.9097 18.6907 17.2797 18.3007 16.8897L13.4107 11.9997L18.3007 7.10971C18.6807 6.72971 18.6807 6.08971 18.3007 5.70971Z"
                  fill="#2D3A4A"
                />
              </svg>
            </div>
          </div>
        </div>
      </v-dialog>
    </footer>
    <footer class="mobile-footer">
      <div class="icons">
        <nuxt-link
          class="icon"
          @click="store.state.activeMobile = 1"
          :class="{ activeMobile: store.state.activeMobile == 1 }"
          :to="localePath('/')"
        >
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
          <span> {{ $t("home") }} </span>
        </nuxt-link>
        <nuxt-link
          :to="localePath('/sections')"
          @click="store.state.activeMobile = 2"
          :class="{ activeMobile: store.state.activeMobile == 2 }"
          class="icon"
        >
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
          <span> {{ $t("sections2") }} </span>
        </nuxt-link>
        <nuxt-link
          :to="localePath('search')"
          @click="store.state.activeMobile = 3"
          :class="{ activeMobile: store.state.activeMobile == 3 }"
          class="icon"
        >
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
          <span> {{ $t("search2") }} </span>
        </nuxt-link>
        <nuxt-link
          class="icon"
          @click="store.state.activeMobile = 4"
          :class="{ activeMobile: store.state.activeMobile == 4 }"
          :to="localePath('mobile-nav')"
        >
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
          <span> {{ $t("settings") }} </span>
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
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { object } from "yup";
const store = useStore;
const router = useRouter();
const route = useRoute();
let categoriesArr = ref([]);
let activeNav = ref(false);
let activeItemsContainer = ref(false);
const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
let theNum = computed(() => {
  return store.state.basketNum;
});

let dialog = ref(false);
let checkInt = ref(false);

let cateId = ref();
let text7 = ref("");

let dataYear = new Date().getFullYear();

let activeMobile = ref(store.state.activeMobile);

let objVendor = ref({
  name: "",
  commercial_register_number: "",
  email: "",
  national_id: "",
  phone: "",
  password: "",
  password_confirmation: "",
});

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
    passVal.value = "The value must be equal to the other value"
}

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
      sameAs:  helpers.withMessage(passVal.value , sameAs(objVendor.value.password)),
    },
  };
});

const v2$ = useValidate(rules, objVendor);

let pending = ref(false);
let errors2 = ref([]);

const AddVendor = async () => {
  let check = await v2$.value.$validate();
  let formDat = new FormData();
  formDat.append("name", objVendor.value.name);
  formDat.append("commercial_register_number", objVendor.value.commercial_register_number);
  formDat.append("national_id", objVendor.value.national_id);
  formDat.append("email", objVendor.value.email);
  formDat.append("phone", objVendor.value.phone);
  formDat.append("password", objVendor.value.password);
  formDat.append("password_confirmation", objVendor.value.password_confirmation);

  if (check) {
    pending.value = true;
    try{
      let result = await axios.post(`${getUrl()}/vendors`, formDat, {
        headers: {
          "Content-Language": `${locale.value}`,
        },
      });
      if(result.status >= 200){
        pending.value = false;
        errors2.value = [];
        // for(const key of  Object.keys(objVendor.value)){
        //   objVendor.value[key] = "";
        // }
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

    }catch(errorss){
     if(errorss.response){
      pending.value = false;
      errors2.value = errorss.response.data.errors;
    }
  }
  }
};

let user = ref(store.state.user);

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
  text7.value = "";
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

let emaill = ref("");
let error = ref();
let emailText = ref("تم الاشتراك بنجاح");
if (locale.value == "ar") {
  emailText.value = "تم الاشتراك بنجاح";
} else {
  emailText.value = "You have successfully subscribed";
}
const subscripe = async () => {
  if (emaill.value != "") {
    try {
      let result = await axios.post(
        `${getUrl()}/news-letter`,
        { email: emaill.value },
        {
          headers: {
            "Content-Language": `${locale.value}`,
          },
        }
      );

      if (result.status >= 200) {
        error.value = "";
        email.value = "";
     
        createToast(
          {
            title: emailText.value,
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
    } catch (errors) {
      if (errors.response) {
        error.value = errors.response.data.errors;
      }
    }
  }
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
const isLoading = ref(false);
onMounted(() => {
  // isLoading.value = true;
  // window.addEventListener('load', () => {
  //   isLoading.value = false;
  // });
  window.addEventListener("online", function () {
    checkInt.value = false;
  });
  window.addEventListener("offline", function () {
    checkInt.value = true;
    console.log("offfff");
  });

  //   watch(router, (to, from) => {
  //   if (to !== from) {
  //     isLoading.value = true;
  //     window.addEventListener('load', () => {
  //       isLoading.value = false;
  //     });
  //   }
  // });

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
