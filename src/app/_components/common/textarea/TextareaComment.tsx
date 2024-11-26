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
          <section className="flex items-center justify-center gap-2">
            <textarea
              ref={textareaRef}
              defaultValue={description}
              className="focus:border-bgColor-main h-12 min-h-[3rem] w-full resize-none overflow-hidden border-b-2 bg-inherit py-2 pl-4 leading-6 text-white outline-none"
              onChange={handleChangeComment}
            />
          </section>

          <section className="flex items-center justify-end gap-2">
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
            <div className="text-customColor-text">비밀 댓글입니다.</div>
          ) : (
            <div className="break-all">{description}</div>
          )}
        </div>
      )}
    </div>
  );
}
