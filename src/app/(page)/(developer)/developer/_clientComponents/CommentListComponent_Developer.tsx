import ButtonBack from "@/app/_components/button/ButtonBack";
import ButtonNext from "@/app/_components/button/ButtonNext";
import ButtonPage from "@/app/_components/button/ButtonPage";
import CardComment from "@/app/_components/card/CardComment";
import { BoardType, searchParamsType } from "@/app/_types/type";
import { getBoards } from "@/app/lip/board";
import React from "react";

export default async function CommentListComponent_Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const currentPage = Number(searchParams.page) || 1;

  const response = await getBoards(currentPage);

  const { boards, total } = response;
  const totalPages = Math.ceil(total / 5);

  console.log("totalPages", totalPages);

  // 현재 페이지 그룹 계산
  const pageGroup = Math.ceil(currentPage / 5);
  const lastPageGroup = Math.ceil(totalPages / 5);
  console.log("pageGroup", pageGroup);
  console.log("lastPageGroup", lastPageGroup);

  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);
  console.log("startPage", startPage);
  console.log("endPage", endPage);

  const pageButton = [];

  for (let i = startPage; i <= endPage; i++) {
    pageButton.push(<ButtonPage key={i} page={i} currentPage={currentPage} />);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="w-full pl-10 pr-10 flex flex-col gap-2">
        {boards.map((board: BoardType) => (
          <CardComment key={board.id} board={board} />
        ))}
      </div>
      <div className="w-1/4 flex gap-10">
        {pageGroup > 1 && <ButtonBack page={startPage - 5} />}
        <div className="flex justify-between grow">{pageButton}</div>
        {pageGroup < lastPageGroup && <ButtonNext page={endPage + 1} />}
      </div>
    </div>
  );
}

//

// start =

// let startPage = Math.max(1, currentPage - 2);
// let endPage = Math.min(totalPages, startPage + 4);

// if (endPage < totalPages) {
//   startPage = Math.max(1, endPage - 4);
// } else {
//   startPage = Math.max(1, totalPages - 4);
//   endPage = totalPages;
// }
