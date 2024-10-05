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
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={`${id}`} className="pl-2">
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        autoComplete="off"
        className="w-full h-12 p-4 bg-inherit border-2 rounded-2xl border-customColor-border focus:border-customColor-main outline-none"
      />
      {error && (
        <span className="text-red-500 text-sm pl-2">{error.message}</span>
      )}
    </div>
  );
}
