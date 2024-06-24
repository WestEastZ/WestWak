"use client";

import Button from "@/app/_components/button/Button";
import { ModalSign, ModalSignContent } from "@/app/_components/modal/ModalSign";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SignComponent_Developer() {
  const [openSignModal, setOpenSignModal] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  const [modalText, setModalText] = useState<string | null>("");

  // Modal Open
  const handleOpenSignModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget as HTMLButtonElement;
    setModalText(button.textContent || "");
    setOpenSignModal(true);
  };

  // Modal Close
  const handleCloseSignModal = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setOpenSignModal(false);
  };

  // Portal Effect
  useEffect(() => {
    setPortalElement(document.getElementById("modal-portal"));

    if (openSignModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [openSignModal]);

  return (
    <div className="basis-1/3">
      {/* 회원가입, 로그인 */}
      <section className="flex flex-col justify-center items-center gap-10">
        <Button text="Sign Up" type="button" onClick={handleOpenSignModal} />
        <Button text="Sign In" type="button" onClick={handleOpenSignModal} />
      </section>

      {/* Sign Modal */}
      {openSignModal && portalElement
        ? createPortal(
            <ModalSign
              modalText={modalText}
              handleCloseSignModal={handleCloseSignModal}
            >
              <ModalSignContent modalText={modalText} />
            </ModalSign>,
            portalElement
          )
        : null}
    </div>
  );
}
