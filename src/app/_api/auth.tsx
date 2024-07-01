// 회원가입
export async function handleSignUp({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const userData = {
    username,
    password,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-store",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Server error response:", errorData);
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  const data = await response.json();
  return data;
}

// 로그인
export async function handleSignIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const userData = {
    username,
    password,
  };

  const response = await fetch(`http://localhost:8000/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Server error response:", errorData);
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }
  const data = await response.json();

  return data;
}
