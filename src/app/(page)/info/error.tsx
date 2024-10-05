"use client"; // Error boundaries must be Client Components

import { useRouter } from "next/navigation";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  function handleReturn() {
    router.push("/");
  }

  console.log();

  return (
    <div className="flex flex-col h-screen justify-center items-center border">
      <h2 className="text-white">페이지가 작동하지 않습니다.</h2>
      <button onClick={handleReturn}>돌아가기</button>
    </div>
  );
}
