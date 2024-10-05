import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import { bradCastInfoType } from "@/app/_types/broadCast.type";
import { getBroadCastInfo } from "@/app/lip/broadCast";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Afeeca from "../../../../../public/icon/afreeaca.png";

export async function BroadCastList() {
  const response = await getBroadCastInfo([
    "woowakgood",
    "ine",
    "jingburger",
    "lilpa",
    "jururu",
    "gosegu",
    "viichan",
  ]);

  return (
    <div className="container-style flex flex-col flex-shrink gap-4">
      <ContentsTitle title="생방송" Icon={Afeeca} />

      <section className="grid grid-cols-2 gap-2">
        {response?.map((info) => (
          <BroadCast
            key={info.name}
            name={info.nickname}
            broadCastInfo={info}
          />
        ))}
      </section>
    </div>
  );
}

export function BroadCast({
  name,
  broadCastInfo,
}: {
  name: string;
  broadCastInfo: bradCastInfoType;
}) {
  return (
    <Link
      href={`https://bj.afreecatv.com/${broadCastInfo.url}`}
      className={`bg-customColor-box rounded-lg flex justify-between items-center p-3 gap-8 border border-transparent hover:border-customColor-main hover:scale-105 transition-all duration-200`}
    >
      <div className="flex gap-3">
        <div
          className={`relative border rounded-full overflow-hidden ${
            broadCastInfo.isLive ? null : "grayscale"
          }`}
        >
          <Image
            src={broadCastInfo.broadCastThumb}
            width={22}
            height={22}
            alt="title"
          />
        </div>
        <span
          className={` ${
            broadCastInfo.isLive ? "text-white" : "text-customColor-text"
          }`}
        >
          {name}
        </span>
      </div>
      <span
        className={`text-sm font-semibold ${
          broadCastInfo.isLive ? "text-red-600" : "text-customColor-text"
        }`}
      >
        {broadCastInfo.isLive ? "OnAir" : "OffAir"}
      </span>
    </Link>
  );
}

export function BroadCastSkeletonUI() {
  return (
    <>
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="bg-customColor-box rounded-lg flex justify-between items-center p-3 gap-8 border border-transparent animate-pulse"
        >
          <div className="flex gap-3 items-center">
            <div className="w-[22px] h-[22px] bg-gray-300 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </>
  );
}
