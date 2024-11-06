"use client";

import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { InformationType } from "@/app/_types/type";

import { ALBUM_COVERS } from "@/app/_constants/AlbumList";

export default function AlbumCover({ data }: { data: InformationType }) {
  const key = data.title as keyof typeof ALBUM_COVERS;
  const albumCover = ALBUM_COVERS[key] || ALBUM_COVERS.DEFAULT;

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-full">
      <Image src={albumCover} alt={`${albumCover}`} width={100} priority />
    </div>
  );
}
