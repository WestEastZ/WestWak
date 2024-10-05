import React from "react";

export default function Recomendedlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white">
      <section className="w-[80rem] h-full m-auto flex flex-col gap-10">
        {children}
      </section>
    </div>
  );
}
