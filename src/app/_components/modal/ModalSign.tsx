"use client";

import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { handleSignUp } from "@/app/_api/auth";

export function ModalSign({
  modalText,
  handleCloseSignModal,
  children,
}: {
  modalText: string | null;
  handleCloseSignModal: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed z-[9999] top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 text-white"
      onClick={handleCloseSignModal}
    >
      <section
        className="w-[40rem] h-[45rem] p-20 flex flex-col  items-center gap-10 bg-bgColor-100 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-4xl font-bold">{modalText}</div>
        {children}
      </section>
    </div>
  );
}

// Modal Sign Contenet
export function ModalSignContent({ modalText }: { modalText: string | null }) {
  return (
    <section className="w-full flex flex-col flex-grow justify-center items-center p-10">
      {modalText === "Sign Up" ? <ModalSignUp /> : <ModalSignIn />}
    </section>
  );
}

// Sign Up
export function ModalSignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassoword] = useState<string>("");
  const [checkPassword, setCheckPassoword] = useState<string>("");

  const handleSignUpUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSignUpPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(e.target.value);
  };
  const handleSignUpCheckPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckPassoword(e.target.value);
  };

  const onSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await handleSignUp({ username, password });

      console.log(response.username, response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col justify-between items-center text-xl text-white"
      onSubmit={onSubmitSignUp}
    >
      <Input
        type={"text"}
        name={"username"}
        placeholder={"username"}
        onChange={handleSignUpUsername}
      />
      <Input
        type={"password"}
        name={"password"}
        placeholder={"password"}
        onChange={handleSignUpPassword}
      />
      <Input
        type={"password"}
        name={"check_password"}
        placeholder={"password"}
        onChange={handleSignUpCheckPassword}
      />
      <Button text="Sign Up" type="submit" />
    </form>
  );
}

// Sign In
export function ModalSignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassoword] = useState<string>("");

  const handleSignInUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSignInPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(e.target.value);
  };

  const onSubmitSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const response = await handleSignIn({ username, password });
      // console.log(JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col justify-around items-center text-xl text-white"
      onSubmit={onSubmitSignin}
    >
      <Input
        type={"text"}
        name={"username"}
        placeholder={"username"}
        onChange={handleSignInUsername}
      />
      <Input
        type={"password"}
        name={"password"}
        placeholder={"password"}
        onChange={handleSignInPassword}
      />

      <Button text="Sign Up" type="submit" />
    </form>
  );
}
