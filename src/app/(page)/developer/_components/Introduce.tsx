import Image from "next/image";
import React from "react";
import westImage from "../../../../../public/image/westImage.webp";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import Person from "../../../../../public/icon/person.svg";

export default function Introduce() {
  return (
    <section className="flex flex-col gap-2 font-semibold container-style">
      <ContentsTitle title="Developer" Icon={Person} />

      <section className="flex flex-col justify-center item-center gap-10">
        <Image
          src={westImage}
          alt="west"
          width={250}
          priority
          className="border border-customColor-border rounded-full"
        />

        <section className="flex flex-col text-left text-base">
          <div>🧑🏻 서동주</div>
          <div>🎂 1997.08.20</div>
          <div>📧 westeaststate@gmail.com</div>
        </section>
      </section>
    </section>
  );
}
