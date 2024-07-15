"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function BannerSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assits/images/slider1.jpg" alt="Slider 1" /></SwiperSlide>
        <SwiperSlide><img src="/assits/images/slider2.jpg" alt="Slider 2" /></SwiperSlide>
        <SwiperSlide><img src="/assits/images/slider3.jpg" alt="Slider 3" /></SwiperSlide>
      </Swiper>
    </>
  );
}
