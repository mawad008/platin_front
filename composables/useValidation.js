import  useValidate  from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

export const useValidation = () => {
  const { locale } = useI18n();

  const value1 = ref("This field is required");
  const value2 = ref("The email field is required");
  const value3 = ref("Invalid email format");

  if (locale.value === "ar") {
    value1.value = "هذا الحقل مطلوب";
    value2.value = "حقل البريد الإلكتروني مطلوب";
    value3.value = "تنسيق البريد الإلكتروني غير صالح";
  }else {
    value1.value = "value is required";
    value2.value = "The email field is required";
    value3.value = "Invalid email format";
  }

  const rules = computed(() => ({
    first_name: { required: helpers.withMessage(value1.value, required) },
    last_name: { required: helpers.withMessage(value1.value, required) },
    phone: { required: helpers.withMessage(value1.value, required) },
    email: {
      required: helpers.withMessage(value2.value, required),
      email: helpers.withMessage(value3.value, email),
    },
  }));

  const rules2 = computed(() => {
    return {
      city: { required: helpers.withMessage(value1.value, required) },
      street_name: { required: helpers.withMessage(value1.value, required) },
      building_number: { required: helpers.withMessage(value1.value, required) },
      district: { required: helpers.withMessage(value1.value, required) },
    };
  });

  
  function returnV(form){
      return useValidate(rules , form);
  }
  function returnV2(form){
      return useValidate(rules2 , form);
  }

  return { rules , returnV ,  returnV2};
};