"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Scrollbar,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import SwiperCore from "swiper";
import type { Swiper as SwiperType } from "swiper/types";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";

type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

interface SwiperImageSizeType {
  width: number;
  height: number;
  objectFit?: ObjectFit;
}

interface SlideType {
  imageUrl: string;
  title: string;
  description: string;
}

interface SwiperOptionType<T extends string | SlideType> {
  slides: T[];
  swiperOptions?: SwiperOptions;
  loop?: boolean;
  autoplay?:
    | boolean
    | {
        delay: number;
        disableOnInteraction: boolean;
        reverseDirection: boolean;
      };
  autoplayDirection?: boolean;
  speed?: number;
  direction?: "horizontal" | "vertical";
  showNavigation?: boolean;
  showPagination?: boolean;
  showScrollbar?: boolean;
  imageSize?: SwiperImageSizeType;
  navigationButtonsStyle?: React.CSSProperties;
  paginationButtonsStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  swiperType?: T extends SlideType ? "home" : string;
}

export default function SwiperComponent<T extends string | SlideType>({
  slides,
  swiperOptions = {}, // spaceBetween, slidesPreview
  loop = false,
  autoplay = true,
  autoplayDirection = false,
  speed = 3000,
  direction = "horizontal",
  showNavigation = false,
  showPagination = false,
  showScrollbar = false,
  imageSize = { width: 100, height: 100, objectFit: "cover" },
  navigationButtonsStyle = {},
  paginationButtonsStyle = {},
  containerStyle = {},
  swiperType,
}: SwiperOptionType<T>) {
  SwiperCore.use([
    Navigation,
    Scrollbar,
    Pagination,
    Autoplay,
    EffectCoverflow,
  ]);

  const swiperRef = useRef<SwiperType>();

  const defaultSwiperOption = {
    modules: [Navigation, Scrollbar, Pagination, Autoplay, EffectCoverflow],
    spaceBetween: 5,
    slidesPerView: 10,
    centeredSlides: swiperOptions.centeredSlides
      ? swiperOptions.centeredSlides
      : false,
    loop: loop ? true : false,
    autoplay: autoplay
      ? {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: autoplayDirection,
        }
      : false,
    speed: speed ? speed : 0,
    direction: direction,
    navigation: showNavigation,
    pagination: showPagination
      ? {
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets" as const,
          renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + "</span>";
          },
        }
      : false,
    scrollbar: showScrollbar ? { draggable: true } : false,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  const mergeOption = { ...defaultSwiperOption, ...swiperOptions };

  const swiperStyle = {
    height: direction === "vertical" ? `100vh` : `${imageSize.height}px`,
    ...containerStyle,
  };

  if (!slides || slides.length === 0) {
    return <div>No slides</div>;
  }

  return (
    <div
      className="relative flex flex-col items-center gap-4"
      style={swiperStyle}
    >
      <Swiper {...mergeOption} className="swiper-wrapper">
        {slides.map((slide) => (
          <SwiperSlide key={typeof slide === "string" ? slide : slide.imageUrl}>
            <div
              className={`box-style group relative overflow-hidden rounded-2xl border border-customColor-border`}
              style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            >
              <Image
                src={typeof slide === "string" ? slide : slide.imageUrl}
                alt={typeof slide === "string" ? `image` : slide.title}
                fill
                sizes={"500px"}
                priority
                style={{ objectFit: imageSize.objectFit }}
              />

              {swiperType === "home" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 duration-300 group-hover:bg-opacity-70">
                  <div className="flex flex-col gap-2 text-center font-bold opacity-0 duration-300 group-hover:opacity-100">
                    <span className="text-2xl text-customColor-main">
                      {typeof slide === "string" ? slide : slide.title}
                    </span>
                    <span className="text-lg text-white">
                      {typeof slide === "string" ? slide : slide.description}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showPagination && <div className="swiper-pagination"></div>}
    </div>
  );
}
