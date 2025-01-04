"use client";

import { UserStore, UserType } from "@/app/_types/type";
import { useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GithubCallback() {
  const router = useRouter();
  const setUser = useUserStore((state: UserStore) => state.setUser);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      const GithubLogin = async () => {
        try {
          const response = await fetch("/api/auth/github", {
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
            router.replace("/developer/sign");
          }
        } catch (error) {
          router.replace("/developer/sign");
        }
      };
      GithubLogin();
    }
  }, []);

  return <div>깃허브 로그인 중</div>;
}
