// 로그인
export const signin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/signin`;

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    cache: "no-store",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Server error response:", errorData);
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  return response.json();
};

// 로그아웃
export const logout = async () => {
  const apiURL = `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/logout`;

  const response = await fetch(apiURL, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Server error response:", errorData);
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }
};
