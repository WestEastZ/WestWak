import ButtonBack from "@/app/_components/common/button/ButtonBack";
import ButtonNext from "@/app/_components/common/button/ButtonNext";
import ButtonPage from "@/app/_components/common/button/ButtonPage";
import { searchParamsType } from "@/app/_types/type";
import { getBoards } from "@/app/lip/board";
import React from "react";
import Comment from "./Comment";
import { calculatePagination } from "@/app/util/calculatePagination";

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
    <div className="flex flex-col justify-center items-center gap-10">
      <Comment boards={boards} />

      {/* button */}
      <section className="w-1/4 flex">
        {pageGroup > 1 && <ButtonBack page={startPage - 5} />}
        <div className="flex justify-around grow">{pageButton}</div>
        {pageGroup < lastPageGroup && <ButtonNext page={endPage + 1} />}
      </section>
    </div>
  );
}
