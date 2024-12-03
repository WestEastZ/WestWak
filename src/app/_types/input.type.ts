import { FieldError, UseFormRegister } from "react-hook-form";
import { BoardStatus } from "./type";

export interface SignFormType {
  username: string;
  password: string;
  passwordConfirm?: string;
}

export interface CommentFormType {
  description: string;
  status: BoardStatus;
}

export interface InputPropsType {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  rules?: Object;
  error?: FieldError;
}

export interface SelectFormType {
  category: string;
  subCategory: string;
}
