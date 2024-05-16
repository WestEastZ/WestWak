import wak from "../../../public/image/wak.webp";
import ine from "../../../public/image/ine.webp";
import ine_profile from "../../../public/image/ine_profile.webp";
import jingburger from "../../../public/image/jingburger.webp";
import jingburger_profile from "../../../public/image/jing_profile.webp";
import lilpa from "../../../public/image/lilpa.webp";
import lilpa_profile from "../../../public/image/lilpa_profile.webp";
import jururu from "../../../public/image/jururu.webp";
import jururu_profile from "../../../public/image/jururu_profile.webp";
import gosegu from "../../../public/image/gosegu.webp";
import gosegu_profile from "../../../public/image/gosegu_profile.webp";
import viichan from "../../../public/image/viichan.webp";
import viichan_profile from "../../../public/image/viichan_profile.webp";

import { MemberListType } from "../types/type";

export const MemberList: MemberListType[] = [
  {
    name: "Woowakgood",
    items: [
      "우왁굳의 게임방송",
      "왁타버스",
      "왁타버스 제로",
      "우왁굳의 반찬가게",
    ],
    color: "#164532",
    image: wak,
    profile_image: wak,
  },
  {
    name: "Ine",
    items: ["아이네 INE", "데친 숙주나물", "아이네 다시보기"],
    color: "#8A2BE2",
    image: ine,
    profile_image: ine_profile,
  },
  {
    name: "Jingburger",
    items: [
      "징버거 JINGBURGER",
      "징버거가 ZZANG센 주제에 너무 신중하다",
      "징버거 다시보기",
    ],
    color: "#F0A957",
    image: jingburger,
    profile_image: jingburger_profile,
  },
  {
    name: "Lilpa",
    items: ["릴파 LILPA", "릴파의 꼬꼬", "릴파 다시보기"],
    color: "#3330db",
    image: lilpa,
    profile_image: lilpa_profile,
  },
  {
    name: "Jururu",
    items: ["주르르 JURURU", "봉인 풀린 주르르", "주르르 다시보기"],
    color: "#FF008C",
    image: jururu,
    profile_image: jururu_profile,
  },
  {
    name: "Gosegu",
    items: ["고세구 GOSEGU", "고세구의 좀 더", "밥친구 고세구"],
    color: "#467EC6",
    image: gosegu,
    profile_image: gosegu_profile,
  },

  {
    name: "VIichan",
    items: ["비챤 VIICHAN", "비챤의 나랑놀아", "비챤의 다시보기"],
    color: "#95C100",
    image: viichan,
    profile_image: viichan_profile,
  },
];
