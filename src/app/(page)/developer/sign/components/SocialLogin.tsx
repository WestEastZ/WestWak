"use client";

import React from "react";
import Kakao from "../../../../../../public/icon/kakao.png";
import Google from "../../../../../../public/icon/google.png";
import Github from "../../../../../../public/icon/github.png";
import Image from "next/image";

export function KakaoLogin() {
  const handleKakaoLogin = () => {
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}`;

    window.location.href = url;
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="flex h-12 w-full items-center rounded-2xl bg-yellow-500 px-4 text-black"
    >
      <Image src={Kakao} alt="kakao" width={24} height={24} className="" />
      <span className="flex-grow whitespace-nowrap">
        카카오 계정으로 계속하기
      </span>
    </button>
  );
}

export function GoogleLogin() {
  const handleGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URL = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;

    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile`;

    window.location.href = url;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="hover:scale-101 flex h-12 w-full items-center rounded-2xl bg-white px-4 text-black"
    >
      <Image src={Google} alt="google" width={24} height={24} />
      <span className="flex-grow whitespace-nowrap">
        구글 계정으로 계속하기
      </span>
    </button>
  );
}

export function GithubLogin() {
  const handleGithubLogin = () => {
    const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const GITHUB_REDIRECT_URL = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URL;

    const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URL}`;

    window.location.href = url;
  };

  return (
    <button
      onClick={handleGithubLogin}
      className="flex h-12 w-full items-center rounded-2xl bg-black px-4"
    >
      <Image src={Github} alt="github" width={24} height={24} />
      <span className="flex-grow whitespace-nowrap">
        깃허브 계정으로 계속하기
      </span>
    </button>
  );
}
