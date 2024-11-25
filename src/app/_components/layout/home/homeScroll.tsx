"use client";

import React, { useEffect, useRef, useState } from "react";
import { debounce, throttle } from "lodash";

import {
  HomeScrollFirst,
  HomeScrollSecond,
} from "./homeScrollComponents/homeScrollComponents";

interface HomeScrollProps {
  homeScrollComponents: React.ReactNode[];
}

export default function HomeScroll() {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementTopRef = useRef<number>(0);
  const elementHeightRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage <= 45) {
        setCurrentItem(0);
      } else {
        setCurrentItem(1);
      }
    };

    const throttledScroll = throttle(handleScroll, 10);

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      throttledScroll.cancel();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[300vh] bg-customColor-dark_box"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="relative h-1/2 w-1/2 p-0">
          <HomeScrollFirst isVisible={currentItem === 0} />
          <HomeScrollSecond isVisible={currentItem === 1} />
        </div>
      </div>
    </div>
  );
}
