import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { image1, image2 } = await request.json();

    const url = process.env.KAKAO_API_URL;

    if (!url) {
      throw new Error("KAKAO_API_URL is not defined");
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `SECRET_KEY ${process.env.KAKAO_API_KEY}`,
      },
      body: JSON.stringify({ image1, image2 }),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
