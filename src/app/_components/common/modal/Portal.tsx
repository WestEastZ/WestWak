"use client";

import useModalEvent from "@/app/hook/useModalEvent";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../button/Button";

interface AnimatedPortalPropsType {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  type: string;
}

export default function Portal({
  isOpen,
  onClose,
  children,
  type,
}: AnimatedPortalPropsType) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  // useModalEvent({ modalRef, dragRef, onClose, dragThreshold: 100 });

  useEffect(() => {
    setPortalElement(document.getElementById("modal-portal"));
  }, []);

  // portal
  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true);
    } else if (!isOpen && isMounted) {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMounted]);

  // animation
  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  // scroll
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isOpen]);

  if (!isMounted || !portalElement) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[9998] bg-white bg-opacity-10 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* bottom modal */}
      {type === "bottom" && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[9999] m-auto flex h-max w-1/2 flex-col gap-4 rounded-t-2xl border border-customColor-border bg-customColor-container p-4 transition-transform duration-300 ease-out max-lg:w-4/5 ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "80vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className="button-style block w-full rounded-full p-2"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      )}

      {/* middle modal */}
      {type === "middle" && (
        <div
          className={`fixed left-1/2 top-1/2 z-[9999] m-auto flex h-2/3 w-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between gap-5 rounded-2xl border border-customColor-border bg-customColor-container p-4 max-md:w-4/5`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className="button-style block w-full rounded-full p-2"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      )}
    </div>,
    portalElement,
  );
}
