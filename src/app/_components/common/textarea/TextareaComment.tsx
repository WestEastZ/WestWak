"use client";

import React from "react";
import CheckBoxLock from "../checkbox/CheckBoxLock";
import { BoardType } from "@/app/_types/type";
import Button from "../button/Button";
import { useStore } from "zustand";
import { useUserStore } from "@/app/stores/useStores";
import useCommentEdit from "@/app/hook/useCommentEdit";

export default function TextareaComment({
  board,
  isUpdate,
  setIsUpdate,
}: {
  board: BoardType;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
}) {
  const user = useStore(useUserStore, (state) => state.user);

  const {
    status,
    description,
    textareaRef,
    handleOnsubmitUpdate,
    handleChangeComment,
    handleCheckBoardStatus,
    handleUpdateCancle,
  } = useCommentEdit({ board, isUpdate, setIsUpdate });

  return (
    <div>
      {isUpdate ? (
        <form className="flex flex-col gap-2" onSubmit={handleOnsubmitUpdate}>
          <section className="flex justify-center items-center gap-2">
            <textarea
              ref={textareaRef}
              defaultValue={description}
              className="resize-none w-full h-12 min-h-[3rem] pl-4 py-2 leading-6 text-white bg-inherit border-b-2 focus:border-bgColor-main outline-none overflow-hidden"
              onChange={handleChangeComment}
            />
          </section>

          <section className="flex justify-end items-center gap-2">
            <CheckBoxLock
              onClick={handleCheckBoardStatus}
              status={status}
              size={28}
            />
            <Button
              text="취소"
              type="button"
              size="x_small"
              onClick={handleUpdateCancle}
            />
            <Button text="수정" type="submit" size="x_small" />
          </section>
        </form>
      ) : (
        <div>
          {board.status === "PRIVATE" ? (
            <div className="text-gray-400">비밀 댓글입니다.</div>
          ) : (
            <div>{description}</div>
          )}
        </div>
      )}
    </div>
  );
}
