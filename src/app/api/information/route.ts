import { NextResponse } from "next/server";
export async function GET() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/information/all`;
    const response = await fetch(url);

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
