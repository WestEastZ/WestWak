import Link from "next/link";
import React from "react";

export default function ButtonNext({ page }: { page: number }) {
  return (
    <Link href={{ pathname: "/developer", query: { page } }} scroll={false}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#e8eaed"
        className={
          "flex-grow-5 cursor-pointer hover:fill-customColor-main transition-all duration-200"
        }
      >
        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
      </svg>
    </Link>
  );
}
