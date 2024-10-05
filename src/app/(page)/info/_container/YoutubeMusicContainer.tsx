import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import React from "react";
import MusicVideo from "../_components/MusicVideo";

import YoutubeIcon from "../../../../../public/icon/youtube.svg";
import { InformationType } from "@/app/_types/type";

export default function YoutubeMusicContainer({
  data,
}: {
  data: InformationType;
}) {
  return (
    <section className="container-style flex flex-col gap-4 flex-1">
      <ContentsTitle title="Youtube 바로보기" Icon={YoutubeIcon} />
      <MusicVideo data={data} />
    </section>
  );
}
