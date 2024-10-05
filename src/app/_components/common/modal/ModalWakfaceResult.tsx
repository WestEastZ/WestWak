"use client";

import { ResultType } from "@/app/_types/faceAPI.type";
import React, { useEffect, useState } from "react";
import LoadingSnail from "../loading/LoadingSnail";

export default function ModalWakfaceResult({
  result,
}: {
  result: ResultType | undefined;
}) {
  const [percent, setPercent] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (result) {
      const percent = result.distance * 100;
      const fixed = percent.toFixed(2);
      setPercent(fixed);
    }

    const timer = setTimeout(() => setIsLoading(false), 10000);

    return () => clearTimeout(timer);
  }, [result]);

  return (
    <div className="text-white flex justify-center">
      {isLoading ? (
        <LoadingSnail />
      ) : (
        <div className="flex flex-col gap-4 text-center">
          <span className="text-customColor-main text-3xl font-bold">{`${percent}%`}</span>

          <img src={result?.blob} width={250} />
          <span className="text-2xl font-bold">{result?.fileName}</span>
        </div>
      )}
    </div>
  );
}
