import React from "react";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

import LinkIcon from "../../../../../public/icon/link.svg";
import LinkStreamingSite from "../_components/LinkStreamingSite";
import { InformationType } from "@/app/_types/type";

export default function LinkContainer({ data }: { data: InformationType }) {
  return (
    <section className="container-style flex flex-col gap-4">
      <ContentsTitle title="링크" Icon={LinkIcon} />
      <LinkStreamingSite data={data} />
    </section>
  );
}
