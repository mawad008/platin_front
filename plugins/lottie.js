import  Vue3Lottie  from "vue3-lottie";

export default ({ app }, inject) => {
  // Inject the component globally
  app.component("Vue3Lottie", Vue3Lottie);
};
