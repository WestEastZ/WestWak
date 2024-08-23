import { BoardStatus } from "./../../../_types/type";
import { authenticate, getNewAccessToken } from "@/app/lip/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const { statusCode } = await authenticate();

  // 토큰 만료
  if (statusCode === 401) {
    const refreshResponse = await getNewAccessToken();

    // refresh 토큰 미보유
    if (refreshResponse.statusCode === 401) {
      return NextResponse.redirect("http://localhost:3000/developer/sign");
    }

    // 토큰 변경
    cookieStore.set("access_token", refreshResponse.access_token);
  }

  const access_token = cookieStore.get("access_token");
  const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/boards/create`;

  try {
    const { description, status } = await request.json();

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token?.value ?? "",
      },
      body: JSON.stringify({ description, status }),
      credentials: "include",
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
