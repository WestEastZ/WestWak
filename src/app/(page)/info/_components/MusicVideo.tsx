import React from "react";

import { getMusicVideo } from "@/app/lip/videos";
import { InformationType } from "@/app/_types/type";

import View from "../../../../../public/icon/view.svg";
import Like from "../../../../../public/icon/like.svg";
import Comment from "../../../../../public/icon/comment.svg";

export default async function MusicVideo({ data }: { data: InformationType }) {
  const response = await getMusicVideo(data.Youtube);

  console.log(response);

  return (
    <div className="bg-customColor-box rounded-lg flex justify-between items-center p-4">
      <div className="w-full flex flex-col gap-4">
        {/* video */}
        <section className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${data.Youtube}`}
            className="w-full h-full"
          />
        </section>
        <section className="flex w-full justify-between px-5 text-lg">
          <div className="flex flex-col justify-center items-center">
            <View width={22} heigth={22} />
            <span>{response?.viewCount}</span>
          </div>

          <div className="w-[1px] min-h-full bg-white"></div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Like width={22} heigth={22} />
            <div>{response?.likeCount}</div>
          </div>

          <div className="w-[1px] min-h-full bg-white"></div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Comment width={22} heigth={22} />
            <div>{response?.commentCount}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
