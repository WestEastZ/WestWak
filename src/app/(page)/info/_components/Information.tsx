import { InformationType, SVGComponent } from "@/app/_types/type";
import React, { useEffect, useState } from "react";

export default function Information({ data }: { data: InformationType }) {
  return (
    <div className="flex w-full flex-col">
      <section className="flex justify-between gap-4">
        <span className="whitespace-nowrap text-xl font-semibold">
          {data.title}
        </span>
        <span className="whitespace-nowrap text-customColor-text">
          {data.artist}
        </span>
      </section>
      <section className="flex flex-col">
        <div className="flex justify-between">
          <span>앨범</span>
          <span className="whitespace-nowrap text-customColor-text">
            {data.album}
          </span>
        </div>
        <div className="flex justify-between">
          <span>발매일</span>
          <span className="whitespace-nowrap text-customColor-text">
            {data.date}
          </span>
        </div>
        <div className="flex justify-between">
          <span>길이</span>
          <span className="whitespace-nowrap text-customColor-text">
            {data.length}
          </span>
        </div>
      </section>
    </div>
  );
}
