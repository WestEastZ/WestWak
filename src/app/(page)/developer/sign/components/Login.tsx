"use client";

import Button from "@/app/_components/common/button/Button";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import Input from "@/app/_components/common/input/Input";
import { UserStore, UserType } from "@/app/_types/type";
import { signin } from "@/app/lip/sign";
import { useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";

import Person from "../../../../../../public/icon/person.svg";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignFormType } from "@/app/_types/input.type";

interface UserState {
  user: UserType;
  setUser: (user: UserType) => void;
}

export default function Login() {
  const router = useRouter();
  const setUser = useUserStore((state: UserStore) => state.setUser);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormType>();

  // submit sign in
  const onSubmitSignin = async (data: SignFormType) => {
    try {
      const response = await signin(data);

      const userData: UserType = {
        id: response.id,
        username: response.username,
      };

      if (setUser) {
        setUser(userData);
      }

      router.replace("/developer?page=1");
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        setError("password", {
          message: "이메일 혹은 비밀번호를 확인해주세요.",
        });
      }
    }
  };

  return (
    <div className="container-style m-auto flex h-[38rem] w-full flex-col gap-5">
      <ContentsTitle title="로그인" Icon={Person} />
      <form
        onSubmit={handleSubmit(onSubmitSignin)}
        className="flex h-max w-full flex-col items-center gap-5"
      >
        <Input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          rules={{
            required: "사용장 이름을 입력하세요.",
          }}
          error={errors.username}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          rules={{
            required: "비밀번호를 입력하세요.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 입력하세요.",
            },
          }}
          error={errors.password}
        />

        <section className="flex w-full flex-col gap-3">
          <Button text="로그인" type="submit" size="large" />
        </section>
      </form>

      <div className="h-px w-full bg-customColor-border"></div>
      <section className="flex flex-grow items-center justify-center">
        소셜로그인
      </section>
    </div>
  );
}

// <form
//   className="w-full h-full flex flex-col items-center gap-10 mt-10"
//   onSubmit={onSubmitSignin}
// >
//   <section className="w-full flex flex-col gap-4">
//     <Input
//       type="text"
//       name="username"
//       placeholder="Username"
//       value={username}
//       onChange={handleSignInUsername}
//     />
//     <Input
//       type="password"
//       name="password"
//       placeholder="Password"
//       value={password}
//       onChange={handleSignInPassword}
//     />
//   </section>

//   <section className="w-full flex flex-col gap-2">
//     <Button text="로그인" type="submit" size="large" />
//     <Link
//       href={"/developer/signup"}
//       className="w-full h-12 flex items-center justify-center text-lg button-style rounded-3xl text-center"
//     >
//       <span>회원가입</span>
//     </Link>
//   </section>

//   <div className="w-full h-px bg-customColor-border"></div>
//   <section></section>
// </form>;
