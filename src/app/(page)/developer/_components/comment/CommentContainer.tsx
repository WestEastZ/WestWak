import React from "react";

import { searchParamsType } from "@/app/_types/type";
import CommentWrite from "./commentWrite/CommentWrite";
import CommentList from "./commentList/CommentList";

export default function CommentContainer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <section className="flex flex-col gap-10 min-h-0">
      <CommentWrite />
      <CommentList searchParams={searchParams} />
    </section>
  );
}
