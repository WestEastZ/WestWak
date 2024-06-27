import { InputPropsType } from "@/app/_types/type";
import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  onChange,
}: InputPropsType) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      className="w-full h-14 p-2 bg-inherit border-b-2 focus:border-bgColor-main outline-none"
    />
  );
}
