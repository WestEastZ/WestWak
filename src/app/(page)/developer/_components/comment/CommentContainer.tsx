import React from "react";

import { searchParamsType } from "@/app/_types/type";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";

export default function CommentContainer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <section className="flex h-full min-h-0 w-full flex-col gap-4">
      <CommentWrite />
      <CommentList searchParams={searchParams} />
    </section>
  );
}
