import Image from "next/image";
import bg from "../../../../../public/image/waktaverse.webp";
import SwiperComponent from "../../common/Swiper/SwiperCompoenent";

export default function HomeFirst() {
  return (
    <div className="vh-minus-2rem flex flex-col items-center">
      <Image src={bg} alt="bg" fill className="object-cover" />

      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-80"></div>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <span className="typingEffect" data-text="WAKVIDEO">
          {"WAKVIDEO"}
        </span>
      </div>
    </div>
  );
}
