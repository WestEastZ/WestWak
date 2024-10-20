import { BoardStatus } from "../_types/type";

// 게시물 생성
export async function createBoard({
  description,
  status,
}: {
  description: string;
  status: BoardStatus;
}) {
  try {
    const response = await fetch("/api/boards/create", {
      method: "POST",
      body: JSON.stringify({ description, status }),
    });

    return response.json();
  } catch (error) {
    console.error("Failed to Create Board:", error);
  }
}

// 게시물 조회
export async function getBoards(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/boards?page=${page}`,
    );

    return response.json();
  } catch (error) {
    console.error("Failed to Get Board:", error);
  }
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
  try {
    const response = await fetch(`/api/boards/${boardId}`, {
      method: "PATCH",
      body: JSON.stringify({ description, status }),
    });

    return response.json();
  } catch (error) {
    console.error("Failed to Update Board:", error);
  }
}

// 게시물 삭제
export async function deleteBoard({ boardId }: { boardId: number }) {
  try {
    const response = await fetch(`/api/boards/${boardId}`, {
      method: "DELETE",
    });

    return response.json();
  } catch (error) {
    console.error("Failed to Delete Board:", error);
  }
}
