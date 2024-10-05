import LoadingSnail from "@/app/_components/common/loading/LoadingSnail";
import React, { Suspense } from "react";

export default function Similarlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="w-[80rem] h-full m-auto flex flex-col gap-10">
        <Suspense fallback={<LoadingSnail />}>{children}</Suspense>
      </section>
    </div>
  );
}
