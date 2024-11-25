"use client";

import { DistanceType, ResultType } from "@/app/_types/faceAPI.type";
import React, { useEffect, useState } from "react";
import LoadingSnail from "../loading/LoadingSnail";
import Image from "next/image";

export default function ModalWakfaceResult({
  resultArr,
}: {
  resultArr: DistanceType[] | undefined;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, [resultArr]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  });

  const reorderedResults = resultArr
    ? [resultArr[1], resultArr[0], resultArr[2]]
    : [];

  return (
    <div className="flex h-full items-center justify-center overflow-hidden">
      {isLoading || !resultArr ? (
        <LoadingSnail />
      ) : (
        <div className="box-style flex h-full max-h-[80vh] w-full justify-evenly gap-4 overflow-y-auto p-4 text-center">
          <div className="flex w-full flex-col items-center justify-center gap-4 overflow-y-auto">
            {/* 결과 */}
            <div className="flex min-h-0 w-full flex-1 justify-center">
              {resultArr[selectedIndex] && (
                <WakfaceResultItem
                  result={resultArr[selectedIndex]}
                  index={selectedIndex}
                  showChart={false}
                />
              )}
            </div>

            {/* 선택 버튼 */}
            <div className="flex gap-4">
              {[1, 2, 3].map((rank, index) => (
                <button
                  key={rank}
                  className={`flex h-8 w-8 transform items-center justify-center rounded-full border-2 text-white hover:scale-105 ${selectedIndex === index && "bg-customColor-main"}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {rank}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WakfaceResultItem({
  result,
  index,
  showChart,
}: {
  result: ResultType;
  index: number;
  showChart: boolean;
}) {
  const [count, setCount] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 30;
    const increment = result.distance / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current > result.distance) {
        clearInterval(timer);
        current = result.distance;
      }
      setCount(current);
      setHeight(current);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [result.distance]);

  return (
    <div className="relative flex w-full items-center justify-evenly gap-2 text-white">
      <div className="h-full w-full md:w-2/3">
        <Image
          src={result.url}
          alt={result.fileName}
          fill
          priority
          className="rounded-2xl object-contain"
        />
      </div>

      <section className="flex h-full w-8 items-end justify-center rounded-full bg-customColor-border max-md:hidden">
        <div
          className={`duration-2000 relative w-full rounded-full transition-all ${
            index === 0 ? "bg-customColor-main" : "bg-customColor-light_box"
          }`}
          style={{
            height: `${height + 5}%`,
          }}
        >
          <div
            className={`absolute -top-4 right-1/2 h-12 w-12 translate-x-1/2 transform rounded-full border-4 ${
              index === 0 ? "bg-customColor-main" : "bg-customColor-light_box"
            }`}
            style={{
              boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.2)",
              transition: "all 2000ms ease-out",
            }}
          >
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg font-bold"
              style={{ transition: "all 2000ms ease-out" }}
            >
              <span>{`${count.toFixed(0)}`}</span>
              <span className="text-sm">{`%`}</span>
            </span>
          </div>
        </div>
      </section>

      <section
        className={`absolute right-0 top-0 h-12 w-12 rounded-full border-4 md:hidden ${index === 0 ? "bg-customColor-main" : "bg-customColor-light_box"}`}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg font-bold">
          <span>{`${count.toFixed(0)}`}</span>
          <span className="text-sm">{`%`}</span>
        </span>
      </section>
    </div>
  );
}
