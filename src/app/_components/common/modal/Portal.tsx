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

  if (!isMounted || !portalElement) return null;

  return createPortal(
    <div
      className={`fixed z-[9998] inset-0 bg-white bg-opacity-10 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* bottom modal */}
      {type === "bottom" && (
        <div
          className={`fixed z-[9999] w-[40rem] h-[40rem] m-auto p-4 flex flex-col justify-between gap-5 bottom-0 left-0 right-0 bg-customColor-container rounded-t-2xl transition-transform duration-300 ease-out ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className="block w-full p-2 rounded-full button-style"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      )}

      {/* middle modal */}
      {type === "middle" && (
        <div
          className={`fixed z-[9999] w-[45rem] h-[45rem] m-auto p-4 flex flex-col justify-between gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customColor-container rounded-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className="block w-full p-2 rounded-full button-style"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      )}
    </div>,
    portalElement
  );
}
