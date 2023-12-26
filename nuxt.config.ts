// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000, // You can set a specific port if neede
  // },

  modules: [
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "nuxt-primevue",
    // "@nuxtjs/axios",
    // "@nuxtjs/auth-next",
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         required: true,
  //         // type: 'Bearer'
  //         type: ''
  //       },
  //       user: {
  //         property: 'user',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: {
  //           url: "https://platine.webstdy.net/api/login",
  //           method: "post",

  //         },
  //         logout: { url: "/api/auth/logout", method: "delete" },
  //         user: { url: "/api/auth/user", method: "get" },
  //       },

  //     },
  //   },
  // },
  plugins: [{ src: "~/plugins/lottie.js", mode: "client" }],
  i18n: {
    lazy: false,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
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
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: "/js/bootstrap.bundle.min.js",
          // body: true,
        },
        // {
        //   src: "/chart.utils.js",
        //   body: true
        // },
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
