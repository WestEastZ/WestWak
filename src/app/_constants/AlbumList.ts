import KiddingAlbum from "../../../public/image/cover_1.jpg";
import RewindAlbum from "../../../public/image/cover_2.jpg";
import WinterSpring from "../../../public/image/cover_3.jpg";
import LockDown from "../../../public/image/cover_4.jpg";
import AnotherWorld from "../../../public/image/cover_5.jpg";
import SuperHero from "../../../public/image/cover_6.jpg";
import Over from "../../../public/image/cover_6.jpg";
import CanYouFeelMyLove from "../../../public/image/cover_8.jpg";
import WoowakImage from "../../../public/image/woowak.webp";

export const ALBUM_COVERS = {
  KIDDING: KiddingAlbum,
  "RE:WIND": RewindAlbum,
  겨울봄: WinterSpring,
  LOCKDOWN: LockDown,
  "Another World": AnotherWorld,
  Superhero: SuperHero,
  OVER: Over,
  잠깐나올래: CanYouFeelMyLove,
  DEFAULT: WoowakImage,
} as const;
