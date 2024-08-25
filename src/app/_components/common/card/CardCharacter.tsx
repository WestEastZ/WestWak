"use client";

import Image from "next/image";
import { MemberListType } from "@/app/_types/type";
import { useEffect, useState } from "react";
import CharacterModal from "@/app/_components/common/modal/ModalCharacter";
import { createPortal } from "react-dom";

export default function CardCharacter({ member }: { member: MemberListType }) {
  const [openCharacterModal, setOpenCharacterModal] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  const [hidden, setHidden] = useState<boolean>(true);
  const [isClickAble, setClickAble] = useState<boolean>(true);

  // Portal Effect
  useEffect(() => {
    setPortalElement(document.getElementById("modal-portal"));

    if (openCharacterModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [openCharacterModal]);

  // Modal Open
  const handleOpenCharacterModal = () => {
    if (!isClickAble) return;
    setOpenCharacterModal(true);
    setClickAble(false);

    setTimeout(() => {
      setHidden(false);
      setClickAble(true);
    }, 1);
  };

  // Modal Close
  const handleCloseCharacterModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isClickAble) return;
    e.stopPropagation();
    setHidden(true);
    setClickAble(false);
    setOpenCharacterModal(false);
    setClickAble(true);
  };

  return (
    <>
      {/* Character Card */}
      <section
        id={member.name}
        className={`relative w-[18rem] h-[18rem] flex justify-center items-center rounded-full overflow-hidden border-4 transform duration-300 hover:scale-110 cursor-pointer`}
        style={{ backgroundColor: member.color }}
        onClick={handleOpenCharacterModal}
      >
        <div
          className={`absolute w-full h-full flex justify-center items-center text-white text-opacity-0 bg-black bg-opacity-0 hover:bg-opacity-60 hover:text-opacity-100`}
        >
          <p className="text-3xl">{member.name}</p>
        </div>
        {member.name === "Woowakgood" ? (
          <Image
            src={member.image}
            alt={member.name}
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }} // CSS를 통해 종횡비 유지
            priority
          />
        ) : (
          <Image
            src={member.image}
            alt={member.name}
            width={300}
            height={300}
            priority
          />
        )}
        {/* Character Modal */}
        {openCharacterModal && portalElement
          ? createPortal(
              <CharacterModal
                member={member}
                hidden={hidden}
                handleCloseCharacterModal={handleCloseCharacterModal}
              />,
              portalElement
            )
          : null}
      </section>
    </>
  );
}
