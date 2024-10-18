"use client";

import Image from "next/image";
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

  const errorWak = "/image/errorWak.webp";

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 text-white">
      <Image src={errorWak} alt="questionWak" width={250} height={250} />
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-bold">페이지가 작동하지 않습니다.</h2>
        <button
          className="font-bold text-customColor-main"
          onClick={handleReturn}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
