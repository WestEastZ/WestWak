"use client";

import { BoardStatus } from "@/app/_types/type";
import React from "react";
import Lock from "../../../../../public/icon/lock.svg";
import LockOpen from "../../../../../public/icon/lock_open.svg";

export default function CheckBoxLock({
  status,
  size,
  onClick,
}: {
  status: BoardStatus;
  size: number;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick}>
      {status === "PRIVATE" ? (
        <Lock
          width={size}
          height={size}
          className={`cursor-pointer fill-customColor-main`}
        />
      ) : (
        <LockOpen width={size} height={size} className={"cursor-pointer"} />
      )}
    </div>
  );
}
