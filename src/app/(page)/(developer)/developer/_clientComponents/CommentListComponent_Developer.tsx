import ButtonBack from "@/app/_components/button/ButtonBack";
import ButtonNext from "@/app/_components/button/ButtonNext";
import ButtonPage from "@/app/_components/button/ButtonPage";
import { searchParamsType } from "@/app/_types/type";
import { getBoards } from "@/app/lip/board";
import React from "react";
import CommentListClient from "./CommentListClient";

export default async function CommentListComponent_Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const currentPage = Number(searchParams.page) || 1;

  const response = await getBoards(currentPage);

  const { boards, total } = response;
  const totalPages = Math.ceil(total / 5);

  // 현재 페이지 그룹 계산
  const pageGroup = Math.ceil(currentPage / 5);
  const lastPageGroup = Math.ceil(totalPages / 5);

  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  const pageButton = [];

  for (let i = startPage; i <= endPage; i++) {
    pageButton.push(<ButtonPage key={i} page={i} currentPage={currentPage} />);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <CommentListClient boards={boards} />
      <div className="w-1/4 flex">
        {pageGroup > 1 && <ButtonBack page={startPage - 5} />}
        <div className="flex justify-around grow">{pageButton}</div>
        {pageGroup < lastPageGroup && <ButtonNext page={endPage + 1} />}
      </div>
    </div>
  );
}
