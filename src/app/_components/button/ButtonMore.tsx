import React, { useState } from "react";
import More from "../../../../public/icon/more.svg";
import ModalMore from "../modal/ModalMore";
import { ButtonMoreType } from "@/app/_types/type";

export default function ButtonMore({
  board,
  isModalOpen,
  onToggle,
  isUpdate,
  setIsUpdate,
}: ButtonMoreType) {
  return (
    <div className="relative">
      <div className="flex flex-col flex-shrink-0 transition-all duration-200 hover:bg-bgColor-main rounded-full">
        <button type="button" className="" onClick={onToggle}>
          <More width={30} height={30} />
        </button>
      </div>

      {isModalOpen && (
        <div className="absolute top-9">
          <ModalMore
            board={board}
            onToggle={onToggle}
            setIsUpdate={setIsUpdate}
            isUpdate={isUpdate}
          />
        </div>
      )}
    </div>
  );
}
