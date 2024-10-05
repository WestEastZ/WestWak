import React from "react";
import Snail from "../../../../../public/image/snail.gif";
import Image from "next/image";

export default function LoadingSnail() {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center">
      <Image src={Snail} alt="loading" width={250} height={250} />
      <div>
        {"분석중...".split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block animate-jump text-3xl text-customColor-main`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
