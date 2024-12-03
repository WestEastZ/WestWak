import React, { useState } from "react";
import More from "../../../../../public/icon/more.svg";
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
    <div className="relative flex items-center justify-center">
      <div className="hover:bg-bgColor-main flex flex-shrink-0 flex-col rounded-full transition-all duration-200">
        <button type="button" className="" onClick={onToggle}>
          <More width={30} height={30} />
        </button>
      </div>

      {isModalOpen && (
        <div className="absolute right-6 top-4">
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
