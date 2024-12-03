"use client";

import { BoardType } from "@/app/_types/type";
import { deleteBoard } from "@/app/lip/board";
import { useStore, useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

import Pencil from "../../../../../public/icon/pencil.svg";
import Trash from "../../../../../public/icon/trash.svg";

interface MoreFormType {
  action: "delete" | "update" | "report" | null;
}

export default function ModalMore({
  board,
  isUpdate,
  setIsUpdate,
  onToggle,
}: {
  board: BoardType;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
  onToggle: () => void;
}) {
  const router = useRouter();
  const { handleSubmit, setValue } = useForm<MoreFormType>({
    defaultValues: {
      action: null,
    },
  });

  const user = useStore(useUserStore, (state) => state.user);
  const isOwner = user?.id === board.userId;

  const onSubmit = async (data: MoreFormType) => {
    try {
      switch (data.action) {
        case "delete":
          await deleteBoard({ boardId: board.id });
          router.refresh();
          break;

        case "update":
          setIsUpdate(!isUpdate);
          break;

        case "report":
          alert("신고가 접수 되었습니다.");
          break;
      }

      onToggle();
    } catch (error) {
      console.log("오류가 발생했습니다.", error);
    }
  };

  const handleAction = (action: MoreFormType["action"]) => {
    setValue("action", action);
    handleSubmit(onSubmit)();
  };

  return (
    <div className="min-w-[6rem] overflow-hidden rounded-lg bg-[#353533] text-sm shadow-lg">
      {isOwner ? (
        <section className="flex flex-col">
          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-3 hover:bg-customColor-main"
            onClick={() => handleAction("update")}
          >
            <Pencil width={20} height={20} />
            <span>수정</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-3 hover:bg-customColor-main"
            onClick={() => handleAction("delete")}
          >
            <Trash width={20} height={20} />
            <span>삭제</span>
          </button>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => handleAction("report")}
          className="hover:bg-bgColor-main w-full cursor-pointer rounded-lg px-4 py-2 text-center transition-colors"
        >
          신고
        </button>
      )}
    </div>
  );
}
