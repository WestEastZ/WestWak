import React from "react";
import Chart, { chartType } from "../_components/Chart";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

import ChartIcon from "../../../../../public/icon/chart.svg";

export default function ChartContainer({ data }: { data: chartType[] }) {
  return (
    <section className="container-style flex flex-col gap-4 flex-grow">
      <ContentsTitle title="차트" Icon={ChartIcon} />
      <Chart chartData={data} />
    </section>
  );
}
