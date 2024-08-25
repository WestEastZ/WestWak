import Image from "next/image";
import React from "react";
import westImage from "../../../../../public/image/westImage.webp";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className="h-max">
      <section
        className="flex flex-col
    items-center gap-10 p-10 font-semibold bg-bgColor-200 rounded-3xl border-white border-2"
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
        <section className="flex flex-col text-left text-base">
          <div>이름 | 서동주</div>
          <div>생년월일 | 1997.08.20</div>
          <div>E-mail | westeaststate@gmail.com</div>
          <Link
            href={"https://github.com/WestEastZ"}
            className="w-max hover:text-bgColor-main
            transition-all duration-300"
          >
            {" GitHub >"}
          </Link>
          <Link
            href={"https://velog.io/@westeastz/posts"}
            className="w-max hover:text-bgColor-main
            transition-all duration-300"
          >
            {"Blog >"}
          </Link>
        </section>
      </section>
    </div>
  );
}
