import React from "react";
import type { Swiper as SwiperType } from "swiper/types";

import Prev from "../../../../../public/icon/arrow_prev.svg";
import Next from "../../../../../public/icon/arrow_next.svg";

export default function ButtonSlide({
  swiperRef,
  direction,
}: {
  swiperRef: React.MutableRefObject<SwiperType | undefined>;
  direction: string;
}) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (direction === "prev") {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group flex h-full w-full cursor-pointer items-center justify-center p-1"
    >
      <div className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center">
        {direction === "prev" ? (
          <Prev className="transition-all duration-200 group-hover:fill-customColor-main" />
        ) : (
          <Next className="transition-all duration-200 group-hover:fill-customColor-main" />
        )}
      </div>
    </div>
  );
}
