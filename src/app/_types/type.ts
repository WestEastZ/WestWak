import { StaticImageData } from "next/image";

// Member
export interface MemberListType {
  name: string;
  items: string[];
  color: string;
}

// Button
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
  x_small: "w-1/12 h-8 text-base rounded-2xl",
  small: "w-1/3 h-12 text-lg rounded-3xl",
  medium: "w-1/2 h-12 text-lg rounded-3xl",
  large: "w-full h-12 text-lg rounded-3xl",
};

export interface ButtonMoreType {
  board: BoardType;
  isModalOpen: boolean | null;
  onToggle: () => void;
  isUpdate: boolean;
  setIsUpdate: (isUpdate: boolean) => void;
}

// Input
// export interface InputPropsType {
//   type: string;
//   name: string;
//   placeholder: string;
//   value: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
// }

// Board
export interface BoardType {
  id: number;
  username: string;
  userId: number;
  description: string;
  createdAt: null | string;
  status: BoardStatus;
  deletedAt: null | Date;
}

export type BoardStatus = "PUBLIC" | "PRIVATE";

// User
export interface UserType {
  id: number;
  username: string;
}

export interface UserStore {
  user: UserType | null;
  setUser: (userData: UserType) => void;
  clearUser: () => void;
}

// Params
export interface searchParamsType {
  page: number;
}

// Video
export interface VideoData {
  [key: string]: any;
}

export interface ChannelVideos {
  [channelName: string]: VideoInfo[];
}

export interface VideoInfo {
  [key: string]: string;
}

// Iconexport
export type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;
export type IconType = SVGComponent | StaticImageData;

// information
export interface InformationType {
  id: number;
  title: string;
  artist: string;
  album: string;
  date: string;
  length: string;
  Youtube: string;
  Genie: string;
  Melon: string;
  Bugs: string;
  Flo: string;
  Spotify: string;
}

// chart data
export interface ChartData {
  x: string;
  y: number;
}
