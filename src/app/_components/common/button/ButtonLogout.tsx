"use client";

import { ButtonPropsType, ButtonStyle } from "@/app/_types/type";
import { logout } from "@/app/lip/sign";
import { useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonLogout({ text }: ButtonPropsType) {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);

  const clearToken = async () => {
    clearUser();
    await logout();
    router.refresh();
  };

  return (
    <div
      className={`text-base text-customColor-text hover:text-customColor-main transition-all duration-300 cursor-pointer`}
      onClick={clearToken}
    >
      {text}
    </div>
  );
}
