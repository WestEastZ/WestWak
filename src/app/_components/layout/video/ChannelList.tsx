import { VideoData, VideoInfo } from "@/app/_types/type";
import React from "react";

import ViewIcon from "../../../../../public/icon/view.svg";
import LikeIcon from "../../../../../public/icon/like.svg";
import ProfileImage from "@/app/_components/common/profile/ProfileImage";
import Link from "next/link";

export default function ChannelList({ channels }: { channels: VideoData }) {
  return (
    <div className="grid gird-col-1 gap-10 p-5 mt-10">
      {Object.entries(channels).map(([channelsName, channelsInfo]) => (
        <section key={channelsName} className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <ProfileImage
              thumbnail={channelsInfo.channelData.channelThumbnail}
            />
            <Link
              href={`https://www.youtube.com/${channelsInfo.channelData.channelUrl}`}
              className="font-bold text-2xl hover:scale-105 transition-all duration-300"
            >
              {channelsName}
            </Link>
          </div>
          <VideoList videos={channelsInfo.videos} />
        </section>
      ))}
    </div>
  );
}

function VideoList({ videos }: { videos: VideoInfo[] }) {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-4">
      {videos.map((video: VideoInfo) => (
        <div key={video.id} className="w-full">
          {/* video */}
          <section className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              className="w-full h-full"
            />
          </section>

          {/* info */}
          <section className="flex flex-col gap-1 mt-2">
            <h3 className="font-semibold">{video.title}</h3>
            <div className="flex gap-2 text-sm text-gray-400">
              <div className="flex gap-1">
                <ViewIcon width={18} height={18} fill="currentColor" />
                {video.viewCount}
              </div>
              <div className="flex gap-1">
                <LikeIcon width={17} height={17} fill="currentColor" />
                {video.likeCount}
              </div>
              <div>{video.publishedAt}</div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
