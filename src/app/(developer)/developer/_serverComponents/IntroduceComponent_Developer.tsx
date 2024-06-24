import Image from "next/image";
import React from "react";
import westImage from "../../../../../public/image/westImage.webp";
import Link from "next/link";

export default function IntroduceComponent_Developer() {
  return (
    <Link
      href={"https://github.com/WestEastZ"}
      className="transition-all duration-300 hover:scale-105"
    >
      <section
        className="flex basis-2/3
    items-center gap-20 p-10 font-semibold bg-bgColor-200 rounded-3xl border-white border-2"
      >
        <section>
          <Image
            src={westImage}
            alt="west"
            width={250}
            priority
            className="border-2 rounded-full"
          />
        </section>
        <section className="flex flex-col text-left text-xl">
          <div>서동주</div>
          <div>1997.08.20</div>
          <div>westeaststate@gmail.com</div>
        </section>
      </section>
    </Link>
  );
}
