import { BoardStatus } from "../_types/type";

// 게시물 생성
export async function createBoard({
  description,
  status,
}: {
  description: string;
  status: BoardStatus;
}) {
  const response = await fetch("/api/boards/create", {
    method: "POST",
    body: JSON.stringify({ description, status }),
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

// 게시물 수정
export async function updateBoard({
  description,
  status,
  boardId,
}: {
  description: string;
  status: BoardStatus;
  boardId: number;
}) {
  const response = await fetch(`/api/boards/${boardId}`, {
    method: "PATCH",
    body: JSON.stringify({ description, status }),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  return response.json();
}

// 게시물 삭제
export async function deleteBoard({ boardId }: { boardId: number }) {
  console.log(boardId);

  const response = await fetch(`/api/boards/${boardId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  return response.json();
}
