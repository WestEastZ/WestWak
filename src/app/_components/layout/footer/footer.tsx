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
    <Link href={url}>
      <Image
        src={img}
        alt={alt}
        width={36}
        height={36}
        className="transform duration-300 hover:scale-110"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] bottom-0 right-0 w-full mt-10">
      <section className="w-[80rem] m-auto py-8 flex flex-col gap-1 font-bold text-left">
        <div className="text-3xl">WAKVIDEO</div>
        <div className="relative font-medium">
          왁비디오와 함께 최신 영상을 만나보세요
        </div>
        <div className="flex gap-2 justify-start items-center">
          <LinkIcon
            url={"https://cafe.naver.com/steamindiegame"}
            alt={"cafe"}
            img={"/image/cafe.webp"}
          />
          <LinkIcon
            url={"https://www.instagram.com/instawakgood/?hl=ko"}
            alt={"insta"}
            img={"/image/instagram.png"}
          />
          <LinkIcon
            url={"https://bj.afreecatv.com/ecvhao"}
            alt={"afreecatv"}
            img={"/image/tv.png"}
          />
        </div>
        <Link
          href={{ pathname: "/developer", query: { page: 1 } }}
          className="text-base font-medium"
        >
          {"개발자에게 한마디 하러 가기 >"}
        </Link>
      </section>
      <section className="p-3 bg-customColor-background text-white">
        <div className="w-[80rem] m-auto font-medium text-sm">
          COPYRIGHT ⓒ WAKVIDEO. ALL RIGHT RESERVED
        </div>
      </section>
    </footer>
  );
}
