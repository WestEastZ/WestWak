import React from "react";
import CommentWriteComponent_Developer from "../_clientComponents/CommentWriteComponent_Developer";
import CommentListComponent_Developer from "../_clientComponents/CommentListComponent_Developer";
import { searchParamsType } from "@/app/_types/type";

export default function CommentComponent_Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <section>
      <CommentWriteComponent_Developer />
      <CommentListComponent_Developer searchParams={searchParams} />
    </section>
  );
}
