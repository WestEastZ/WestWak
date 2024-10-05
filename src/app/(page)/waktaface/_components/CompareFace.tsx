import { getS3Image } from "@/app/lip/s3";
import React from "react";
import Camera from "./Camera";
import Image from "next/image";
import SwiperComponent from "@/app/_components/common/Swiper/SwiperCompoenent";

export default async function CompareFace() {
  const data = await getS3Image("gomem");
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      <Camera data={data} />
      <SwiperComponent slides={data} />
    </div>
  );
}
