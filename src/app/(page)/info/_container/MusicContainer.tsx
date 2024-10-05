"use client";

import React, { useState } from "react";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import AlbumCover from "../_components/AlbumCover";
import Information from "../_components/Information";
import { InformationType } from "@/app/_types/type";

import Music from "../../../../../public/icon/music.svg";
import { useRouter } from "next/navigation";
import Portal from "@/app/_components/common/modal/Portal";
import MusicChoose from "../_components/MusicChoose";

export default function MusicContainer({ data }: { data: InformationType }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="container-style flex flex-col gap-4">
      <section className="flex justify-between items-center">
        <ContentsTitle title="노래" Icon={Music} />
        <button
          onClick={() => setIsOpen(true)}
          className="button-style h-max text-xs rounded-full p-2 leading-none"
        >
          {"곡 선택 > "}
        </button>
      </section>

      {/* 앨범 정보 */}
      <section className="flex items-center gap-4">
        <AlbumCover data={data} />
        <Information data={data} />
      </section>

      <Portal isOpen={isOpen} onClose={() => setIsOpen(false)} type="bottom">
        <ContentsTitle title="노래 선택" Icon={Music} />
        <MusicChoose />
      </Portal>
    </section>
  );
}
