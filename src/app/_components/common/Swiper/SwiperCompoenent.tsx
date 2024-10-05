"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Scrollbar,
  EffectCoverflow,
} from "swiper/modules";
import SwiperCore from "swiper";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";

export default function SwiperComponent({
  slides,
  children,
}: {
  slides: any[];
  children?: React.ReactNode;
}) {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef<SwiperType>();
  const swiperOption = {
    module: [Navigation, Scrollbar, Autoplay, EffectCoverflow],
    spaceBetween: 5,
    slidesPerView: 10,
    loop: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
    speed: 3000,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <div className="w-full container-style">
      <Swiper {...swiperOption} className="swiper-wrapper">
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <div className="w-[100px] h-[100px] box-style overflow-hidden">
              <img
                src={slide}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
