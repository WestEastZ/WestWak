import { getUser } from "@/app/lip/auth";
import Link from "next/link";
import React from "react";

export default async function UserComponent_Developer() {
  const userResponse = await getUser();

  return (
    <div className="basis-1/3 h-full flex justify-center items-center text-center">
      {userResponse.statusCode === 401 ? (
        <section className="flex flex-col gap-10">
          <div className="font-bold text-lg">
            로그인 이후에 댓글 작성 가능합니다!
          </div>
          <Link
            href={"/developer/sign"}
            className="transition-all duration-300 hover:scale-105 hover:text-bgColor-main hover:font-bold"
          >
            회원가입 | 로그인 하기
          </Link>
        </section>
      ) : (
        <section>
          <div>안녕하세요!</div>
          <div>{userResponse.username}님</div>
        </section>
      )}
    </div>
  );
}
