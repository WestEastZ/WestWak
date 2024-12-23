import ButtonBack from "@/app/_components/common/button/ButtonBack";
import ButtonNext from "@/app/_components/common/button/ButtonNext";
import ButtonPage from "@/app/_components/common/button/ButtonPage";
import { BoardType, searchParamsType } from "@/app/_types/type";
import { getBoards } from "@/app/lip/board";
import React from "react";

import { calculatePagination } from "@/app/util/calculatePagination";
import CommentItem from "./CommentItem";

export default async function CommentList({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const currentPage = Number(searchParams.page) || 1;

  const response = await getBoards(currentPage);
  const { boards, total } = response;

  const { pageGroup, lastPageGroup, startPage, endPage } = calculatePagination({
    currentPage,
    total,
  });

  const pageButton = [];

  for (let i = startPage; i <= endPage; i++) {
    pageButton.push(<ButtonPage key={i} page={i} currentPage={currentPage} />);
  }

  return (
    <div className="flex h-full flex-col items-center justify-between gap-10">
      {boards.map((board: BoardType) => (
        <CommentItem key={board.id} board={board} />
      ))}

      {/* button */}
      <section className="flex w-1/4 max-md:w-4/5">
        {pageGroup > 1 && <ButtonBack page={startPage - 5} />}
        <div className={`flex flex-grow justify-around`}>{pageButton}</div>
        {pageGroup < lastPageGroup && <ButtonNext page={endPage + 1} />}
      </section>
    </div>
  );
}
