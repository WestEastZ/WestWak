import { StaticImageData } from "next/image";

export interface MemberListType {
  name: string;
  items: string[];
  color: string;
  image: StaticImageData;
  profile_image: StaticImageData;
}

export interface ButtonPropsType {
  text: string;
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export interface InputPropsType {
  type: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
