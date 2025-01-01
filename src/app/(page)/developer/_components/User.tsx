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
          <div className="text-lg font-bold">
            로그인 이후에 댓글 작성 가능합니다!
          </div>
          <Link
            href={"/developer/login"}
            className="transition-all duration-300 hover:scale-105 hover:font-bold hover:text-customColor-main"
          >
            회원가입 | 로그인 하기
          </Link>
        </section>
      ) : (
        <section className="flex items-center justify-end gap-3">
          <div>{userResponse.username}</div>
          <div>{userResponse.id}</div>
          <ButtonLogout text="Logout" type="button" size="small" />
        </section>
      )}
    </div>
  );
}
