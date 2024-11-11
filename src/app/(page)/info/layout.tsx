import LoadingSnail from "@/app/_components/common/loading/LoadingSnail";
import { openGraphDefault } from "@/app/util/createMetaData";
import { Metadata } from "next";
import React, { Suspense } from "react";

export default function Infolayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="m-auto flex h-full w-[80rem] flex-col gap-10">
        <Suspense fallback={<LoadingSnail />}>{children}</Suspense>
      </section>
    </div>
  );
}
