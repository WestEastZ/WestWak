"use client";

import Button from "@/app/_components/button/Button";
import Input from "@/app/_components/input/Input";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassoword] = useState<string>("");
  const router = useRouter();

  // username
  const handleSignInUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // password
  const handleSignInPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(e.target.value);
  };

  // submit sign in
  const onSubmitSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          cache: "no-store",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(`Error ${response.status}: ${errorData.message}`);
      }

      router.replace("/developer?page=1");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full p-24 flex flex-col items-center gap-8 border-2 bg-bgColor-200 rounded-3xl">
      <div className="text-3xl font-bold">Sign In</div>
      <form
        className="w-full h-full flex flex-col justify-between"
        onSubmit={onSubmitSignin}
      >
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleSignInUsername}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleSignInPassword}
        />
        <Button text="Sign In" type="submit" size="large" />
      </form>
    </div>
  );
}
