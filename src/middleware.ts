import { NextRequest, NextResponse } from "next/server";
import { authenticate, getNewAccessToken } from "./app/lip/auth";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const { statusCode } = await authenticate();

  if (statusCode === 200) {
    return NextResponse.next();
  }

  if (statusCode === 401) {
    const refreshResponse = await getNewAccessToken();

    if (refreshResponse.statusCode === 401) {
      return NextResponse.redirect(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/developer/sign"
          : "https://wakvideo.shop/developer/sign",
      );
    }

    // token
    const newAccessToken = refreshResponse.data.access_token; // 재발급 access_token
    const refresh_token = request.cookies.get("refresh_token"); // refresh_token
    const cookieString = `${refresh_token?.name}=${refresh_token?.value}; access_token=${newAccessToken}`;

    // request header
    const newHeaders = new Headers(request.headers); // 새로운 request header

    newHeaders.set("Authorization", newAccessToken); // Authorization 토큰 저장
    newHeaders.set("Cookie", cookieString); // cookie 토큰 저장

    const newRequest = new NextRequest(request, {
      headers: newHeaders,
    });

    // response header
    const newResponse = NextResponse.next({
      request: newRequest,
    });

    newResponse.cookies.set("access_token", `${newAccessToken}`, {
      httpOnly: true,
      secure: true,
      sameSite: "strict" as const,
      maxAge: 10000,
      domain: process.env.NODE_ENV === "development" ? "" : ".wakvideo.shop",
      path: "/",
    });

    return newResponse;
  }
  return response;
}

export const config = {
  matcher: ["/developer"],
};
