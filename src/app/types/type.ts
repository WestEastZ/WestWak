import { StaticImageData } from "next/image";

export interface MemberListType {
  name: string;
  items: string[];
  color: string;
  image: StaticImageData;
  profile_image: StaticImageData;
}
