"use client";

import Button from "@/app/_components/common/button/Button";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import Input from "@/app/_components/common/input/Input";
import { UserStore, UserType } from "@/app/_types/type";
import { signin } from "@/app/lip/sign";
import { useUserStore } from "@/app/stores/useStores";
import { useRouter } from "next/navigation";

import Person from "../../../../../../public/icon/person.svg";

import React from "react";
import { useForm } from "react-hook-form";
import { SignFormType } from "@/app/_types/input.type";
import { GithubLogin, GoogleLogin, KakaoLogin } from "./SocialLogin";

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
    } catch (error: any) {
      const errorData = error.response?.data;

      setError("root", {
        type: "manual",
        message: errorData.message,
      });
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
            minLength: {
              value: 4,
              message: "사용자 이름은 4자 이상이어야 합니다.",
            },
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
      {errors.root && (
        <span className="pl-2 text-sm text-red-500">{errors.root.message}</span>
      )}

      <div className="h-px w-full bg-customColor-border"></div>
      <section className="flex flex-grow items-center justify-center">
        <KakaoLogin />
        <GoogleLogin />
        <GithubLogin />
      </section>
    </div>
  );
}
