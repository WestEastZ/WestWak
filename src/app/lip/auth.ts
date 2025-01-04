import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// 사용자 정보
export const getUser = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/user`;
  const response = await fetch(apiURL, {
    headers: {
      Authorization: access_token?.value ?? "",
    },
    cache: "no-store",
    credentials: "include",
  });

  const data = await response.json();

  return data;
};

// 토큰 인증
export const authenticate = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/authenticate`;

  const response = await fetch(apiURL, {
    headers: {
      Authorization: access_token?.value ?? "",
    },
    cache: "no-store",
    credentials: "include",
  });

  const statusCode = response.status;
  const data = await response.json();
  return { statusCode, data };
};

// 토큰 재발급
export const getNewAccessToken = async () => {
  const cookieStore = cookies();
  const refresh_token = cookieStore.get("refresh_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`;

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Authorization: refresh_token?.value ?? "",
    },
    cache: "no-store",
    credentials: "include",
  });

  return response.json();
};
