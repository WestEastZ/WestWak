"use client";

import { BoardStatus } from "@/app/_types/type";
import React from "react";
import Lock from "../../../../public/icon/lock.svg";
import LockOpen from "../../../../public/icon/lock_open.svg";

export default function CheckBoxLock({
  status,
  onClick,
}: {
  status: BoardStatus;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick}>
      {status === "PRIVATE" ? (
        <Lock
          width={38}
          height={38}
          className={`cursor-pointer fill-bgColor-main`}
        />
      ) : (
        <LockOpen width={38} height={38} className={"cursor-pointer"} />
      )}
    </div>
  );
}
