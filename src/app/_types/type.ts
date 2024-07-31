import { createBoard } from "@/app/lip/board";
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
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export type ButtonStyleType = {
  [key: string]: string;
};

export const ButtonStyle: ButtonStyleType = {
  small: "w-1/5 h-10",
  medium: "w-1/2 h-12",
  large: "w-full h-12",
};

export interface InputPropsType {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface BoardType {
  id: number;
  username: string;
  description: string;
  createdAt: null | string;
  status: BoardStatus;
  deletedAt: null | Date;
}

export type BoardStatus = "PUBLIC" | "PRIVATE";

export interface searchParamsType {
  page: number;
}
