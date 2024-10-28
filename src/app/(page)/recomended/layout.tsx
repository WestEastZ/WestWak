import SWRProvider from "@/app/swr-provider";
import React from "react";

export default function Recomendedlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="m-auto flex h-full w-[80rem] flex-col gap-10">
        <SWRProvider>{children}</SWRProvider>
      </section>
    </div>
  );
}
