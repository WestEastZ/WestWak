import Image from "next/image";
import bg from "../../../../public/image/waktaverse.png";

export default function HomeFirst() {
  const charactorName = [
    { char: "이", name: "#8A2BE2" },
    { char: "세", name: "#F0A957" },
    { char: "계", name: "#3330db" },
    { char: "아", name: "#FF008C" },
    { char: "이", name: "#467EC6" },
    { char: "돌", name: "#95C100" },
  ];
  return (
    <div className="w-screen h-[100vh] flex justify-center items-center">
      {/* 메인 이미지 */}
      <Image src={bg} alt="" fill className="object-cover" />

      {/* 불투명 배경화면 */}
      <div className="absolute w-full h-full left-0 top-0 bg-black opacity-70"></div>

      {/* 메인 안내 문구 */}
      <section className="z-[9980] flex flex-col items-start gap-3 w-ull text-6xl text-white font-bold">
        <div className="text-[#1CBC74]">우왁굳</div>
        <section className="flex">
          {charactorName.map((item) => (
            <div id={item.name} style={{ color: item.name }}>
              {item.char}
            </div>
          ))}
        </section>
        <p>최신 영상을 한눈에</p>
      </section>
    </div>
  );
}
