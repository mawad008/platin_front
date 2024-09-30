<template>
    <div>
        <div class="text-container">
                <div
                  class="head w-100 d-flex align-items-centr justify-content-between"
                >
                  <span class="sell"> {{ $t("bestSel") }} </span>

                  <div class="star reverse d-flex align-items-center gap-2">
                    <span> {{ mainProduct.rate }} </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M9.87279 1L12.6145 7.16968L18.7456 8.16511L14.3092 12.9648L15.3562 19.7456L9.87279 16.5425L4.38941 19.7456L5.4364 12.9648L1 8.16511L7.1311 7.16968L9.87279 1Z"
                        fill="#ECB43C"
                        stroke="#ECB43C"
                        stroke-width="1.66365"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="icons mobile d-flex align-items-center gap-2">
                    <div @click="shareBtn = !shareBtn" class="octagon product">
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8162 3.51992C12.8162 2.63627 12.0998 1.91992 11.2162 1.91992C10.3325 1.91992 9.61617 2.63627 9.61617 3.51992C9.61617 4.40358 10.3325 5.11992 11.2162 5.11992C12.0998 5.11992 12.8162 4.40358 12.8162 3.51992ZM12.8162 11.8399C12.8162 10.9563 12.0998 10.2399 11.2162 10.2399C10.3325 10.2399 9.61617 10.9563 9.61617 11.8399C9.61617 12.7236 10.3325 13.4399 11.2162 13.4399C12.0998 13.4399 12.8162 12.7236 12.8162 11.8399ZM4.17617 6.39992C5.05983 6.39992 5.77617 7.11627 5.77617 7.99992C5.77617 8.88358 5.05983 9.59992 4.17617 9.59992C3.29252 9.59992 2.57617 8.88358 2.57617 7.99992C2.57617 7.11627 3.29252 6.39992 4.17617 6.39992ZM9.09004 4.22696C9.15836 4.43249 9.25564 4.6248 9.37706 4.79904L5.85439 6.51624C5.69861 6.34017 5.51555 6.18879 5.31182 6.06873L9.09004 4.22696ZM9.11045 11.0742C9.03603 11.2789 8.99058 11.4974 8.97908 11.7249L5.36416 9.8993C5.561 9.77592 5.73729 9.6228 5.88673 9.44622L9.11045 11.0742Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div>
                    <!-- <div class="octagon product">
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10.794 1.33301H5.20732C2.78065 1.33301 1.33398 2.77967 1.33398 5.20634V10.7863C1.33398 13.2197 2.78065 14.6663 5.20732 14.6663H10.7873C13.214 14.6663 14.6607 13.2197 14.6607 10.793V5.20634C14.6673 2.77967 13.2207 1.33301 10.794 1.33301ZM11.9007 9.39967C11.874 9.45967 11.8407 9.51301 11.794 9.55967L9.76732 11.5863C9.66732 11.6863 9.54065 11.733 9.41398 11.733C9.28732 11.733 9.16065 11.6863 9.06065 11.5863C8.86732 11.393 8.86732 11.073 9.06065 10.8797L10.234 9.70634H4.56732C4.29398 9.70634 4.06732 9.47967 4.06732 9.20634C4.06732 8.93301 4.29398 8.70634 4.56732 8.70634H11.4407C11.5073 8.70634 11.5673 8.71967 11.634 8.74634C11.754 8.79967 11.854 8.89301 11.9073 9.01967C11.9473 9.13967 11.9473 9.27967 11.9007 9.39967ZM11.434 7.28634H4.56732C4.50065 7.28634 4.44065 7.27301 4.37398 7.24634C4.25398 7.19301 4.15398 7.09967 4.10065 6.97301C4.04732 6.85301 4.04732 6.71301 4.10065 6.59301C4.12732 6.53301 4.16065 6.47967 4.20732 6.43301L6.23398 4.40634C6.42732 4.21301 6.74732 4.21301 6.94065 4.40634C7.13398 4.59967 7.13398 4.91967 6.94065 5.11301L5.77398 6.28634H11.4407C11.714 6.28634 11.9407 6.51301 11.9407 6.78634C11.9407 7.05967 11.714 7.28634 11.434 7.28634Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div> -->
                    <div
                      v-if="clickedItem(mainProduct.id) != mainProduct.id"
                      @click="addTofav(mainProduct)"
                      class="octagon product"
                    >
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.00065 14.4331C7.79398 14.4331 7.59398 14.4064 7.42732 14.3464C4.88065 13.4731 0.833984 10.3731 0.833984 5.79307C0.833984 3.45974 2.72065 1.56641 5.04065 1.56641C6.16732 1.56641 7.22065 2.00641 8.00065 2.79307C8.78065 2.00641 9.83399 1.56641 10.9607 1.56641C13.2807 1.56641 15.1673 3.46641 15.1673 5.79307C15.1673 10.3797 11.1207 13.4731 8.57398 14.3464C8.40732 14.4064 8.20732 14.4331 8.00065 14.4331ZM5.04065 2.56641C3.27398 2.56641 1.83398 4.01307 1.83398 5.79307C1.83398 10.3464 6.21398 12.8797 7.75398 13.4064C7.87398 13.4464 8.13398 13.4464 8.25398 13.4064C9.78732 12.8797 14.174 10.3531 14.174 5.79307C14.174 4.01307 12.734 2.56641 10.9673 2.56641C9.95399 2.56641 9.01398 3.03974 8.40732 3.85974C8.22065 4.11307 7.79398 4.11307 7.60732 3.85974C6.98732 3.03307 6.05398 2.56641 5.04065 2.56641Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div>
                    <div
                      v-if="clickedItem(mainProduct.id) == mainProduct.id"
                      @click="deleteTofav(mainProduct.id)"
                      class="octagon product active"
                    >
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
                          fill="#DCDEE0"
                        />
                      </svg>
                    </div>
                    <div v-if="shareBtn" class="share-box">
                      <a
                        target="_blank"
                        :href="`https://t.me/share/url?url=${route}`"
                      >
                        <img src="~/assets/images/social1.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://www.facebook.com/sharer/sharer.php?${route}&quote=${name}`"
                      >
                        <img src="~/assets/images/social2.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://twitter.com/intent/tweet?url=${route}`"
                      >
                        <img src="~/assets/images/social3.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://wa.me/?text=${route}/`"
                      >
                        <img src="~/assets/images/social4.svg" alt="" />
                      </a>

                      <button @click="copyToClipboard()">
                        <img
                          v-if="check"
                          src="~/assets/images/social5.svg"
                          alt=""
                        />
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                          height="20"
                          width="20"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <span class="type-sapn">{{ mainProduct.category }}</span>

                <div
                  class="type-list w-100 d-flex align-items-xl-center align-items-lg-center flex-column flex-xl-row flex-lg-row gap-2 justify-content-between"
                >
                  <h5 class="fw-bold">{{ mainProduct.name }}</h5>

                  <div class="icons reverse d-flex align-items-center gap-2">
                    <div @click="shareBtn = !shareBtn" class="octagon product">
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8162 3.51992C12.8162 2.63627 12.0998 1.91992 11.2162 1.91992C10.3325 1.91992 9.61617 2.63627 9.61617 3.51992C9.61617 4.40358 10.3325 5.11992 11.2162 5.11992C12.0998 5.11992 12.8162 4.40358 12.8162 3.51992ZM12.8162 11.8399C12.8162 10.9563 12.0998 10.2399 11.2162 10.2399C10.3325 10.2399 9.61617 10.9563 9.61617 11.8399C9.61617 12.7236 10.3325 13.4399 11.2162 13.4399C12.0998 13.4399 12.8162 12.7236 12.8162 11.8399ZM4.17617 6.39992C5.05983 6.39992 5.77617 7.11627 5.77617 7.99992C5.77617 8.88358 5.05983 9.59992 4.17617 9.59992C3.29252 9.59992 2.57617 8.88358 2.57617 7.99992C2.57617 7.11627 3.29252 6.39992 4.17617 6.39992ZM9.09004 4.22696C9.15836 4.43249 9.25564 4.6248 9.37706 4.79904L5.85439 6.51624C5.69861 6.34017 5.51555 6.18879 5.31182 6.06873L9.09004 4.22696ZM9.11045 11.0742C9.03603 11.2789 8.99058 11.4974 8.97908 11.7249L5.36416 9.8993C5.561 9.77592 5.73729 9.6228 5.88673 9.44622L9.11045 11.0742Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div>
                    <!-- <div class="octagon product">
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10.794 1.33301H5.20732C2.78065 1.33301 1.33398 2.77967 1.33398 5.20634V10.7863C1.33398 13.2197 2.78065 14.6663 5.20732 14.6663H10.7873C13.214 14.6663 14.6607 13.2197 14.6607 10.793V5.20634C14.6673 2.77967 13.2207 1.33301 10.794 1.33301ZM11.9007 9.39967C11.874 9.45967 11.8407 9.51301 11.794 9.55967L9.76732 11.5863C9.66732 11.6863 9.54065 11.733 9.41398 11.733C9.28732 11.733 9.16065 11.6863 9.06065 11.5863C8.86732 11.393 8.86732 11.073 9.06065 10.8797L10.234 9.70634H4.56732C4.29398 9.70634 4.06732 9.47967 4.06732 9.20634C4.06732 8.93301 4.29398 8.70634 4.56732 8.70634H11.4407C11.5073 8.70634 11.5673 8.71967 11.634 8.74634C11.754 8.79967 11.854 8.89301 11.9073 9.01967C11.9473 9.13967 11.9473 9.27967 11.9007 9.39967ZM11.434 7.28634H4.56732C4.50065 7.28634 4.44065 7.27301 4.37398 7.24634C4.25398 7.19301 4.15398 7.09967 4.10065 6.97301C4.04732 6.85301 4.04732 6.71301 4.10065 6.59301C4.12732 6.53301 4.16065 6.47967 4.20732 6.43301L6.23398 4.40634C6.42732 4.21301 6.74732 4.21301 6.94065 4.40634C7.13398 4.59967 7.13398 4.91967 6.94065 5.11301L5.77398 6.28634H11.4407C11.714 6.28634 11.9407 6.51301 11.9407 6.78634C11.9407 7.05967 11.714 7.28634 11.434 7.28634Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div> -->
                    <div
                      v-if="clickedItem(mainProduct.id) != mainProduct.id"
                      @click="addTofav(mainProduct)"
                      class="octagon product"
                    >
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.00065 14.4331C7.79398 14.4331 7.59398 14.4064 7.42732 14.3464C4.88065 13.4731 0.833984 10.3731 0.833984 5.79307C0.833984 3.45974 2.72065 1.56641 5.04065 1.56641C6.16732 1.56641 7.22065 2.00641 8.00065 2.79307C8.78065 2.00641 9.83399 1.56641 10.9607 1.56641C13.2807 1.56641 15.1673 3.46641 15.1673 5.79307C15.1673 10.3797 11.1207 13.4731 8.57398 14.3464C8.40732 14.4064 8.20732 14.4331 8.00065 14.4331ZM5.04065 2.56641C3.27398 2.56641 1.83398 4.01307 1.83398 5.79307C1.83398 10.3464 6.21398 12.8797 7.75398 13.4064C7.87398 13.4464 8.13398 13.4464 8.25398 13.4064C9.78732 12.8797 14.174 10.3531 14.174 5.79307C14.174 4.01307 12.734 2.56641 10.9673 2.56641C9.95399 2.56641 9.01398 3.03974 8.40732 3.85974C8.22065 4.11307 7.79398 4.11307 7.60732 3.85974C6.98732 3.03307 6.05398 2.56641 5.04065 2.56641Z"
                          fill="#919EAB"
                        />
                      </svg>
                    </div>
                    <div
                      v-if="clickedItem(mainProduct.id) == mainProduct.id"
                      @click="deleteTofav(mainProduct.id)"
                      class="octagon product active"
                    >
                      <octagon />
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3812 6.13389C14.1606 4.35511 17.0457 4.35511 18.8252 6.13389C20.6047 7.91277 20.6047 10.797 18.8252 12.5759L12.3392 19.0593C12.1518 19.2466 11.8479 19.2466 11.6605 19.0593L5.17453 12.5759C3.39495 10.797 3.39495 7.91277 5.17453 6.13389C6.95401 4.35511 9.83904 4.35511 11.6185 6.13389L11.9998 6.51506L12.3812 6.13389Z"
                          fill="#DCDEE0"
                        />
                      </svg>
                    </div>
                    <div v-if="shareBtn" class="share-box">
                      <a
                        target="_blank"
                        :href="`https://t.me/share/url?url=${route}`"
                      >
                        <img src="~/assets/images/social1.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://www.facebook.com/sharer/sharer.php?${route}&quote=${name}`"
                      >
                        <img src="~/assets/images/social2.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://twitter.com/intent/tweet?url=${route}`"
                      >
                        <img src="~/assets/images/social3.svg" alt="" />
                      </a>
                      <a
                        target="_blank"
                        :href="`https://wa.me/?text=${route}/`"
                      >
                        <img src="~/assets/images/social4.svg" alt="" />
                      </a>

                      <button @click="copyToClipboard()">
                        <img
                          v-if="check"
                          src="~/assets/images/social5.svg"
                          alt=""
                        />
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#fff"
                          height="20"
                          width="20"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="star mobile d-flex align-items-center gap-2">
                    <span> {{ mainProduct.rate }} </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M9.87279 1L12.6145 7.16968L18.7456 8.16511L14.3092 12.9648L15.3562 19.7456L9.87279 16.5425L4.38941 19.7456L5.4364 12.9648L1 8.16511L7.1311 7.16968L9.87279 1Z"
                        fill="#ECB43C"
                        stroke="#ECB43C"
                        stroke-width="1.66365"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="vendor-list d-flex flex-column gap-4">
                  <div class="by d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center gap-1">
                      <span> {{ $t("by") }}: </span>
                      <span
                        @click="
                          goToVendor(
                            mainProduct.vendor_id,
                            mainProduct.vendor_name
                          )
                        "
                        class="vendor fw-bold"
                      >
                        {{ $t("store") }} {{ mainProduct.vendor_name }}
                      </span>
                    </div>
                    <div
                      class="check d-flex align-items-center justify-content-center gap-2"
                    >
                      <img src="~/assets/images/check.svg" alt="" />
                      <span>{{ $t("store valid") }}</span>
                    </div>
                  </div>
                  <div class="time d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center gap-1">
                      <span> {{ $t("del date") }}: </span>
                      <span class="days fw-bold"> {{ $t("days") }}</span>
                    </div>
                    <img src="~/assets/images/delivery.svg" alt="" />
                  </div>
                </div>

                <div class="price-list">
                  <span class="word">
                    {{ $t("price") }}
                    {{
                      mainProduct.discount_price ? $t("startFrom") : ""
                    }}</span
                  >
                  <div class="price-content">
                    <div
                      v-if="newPriceItem"
                      class="d-flex align-items-center gap-2 mt-2"
                    >
                      <h4 class="">
                        {{
                          newPriceItem.discount_price
                            ? newPriceItem.discount_price
                            : newPriceItem.price
                        }}
                        {{ $t("curr") }}
                      </h4>
                      <span
                        v-if="newPriceItem.discount_price"
                        class="desc"
                        style="font-size: 12px"
                      >
                        {{ newPriceItem.price }} {{ $t("curr") }}</span
                      >
                    </div>
                    <div v-else class="d-flex align-items-center gap-2 mt-2">
                      <h4 class="">
                        {{
                          mainProduct.discount_price
                            ? mainProduct.discount_price
                            : mainProduct.price
                        }}
                        {{ $t("curr") }}
                      </h4>
                      <span
                        v-if="mainProduct.discount_price"
                        class="desc"
                        style="font-size: 12px"
                      >
                        {{ mainProduct.price }} {{ $t("curr") }}</span
                      >
                    </div>
                  </div>
                </div>

                <div
                  class="count-type d-flex flex-column flex-xl-row flex-lg-row align-items-start align-items-xl-center align-items-lg-center gap-3"
                >
                  <div v-if="!newPriceItem?.stock == 0" class="count d-flex flex-column gap-2">
                    <span> {{ $t("amount") }} </span>
                    <input type="number" v-model="quantity" min="1" />
                  </div>
                  <!-- <div class="type d-flex flex-column gap-2">
                    <span class="word"> {{ $t("skin") }}</span>
                    <div class="colors">
                      <button v-for="(item, index) in mainProduct.skin_colors" :class="{ active: btnActive == index }"
                        @click="btnActive = index">
                        <span> {{ item.name }} </span>
                      </button>
                    </div>
                  </div> -->
                </div>

                <div class="actions-btns">
                  <button @click="addToBasket()" :disabled="newPriceItem?.stock == 0" class="add-cart-btn" :class="{'out': newPriceItem?.stock == 0}">
                    <span>  {{newPriceItem?.stock == 0 ? 'غير متوفر الان' : $t("add to cart") }}</span>
                    <i v-if="!newPriceItem?.stock == 0" class="fa-solid fa-cart-shopping"></i>
                  </button>
                  <!-- <button class="try">{{ $t("try") }}</button> -->
                  <div
                    class="shipping d-flex flex-column flex-xl-row flex-lg-row align-items-start align-items-xl-center align-items-lg-center mt-3 gap-3"
                  >
                    <div
                      v-if="mainProduct.fast_shipping_cities"
                      class="d-flex align-items-center gap-2"
                    >
                      <img src="~/assets/images/package.svg" alt="" />
                      <div
                        v-if="mainProduct.fast_shipping_cities.length > 0"
                        class="d-flex align-items-center gap-1 speed"
                      >
                        {{ $t("available") }}
                        <span>{{ $t("fast shipping") }}</span>
                        {{ $t("in") }}
                        <div v-for="i in mainProduct.fast_shipping_cities">
                          {{ i.name }}
                        </div>
                      </div>
                      <div v-else class="d-flex align-items-center gap-1 speed">
                        {{ $t("unavailable") }}
                        <span>{{ $t("fast shipping") }}</span>
                      </div>
                    </div>
                    <nuxt-link
                      :to="localePath('/returnPolicy')"
                      class="d-flex align-items-center gap-2"
                    >
                      <img src="~/assets/images/package.svg" alt="" />
                      <span> {{ $t("back") }}</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
    </div>
