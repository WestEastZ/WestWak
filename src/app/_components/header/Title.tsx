import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <section className="p-2 pl-5 text-4xl font-bold border-b-2">
      {title}
    </section>
  );
}
