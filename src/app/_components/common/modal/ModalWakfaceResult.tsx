"use client";

import { ResultType } from "@/app/_types/faceAPI.type";
import React, { useEffect, useState } from "react";
import LoadingSnail from "../loading/LoadingSnail";

export default function ModalWakfaceResult({
  result,
  resultArr,
}: {
  result: ResultType | undefined;
  resultArr: ResultType[] | undefined;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, [resultArr]);

  const reorderedResults = resultArr
    ? [resultArr[1], resultArr[0], resultArr[2]]
    : [];

  return (
    <div className="flex items-center justify-center h-full">
      {isLoading || !resultArr ? (
        <LoadingSnail />
      ) : (
        <div className="flex justify-evenly w-full h-full p-4 gap-4 text-center box-style">
          {reorderedResults.map((item, index) => (
            <React.Fragment key={item.fileName}>
              {index !== 0 && (
                <div className="w-px h-full bg-customColor-border my-2"></div>
              )}
              <WakfaceResultItem
                key={item.fileName}
                result={item}
                index={index}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

function WakfaceResultItem({
  result,
  index,
}: {
  result: ResultType;
  index: number;
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
    <div className="relative flex flex-col gap-2 justify-center items-center text-white">
      {/* chart */}
      <section className="flex justify-center items-end w-8 h-full rounded-full bg-customColor-border">
        <div
          className={`relative w-full rounded-full transition-all duration-2000 ${
            index === 1 ? "bg-customColor-main" : "bg-customColor-light_box"
          }`}
          style={{ height: `${height + 5}%` }}
        >
          <div
            className={`absolute -top-4 right-1/2  w-12 h-12 transform translate-x-1/2  rounded-full border-4 ${
              index === 1 ? "bg-customColor-main" : "bg-customColor-light_box"
            }`}
            style={{
              boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.2)",
              transition: "all 2000ms ease-out",
            }}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
              <span>{`${count.toFixed(0)}`}</span>
              <span className="text-sm">{`%`}</span>
            </span>
          </div>
        </div>
      </section>

      {/* imgae */}
      <section className="w-[100px] h-[100px] flex-shrink-0">
        <img
          src={result.blob}
          className="w-full h-full bg-customColor-dark_box rounded-2xl object-cover transition-transform duration-2000"
        />
      </section>
    </div>
  );
}
