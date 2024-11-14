"use client";

import { ALBUM_COVERS } from "@/app/_constants/AlbumList";
import { getChartTick } from "@/app/lip/chart";
import { ResponsiveLine } from "@nivo/line";
import { TicksSpec } from "@nivo/scales";
import Image from "next/image";
import React, { useMemo } from "react";

export interface chartType {
  id: string;
  color: string;
  data: { x: string | number; y: number }[];
}

export default function Chart({ chartData }: { chartData: chartType[] }) {
  const tickData = getChartTick(chartData);

  const key = chartData[0].id as keyof typeof ALBUM_COVERS;
  const albumCover = ALBUM_COVERS[key] || ALBUM_COVERS.DEFAULT;

  return (
    <ResponsiveLine
      data={chartData}
      colors={"#1CBC74"}
      margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto",
        stacked: true,
        reverse: true,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legendOffset: 40,
        legendPosition: "middle",
        truncateTickAt: 0,
        tickValues: tickData,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legendOffset: -50,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      tooltip={({ point }) => {
        const xFormattedData = point.data.xFormatted as string;
        const yFormattedData = point.data.yFormatted;

        const year = xFormattedData.slice(2, 4);
        const month = xFormattedData.slice(4, 6);
        const day = xFormattedData.slice(6, 8);

        return (
          <div className="button-style flex w-72 flex-col justify-start gap-2 rounded-xl border-customColor-border p-5">
            <section className="flex items-center gap-2">
              <div>{`${year}년 ${month}월 ${day}일`}</div>
              <div className="h-px flex-grow bg-customColor-border"></div>
            </section>

            <section className="flex gap-2">
              <Image
                src={albumCover}
                alt="chart"
                width={50}
                height={50}
                className="overflow-hidden rounded-full"
              />
              <div className="flex flex-col">
                <span>{chartData[0].id}</span>
                <span>{point.data.yFormatted}위</span>
              </div>
            </section>
          </div>
        );
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 14,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      theme={{
        axis: {
          legend: {
            text: {
              fill: "#c8c8c8",
              fontSize: "16",
            },
          },
          ticks: {
            line: {
              stroke: "#c8c8c8",
            },
            text: {
              fill: "#c8c8c8",
              fontSize: "12",
            },
          },
        },
        crosshair: {
          line: {
            stroke: "white",
            strokeWidth: 2,
            strokeOpacity: 0.35,
          },
        },
        legends: {
          text: {
            fill: "#c8c8c8",
            fontSize: "14",
          },
        },
        tooltip: {},
      }}
    />
  );
}
