"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { InformationType } from "@/app/_types/type";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import dynamic from "next/dynamic";

type IconName = "Youtube" | "Genie" | "Melon" | "Bugs" | "Flo" | "Spotify";

const IconComponents: Record<IconName, React.ComponentType<any>> = {
  Youtube: dynamic(() => import("../../../../../public/icon/youtube.svg")),
  Genie: dynamic(() => import("../../../../../public/icon/genie.svg")),
  Melon: dynamic(() => import("../../../../../public/icon/melon.svg")),
  Bugs: dynamic(() => import("../../../../../public/icon/bugs.svg")),
  Flo: dynamic(() => import("../../../../../public/icon/flo.svg")),
  Spotify: dynamic(() => import("../../../../../public/icon/spotify.svg")),
};

const streamingSite: { name: IconName; url: string }[] = [
  { name: "Youtube", url: "https://www.youtube.com/watch?v=" },
  { name: "Genie", url: "https://www.genie.co.kr/detail/songInfo?xgnm=" },
  { name: "Melon", url: "https://www.melon.com/song/detail.htm?songId=" },
  { name: "Bugs", url: "https://music.bugs.co.kr/track/" },
  { name: "Flo", url: "https://www.music-flo.com/detail/track/" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/track/",
  },
];

export default function LinkStreamingSite({ data }: { data: InformationType }) {
  const swiperRef = useRef<SwiperType>();

  const swiperOption = {
    modules: [Navigation, Scrollbar],
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
    <div className="w-full flex gap-3 item-center">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="p-1 bg-customColor-border bg-opacity-10"
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
              className="bg-customColor-box rounded-lg p-2"
            >
              <Link
                href={`${site.url}${code}`}
                className="flex justify-center items-center transition-all duration-300 hover:scale-110"
              >
                <IconComponent width={50} height={50} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="p-1 bg-customColor-border bg-opacity-10"
      >
        {">"}
      </button>
    </div>
  );
}
