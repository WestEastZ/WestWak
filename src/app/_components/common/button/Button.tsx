"use client";

import { ButtonStyle, ButtonPropsType } from "@/app/_types/type";
import React from "react";

export default function Button({
  text,
  type,
  size,
  onClick,
  onSubmit,
}: ButtonPropsType) {
  const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (type === "submit" && onSubmit) {
      const form = e.currentTarget.closest("form");
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`${ButtonStyle[size]} button-style`}
      onClick={handler}
    >
      {text}
    </button>
  );
}
