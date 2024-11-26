import Link from "next/link";
import React from "react";

export default function ButtonPage({
  page,
  currentPage,
}: {
  page: number;
  currentPage: number;
}) {
  const isCurrentPage = page === currentPage;
  console.log(isCurrentPage);

  return (
    <Link
      href={{ pathname: "/developer", query: { page } }}
      scroll={false}
      className={`text-lg ${
        isCurrentPage
          ? "text-customColor-main"
          : "text-white transition-all duration-200 hover:scale-110 hover:text-customColor-main"
      }`}
    >
      {page}
    </Link>
  );
}
