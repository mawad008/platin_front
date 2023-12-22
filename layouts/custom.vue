<template>
    <div>
        <slot />
  
    </div>
  </template>


  <script setup>
  const localePath = useLocalePath();
  const { locale, setLocale } = useI18n();


  onMounted(() => {
      if (locale.value == "ar") {
          setLocale("ar");
          useHead({
              htmlAttrs: {
                  lang: 'ar',
                  dir: 'rtl',
              }
          });
      } else if (locale.value == "en") {
          useHead({
              htmlAttrs: {
                  lang: 'en',
                  dir: 'ltr',
              }
          });
          setLocale("en");
      }
  });

  </script>