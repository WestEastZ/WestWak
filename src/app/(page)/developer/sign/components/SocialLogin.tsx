"use client";

import React from "react";

export function KakaoLogin() {
  const handleKakaoLogin = () => {
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;

    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}`;

    window.location.href = url;
  };

  return (
    <button onClick={handleKakaoLogin} className="rounded-full border p-2">
      카카오 로그인 버튼
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
    <button onClick={handleGoogleLogin} className="rounded-full border p-2">
      구글 로그인 버튼
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
    <button onClick={handleGithubLogin} className="rounded-full border p-2">
      깃허브 로그인 버튼
    </button>
  );
}
