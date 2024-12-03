import { RefObject } from "react";

export const adjustHeight = (textareaRef: RefObject<HTMLTextAreaElement>) => {
  const textarea = textareaRef.current;
  const minHeight = 56;

  if (!textarea) return;

  textarea.style.height = `${minHeight}px`;

  const scrollHeight = textarea.scrollHeight;

  if (scrollHeight > minHeight) {
    textarea.style.height = `${scrollHeight + 10}px`;
  }
};
