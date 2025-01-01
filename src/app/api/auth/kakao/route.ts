import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/kakao`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
      cache: "no-store",
      credentials: "include",
    });

    const data = await response.json();

    const cookieList = response.headers.getSetCookie();

    const nextResponse = NextResponse.json(data, { status: response.status });

    cookieList.forEach((cookie) => {
      nextResponse.headers.append("Set-Cookie", cookie);
    });

    return nextResponse;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
