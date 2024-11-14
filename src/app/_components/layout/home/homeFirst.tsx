export default function HomeFirst() {
  return (
    <div className="vh-minus-2rem flex flex-col items-center">
      {/* <Image src={bg} alt="bg" fill className="object-cover" /> */}

      {/* <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div> */}

      <div className="flex h-full w-full flex-col items-center justify-center">
        <span className="typingEffect" data-text="WAKVIDEO">
          {"WAKVIDEO"}
        </span>
        <span className="text-customColor-main">메인 이미지 구합니다.</span>
      </div>
    </div>
  );
}
