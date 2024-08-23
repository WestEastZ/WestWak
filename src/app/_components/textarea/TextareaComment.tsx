"use client";

import { adjustHeight } from "@/app/util/textareaUtil";
import React, { useEffect, useRef, useState } from "react";
import CheckBoxLock from "../checkbox/CheckBoxLock";
import { BoardStatus, BoardType } from "@/app/_types/type";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import { updateBoard } from "@/app/lip/board";
import { useStore } from "zustand";
import { useUserStore } from "@/app/lip/stores/useStores";

export default function TextareaComment({
  board,
  isExpanded,
  isUpdate,
  setIsUpdate,
}: {
  board: BoardType;
  isExpanded: boolean;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
}) {
  const user = useStore(useUserStore, (state) => state.user);

  const router = useRouter();
  const [description, setdescription] = useState<string>(board.description);
  const [status, setStatus] = useState<BoardStatus>(board.status);
  const [boardId, setBoardId] = useState<number>(board.id);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const defaultState = board.status;

  // description Change
  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setdescription(event.target.value);
    adjustHeight(textareaRef);
  };

  // Board Status Check
  const handleCheckBoardStatus = () => {
    status === "PRIVATE" ? setStatus("PUBLIC") : setStatus("PRIVATE");
  };

  // Update Cancle
  const handleUpdateCancle = () => {
    setIsUpdate(!isUpdate);
    setdescription(board.description);
    setStatus(defaultState);
    router.refresh();
  };

  // Update Submit
  const handleOnsubmitUpdate = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await updateBoard({ description, status, boardId });
      setIsUpdate(!isUpdate);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adjustHeight(textareaRef);
  }, []);

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
