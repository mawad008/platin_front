import { Head, Body } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["nuxt-swiper", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      script: [
        {
          src: "/js/bootstrap.bundle.min.js",
          body: true,
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/bootstrap/css/bootstrap.css",
    "~/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
});
