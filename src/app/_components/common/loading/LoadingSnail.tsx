import React from "react";
import Snail from "../../../../../public/image/snail.gif";
import Image from "next/image";

export default function LoadingSnail() {
  return (
    <div className="flex items-center justify-center">
      <Image src={Snail} alt="loading" width={250} height={250} />
    </div>
  );
}
