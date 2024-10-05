import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BoardStatus } from "../_types/type";
import { adjustHeight } from "../util/adjustHeight";
import { createBoard } from "../lip/board";

export default function useCommentCreate() {
  const router = useRouter();
  const [description, setComment] = useState<string>("");
  const [status, setStatus] = useState<BoardStatus>("PUBLIC");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustHeight(textareaRef);
  }, []);

  // description Change
  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
    adjustHeight(textareaRef);
  };

  // Board Status Check
  const handleCheckBoardStatus = () => {
    status === "PRIVATE" ? setStatus("PUBLIC") : setStatus("PRIVATE");
  };

  // Comment Submit
  const handleOnsubmitComment = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (description.length === 0) {
        return;
      }

      await createBoard({ description, status });
      setComment("");
      setStatus("PUBLIC");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    status,
    textareaRef,
    handleChangeComment,
    handleCheckBoardStatus,
    handleOnsubmitComment,
  };
}
