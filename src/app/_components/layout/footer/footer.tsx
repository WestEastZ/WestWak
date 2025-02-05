import Image from "next/image";
import Link from "next/link";

function LinkIcon({
  url,
  alt,
  img,
}: {
  url: string;
  alt: string;
  img: string;
}) {
  return (
    <Link href={url} className="h-[28px] w-[28px]">
      <Image
        src={img}
        alt={alt}
        width={28}
        height={28}
        className="h-full transform duration-300 hover:scale-110"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-customColor-background_black p-4 text-customColor-text">
      <section className="m-auto flex w-full max-w-[80rem] flex-col gap-4 overflow-hidden py-4 text-left font-bold">
        <div className="flex flex-col">
          <span className="text-3xl text-customColor-main">WAKVIDEO</span>
          <span className="relative font-medium">
            왁비디오와 함께 최신 영상을 만나보세요
          </span>
        </div>
        <div className="flex items-center justify-start gap-4">
          <LinkIcon
            url={"https://cafe.naver.com/steamindiegame"}
            alt={"cafe"}
            img={"/icon/naver.png"}
          />
          <LinkIcon
            url={"https://www.instagram.com/instawakgood/?hl=ko"}
            alt={"insta"}
            img={"/icon/insta.svg"}
          />
          <LinkIcon
            url={"https://bj.afreecatv.com/ecvhao"}
            alt={"soop"}
            img={"/icon/soop.svg"}
          />
        </div>
        <Link
          href={{ pathname: "/developer", query: { page: 1 } }}
          className="w-fit transform text-base font-medium duration-300 hover:scale-105"
        >
          {"개발자에게 한마디 하러 가기 >"}
        </Link>
      </section>
      <section className="bg-customColor-background_black p-1 text-customColor-text">
        <div className="m-auto w-full max-w-[80rem] overflow-hidden text-sm font-medium">
          COPYRIGHT ⓒ WAKVIDEO. ALL RIGHT RESERVED
        </div>
      </section>
    </footer>
  );
}
