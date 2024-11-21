import Image from "next/image";
import React from "react";
import westImage from "../../../../../public/image/westImage.webp";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import Person from "../../../../../public/icon/person.svg";

export default function Introduce() {
  return (
    <section className="container-style flex w-full flex-grow flex-col gap-2 font-semibold max-md:w-2/3">
      <ContentsTitle title="Developer" Icon={Person} />

      <section className="item-center flex flex-col items-center justify-center gap-10">
        <Image
          src={westImage}
          alt="west"
          width={250}
          priority
          className="rounded-full border border-customColor-border"
        />

        <section className="flex flex-col text-left text-base">
          <div>🧑🏻 서동주</div>
          <div>🎂 1997.08.20</div>
          <div className="whitespace-nowrap">📧 westeaststate@gmail.com</div>
        </section>
      </section>
    </section>
  );
}
