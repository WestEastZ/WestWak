import { BoardStatus } from "./../../../_types/type";
import { authenticate, getNewAccessToken } from "@/app/lip/auth";
import { checkToken } from "@/app/util/checkToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();

    await checkToken();

    const access_token = cookieStore.get("access_token");
    const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/boards/create`;

    const { description, status } = await request.json();

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token?.value ?? "",
      },
      body: JSON.stringify({ description, status }),
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
