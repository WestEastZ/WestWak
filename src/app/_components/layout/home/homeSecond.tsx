import React from "react";

export default function HomeSecond() {
  const charactorName = [
    { char: "이", name: "#8A2BE2" },
    { char: "세", name: "#F0A957" },
    { char: "계", name: "#3330db" },
    { char: "아", name: "#FF008C" },
    { char: "이", name: "#467EC6" },
    { char: "돌", name: "#95C100" },
  ];

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-10 border">
      <section className="w-ull z-[9980] flex flex-col items-start gap-3 text-6xl font-bold text-white">
        <div className="text-[#1CBC74]">우왁굳</div>
        <section className="flex">
          {charactorName.map((item) => (
            <div key={item.name} id={item.name} style={{ color: item.name }}>
              {item.char}
            </div>
          ))}
        </section>
        <p>최신 영상을 한눈에</p>
      </section>
    </div>
  );
}
