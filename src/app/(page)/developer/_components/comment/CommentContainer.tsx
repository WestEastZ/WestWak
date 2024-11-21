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
    <section className="flex h-full min-h-0 flex-col gap-10">
      <CommentWrite />
      <CommentList searchParams={searchParams} />
    </section>
  );
}
