import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import React from "react";

import Like from "../../../../../public/icon/like.svg";
import { getMusicVideo, getTodayMusic } from "@/app/lip/videos";

export default function TodayVideo() {
  return (
    <div className="container-style flex flex-col gap-4 flex-grow">
      <ContentsTitle title="실시간 추천 노래" Icon={Like} />
      <div className="grid grid-cols-2 gap-4">
        <Video />
        <Video />
      </div>
    </div>
  );
}

async function Video() {
  const randomvideoId = await getTodayMusic();

  return (
    <div>
      <div>
        <section className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${randomvideoId}`}
            className="w-full h-full"
          />
        </section>
      </div>
    </div>
  );
}
