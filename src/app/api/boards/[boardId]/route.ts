import { authenticate, getNewAccessToken } from "@/app/lip/auth";
import { checkToken } from "@/app/util/checkToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { boardId: string } },
) {
  try {
    const cookieStore = cookies();

    await checkToken();

    const access_token = cookieStore.get("access_token");

    const { description, status } = await request.json();
    const { boardId } = params;
    const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/boards/${boardId}`;

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
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { boardId: string } },
) {
  try {
    const cookieStore = cookies();

    await checkToken();

    const access_token = cookieStore.get("access_token");

    const { boardId } = params;
    const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/boards/${boardId}`;

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
      { status: 500 },
    );
  }
}
