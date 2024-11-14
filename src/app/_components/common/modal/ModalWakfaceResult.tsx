"use client";

import { DistanceType, ResultType } from "@/app/_types/faceAPI.type";
import React, { useEffect, useState } from "react";
import LoadingSnail from "../loading/LoadingSnail";

export default function ModalWakfaceResult({
  resultArr,
}: {
  resultArr: DistanceType[] | undefined;
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
    <div className="flex h-full items-center justify-center">
      {isLoading || !resultArr ? (
        <LoadingSnail />
      ) : (
        <div className="box-style flex h-full w-full justify-evenly gap-4 p-4 text-center">
          {reorderedResults.map((item, index) => (
            <React.Fragment key={item.fileName}>
              {index !== 0 && (
                <div className="my-2 h-full w-px bg-customColor-border"></div>
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
    <div className="relative flex flex-col items-center justify-center gap-2 text-white">
      {/* chart */}
      <section className="flex h-full w-8 items-end justify-center rounded-full bg-customColor-border">
        <div
          className={`duration-2000 relative w-full rounded-full transition-all ${
            index === 1 ? "bg-customColor-main" : "bg-customColor-light_box"
          }`}
          style={{ height: `${height + 5}%` }}
        >
          <div
            className={`absolute -top-4 right-1/2 h-12 w-12 translate-x-1/2 transform rounded-full border-4 ${
              index === 1 ? "bg-customColor-main" : "bg-customColor-light_box"
            }`}
            style={{
              boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.2)",
              transition: "all 2000ms ease-out",
            }}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-lg font-bold">
              <span>{`${count.toFixed(0)}`}</span>
              <span className="text-sm">{`%`}</span>
            </span>
          </div>
        </div>
      </section>

      {/* imgae */}
      <section className="h-[100px] w-[100px] flex-shrink-0">
        <img
          src={result.url}
          className="duration-2000 h-full w-full rounded-2xl bg-customColor-dark_box object-cover transition-transform"
        />
      </section>
    </div>
  );
}
