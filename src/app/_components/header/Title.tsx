import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className="p-3 pl-5 text-4xl font-bold uppercase border-b-2">
      {title}
    </h1>
  );
}
