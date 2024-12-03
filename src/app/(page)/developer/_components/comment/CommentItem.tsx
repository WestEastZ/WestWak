"use client";

import { CommentFormType } from "@/app/_types/input.type";
import { BoardType } from "@/app/_types/type";
import { updateBoard } from "@/app/lip/board";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import UserIcon from "../../../../../../public/icon/user.svg";
import CheckBoxLock from "@/app/_components/common/checkbox/CheckBoxLock";
import Button from "@/app/_components/common/button/Button";
import ButtonMore from "@/app/_components/common/button/ButtonMore";
import { adjustHeight } from "@/app/util/adjustHeight";

export default function CommentItem({ board }: { board: BoardType }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(
    null,
  ) as React.MutableRefObject<HTMLTextAreaElement | null>;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<CommentFormType>({
    defaultValues: {
      description: board.description,
      status: board.status,
    },
  });

  const status = watch("status");
  const description = watch("description");

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight(textareaRef);
    }
  }, [description, isEditing]);

  const onSubmit = async (data: CommentFormType) => {
    try {
      await updateBoard({
        description: data.description,
        status: data.status,
        boardId: board.id,
      });
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.log("댓글 수정 실패", error);
    }
  };

  const handleCancel = () => {
    reset({
      description: board.description,
      status: board.status,
    });

    setIsEditing(false);
  };

  const handleStatusToggle = () => {
    setValue("status", status === "PUBLIC" ? "PRIVATE" : "PUBLIC");
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex w-full justify-between gap-2">
      {/* Icon */}
      <section className="flex h-full items-start">
        <UserIcon width={48} height={48} />
      </section>

      {/* comment */}
      <section className="flex min-w-0 flex-grow flex-col">
        <div className="min-w-0 flex-grow">
          {/* info */}
          {!isEditing && (
            <div className="flex items-center gap-2">
              <span>{board.username}</span>
              <span className="text-sm text-customColor-text">
                {board.createdAt}
              </span>
              {board.status === "PRIVATE" && (
                <CheckBoxLock status={board.status} size={16} />
              )}
            </div>
          )}

          {/* form */}
          {isEditing ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="relative">
                <textarea
                  {...register("description", {
                    required: "댓글 내용을 입력해주세요.",
                    minLength: {
                      value: 1,
                      message: "최소 1자 이상 입력해주세요.",
                    },
                    maxLength: {
                      value: 250,
                      message: "최대 250자까지 입력 가능합니다.",
                    },
                  })}
                  maxLength={250}
                  rows={1}
                  ref={(e) => {
                    textareaRef.current = e;
                    register("description").ref(e);
                  }}
                  className={`h-14 min-h-[3.5rem] w-full resize-none overflow-hidden rounded-md border border-customColor-border bg-inherit py-2 pl-4 leading-8 text-white outline-none focus:border-customColor-main`}
                />
                <span className="absolute bottom-2 right-2 text-sm text-customColor-text">
                  {description.length || 0} / 250
                </span>
              </div>

              <div className="flex items-center justify-end gap-2">
                {errors.description && (
                  <span className="text-sm text-red-500">
                    {errors.description.message}
                  </span>
                )}
                <CheckBoxLock
                  onClick={handleStatusToggle}
                  status={status}
                  size={28}
                />
                <Button
                  text="취소"
                  type="button"
                  size="x_small"
                  onClick={handleCancel}
                />
                <Button text="완료" type="submit" size="x_small" />
              </div>
            </form>
          ) : (
            <div className="max-w-full break-all">
              {board.status === "PRIVATE" ? (
                <span className="text-customColor-text">비밀 댓글입니다.</span>
              ) : (
                <span className="inline-block w-full">{description}</span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* More Button */}
      {!isEditing && (
        <ButtonMore
          board={board}
          isModalOpen={isModalOpen}
          onToggle={handleModalToggle}
          isUpdate={isEditing}
          setIsUpdate={setIsEditing}
        />
      )}
    </div>
  );
}
