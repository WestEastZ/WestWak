import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import React from "react";
import RecomendedVideo from "../_components/MusicVideo";

import Like from "../../../../../public/icon/like.svg";

export default function RecomendedContainer() {
  return (
    <section className="container-style flex flex-col gap-4 flex-1">
      <ContentsTitle title="실시간 추천 영상" Icon={Like} />
      {/* <RecomendedVideo /> */}
    </section>
  );
}
