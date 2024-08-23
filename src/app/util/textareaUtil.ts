import { RefObject } from "react";

export const adjustHeight = (textareaRef: RefObject<HTMLTextAreaElement>) => {
  const textarea = textareaRef.current;
  const minHeight = 48;

  if (!textarea) return;

  if (textarea.value !== "") {
    textarea.style.height = `${minHeight}px`;
    textarea.style.height = `${textarea.scrollHeight}px`;
  } else {
    textarea.style.height = `${minHeight}px`;
  }
};
