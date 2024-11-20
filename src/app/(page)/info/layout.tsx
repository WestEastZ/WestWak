import LoadingSnail from "@/app/_components/common/loading/LoadingSnail";

import React, { Suspense } from "react";

export default function Infolayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-grow text-white">
      <section className="m-auto flex h-full w-full max-w-[80rem] flex-grow flex-col gap-10">
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
