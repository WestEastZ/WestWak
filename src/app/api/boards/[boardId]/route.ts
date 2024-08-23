import { authenticate, getNewAccessToken } from "@/app/lip/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
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
  try {
    const { description, status } = await request.json();
    const { boardId } = params;
    const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/boards/${boardId}`;

    console.log(description, "status : ", status, boardId);

    const response = await fetch(apiURL, {
      method: "PATCH",
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
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

  try {
    const { boardId } = params;

    console.log(boardId);

    const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/boards/${boardId}`;

    const response = await fetch(apiURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token?.value ?? "",
      },
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
