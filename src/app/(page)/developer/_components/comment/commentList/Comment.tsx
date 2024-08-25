"use client";

import CardComment from "@/app/_components/common/card/CardComment";
import { BoardType } from "@/app/_types/type";
import React, { useState } from "react";

export default function Comment({ boards }: { boards: BoardType[] }) {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const handleModalToggle = (id: number) => {
    setOpenModalId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full pl-10 pr-10 flex flex-col gap-12">
      {boards.map((board: BoardType) => (
        <CardComment
          key={board.id}
          board={board}
          isModalOpen={openModalId === board.id}
          onToggle={() => handleModalToggle(board.id)}
        />
      ))}
    </div>
  );
}
