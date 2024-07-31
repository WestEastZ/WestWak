import Link from "next/link";
import React from "react";

export default function ButtonBack({ page }: { page: number }) {
  return (
    <Link href={{ pathname: "/developer", query: { page } }} scroll={false}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#e8eaed"
        className={
          "flex-grow-1 cursor-pointer hover:fill-bgColor-main hover:scale-125 transition-all duration-200"
        }
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    </Link>
  );
}
