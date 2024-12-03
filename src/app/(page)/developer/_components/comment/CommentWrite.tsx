"use client";

import Button from "@/app/_components/common/button/Button";
import CheckBoxLock from "@/app/_components/common/checkbox/CheckBoxLock";
import { CommentFormType } from "@/app/_types/input.type";
import { createBoard } from "@/app/lip/board";
import { adjustHeight } from "@/app/util/adjustHeight";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export default function CommentWrite() {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(
    null,
  ) as React.MutableRefObject<HTMLTextAreaElement | null>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CommentFormType>({
    defaultValues: { description: "", status: "PUBLIC" },
  });

  const status = watch("status");
  const description = watch("description");

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight(textareaRef);
    }
  }, [description]);

  const onSubmit = async (data: CommentFormType) => {
    try {
      await createBoard(data);
      if (textareaRef.current) {
        textareaRef.current.style.height = "48px";
      }
      reset({ description: "", status: "PUBLIC" });
      router.refresh();
    } catch (error) {
      console.log("댓글 작성 실패", error);
    }
  };

  const handleStatusToggle = () => {
    setValue("status", status === "PUBLIC" ? "PRIVATE" : "PUBLIC");
  };

  return (
    <div className="w-full">
      {/* 댓글 추가 */}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex w-full items-center justify-center gap-2 max-md:flex-col">
          {/* input */}
          <div className="relative flex w-full items-center justify-center gap-2 rounded px-2">
            <CheckBoxLock
              onClick={handleStatusToggle}
              status={watch("status")}
              size={30}
            />
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
              placeholder="개발자에게 한마디 하기"
              rows={1}
              ref={(e) => {
                textareaRef.current = e;
                register("description").ref(e);
              }}
              className="h-14 min-h-[3.5rem] w-full resize-none overflow-hidden rounded-md border border-customColor-border bg-inherit px-4 py-2 leading-8 text-white outline-none focus:border-customColor-main"
            />
            <span className="absolute bottom-0 right-4 text-sm text-customColor-text">
              {description.length || 0} / 250
            </span>
          </div>

          {/* button */}
          <Button text="댓글" type="submit" size="x_small" />
        </section>

        {errors.description && (
          <span className="mt-2 self-start pl-14 text-sm text-red-500">
            {errors.description.message}
          </span>
        )}
      </form>
    </div>
  );
}
