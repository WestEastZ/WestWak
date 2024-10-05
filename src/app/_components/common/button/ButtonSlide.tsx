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
      className="p-1 h-full flex justify-center items-center cursor-pointer group"
    >
      <div className="h-full flex justify-center items-center cursor-pointer">
        {direction === "prev" ? (
          <Prev
            width={30}
            height={30}
            className="group-hover:fill-customColor-main transition-all duration-200"
          />
        ) : (
          <Next
            width={30}
            height={30}
            className="group-hover:fill-customColor-main transition-all duration-200"
          />
        )}
      </div>
    </div>
  );
}
