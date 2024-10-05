"use client";

import { BoardType } from "@/app/_types/type";
import React, { useEffect, useState } from "react";

import UserIcon from "../../../../../public/icon/user.svg";
import ButtonTextMore from "../button/ButtonTextMore";
import ButtonMore from "../button/ButtonMore";
import TextareaComment from "../textarea/TextareaComment";
import CheckBoxLock from "../checkbox/CheckBoxLock";

export default function CardComment({
  board,
  isModalOpen,
  onToggle,
}: {
  board: BoardType;
  isModalOpen: boolean | null;
  onToggle: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center gap-3">
      <section className="flex items-center gap-2 min-w-0 flex-grow">
        <UserIcon width={48} height={48} className="flex-shrink-0" />

        <section className="flex-grow min-w-0">
          <section className="flex items-center gap-2">
            <div>{board.username}</div>
            <div className="text-sm text-customColor-text">
              {board.createdAt}
            </div>
            {board.status === "PRIVATE" && (
              <CheckBoxLock status={board.status} size={16} />
            )}
          </section>

          <section>
            <TextareaComment
              board={board}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
            <ButtonTextMore
              text={board.description}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </section>
        </section>
      </section>
      {!isUpdate && (
        <ButtonMore
          board={board}
          isModalOpen={isModalOpen}
          onToggle={onToggle}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </div>
  );
}
