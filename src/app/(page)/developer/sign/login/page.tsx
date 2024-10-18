import React from "react";
import Login from "../components/Login";
import Title from "@/app/_components/common/header/Title";

export default function page() {
  return (
    <div>
      <Title title="로그인" />
      <Login />
    </div>
  );
}
