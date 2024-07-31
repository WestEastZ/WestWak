import { MemberList } from "@/app/_constants/MemberList";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F3F3F3]">
      <section className="w-[80rem] m-auto pt-10 flex justify-between text-base font-bold">
        {MemberList.map((member) => (
          <section key={member.name} className="flex flex-col gap-2">
            <div className="uppercase text-center">{member.name}</div>
            <div className="flex flex-col gap-1">
              {member.items.map((item) => (
                <Link
                  key={item}
                  href={"/"}
                  className="font-medium transform duration-300 hover:scale-110 text-center"
                >
                  {item}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>
      <section className="w-[80rem] m-auto pt-10 pb-10 flex flex-col gap-1 text-3xl font-bold text-right">
        <div>WAKVIDEO</div>
        <div className="relative text-base font-medium">
          왁비디오와 함께 최신 영상을 만나보세요
        </div>
        <div className="flex gap-1 justify-end">
          <Link href={"https://cafe.naver.com/steamindiegame"}>
            <Image
              src={"/image/cafe.webp"}
              alt="cafe"
              width={36}
              height={36}
              className="transform duration-300 hover:scale-110"
            />
          </Link>
          <Link href={"https://www.instagram.com/instawakgood/?hl=ko"}>
            <Image
              src={"/image/instagram.png"}
              alt="cafe"
              width={36}
              height={36}
              className="transform duration-300 hover:scale-110"
            />
          </Link>
          <Link href={"https://bj.afreecatv.com/ecvhao"}>
            <Image
              src={"/image/tv.png"}
              alt="cafe"
              width={36}
              height={36}
              className="transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
        <Link
          href={{ pathname: "/developer", query: { page: 1 } }}
          className="text-base font-medium"
        >
          {"개발자에게 한마디 하러 가기 >"}
        </Link>
      </section>
      <section className="p-3 bg-bgColor-100 text-white">
        <div className="w-[80rem] m-auto font-medium text-sm">
          COPYRIGHT ⓒ WAKVIDEO. ALL RIGHT RESERVED
        </div>
      </section>
    </footer>
  );
}
