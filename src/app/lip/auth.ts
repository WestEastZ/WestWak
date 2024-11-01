import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// 사용자 정보
export const getUser = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/user`;

  const response = await fetch(apiURL, {
    headers: {
      Authorization: access_token?.value ?? "",
    },
  });

  return response.json();
};

// 토큰 인증
export const authenticate = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/authenticate`;

  const response = await fetch(apiURL, {
    headers: {
      Authorization: access_token?.value ?? "",
    },
  });

  const statusCode = response.status;
  const data = response.json();
  return { statusCode, data };
};

// 토큰 재발급
export const getNewAccessToken = async () => {
  const cookieStore = cookies();
  const refresh_token = cookieStore.get("refresh_token");
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`;

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      Authorization: refresh_token?.value ?? "",
    },
  });

  return response.json();
};

// response header access 토큰 설정
export function setResponseHeader(response: NextResponse, token: string) {
  response.cookies.set("access_token", `${token}`, {
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
    maxAge: 10000,
    path: "/",
  });

  return response;
}

// request header 설정
export function setRequestHeader(
  request: NextRequest,
  response: NextResponse,
  newToken?: string,
) {
  const token = newToken || request.cookies.get("access_token")?.value;

  if (token) {
    const newHeaders = new Headers(request.headers);

    newHeaders.set("Authorization", `${token}`);

    const cookieString = response.cookies
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");

    if (cookieString) {
      newHeaders.set("Cookie", cookieString);
    }

    const newRequest = new NextRequest(request, {
      headers: newHeaders,
    });

    const newResponse = NextResponse.next({ request: newRequest });

    // header 복사
    response.headers.forEach((value, key) => {
      newResponse.headers.set(key, value);
    });

    // cookie 복사
    response.cookies.getAll().forEach((cookie) => {
      newResponse.cookies.set(cookie.name, cookie.value, cookie);
    });

    return newResponse;
  }

  return response;
}

export const setToken = (token: string) => {
  const cookieStore = cookies();

  cookieStore.set("access_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
    maxAge: 10000,
    path: "/",
  });
};

// 사용자 정보 불러오기
// export const getUser = async (accessToken: string | undefined) => {
//   try {
//     const response = await api.get("/auth/user");
//     return response;
//   } catch (error) {
//     console.error("Failed to New Access Token:", error);
//     throw error;
//   }
// };

// 사용자 인증
// export async function authenticate(cookie: string) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/authenticate`,
//     {
//       method: "GET",
//       headers: {
//         Cookie: cookie || "",
//       },
//       credentials: "include",
//       cache: "no-store",
//     }
//   );
//   return response.json();
// }

// access 토큰 재발급
// export async function getNewAccessToken(cookie: string) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/refresh`,
//     {
//       method: "POST",
//       headers: {
//         Cookie: cookie || "",
//       },
//       credentials: "include",
//       cache: "no-store",
//     }
//   );
//   return response.json();
// }

// 토큰 인가 및 재발급
// export async function authenticateNewAccessToken({
//   request,
//   response,
// }: {
//   request: NextRequest;
//   response: NextResponse<unknown>;
// }) {
//   const cookies = request.cookies
//     .getAll()
//     .map((cookie) => `${cookie.name}=${cookie.value}`)
//     .join("; ");

//   try {
//     const authResponse = await authenticate(cookies);
//     // 토큰 미보유
//     if (authResponse.message === "Invalid access token") {
//       return NextResponse.redirect("http://localhost:3000/developer/sign");
//     }

//     // 토큰 인가
//     if (authResponse.message === "authenticate") {
//       setRequestHeader(request, response);
//       return NextResponse.next();
//     }

//     // 토큰 만료
//     if (authResponse.message === "Access token expired") {
//       const refreshToken = request.cookies.get("refresh_token");

//       if (!refreshToken) {
//         throw new Error("Refresh token not found");
//       }

//       // access 토큰 재발급
//       const newAccessToken = await getNewAccessToken(cookies);
//       response = setResponseHeader(response, newAccessToken.access_token);
//       return setRequestHeader(request, response, newAccessToken.access_token);
//     }
//   } catch (error) {
//     console.error("Authentication error:", error);
//     return NextResponse.redirect("http://localhost:3000/developer/sign");
//   }
//   return response;
// }
