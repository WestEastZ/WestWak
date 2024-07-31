import { BoardType } from "@/app/_types/type";
import React from "react";

import UserIcon from "../../../../public/icon/user_circle.svg";
import More from "../../../../public/icon/more.svg";

export default function CardComment({ board }: { board: BoardType }) {
  return (
    <div className="w-4/5 m-auto p-2 pl-0 flex justify-between items-center gap-3">
      <section className="flex gap-3">
        <UserIcon width={38} height={38} />
        <section className="">
          <section className="flex items-center gap-2">
            <div className="font-bold">{board.username}</div>
            <div className="text-sm text-gray-400">{board.createdAt}</div>
          </section>
          <div>
            {board.status === "PRIVATE"
              ? "비밀 댓글입니다."
              : board.description}
          </div>
        </section>
      </section>
      <More width={30} height={30} />
    </div>
  );
}
