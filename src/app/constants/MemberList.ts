import wak from "../../../public/image/wak.webp";
import ine from "../../../public/image/ine.webp";
import jingburger from "../../../public/image/jingburger.webp";
import lilpa from "../../../public/image/lilpa.webp";
import jururu from "../../../public/image/jururu.webp";
import gosegu from "../../../public/image/gosegu.webp";
import viichan from "../../../public/image/viichan.webp";

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
  },
  {
    name: "Ine",
    items: ["아이네 INE", "데친 숙주나물", "아이네 다시보기"],
    color: "#8A2BE2",
    image: ine,
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
  },
  {
    name: "Lilpa",
    items: ["릴파 LILPA", "릴파의 꼬꼬", "릴파 다시보기"],
    color: "#3330db",
    image: lilpa,
  },
  {
    name: "Jururu",
    items: ["주르르 JURURU", "봉인 풀린 주르르", "주르르 다시보기"],
    color: "#FF008C",
    image: jururu,
  },
  {
    name: "Gosegu",
    items: ["고세구 GOSEGU", "고세구의 좀 더", "밥친구 고세구"],
    color: "#467EC6",
    image: gosegu,
  },

  {
    name: "VIichan",
    items: ["비챤 VIICHAN", "비챤의 나랑놀아", "비챤의 다시보기"],
    color: "#95C100",
    image: viichan,
  },
];
