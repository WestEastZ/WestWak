import { BoardStatus } from "../_types/type";

// 게시물 생성
export async function createBoard({
  description,
  status,
}: {
  description: string;
  status: BoardStatus;
}) {
  console.log("status", status);

  const response = await fetch("/api/boards/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description, status }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  return response.json();
}

// 게시물 조회
export async function getBoards(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/boards?page=${page}`
  );

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  return response.json();
}
