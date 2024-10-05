import Link from "next/link";
import React from "react";

import Velog from "../../../../../public/icon/velog.svg";
import Github from "../../../../../public/icon/github.svg";
import Notion from "../../../../../public/icon/notion.svg";
import Laptop from "../../../../../public/icon/laptop.svg";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

export default function Links() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-4 container-style">
      <ContentsTitle title="Link" Icon={Laptop} />

      <section className="flex justify-between items-center">
        <Link
          href={"https://github.com/WestEastZ"}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-customColor-box transition-all duration-300 hover:scale-105"
        >
          <Github width={36} height={36} />
        </Link>

        <Link
          href={"https://velog.io/@westeastz/posts"}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-customColor-box transition-all duration-300 hover:scale-105"
        >
          <Velog width={36} height={36} />
        </Link>
        <Link
          href={"https://velog.io/@westeastz/posts"}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-customColor-box transition-all duration-300 hover:scale-105"
        >
          <Notion width={36} height={36} fill="white" />
        </Link>
      </section>
    </div>
  );
}
