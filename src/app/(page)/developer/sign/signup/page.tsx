import Title from "@/app/_components/common/header/Title";
import React from "react";
import Signin from "../components/Login";
import Signup from "../components/Signup";

export default function page() {
  return (
    <div>
      <Title title="회원가입" />
      <Signup />
    </div>
  );
}
