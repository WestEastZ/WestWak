import Title from "@/app/_components/common/header/Title";
import React from "react";
import { BroadCastList } from "./_components/BroadCastList";
import TodayMusic from "./_components/TodayMusic";
import RecentVideo from "./_components/RecentVideo";

export default function page() {
  return (
    <div>
      <Title title="Recent & Live" />

      <div className="flex flex-col gap-4">
        <section className="flex">
          <RecentVideo />
        </section>
        <section className="flex gap-4">
          <TodayMusic />
          <BroadCastList />
        </section>
      </div>
    </div>
  );
}
