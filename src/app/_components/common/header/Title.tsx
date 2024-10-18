import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className={`mb-2 mt-10 pl-2 text-xl font-bold text-customColor-main`}>
      {title}
    </h1>
  );
}
