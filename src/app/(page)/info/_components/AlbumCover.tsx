"use client";

import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { InformationType } from "@/app/_types/type";

import KiddingAlbum from "../../../../../public/image/KIDDING.jpg";
import RewindAlbum from "../../../../../public/image/RE:WIND.jpg";
import WoowakImage from "../../../../../public/image/woowak.webp";

const ALBUM_COVERS = {
  KIDDING: KiddingAlbum,
  "RE:WIND": RewindAlbum,
  DEFAULT: WoowakImage,
} as const;

export default function AlbumCover({ data }: { data: InformationType }) {
  const albumCover = useMemo(() => {
    const key = data.title as keyof typeof ALBUM_COVERS;
    return ALBUM_COVERS[key] || ALBUM_COVERS.DEFAULT;
  }, [data.title]);

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-full">
      <Image src={albumCover} alt={`${albumCover}`} width={100} priority />
    </div>
  );
}
