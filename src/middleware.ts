import { NextRequest, NextResponse } from "next/server";
import {
  authenticate,
  getNewAccessToken,
  setRequestHeader,
  setResponseHeader,
} from "./app/lip/auth";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const { statusCode } = await authenticate();

  if (statusCode === 401) {
    const refreshResponse = await getNewAccessToken();

    if (refreshResponse.statusCode === 401) {
      return NextResponse.redirect(
        "https://wakvideo.vercel.app/developer/sign",
      );
    }

    // 응답 헤더 교체
    setResponseHeader(response, refreshResponse.access_token);

    // 요청 헤더 교체
    return setRequestHeader(request, response, refreshResponse.access_token);
  }

  return response;
}

export const config = {
  matcher: ["/developer"],
};

// if (res.status === 401) {
//   return NextResponse.redirect("http://localhost:3000/developer/sign");
// }
// const authResponse = await authenticate();
// console.log("message", authResponse.data.message);
// console.log("status", authResponse.status);
// if (authResponse.status === 200) {
//   return response;
// }
// if (authResponse.status === 401) {
//   const refreshResponse = await getNewAccessToken();
//   console.log(refreshResponse.data);
//   if (refreshResponse.status === 401) {
//     return NextResponse.redirect("http://localhost:3000/developer/sign");
//   }
// setNewAccessToken(refreshResponse.data);
// if (authResponse.status === 401) {
//   // 토큰 미보유
//   if (authResponse.data.message === "Invalid access token") {
//     return NextResponse.redirect("http://localhost:3000/developer/sign");
//   }

//   // 토큰 만료
//   if (authResponse.data.message === "Access token expired") {
//     // const new_access_token = (await getNewAccessToken(request)).data
//     //   .access_token;
//   }
// }

// return response;

// console.log(tokens);
// const { pathname } = request.nextUrl;
// let response = NextResponse.next();
// const cookies = request.cookies
//   .getAll()
//   .map((cookie) => `${cookie.name}=${cookie.value}`)
//   .join("; ");
// if (pathname === "/developer" || pathname.startsWith("/boards")) {
//   try {
//     const authResponse = await authenticate(cookies);
//     console.log(authResponse.message);
//     // 토큰 미보유
//     if (authResponse.message === "Invalid access token") {
//       return NextResponse.redirect("http://localhost:3000/developer/sign");
//     }
//     // 토큰 인가
//     if (authResponse.message === "authenticate") {
//       return NextResponse.next();
//     }
//     // 토큰 만료
//     if (authResponse.message === "Access token expired") {
//       const refreshToken = request.cookies.get("refresh_token");
//       if (!refreshToken) {
//         throw new Error("Refresh token not found");
//       }
//       // access 토큰 재발급
//       const newAccessToken = await getNewAccessToken(cookies);
//       response = setResponseHeader(response, newAccessToken.access_token);
//       return setRequestHeader(request, response, newAccessToken.access_token);
//     }
//   } catch (error) {
//     console.error("Authentication error:", error);
//     return NextResponse.redirect("http://localhost:3000/developer/sign");
//   }
// }
// return response;
