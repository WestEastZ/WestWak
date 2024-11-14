"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { InformationType } from "@/app/_types/type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

import dynamic from "next/dynamic";
import { IconName, streamingSite } from "@/app/_constants/StreamingSite";

const IconComponents: Record<IconName, React.ComponentType<any>> = {
  Youtube: dynamic(() => import("../../../../../public/icon/youtube.svg")),
  Genie: dynamic(() => import("../../../../../public/icon/genie.svg")),
  Melon: dynamic(() => import("../../../../../public/icon/melon.svg")),
  Bugs: dynamic(() => import("../../../../../public/icon/bugs.svg")),
  Flo: dynamic(() => import("../../../../../public/icon/flo.svg")),
  Spotify: dynamic(() => import("../../../../../public/icon/spotify.svg")),
};

export default function LinkStreamingSite({ data }: { data: InformationType }) {
  const swiperRef = useRef<SwiperType>();

  const swiperOption = {
    modules: [Navigation],
    spaceBetween: 10,
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    touchRatio: 0,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <div className="item-center flex w-full gap-3">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="bg-customColor-border bg-opacity-10 p-1"
      >
        {"<"}
      </button>
      <Swiper {...swiperOption}>
        {streamingSite.map((site) => {
          const IconComponent = IconComponents[site.name];
          const code = data[site.name];
          return (
            <SwiperSlide
              key={site.name}
              className="rounded-lg bg-customColor-box p-2"
            >
              <Link
                href={`${site.url}${code}`}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <IconComponent width={50} height={50} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="bg-customColor-border bg-opacity-10 p-1"
      >
        {">"}
      </button>
    </div>
  );
}
