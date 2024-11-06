import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import { BroadCastInfoType } from "@/app/_types/broadCast.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Afeeca from "../../../../../public/icon/afreeaca.png";
import { getBroadCastInfo } from "@/app/lip/broadCast";

export async function BroadCastList() {
  const streamerIds = [
    "ecvhao",
    "inehine",
    "jingburger1",
    "lilpa0309",
    "cotton1217",
    "gosegu2",
    "viichan6",
  ].join(",");

  const response = await getBroadCastInfo(streamerIds);

  return (
    <div className="container-style flex flex-shrink flex-col gap-4">
      <ContentsTitle title="생방송" Icon={Afeeca} />

      <section className="grid grid-cols-2 gap-2">
        {!response || !Array.isArray(response) ? (
          <BroadCastSkeletonUI />
        ) : (
          response.map((info: BroadCastInfoType) => (
            <BroadCast
              key={info.id}
              name={info.nickname}
              broadCastInfo={info}
            />
          ))
        )}
      </section>
    </div>
  );
}

export function BroadCast({
  name,
  broadCastInfo,
}: {
  name: string;
  broadCastInfo: BroadCastInfoType;
}) {
  const defaultImage = "/image/woowakgood_logo.webp";

  return (
    <Link
      href={`https://ch.sooplive.co.kr/${broadCastInfo.id}`}
      className={`flex items-center justify-between gap-8 rounded-lg border border-transparent bg-customColor-box p-3 transition-all duration-200 hover:scale-105 hover:border-customColor-main`}
    >
      <div className="flex gap-3">
        <div
          className={`relative overflow-hidden rounded-full border ${
            broadCastInfo.isLive ? null : "grayscale"
          }`}
        >
          <Image
            src={broadCastInfo.broadCastThumb || defaultImage}
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
          className="flex animate-pulse items-center justify-between gap-8 rounded-lg border border-transparent bg-customColor-box p-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-[22px] w-[22px] rounded-full bg-gray-300"></div>
            <div className="h-4 w-12 rounded bg-gray-300"></div>
          </div>
          <div className="h-4 w-12 rounded bg-gray-300"></div>
        </div>
      ))}
    </>
  );
}
