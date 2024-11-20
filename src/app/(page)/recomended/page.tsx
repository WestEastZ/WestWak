import Title from "@/app/_components/common/header/Title";
import React from "react";
import { BroadCastList } from "./_components/BroadCastList";
import TodayMusic from "./_components/TodayMusic";
import RecentVideo from "./_components/RecentVideo";

export default function page() {
  return (
    <div>
      <Title title="Recent & Live" />

      <div className="flex flex-col gap-4 max-md:flex-col max-md:px-4">
        <section className="">
          <RecentVideo />
        </section>
        <section className="flex gap-4 max-md:flex-col">
          <TodayMusic />
          <BroadCastList />
        </section>
      </div>
    </div>
  );
}
