"use client";

import Image from "next/image";

import Youtube from "../../../../../../public/icon/youtube_white.svg";
import Melon from "../../../../../../public/icon/melon.svg";
import Soop from "../../../../../../public/icon/soop.svg";
import Naver from "../../../../../../public/icon/naver.png";

import React, { useEffect, useState } from "react";

interface HomeScrollFirstProps {
  isVisible?: boolean;
}

export function HomeScrollFirst({ isVisible }: HomeScrollFirstProps) {
  const channelLogos = [
    "/image/woowakgood_logo.webp",
    "/image/woowakgoodZ_logo.webp",
    "/image/woowakgoodFood_logo.webp",
    "/image/waktaverse_logo.webp",
  ];

  const woowakgood = "/image/woowakgood_worry.webp";

  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`absolute inset-0 flex h-full w-full rounded-3xl text-center transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <section className="relative flex h-full w-full flex-col items-center justify-center gap-10">
        {/* 채널 아이콘 */}
        <div className="grid grid-cols-2 content-center gap-5">
          {channelLogos.map((logo, index) => (
            <div
              key={logo}
              className={`h-fit w-fit ${animate ? "animate-spreadOut" : ""}`}
              style={
                {
                  "--tx": index % 2 === 0 ? "50%" : "-50%",
                  "--ty": index < 2 ? "50%" : "-50%",
                } as React.CSSProperties
              }
            >
              <Image
                src={logo}
                alt="logo"
                width={80}
                height={80}
                className="rounded-full"
                priority
              />
            </div>
          ))}
        </div>

        {/* 텍스트 */}
        <section className="flex flex-col gap-2 text-2xl font-bold text-customColor-main">
          <span className="">왁타버스 콘텐츠를</span>
          <span> 놓치고 싶지 않다면?</span>
        </section>

        {/* 로고 아이콘 */}
        <div className="animate-jump-up absolute -left-10 max-md:-left-[30%] max-md:-top-10">
          <div className="-rotate-12">
            <Youtube width={70} height={70} />
          </div>
        </div>

        <div className="animate-jump-down absolute -top-10 left-[20%]">
          <Melon width={70} height={70} />
        </div>

        <div className="animate-jump-up absolute -top-10 left-[60%]">
          <div className="rotate-12">
            <Soop width={70} height={70} />
          </div>
        </div>

        <div className="animate-jump-down absolute -right-10 z-[10] max-md:-right-[30%] max-md:-top-10">
          <div className="h-[70px] w-[70px] rotate-12">
            <Image
              src={Naver}
              alt="Naver"
              sizes="70px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 이미지 */}
      <section className="absolute left-96 h-full w-full rounded-r-3xl opacity-20 max-md:hidden">
        <Image
          src={woowakgood}
          alt="woowakgood"
          fill
          priority
          className="object-contain"
        />
      </section>
    </div>
  );
}

export function HomeScrollSecond({ isVisible }: HomeScrollFirstProps) {
  const woowakgood = "/image/woowakgood_fool.webp";

  return (
    <div
      className={`absolute flex h-full w-full rounded-3xl transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex h-full w-full flex-col justify-center gap-10">
        <section className="flex flex-col items-center justify-center gap-5 text-4xl font-bold text-white">
          <div className="whitespace-nowrap">왁타버스 콘텐츠를</div>
          <div className="whitespace-nowrap">쉽고 빠르게 볼 수 있는</div>
          <div>
            <span className="text-customColor-main">왁비디오</span>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-2 text-base font-normal text-customColor-text">
          <span className="whitespace-nowrap">
            왁비디오는 수많은 왁타버스 채널을 확인하기
          </span>
          <span className="whitespace-nowrap">
            귀찮아서 만든 유용한 웹사이트입니다.
          </span>
          <span className="whitespace-nowrap text-sm text-customColor-main max-md:text-xs">
            덤으로 재미난 콘텐츠 몇개 넣어봤습니다.
          </span>
        </section>
      </div>

      <div className="absolute left-96 h-full w-full rounded-r-3xl opacity-20 max-md:hidden">
        <Image
          src={woowakgood}
          alt="woowakgood"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
