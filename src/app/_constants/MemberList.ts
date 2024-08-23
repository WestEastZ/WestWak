import wak from "../../../public/image/wak.webp";
import wak_profile from "../../../public/image/wak_profile.webp";
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

import { MemberListType } from "../_types/type";

export const MemberList: MemberListType[] = [
  {
    name: "woowakgood",
    items: [
      "우왁굳의 게임방송",
      "왁타버스",
      "왁타버스 제로",
      "우왁굳의 반찬가게",
    ],
    color: "#164532",
    image: wak,
    profile_image: wak_profile,
  },
  {
    name: "ine",
    items: ["아이네 INE", "데친 숙주나물", "아이네 다시보기"],
    color: "#8A2BE2",
    image: ine,
    profile_image: ine_profile,
  },
  {
    name: "jingburger",
    items: [
      "징버거 JINGBURGER",
      "징버거가 ZZANG센 주제에 너무 신중하다",
      "징버거의 무한 츠쿠요미",
    ],
    color: "#F0A957",
    image: jingburger,
    profile_image: jingburger_profile,
  },
  {
    name: "lilpa",
    items: ["릴파 LILPA", "릴파의 꼬꼬", "릴파 다시보기"],
    color: "#3330db",
    image: lilpa,
    profile_image: lilpa_profile,
  },
  {
    name: "jururu",
    items: ["주르르 JURURU", "봉인 풀린 주르르", "주르르 다시보기"],
    color: "#FF008C",
    image: jururu,
    profile_image: jururu_profile,
  },
  {
    name: "gosegu",
    items: ["고세구 GOSEGU", "고세구의 좀 더", "밥친구 고세구"],
    color: "#467EC6",
    image: gosegu,
    profile_image: gosegu_profile,
  },

  {
    name: "viichan",
    items: ["비챤 VIICHAN", "비챤의 나랑놀아", "비챤의 무릉도원"],
    color: "#95C100",
    image: viichan,
    profile_image: viichan_profile,
  },
];

export const channelGroup = {
  woowakgood: {
    wak: process.env.WOOWAKGOOD_GAME_API_KEY,
    wakta: process.env.WAKTAVERSE_API_KEY,
    zero: process.env.WAKTAVERSE_ZERO_API_KEY,
    side: process.env.WOOWAKGOOD_SIDE_API_KEY,
  },
  ine: {
    ine: process.env.INE_INE_API_KEY,
    boil: process.env.INE_BOIL_API_KEY,
    replay: process.env.INE_REPLAY_API_KEY,
  },
  jingburger: {
    jing: process.env.JING_JING_API_KEY,
    zzang: process.env.JING_ZZANG_API_KEY,
    infinity: process.env.JING_INFINITY_API_KEY,
  },
  lilpa: {
    lilpa: process.env.LILPA_LILPA_API_KEY,
    koko: process.env.LILPA_KOKO_API_KEY,
    replay: process.env.LILPA_REPLAY_API_KEY,
  },
  jururu: {
    jururu: process.env.JURURU_JURURU_API_KEY,
    seal: process.env.JURURU_SEAL_API_KEY,
    replay: process.env.JURURU_REPLAY_API_KET,
  },
  gosegu: {
    gosegu: process.env.GOSEGU_GOSEGU_API_KEY,
    more: process.env.GOSEGU_MORE_API_KEY,
    food: process.env.GOSEGU_FOOD_API_KEY,
  },
  viichan: {
    viichan: process.env.VIICHAN_VIICHAN_API_KEY,
    with: process.env.VIICHAN_WITH_API_KEY,
    dowon: process.env.VIICHAN_DOWON_API_KEY,
  },
};
