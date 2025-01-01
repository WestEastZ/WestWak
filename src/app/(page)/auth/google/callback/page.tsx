"use client";

import { UserStore, UserType } from "@/app/_types/type";
import { useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function GoogleCallback() {
  const router = useRouter();
  const setUser = useUserStore((state: UserStore) => state.setUser);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      const GoogleLogin = async () => {
        try {
          const response = await fetch("/api/auth/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ code }),
          });

          const data = await response.json();

          if (response.ok) {
            const userData: UserType = {
              id: data.id,
              username: data.username,
            };

            setUser(userData);
            router.replace("/developer?page=1");
          } else {
            console.error("로그인 실패:", data);
            router.replace("/developer/sign");
          }
        } catch (error) {
          console.error("카카오 로그인 실패:", error);
          router.replace("/developer/sign");
        }
      };
      GoogleLogin();
    }
  }, []);
  return <div>구글 로그인 중</div>;
}
