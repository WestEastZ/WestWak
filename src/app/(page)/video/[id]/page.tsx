import Title from "@/app/_components/header/Title";
import ChannelList from "@/app/_containers/video/ChannelList";
import { getVideos } from "@/app/lip/videos";
import React from "react";

export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const channels = await getVideos(params.id);

  return (
    <div>
      <Title title={params.id} />
      <ChannelList channels={channels} />
    </div>
  );
}
