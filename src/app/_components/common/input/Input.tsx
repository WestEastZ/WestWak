import { InputPropsType } from "@/app/_types/input.type";
import React from "react";

export default function Input({
  id,
  type,
  placeholder,
  name,
  register,
  rules,
  error,
}: InputPropsType) {
  return (
    <div className="relative flex w-full flex-col gap-2">
      <label htmlFor={`${id}`} className="pl-2">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete="off"
        className="h-12 w-full rounded-2xl border-2 border-customColor-border bg-inherit p-4 outline-none focus:border-customColor-main"
      />
      {error && (
        <span className="absolute -bottom-7 pl-2 text-sm text-red-500">
          {error.message}
        </span>
      )}
    </div>
  );
}
