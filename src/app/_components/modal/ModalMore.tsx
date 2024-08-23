"use client";

import { BoardType } from "@/app/_types/type";
import { deleteBoard } from "@/app/lip/board";
import { useStore, useUserStore } from "@/app/lip/stores/useStores";
import { useRouter } from "next/navigation";
import React from "react";

export default function ModalMore({
  board,
  isUpdate,
  setIsUpdate,
  onToggle,
}: {
  board: BoardType;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
  onToggle: () => void;
}) {
  const router = useRouter();

  const user = useStore(useUserStore, (state) => state.user);
  const userId = board.userId;

  const handleUpdateComment = async () => {
    setIsUpdate(!isUpdate);
    onToggle();
  };

  const handleDeleteComment = async () => {
    await deleteBoard({ boardId: board.id });
    router.refresh();
  };

  return (
    <div className="w-20 rounded-lg bg-[#353533] text-white">
      {user?.id === userId ? (
        <section className="flex flex-col justify-center items-center gap-1">
          <div
            className="w-full cursor-pointer pt-1 hover:bg-bgColor-main text-center transition-colors rounded-t-lg"
            onClick={handleDeleteComment}
          >
            삭제
          </div>
          <div
            className="w-full cursor-pointer pb-1 hover:bg-bgColor-main text-center rounded-b-lg"
            onClick={handleUpdateComment}
          >
            수정
          </div>
        </section>
      ) : (
        <section className="flex flex-col justify-center items-center gap-2">
          <div>신고</div>
        </section>
      )}
    </div>
  );
}
