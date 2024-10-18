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
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormType>();

  const password = watch("password");

  // submit sign up
  const onSubmitSignUp = async (data: SignFormType) => {
    try {
      const response = await signup(data);
      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError("root", {
          type: "manual",
          message: "이메일 혹은 비밀번호를 확인해주세요.",
        });
      }
    }
  };

  return (
    <div className="w-[32rem] h-[38rem] m-auto flex flex-col gap-5 container-style">
      <ContentsTitle title="회원가입" Icon={Person} />
      <form
        onSubmit={handleSubmit(onSubmitSignUp)}
        className="w-full h-max flex flex-col items-center gap-5"
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
        <section className="w-full flex flex-col gap-2">
          <Button text="회원가입" type="submit" size="large" />
        </section>
      </form>

      {errors.root && (
        <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>
      )}
      {isSuccess && (
        <p className="text-green-500 text-sm mt-2">회원가입에 성공했습니다!</p>
      )}

      <div className="w-full h-px bg-customColor-border"></div>
    </div>
  );
}
