import LoadingSnail from "@/app/_components/common/loading/LoadingSnail";
import { openGraphDefault } from "@/app/util/createMetaData";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "WaktaFace",
  description: "나와 가장 닮은 고정멤버는?",
  openGraph: {
    ...openGraphDefault,
    title: "WaktaFace",
    description: "나와 가장 닮은 고정멤버는?",
  },
};

export default function Similarlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-grow text-white">
      <section className="m-auto flex h-full w-[80rem] flex-grow flex-col gap-10">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <LoadingSnail />
            </div>
          }
        >
          {children}
        </Suspense>
      </section>
    </div>
  );
}
