import SWRProvider from "@/app/swr-provider";
import { openGraphDefault } from "@/app/util/createMetaData";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recomended",
  description: "실시간 왁타버스 영상과 방송 정보를 확인해보세요!",
  openGraph: {
    ...openGraphDefault,
    title: "Recomended",
    description: "실시간 왁타버스 영상과 방송 정보를 확인해보세요!",
  },
};

export default function Recomendedlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="m-auto flex h-full w-full max-w-[80rem] flex-col gap-10">
        <SWRProvider>{children}</SWRProvider>
      </section>
    </div>
  );
}
