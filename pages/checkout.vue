<template>
    <div>
      <div class="container checkout-page" style="min-height:100vh;">
      <v-stepper
        v-model="step"
        editable
        :items="items"
        show-actions
      >
         
        
        <template v-slot:item.1>
        <div class="row">
        <div class="col-7">
            <div class="form-box ">
                  <div class="first-info d-flex flex-column gap-3">
            <div class="radio-inputs d-flex align-items-center gap-3">
            <label  for="first-input">
             <input id="first-input" type="radio" checked name="" value="1" />
             <div class="radio-input">
              <div class="head d-flex align-items-center justify-content-between">
               <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z" fill=""/>
          <path d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z" fill=""/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z" 
          fill=""/>
        </svg>

        <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2"/>
          <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95"/>
        </svg>

        <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED"/>
        </svg>
              </div>
              <div class="text">   
              <h4> هدية </h4>
               <span>  اختر هذا الخيار إذا كنت تريد شراء الطلب كهدية لشخص آخر.     </span>
              </div>
             </div>
            </label>
            <label  for="second-input">
             <input id="second-input" type="radio" name="" value="2" />
             <div class="radio-input">
              <div class="head d-flex align-items-center justify-content-between">
               <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.0008 10.7998C11.338 10.7998 10.8008 11.337 10.8008 11.9998C10.8008 12.6626 11.338 13.1998 12.0008 
      13.1998C12.6635 13.1998 13.2008 12.6626 13.2008 11.9998C13.2008 11.337 12.6635 10.7998 12.0008 10.7998Z" fill=""/>
          <path d="M10.7996 15.5996C10.1368 15.5996 9.59961 16.1368 9.59961 16.7996V17.9996H14.3996V16.7996C14.3996 
      16.1368 13.8624 15.5996 13.1996 15.5996H10.7996Z" fill=""/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 0C1.61178 0 0 1.61178 0 3.6V20.4C0 22.3883 
      1.61178 24 3.6 24H20.4C22.3883 24 24 22.3883 24 20.4V9.39412C24 8.43934 23.6207 7.52366 22.9456 
      6.84853L17.1515 1.05442C16.4764 0.379284 15.5606 0 14.6059 0H3.6ZM19.903 7.2L16.8 4.09705V6C16.8 
      6.66274 17.3372 7.2 18 7.2H19.903ZM15.138 13.7657C15.4321 13.2439 15.6 12.6416 15.6 12C15.6 10.0117 
      13.9883 8.4 12 8.4C10.0117 8.4 8.4 10.0117 8.4 12C8.4 12.6416 8.56783 
      13.2439 8.86199 13.7657C7.86252 14.4053 7.2 15.5252 7.2 16.8V19.2C7.2 19.8628 7.73726 20.4 8.4 
      20.4H15.6C16.2628 20.4 16.8 19.8628 16.8 19.2V16.8C16.8 15.5252 16.1375 14.4053 15.138 13.7657Z" 
          fill=""/>
        </svg>

        <svg class="checked-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="22" height="22" rx="11" stroke="#DCBA95" stroke-width="2"/>
          <rect x="4.28516" y="4.28516" width="15.4286" height="15.4286" rx="7.71429" fill="#DCBA95"/>
        </svg>

        <svg class="unchecked-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <rect x="0.925781" y="0.5" width="22.6712" height="23" rx="11.3356" stroke="#EBEAED"/>
        </svg>
              </div>
              <div class="text">   
              <h4> شخصي </h4>
               <span> اختر هذا الخيار إذا كانت العملية لشراء شخصي.</span>
              </div>
             </div>
            </label>
          </div>
         
             <div class="d-flex align-items-center gap-2">
             <div class="input d-flex w-50 flex-column">
             <label for=""> الاسم الاول <span>*</span> </label>
                 <v-text-field
              :rules="[required]"
              clearable
              placeholder="مثال : محمد"
            ></v-text-field>
             </div>
             <div class="input d-flex w-50 flex-column">
            <label for=""> الاسم الاخير<span>*</span> </label>               
                 <v-text-field
              :rules="[required]"
              clearable
              placeholder="مثال : مصطفي"
            ></v-text-field>
             </div>
             </div>          
             <div class="d-flex align-items-center gap-2">
             <div class="input d-flex w-50 flex-column">
             <label for=""> رقم الهاتف </label>
                 <v-text-field
              clearable
              type="tel"
              placeholder="+201066333725"
            ></v-text-field>
             </div>
             <div class="input d-flex w-50 flex-column">
            <label for=""> البريد الالكتروني <span>*</span> </label>               
                 <v-text-field
              :rules="[required]"
              clearable
              type="email"
              placeholder=" مثال : m.info@icloud.com "
            ></v-text-field>
             </div>
             </div>          
            </div>
        </div>
        </div>
      
        </div>
        </template>

        <template v-slot:item.2>
          <h3 class="text-h6">Shipping</h3>

          <br>

           <div>
            llllllfff
           </div>
        </template>

        <template v-slot:item.3>
          <h3 class="text-h6">Confirm</h3>

          <br>

           <div>
            khaleddddd
           </div>
        </template>
      </v-stepper>
    
      </div>        
    </div>
</template>

<script setup>
let step = ref(1);
let items = ref([
    'معلومات المستلم',
    'الشحن والعنوان',
    'طرق الدفع',
    'مراجعة الطلب',
]);


const required =  (v) => {
    return !!v || 'Field is required'
}
</script>

<style lang="scss" scoped>


</style>