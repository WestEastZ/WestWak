import React, { useEffect, useRef, useState } from "react";
import { BoardStatus, BoardType } from "../_types/type";
import { adjustHeight } from "../util/adjustHeight";
import { useRouter } from "next/navigation";
import { updateBoard } from "../lip/board";

export default function useCommentEdit({
  board,
  isUpdate,
  setIsUpdate,
}: {
  board: BoardType;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
}) {
  const router = useRouter();

  const [description, setdescription] = useState<string>(board.description);
  const [status, setStatus] = useState<BoardStatus>(board.status);
  const [boardId, setBoardId] = useState<number>(board.id);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const defaultState = board.status;

  useEffect(() => {
    adjustHeight(textareaRef);
  }, []);

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

  return {
    status,
    description,
    textareaRef,
    handleOnsubmitUpdate,
    handleChangeComment,
    handleCheckBoardStatus,
    handleUpdateCancle,
  };
}
