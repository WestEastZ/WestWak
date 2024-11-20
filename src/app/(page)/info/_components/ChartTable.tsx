"use client";

import React, { useState } from "react";
import { chartType } from "./Chart";
import Button from "@/app/_components/common/button/Button";

export default function ChartTable({ chartData }: { chartData: chartType[] }) {
  const data = chartData[0].data;
  const [showItem, setShowItem] = useState<number>(5);

  const handleShowMore = () => {
    setShowItem((prev) => prev + 5);
  };

  const handleFold = () => {
    setShowItem(5);
  };

  return (
    <div className="flex flex-col gap-4">
      <table className="w-full">
        <thead className="bg-customColor-bg sticky top-0">
          <tr>
            <th className="border-b border-customColor-border p-4 text-left">
              날짜
            </th>
            <th className="border-b border-customColor-border p-4 text-right">
              순위
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, showItem).map((item) => {
            const date = item.x as string;
            const year = date.slice(2, 4);
            const month = date.slice(4, 6);
            const day = date.slice(6, 8);
            const formattedDate = `${year}.${month}.${day}`;

            return (
              <tr key={date} className="hover:bg-customColor-box">
                <td className="border-b border-customColor-border p-4">
                  {formattedDate}
                </td>
                <td className="border-b border-customColor-border p-4 text-right">
                  {item.y}위
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <section className="flex justify-center gap-2">
        {showItem < data.length && (
          <Button
            text="더보기"
            type="button"
            size="small"
            onClick={handleShowMore}
          />
        )}
        {showItem > 5 && (
          <Button text="접기" type="button" size="small" onClick={handleFold} />
        )}
      </section>
    </div>
  );
}
