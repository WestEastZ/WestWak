import Image from "next/image";
import bg from "../../../../public/image/waktaverse.png";

export default function HomeIntro() {
  const charactorName = [
    { char: "이", name: "ine" },
    { char: "세", name: "jingburger" },
    { char: "계", name: "lilpa" },
    { char: "아", name: "jururu" },
    { char: "이", name: "gosegu" },
    { char: "돌", name: "viichan" },
  ];
  return (
    <div className="w-screen h-[100vh] flex justify-center items-center">
      {/* 메인 이미지 */}
      <Image src={bg} alt="" fill className="object-cover" />

      {/* 불투명 배경화면 */}
      <div className="absolute w-full h-full left-0 top-0 bg-black opacity-70"></div>

      {/* 메인 안내 문구 */}
      <section className="z-[9990] flex flex-col items-start gap-3 w-ull text-6xl text-white font-bold">
        <div className="text-characterColor-wak">우왁굳</div>
        <section className="flex">
          {charactorName.map((item) => (
            <div id={item.name} className={`text-characterColor-${item.name}`}>
              {item.char}
            </div>
          ))}
        </section>
        <p>최신 영상을 한눈에</p>
      </section>
    </div>
  );
}
