import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const videoId = searchParams.get("id");

    const url = `${process.env.YOUTUBE_VIDEO_URL}&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
