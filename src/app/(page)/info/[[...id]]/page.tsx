import Title from "@/app/_components/common/header/Title";
import { getChartTop100, getInformation } from "@/app/lip/chart";
import React from "react";
import MusicContainer from "../_container/MusicContainer";
import ChartContainer from "../_container/ChartContainer";
import LinkContainer from "../_container/LinkContainer";
import YoutubeMusicContainer from "../_container/YoutubeMusicContainer";

export default async function page({ params }: { params: { id: string } }) {
  const musicId = parseInt(params.id?.[0]) || 1;

  const responseChart = await getChartTop100(musicId);
  const responseInfomation = await getInformation(musicId);

  return (
    <div>
      <Title title="음원 정보" />

      <div className="flex gap-4">
        <section className="flex flex-col gap-4  w-1/3">
          <MusicContainer data={responseInfomation} />
          <LinkContainer data={responseInfomation} />
          <YoutubeMusicContainer data={responseInfomation} />
        </section>

        <section className="flex flex-col gap-4 w-2/3">
          {responseChart && <ChartContainer data={responseChart} />}
        </section>
      </div>
    </div>
  );
}
