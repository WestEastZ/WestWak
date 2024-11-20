import React from "react";
import Chart, { chartType } from "../_components/Chart";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

import ChartIcon from "../../../../../public/icon/chart.svg";
import ChartTable from "../_components/ChartTable";

export default function ChartContainer({ data }: { data: chartType[] }) {
  return (
    <section className="container-style flex h-full flex-grow flex-col gap-4">
      <div className="flex items-center gap-4">
        <ContentsTitle title="차트" Icon={ChartIcon} />
        <span className="text-sm text-customColor-text">PC | 차트</span>
        <span className="text-sm text-customColor-text">Phone | 표</span>
      </div>
      <div className="h-full w-full max-md:hidden">
        <Chart chartData={data} />
      </div>

      <div className="h-full w-full md:hidden">
        <ChartTable chartData={data} />
      </div>
    </section>
  );
}
