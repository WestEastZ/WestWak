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
import { ChannelGroup } from "../_types/channelGrop.type";

export const MemberList: MemberListType[] = [
  {
    name: "woowakgood",
    items: [
      "우왁굳의 게임방송",
      "왁타버스",
      "우왁굳의 풀업로드",
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

export const channelGroup: ChannelGroup = {
  woowakgood: {
    wak: process.env.WOOWAKGOOD_GAME_API_KEY,
    wakta: process.env.WAKTAVERSE_API_KEY,
    full: process.env.WOOWAKGOOD_FULL_API_KEY,
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

export const categories = [
  { value: "woowakgood", label: "우왁굳" },
  { value: "ine", label: "아이네" },
  { value: "jingburger", label: "징버거" },
  { value: "lilpa", label: "릴파" },
  { value: "jururu", label: "주르르" },
  { value: "gosegu", label: "고세구" },
  { value: "viichan", label: "비챤" },
];

export const subCategories = {
  woowakgood: [
    { value: "wak", label: "우왁굳" },
    { value: "side", label: "우왁굳의 반찬가게" },
    { value: "full", label: "우왁굳z" },
    { value: "wakta", label: "왁타버스" },
  ],
  ine: [
    { value: "ine", label: "아이네 INE" },
    { value: "boil", label: "데친 숙주나물" },
    { value: "replay", label: "아이네 다시보기" },
  ],
  jingburger: [
    { value: "jing", label: "징버거 JINGBURGER" },
    { value: "zzang", label: "징버거가 ZZANG센 주제에 너무 신중하다" },
    { value: "infinity", label: "징버거의 무한 츠쿠요미" },
  ],
  lilpa: [
    { value: "lilpa", label: "릴파 lilpa" },
    { value: "koko", label: "릴파의 순간들" },
    { value: "replay", label: "릴파 다시보기" },
  ],
  jururu: [
    { value: "jururu", label: "주르르 JURURU" },
    { value: "seal", label: "봉인 풀린 주르르" },
    { value: "replay", label: "주르르 다시보기" },
  ],
  gosegu: [
    { value: "gosegu", label: "고세구 GOSEGU" },
    { value: "more", label: "고세구의 짧은거" },
    { value: "food", label: "밥친구 고세구" },
  ],
  viichan: [
    { value: "viichan", label: "비챤 VIichan" },
    { value: "with", label: "비챤의 나랑놀아" },
    { value: "dowon", label: "비챤의 무릉도원" },
  ],
};

// export const rewind = [
//   { x: "20211217", y: 80 },
//   { x: "20220313", y: 85 },
//   { x: "20220314", y: 92 },
//   { x: "20230623", y: 95 },
//   { x: "20230624", y: 95 },
//   { x: "20230625", y: 65 },
//   { x: "20230626", y: 60 },
//   { x: "20230627", y: 79 },
//   { x: "20230722", y: 92 },
//   { x: "20230723", y: 100 },
//   { x: "20230818", y: 66 },
//   { x: "20230819", y: 47 },
//   { x: "20230820", y: 43 },
//   { x: "20230821", y: 40 },
//   { x: "20230822", y: 50 },
//   { x: "20230823", y: 69 },
//   { x: "20230824", y: 76 },
//   { x: "20230825", y: 84 },
//   { x: "20230826", y: 97 },
//   { x: "20230827", y: 82 },
//   { x: "20230828", y: 97 },
//   { x: "20230924", y: 94 },
//   { x: "20230925", y: 77 },
// ];
