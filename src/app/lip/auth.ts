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
  });

  return response.json();
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
  });

  const statusCode = response.status;
  const data = response.json();
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
  });

  return response.json();
};

// response header access 토큰 설정
// export function setResponseHeader(response: NextResponse, token: string) {
//   response.cookies.set("access_token", `${token}`, {
//     httpOnly: true,
//     secure: true,
//     sameSite: "none" as const,
//     maxAge: 10000,
//     domain: process.env.NODE_ENV === "development" ? "" : ".wakvideo.shop",
//     path: "/",
//   });

//   return response;
// }

// request header 설정
// export function setRequestHeader(
//   request: NextRequest,
//   response: NextResponse,
//   newToken?: string,
// ) {
//   const token = newToken || request.cookies.get("access_token")?.value;

//   if (token) {
//     const newHeaders = new Headers(request.headers);

//     newHeaders.set("Authorization", `${token}`);

//     const cookieString = request.cookies
//       .getAll()
//       .map((cookie) => `${cookie.name}=${cookie.value}`)
//       .join("; ");

//     if (cookieString) {
//       newHeaders.set("Cookie", cookieString);
//     }

//     const newRequest = new NextRequest(request, {
//       headers: newHeaders,
//     });

//     const newResponse = NextResponse.next({ request: newRequest });

//     // header 복사
//     response.headers.forEach((value, key) => {
//       newResponse.headers.set(key, value);
//     });

//     // cookie 복사
//     response.cookies.getAll().forEach((cookie) => {
//       newResponse.cookies.set(cookie.name, cookie.value, cookie);
//     });

//     return newResponse;
//   }

//   return response;
// }
