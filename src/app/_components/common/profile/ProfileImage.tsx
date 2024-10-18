import Image from "next/image";
import React from "react";

export default function ProfileImage({ thumbnail }: { thumbnail: string }) {
  return (
    <div className="w-10 overflow-hidden rounded-full">
      <Image src={thumbnail} alt="thumbnail" width={50} height={50} />
    </div>
  );
}
