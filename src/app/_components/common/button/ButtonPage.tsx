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

  return (
    <Link
      href={{ pathname: "/developer", query: { page } }}
      scroll={false}
      className={`text-lg ${
        isCurrentPage
          ? "text-bgColor-main"
          : "text-white hover:text-customColor-main transition-all duration-200"
      }`}
    >
      {page}
    </Link>
  );
}
