"use client";

import React, { useEffect, useState } from "react";

export default function CommentComponent_Developer() {
  const [comment, setComment] = useState<string>("");
  const [boadrs, setBoards] = useState();

  // Comment Submit
  const handleOnsubmitComment = (event: React.FormEvent) => {
    event.preventDefault();
  };

  // Comment Change
  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  return (
    <div>
      {/* 댓글 */}
      <section className="w-full border-t-2 p-10">
        {/* 댓글 추가 */}
        <form className="m-auto w-4/5" onSubmit={handleOnsubmitComment}>
          <textarea
            name="input_comment"
            id="input_comment"
            placeholder="개발자에게 한마디 하기"
            className="resize-none w-full h-14 p-4 text-white text-lg bg-inherit border-b-2 focus:border-bgColor-main outline-none"
            onChange={handleChangeComment}
          ></textarea>
        </form>
      </section>

      {/* 댓글 목록 */}
      <section></section>
    </div>
  );
}
