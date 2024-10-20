import { SignFormType } from "../_types/input.type";

// 로그인
export const signin = async (data: SignFormType) => {
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`;
  const { username, password } = data;

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    return response.json();
  } catch (error) {
    console.error(`Failed to Sign In:`, error);
  }
};

// 회원가입
export const signup = async (data: SignFormType) => {
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`;
  const { username, password } = data;

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
      credentials: "include",
    });
    return response.json();
  } catch (error) {}
};

// 로그아웃
export const logout = async () => {
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`;

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error(`Failed to Logout:`, error);
  }
};
