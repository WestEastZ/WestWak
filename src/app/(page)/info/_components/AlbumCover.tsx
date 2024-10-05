import Image, { StaticImageData } from "next/image";
import React from "react";
import KiddingAlbum from "../../../../../public/image/KIDDING.jpg";
import RewindAlbum from "../../../../../public/image/RE:WIND.jpg";
import woowak from "../../../../../public/image/woowak.webp";
import { InformationType } from "@/app/_types/type";

export default function AlbumCover({ data }: { data: InformationType }) {
  const title = data.title;
  let albumCover: StaticImageData;

  switch (title) {
    case "KIDDING":
      albumCover = KiddingAlbum;
      break;
    case "RE:WIND":
      albumCover = RewindAlbum;
      break;
    default:
      albumCover = woowak;
      break;
  }

  return (
    <div className="flex flex-col gap-4 rounded-full overflow-hidden">
      <Image src={albumCover} alt={`${albumCover}`} width={100} priority />
    </div>
  );
}
