import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import React from "react";

import Like from "../../../../../public/icon/like.svg";
import { getMusicVideo, getTodayMusic } from "@/app/lip/videos";

export default function TodayVideo() {
  return (
    <div className="container-style flex flex-grow flex-col gap-4">
      <ContentsTitle title="실시간 추천 노래" Icon={Like} />
      <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
        <Video />
        <div className="max-xl:hidden">
          <Video />
        </div>
      </div>
    </div>
  );
}

async function Video() {
  const randomvideoId = await getTodayMusic();

  return (
    <div>
      <div>
        <section className="aspect-h-9 aspect-w-16 overflow-hidden rounded-xl">
          <iframe
            src={`https://www.youtube.com/embed/${randomvideoId}`}
            className="h-full w-full"
          />
        </section>
      </div>
    </div>
  );
}
