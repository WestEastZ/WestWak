"use client";

import { ButtonPropsType, ButtonStyle } from "@/app/_types/type";
import { logout } from "@/app/lip/sign";
import { useUserStore } from "@/app/lip/stores/useStores";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonLogout({ text, type, size }: ButtonPropsType) {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);

  const clearToken = async () => {
    clearUser();
    await logout();
    router.refresh();
  };

  return (
    <div
      // type={type}
      className={`text-base text-gray-500 hover:text-bgColor-main hover:scale-105 transition-all duration-300 cursor-pointer`}
      onClick={clearToken}
    >
      {text}
    </div>
  );
}
