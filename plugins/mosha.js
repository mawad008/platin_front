import moshaToastify from 'mosha-vue-toastify';

export default ({ app }, inject) => {
  const { createToast } = moshaToastify;
  // Inject the createToast function into the context as $createToast
  inject('createToast', createToast);
};
