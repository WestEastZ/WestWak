import React from "react";

import { getMusicVideo } from "@/app/lip/videos";
import { InformationType } from "@/app/_types/type";

import View from "../../../../../public/icon/view.svg";
import Like from "../../../../../public/icon/like.svg";
import Comment from "../../../../../public/icon/comment.svg";

export default async function MusicVideo({ data }: { data: InformationType }) {
  const response = await getMusicVideo(data.Youtube);

  return (
    <div className="flex items-center justify-between rounded-lg bg-customColor-box p-4">
      <div className="flex w-full flex-col gap-4">
        {/* video */}
        <section className="aspect-h-9 aspect-w-16 overflow-hidden rounded-xl">
          <iframe
            src={`https://www.youtube.com/embed/${data.Youtube}`}
            className="h-full w-full"
          />
        </section>
        <section className="flex w-full justify-between px-5 text-lg">
          <div className="flex flex-col items-center justify-center">
            <View width={22} heigth={22} />
            <span>{response?.viewCount}</span>
          </div>

          <div className="min-h-full w-[1px] bg-white"></div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Like width={22} heigth={22} />
            <div>{response?.likeCount}</div>
          </div>

          <div className="min-h-full w-[1px] bg-white"></div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Comment width={22} heigth={22} />
            <div>{response?.commentCount}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
