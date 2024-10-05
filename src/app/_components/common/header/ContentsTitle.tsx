import { IconType, SVGComponent } from "@/app/_types/type";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

function isSVFComponent(icon: IconType) {}

export default function ContentsTitle({
  title,
  Icon,
}: {
  title: string;
  Icon: SVGComponent | StaticImageData;
}) {
  return (
    <div className="flex items-center gap-3 font-bold">
      <div className="p-1.5 bg-customColor-box rounded-md">
        {typeof Icon === "function" ? (
          // SVG 컴포넌트인 경우
          <Icon width={24} height={24} fill="#1CBC74" />
        ) : (
          // StaticImageData인 경우
          <div className="w-[24px] h-[24px] overflow-hidden">
            <Image
              src={Icon}
              width={24}
              height={24}
              alt="title"
              className="object-center"
            />
          </div>
        )}
      </div>
      <h2 className="text-base text-white">{title}</h2>
    </div>
  );
}
