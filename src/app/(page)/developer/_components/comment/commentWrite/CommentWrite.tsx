"use client";

import Button from "@/app/_components/common/button/Button";
import CheckBoxLock from "@/app/_components/common/checkbox/CheckBoxLock";
import useCommentCreate from "@/app/hook/useCommentCreate";
import React from "react";

export default function CommentWrite() {
  const {
    status,
    textareaRef,
    handleChangeComment,
    handleCheckBoardStatus,
    handleOnsubmitComment,
  } = useCommentCreate();

  return (
    <div className="w-full">
      {/* 댓글 추가 */}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleOnsubmitComment}
      >
        <section className="flex w-full items-center justify-center gap-2">
          {/* <div className="flex w-full items-center gap-2"> */}
          {/* input */}
          <CheckBoxLock
            onClick={handleCheckBoardStatus}
            status={status}
            size={30}
          />
          <textarea
            ref={textareaRef}
            name="input_comment"
            id="input_comment"
            placeholder="개발자에게 한마디 하기"
            rows={1}
            className="h-12 min-h-[3rem] w-full resize-none overflow-hidden border-b border-customColor-border bg-inherit py-2 pl-4 leading-6 text-white outline-none focus:border-customColor-main"
            onChange={handleChangeComment}
          />
          {/* </div> */}

          {/* button */}
          <Button text="댓글" type="submit" size="x_small" />
        </section>
      </form>
    </div>
  );
}
