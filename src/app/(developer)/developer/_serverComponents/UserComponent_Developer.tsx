import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";

export async function getUser(cookie: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/authenticate`,
    {
      method: "GET",
      headers: {
        Cookie: cookie || "",
      },
      credentials: "include",
      cache: "no-store",
    }
  );
  return response.json();
}

export default async function UserComponent_Developer() {
  const cookieStore = cookies();
  const decodeCookie = decodeURIComponent(cookieStore.toString());
  const response = await getUser(decodeCookie);

  return (
    <div className="basis-1/3 h-full flex justify-center items-center text-center">
      {/* 회원가입, 로그인 */}
      {response.statusCode == 401 ? (
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
        <div>{response.username}님</div>
      )}
    </div>
  );
}
