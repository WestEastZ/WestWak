import { NextResponse } from "next/server";
import { authenticate, getNewAccessToken } from "../lip/auth";
import { cookies } from "next/headers";

export async function checkToken() {
  const cookieStore = cookies();
  const { statusCode } = await authenticate();

  // 토큰 만료
  if (statusCode === 401) {
    const refreshResponse = await getNewAccessToken();

    // refresh 토큰 미보유
    if (refreshResponse.statusCode === 401) {
      return NextResponse.redirect("http://localhost:3000/developer/login");
    }

    // 토큰 변경
    cookieStore.set("access_token", refreshResponse.access_token);
  }
}
