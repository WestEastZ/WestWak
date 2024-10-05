import ButtonLogout from "@/app/_components/common/button/ButtonLogout";
import { getUser } from "@/app/lip/auth";
import Link from "next/link";
import React from "react";

export default async function User() {
  const userResponse = await getUser();

  return (
    <div className="w-full">
      {userResponse.statusCode === 401 ? (
        <section className="flex flex-col gap-10">
          <div className="font-bold text-lg">
            로그인 이후에 댓글 작성 가능합니다!
          </div>
          <Link
            href={"/developer/login"}
            className="transition-all duration-300 hover:scale-105 hover:text-customColor-main hover:font-bold"
          >
            회원가입 | 로그인 하기
          </Link>
        </section>
      ) : (
        <section className="flex justify-end items-center gap-3">
          <div>{userResponse.username}</div>
          <ButtonLogout text="Logout" type="button" size="small" />
        </section>
      )}
    </div>
  );
}
