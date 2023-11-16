<template>
    <div style="min-height: 100vh;">
      <div class="container product-page">

      <div class="row">

        <div class="col-12 col-xl-5 col-lg-5 col-md-12">
         <div class="text-container">
           <div class="head w-100 d-flex align-items-centr justify-content-between">
             <span class="sell"> الاكثر مبيعا </span>
              <div class="star d-flex align-items-center gap-2">
               <span> 3.4 </span>
               <i class="fa-solid fa-star"></i>
              </div>
           
           </div>
           <span class="type-sapn"> الذهب </span>
            
            <div class="type-list w-100 d-flex align-items-center justify-content-between">
              <h5>  خاتم ذهب 2.5 جرام صافي عيار 24 قيراط </h5>
              <div class="icons d-flex align-items-center gap-2 ">
               <div class="octagon">
                <octagon/>
                <i class="fa-solid fa-share-nodes"></i>
               </div>
               <div class="octagon">
                <octagon/>
                <i class="fa-solid fa-share-nodes"></i>
               </div>
               <div class="octagon">
                <octagon/>
                <i class="fa-solid fa-share-nodes"></i>
               </div>
              </div>
            </div>
              
              <div class="vendor-list d-flex flex-column gap-3">
                
                <div class="by d-flex align-items-center gap-3">
                <div class="d-flex align-items-center gap-1">
                 <span> بواسطة : </span>
                 <span class="vendor fw-bold">  متجر زهرة الياقوت </span>
                </div>
                  <div class="check d-flex align-items-center justify-content-center gap-2">
                   <img src="~/assets/images/check.svg" alt="">
                   <span>متجر معتمد</span>
                  </div>
                </div>
                <div class="time d-flex align-items-center gap-3">
                <div class="d-flex align-items-center gap-1">
                 <span> موعد التوصيل : </span>
                 <span class="days fw-bold"> 7-3 أيام تقريباً </span>
                </div>
                  <img src="~/assets/images/delivery.svg" alt="">
                </div>
              </div>
               
               <div class="price-list">
                 
                 <span class="word">  السعر </span>
                 <h4 class="d-flex align-items-center gap-2 mt-2">  
                   2500 ر.س
                   <span class="disc" style="font-size: 12px;"> 4000 ر.س </span>
                  </h4>
               </div>

               <div class="count-type d-flex align-items-center gap-3">
                 <div class="count d-flex flex-column gap-2">
                 <span> الكمية </span>
                 <input type="num" value="1" min="1">
                 </div>
                 <div class="type d-flex flex-column gap-2">
                  <span class="word"> لون البشرة </span>
                  <div class="colors">
                  <button class="active">
                   <span> بيضاء </span>
                  </button>
                  <button>
                   <span> حنطية </span>
                  </button>
                   <button>
                   <span> داكنة </span>
                   </button>
                  </div>
                 </div>
               </div>

               <div class="actions-btns">
                 <button class="add-cart-btn">
                  <span> اضف الي اسلة </span>
                  <i class="fa-solid fa-cart-shopping"></i>
                 </button>
                 <button class="try"> جربيه </button>
                 <div class="shipping d-flex align-items-center gap-3">
                 <div class="d-flex align-items-center gap-2">
                  <img src="~/assets/images/package.svg" alt="">
                    <div class="d-flex align-items-center gap-1 speed">متوفر <span>الشحن السريع</span> في الرياض</div>
                 </div>
                 <div class="d-flex align-items-center gap-2">
                  <img src="~/assets/images/package.svg" alt="">
                    <span>  سياسة الاسترجاع </span>
                 </div>
                 </div>
               </div>
           
         </div>
       
       </div>

       <div class="col-12 col-xl-7 col-lg-7 col-md-12">
        <div class="d-flex main-swiper-container" style="">
           
          <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    
    :grabCursor='true'
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="[SwiperFreeMode , SwiperThumbs]"
    class="mySwiper2"
  >
    <swiper-slide >
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

    <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        
        </swiper-slide
    ><swiper-slide >
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
    
     </swiper-slide >

    <swiper-slide>
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>

        </swiper-slide>

    <swiper-slide >
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
        </swiper-slide
    ><swiper-slide 
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"/>
    <button class="size"> <span>دليل المقاسات</span> </button> 
    <div @click="showMultiple" class="zoom">
     <img src="~/assets/images/zoom.svg" alt="">
    </div>
    </swiper-slide>
  </swiper>

  <div class="d-flex flex-column align-items-center justify-content-center  swiper-small-imgs">
  <div @click="setThumbsSwiper" class="slider__prev">
    <i class="fa-solid fa-chevron-up"></i>
  </div>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween='15'
    :slidesPerView='3'
    :direction='vertical'
    :freeMode='true'
    :watchSlidesProgress='true'
    :navigation="{
        nextEl: '.slider__next', 
		prevEl: '.slider__prev'
    }"
    :breakpoints="{
       
        '268':{
            direction: 'vertical'
        },
    }"
    :modules="[ SwiperNavigation]"
    class="mySwiper "
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper>
   <div class="play-icon">
    <div class="circle">
      <i class="fa-solid fa-play"></i>
    </div>
   </div>
  <div @click="setThumbsSwiper" class="slider__next ">
    <i class="fa-solid fa-chevron-down"></i>
  </div>
  </div>

        </div>
       
       </div>

      

      </div>

      </div>

      <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
       
       <div class="container similar-products">
         <div class="head d-flex flex-column gap-3 align-items-center justify-content-center">
          <h3> منتجات مشابهة  </h3>
          <p>  استمتع بمجموعتنا المميزة من المنتجات المشابهة التي تلبي احتياجاتك بشكل مثالي. حيث تتشابه هذه المنتجات مع المنتج الأصلي فيما يتعلق بالمواد، الوزن، وجودة التصنيع. </p>
         </div>

          <div>
            <swiper
        :navigation="{
        nextEl: '.slider-similar-next', 
		   prevEl: '.slider-similar-prev'
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        :modules="[SwiperNavigation]"
        class=""
      >
        <swiper-slide v-for="i in 8">
        <product-card/>
        </swiper-slide>
   
      </swiper>

       <div class="arrows d-flex align-items-center justify-content-center gap-4">
        <div class="slider-similar-next">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="slider-similar-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
       </div>
          </div>
         </div>
       </div>
</template>


<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
  const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
}; 

const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgsRef = ref([])
     
    const onShow = () => {
      visibleRef.value = true
    }
    const showMultiple = () => {
       imgsRef.value = [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg',
       ]
      indexRef.value = 0
      onShow()
    }
    const onHide = () => (visibleRef.value = false);
</script>

<style lang="scss">

</style>