import { channelGroup } from "@/app/_constants/MemberList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subCategory");

    if (!category || !subCategory) {
      return NextResponse.json(null);
    }

    const playListId = channelGroup[category]?.[subCategory];

    const playlistUrl = `${process.env.YOUTUBE_PLATLISTITEM_URL}&playlistId=${playListId}&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`;

    const response = await fetch(playlistUrl, { cache: "no-store" });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
