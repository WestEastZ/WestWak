import Link from "next/link";
import React from "react";

import Velog from "../../../../../public/icon/velog.svg";
import Github from "../../../../../public/icon/github.svg";
import Notion from "../../../../../public/icon/notion.svg";
import Laptop from "../../../../../public/icon/laptop.svg";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

export default function Links() {
  return (
    <div className="container-style flex flex-shrink-0 flex-col gap-4">
      <ContentsTitle title="Link" Icon={Laptop} />

      <section className="flex items-center justify-between max-md:h-full">
        <Link
          href={"https://github.com/WestEastZ"}
          className="flex flex-col items-center gap-2 rounded-lg bg-customColor-box p-4 transition-all duration-300 hover:scale-105"
        >
          <Github width={36} height={36} />
        </Link>

        <Link
          href={"https://velog.io/@westeastz/posts"}
          className="flex flex-col items-center gap-2 rounded-lg bg-customColor-box p-4 transition-all duration-300 hover:scale-105"
        >
          <Velog width={36} height={36} />
        </Link>
        <Link
          href={"https://velog.io/@westeastz/posts"}
          className="flex flex-col items-center gap-2 rounded-lg bg-customColor-box p-4 transition-all duration-300 hover:scale-105"
        >
          <Notion width={36} height={36} fill="white" />
        </Link>
      </section>
    </div>
  );
}
