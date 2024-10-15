// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  // target: "static",
  modules: [
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "nuxt-primevue",
    "nuxt-lazy-load",
    "@nuxt/image",
    // "nuxt-purgecss",
    // "@nuxtjs/axios",
    // "@nuxtjs/auth-next",
  ],

  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder
    defaultImage: "/loader-platin.svg",

    // To remove class set value to false
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",

    observerConfig: {
      // See IntersectionObserver documentation
    },
  },

  image: {
    formats: {
      webp: {
        quality: 80,
      },
    },
  },
  vite: {
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  plugins: [{ src: "./plugins/mosha.js" }],
  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
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
        { rel: "icon", type: "image/png", href: "/fav.svg" },
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
        {
          innerHTML: `
      function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFHPGL7H');
        `,
        },
        {
          innerHTML: `
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFHPGL7H"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        `,
        tagPosition: "bodyClose",
        },
        {
          type: "text/javascript",
          src: "/js/google-maps-loader.js",
          tagPosition: "bodyClose",
        },
      ],
      // noscript: [
      //   {
      //     children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFHPGL7H"
      //      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      //     body: true // This ensures the noscript tag is added in the body
      //   }
      // ]
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    // "https://cdn.jsdelivr.net/npm/vuetify@3.6.13/dist/vuetify.min.css",
    "@mdi/font/css/materialdesignicons.min.css",
    // "https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css",
    "~/assets/bootstrap/css/bootstrap.css",
    // "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "~/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
});
