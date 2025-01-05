"use client";

import Button from "@/app/_components/common/button/Button";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import Input from "@/app/_components/common/input/Input";
import React, { useEffect, useState } from "react";

import Person from "../../../../../../public/icon/person.svg";
import { useForm } from "react-hook-form";
import { signup } from "@/app/lip/sign";
import { SignFormType } from "@/app/_types/input.type";

export default function Signup() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const {
    register,
    watch,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormType>();

  const password = watch("password");

  // submit sign up
  const onSubmitSignUp = async (data: SignFormType) => {
    try {
      await signup(data);

      reset({ username: "", password: "", passwordConfirm: "" });
      setIsSuccess(true);
    } catch (error: any) {
      const errorData = error.response?.data;

      if (errorData.type === "username") {
        setError("username", {
          type: "manual",
          message: errorData.message,
        });
      } else {
        setError("root", {
          type: "manual",
          message: "회원가입이 실패했습니다 다시 시도해주세요.",
        });
      }
    }
  };

  return (
    <div className="container-style m-auto flex h-[40rem] w-full flex-col gap-5">
      <ContentsTitle title="회원가입" Icon={Person} />
      <form
        onSubmit={handleSubmit(onSubmitSignUp)}
        className="flex h-max w-full flex-col items-center gap-10"
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
              value: 2,
              message: "이름을 2글자 이상 입력하세요.",
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
        <Input
          id="passwordConfirm"
          type="password"
          placeholder="Password Confirm"
          name="passwordConfirm"
          register={register}
          rules={{
            required: "비밀번호 확인을 입력하세요.",
            validate: (value: string) =>
              password === value || "비밀번호가 일치하지 않습니다.",
          }}
          error={errors.passwordConfirm}
        />
        <section className="flex w-full flex-col gap-2">
          <Button text="회원가입" type="submit" size="large" />
        </section>
      </form>

      {errors.root && (
        <span className="mt-2 text-sm text-red-500">{errors.root.message}</span>
      )}

      <div className="h-px w-full bg-customColor-border"></div>

      {isSuccess && (
        <span className="mt-2 text-sm text-customColor-main">
          회원가입이 완료되었습니다.
        </span>
      )}
    </div>
  );
}