</template>
<script setup>
let props = defineProps(["mainProduct" , "newPriceItem" , "goToVendor" , "addToBasket"]);
import { useStore } from "~/store";
const store = useStore;
const localePath = useLocalePath();
const { locale } = useI18n();
const MainRoute = useRoute();
let shareBtn = ref(false);
let quantity = computed(() => store.state.product.quantity);
let route = ref(MainRoute.fullPath);
let name = MainRoute.query.name;
if (process.client) {
  route.value = window.location.href;
}

let check = ref(true);

function copyToClipboard() {
  /* Copy the text */
  if (process.client) {
    check.value = false;
    const clipBoard = navigator.clipboard;
    clipBoard.writeText(route.value).then(() => {});

    setTimeout(() => {
      check.value = true;
    }, 1000);
  }
}


let text1 = ref("تم الاضافة الي قائمة المفضلات");
let text3 = ref("تم الحذف من قائمة المفضلات");

if (locale.value == "ar") {
  text1.value = "تم الاضافة الي قائمة المفضلات";
  text3.value = "تم الحذف من قائمة المفضلات";
} else if (locale.value == "en") {
  text1.value = "added to wishlist";
  text3.value = "removed from wishlist";
}
let anim = ref(false);
const addTofav = async (item, index) => {
  store.commit("addFav", { item: item, index: index });
  anim.value = true;
  const moshaToastify = await import("mosha-vue-toastify");
  const { createToast } = moshaToastify;
  createToast(
    {
      title: text1.value,
    },
    {
      showIcon: "true",
      type: "success",
      toastBackgroundColor: "#dcba95",
      timeout: 2000,
    }
  );
  setTimeout(() => {
    anim.value = false;
  }, 2000);
};
const deleteTofav = async (itemId) => {
  store.commit("deleteFav", { itemId: itemId });
  const moshaToastify = await import("mosha-vue-toastify");
  const { createToast } = moshaToastify;
  createToast(
    {
      title: text3.value,
    },
    {
      showIcon: "true",
      type: "success",
      toastBackgroundColor: "#dcba95",
      timeout: 2000,
    }
  );
};

const clickedItem = (id) => {
  return store.state.isInFav.find((item) => item == id);
};
</script>
<style lang="">
    
</style>