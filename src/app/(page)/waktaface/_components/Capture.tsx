"use client";

import Button from "@/app/_components/common/button/Button";
import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

export default function Capture({
  imgSrc,
  setImgSrc,
  handleCompare,
}: {
  imgSrc: string | null | undefined;
  setImgSrc: (value: string | null | undefined) => void;
  handleCompare: () => Promise<void>;
}) {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (imageSrc) {
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[340px]">
        {imgSrc ? (
          <img
            src={imgSrc}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        ) : (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 574,
              height: 340,
              facingMode: "user",
            }}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      {imgSrc ? (
        <div className="flex gap-4">
          <Button
            text="재촬영"
            type="button"
            size="large"
            onClick={() => setImgSrc(undefined)}
          />
          <Button
            text="비교하기"
            type="button"
            size="large"
            onClick={handleCompare}
          />
        </div>
      ) : (
        <Button text="촬영" type="button" size="large" onClick={capture} />
      )}
    </div>
  );
}
