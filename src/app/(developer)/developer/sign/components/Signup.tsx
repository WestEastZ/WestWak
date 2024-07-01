"use client";

import Button from "@/app/_components/button/Button";
import Input from "@/app/_components/input/Input";
import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassoword] = useState<string>("");
  const [checkPassword, setCheckPassoword] = useState<string>("");

  // username
  const handleSignUpUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // password
  const handleSignUpPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(e.target.value);
  };

  // check password
  const handleSignUpCheckPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckPassoword(e.target.value);
  };

  // submit sign up
  const onSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/signup`,
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full p-24 flex flex-col items-center gap-8 border-2 bg-bgColor-200 rounded-3xl">
      <div className="text-3xl font-bold">Sign Up</div>
      <form
        className="w-full h-full flex flex-col justify-between"
        onSubmit={onSubmitSignUp}
      >
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleSignUpUsername}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleSignUpPassword}
        />
        <Input
          type="password"
          name="check_password"
          placeholder="Password"
          onChange={handleSignUpCheckPassword}
        />
        <Button text="Sign Up" type="submit" />
      </form>
    </div>
  );
}
