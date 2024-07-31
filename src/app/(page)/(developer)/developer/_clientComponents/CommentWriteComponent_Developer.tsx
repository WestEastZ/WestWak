"use client";

import Button from "@/app/_components/button/Button";
import CheckBoxLock from "@/app/_components/checkbox/CheckBoxLock";
import { BoardStatus } from "@/app/_types/type";
import { createBoard } from "@/app/lip/board";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CommentWriteComponent_Developer() {
  const router = useRouter();
  const [description, setComment] = useState<string>("");
  const [status, setStatus] = useState<BoardStatus>("PUBLIC");

  // description Change
  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  // Board Status Check
  const handleCheckBoardStatus = () => {
    status === "PRIVATE" ? setStatus("PUBLIC") : setStatus("PRIVATE");
  };

  // Comment Submit
  const handleOnsubmitComment = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createBoard({ description, status });
      setComment("");
      setStatus("PUBLIC");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* 댓글 */}
      <section className="w-full border-t-2 p-10">
        {/* 댓글 추가 */}
        <form
          className="w-4/5 m-auto flex flex-col justify-center items-center"
          onSubmit={handleOnsubmitComment}
        >
          <section className="flex w-full justify-center items-center gap-2">
            {/* input */}
            <CheckBoxLock onClick={handleCheckBoardStatus} status={status} />
            <textarea
              name="input_comment"
              id="input_comment"
              placeholder="개발자에게 한마디 하기"
              className="resize-none w-full h-12 leading-[3rem] pl-2 text-white text-base bg-inherit border-b-2 focus:border-bgColor-main outline-none"
              onChange={handleChangeComment}
            ></textarea>

            {/* button */}
            <Button text="Comment" type="submit" size="small" />
          </section>
        </form>
      </section>
    </div>
  );
}

// 현재 next-client-cookies 사용 시 서버 쪽 콘솔에는 쿠키 정상적으로 보이는 상황
// cookies-next는 언디파인드가 출력이 되고 있다.
// next/header는 서버 컴포넌트에서만 사용이 가능하여 현재 사용 불가능이다.
// 백엔드 쪽 authguard를 지우고 요청 시 정상적으로 데이터 통신은 이루어지나
// 사용자 정보가 없어서 데이터베이스에는 데이터가 null로 들어간다.
// 서동현에게 물어본 결과 로컬 스토리지를 이용해보고 안되면 다른 방법을 찾아보자
// 근데 아마 로컬 스토리지는 안될 가능성이 높다.

// 07.09
// 생각해보니 쿠키는 현재 http only여서 js로 조작이 불가능하다.
// 즉 변수로 Authorization에 넣을 수 없다는 뜻이다.
// 그래서 직접적으로 주입하는 방법을 채택해야할 것 같다.
// 일단 http false로 설정하면 정상적으로 작동한다.

// 미들웨어 코드에 헤더 추가하는 부분에 Authorization을 추가하는 방법으로 해보자
// 그 이후 통신이 정상적으로 되고 나서 바로 로그인 replace 처럼 refresh 해주면 새롭게 데이터를 받아온다.
// 만약 통신 하기 전에 토큰이 만료가 되면? 중간에 미들웨어를 거쳐서 가는걸까?
// 그건 아닌 것 같다. axios의 인터셉터로 다시 권한확인 재발급을 거치던가 해ㅔ야할 것 같다.
// 근데 그러면 추가로 권한확인하는 작업 때문에

// 7.15
// 미들웨어 수정했고 route handler 방법으로 각 api 요청을 변경해보자
