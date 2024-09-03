<template>
    <div>
        <div class="container d-flex main-confirm align-items-center justify-content-center">
        <div  class="confirm-container">
        <div class="confirm-text w-100">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t('thank1') }}</h4>
          <p>
            {{ $t('thank2') }}
          </p>

          <div class="order-number">
            <!-- <h5>{{ $t('orderNum') }} : <span> {{ orderNum1 }} </span></h5> -->
            <button @click="copyToClipboard();" class="iconn">
              <img v-if="check" src="~/assets/images/share1.svg" style="margin-bottom:0px" alt="">
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                viewBox="0 0 448 512">
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>

          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import success from "~/assets/animations/success.json";
const localePath = useLocalePath();
const { locale } = useI18n();
let check = ref(true);
function copyToClipboard() {
  if (process.client) {
    check.value = false;
    const clipBoard = navigator.clipboard;
    clipBoard.writeText('dsdsdwsds').then(() => {
    });

    setTimeout(() => {
      check.value = true;
    }, 1000);
  }

}

</script>


<style lang="scss" scoped>
.main-confirm{
margin: 120px auto;
}
.confirm-container {
  border-radius: 16px;
  width: 100%;
  background: #fff;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  .confirm-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 13px;
    h4 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      color: #2d3a4a;
    }
    p {
      width: 361px;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      color: #5a7184;
    }
  }
  .send{
    border: 1px solid #2d3a4a;
    padding: 10px 60px;
    border-radius: 12px;
  }
}

@media(max-width: 760px){
    .main-confirm{
        margin: 80px auto;
        padding-bottom: 80px;
    }
    .confirm-container{

    }
}

</style>