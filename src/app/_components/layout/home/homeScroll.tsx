"use client";

import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { boundingClientRect } = entry;

        const absoluteElementTop = boundingClientRect.top + window.scrollY;

        elementTopRef.current = absoluteElementTop;
        elementHeightRef.current = boundingClientRect.height;
      },
      {
        // threshold: Array.from({ length: 301 }, (_, i) => i / 300),
        threshold: [0, 1],
      },
    );

    const handleScroll = debounce(() => {
      const currentViewportTop = window.scrollY;

      const viewportPositionInElement =
        currentViewportTop - elementTopRef.current;

      const percentage = parseInt(
        ((viewportPositionInElement / elementHeightRef.current) * 100).toFixed(
          0,
        ),
      );

      const newCurrentItem = Math.floor(percentage / (100 / 2));

      setCurrentItem(Math.max(0, Math.min(newCurrentItem, 2 - 1)));
    }, 10);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[400vh] bg-customColor-dark_box"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative h-1/2 w-1/2 p-0">
          <HomeScrollFirst isVisible={currentItem === 0} />
          <HomeScrollSecond isVisible={currentItem === 1} />
        </div>
      </div>
    </div>
  );
}

// absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2

// (
//   <div
//     key={index}
//     className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
//       index === currentItem ? "opacity-100" : "opacity-0"
//     }`}
//   >
//     {Component}
//   </div>
// )

/* {homeScrollComponents.map((Component, index) => {
          const isVisible = index === currentItem;
          return (
            <div
              key={index}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                index === currentItem ? "opacity-100" : "opacity-0"
              }`}
            >
              {React.isValidElement(Component)
                ? React.cloneElement(Component, { isVisible })
                : Component}
            </div>
          );
        })} */
