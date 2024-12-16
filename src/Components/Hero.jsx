import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Girl from '../assets/gg.png';
import mess from '../assets/mess.png'
export const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        speed={500}
        modules={[Pagination, Autoplay]}
        
        className="mySwiper md:h-[400px] w-full rounded-lg  "
      >
        <SwiperSlide className="bg-white flex justify-center items-center relative">
  <img src={Girl} className="w-full h-[400px] md:h-auto object-cover" alt="Background Image" />
  <h1 className="md:text-white md:w-[300px] absolute z-10 md:top-[20px] md:right-0 transform bottom-[20px]   text-[20px] text-center font-bold text-2xl leading-none">
    "You are the author of your own story - write it with courage"
  </h1>
</SwiperSlide>

        <SwiperSlide className="bg-[white] flex justify-center items-center">
         <img src={mess} className="w-full h-[400px] object-cover" alt="Background Image" />
         {/* <h1>"Hygienic food is not a privilege, it's a right - demand it, monitor it, ensure it!"</h1> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
