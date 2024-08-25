"use client";

import { useState } from "react";
import MenuContainer from "./menuContainer";
import Link from "next/link";

export default function Navigation() {
  const [ismenuOpen, setIsmenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsmenuOpen(!ismenuOpen);
  };

  return (
    <nav>
      <section
        className={`fixed z-[9999] w-full p-5 bg-bgColor-100 transition duration-500 ease-in-out ${
          ismenuOpen ? "bg-opacity-100" : "bg-opacity-0"
        }`}
      >
        {/* text */}
        <section className="flex justify-between items-center max-w-[80rem] m-auto text-3xl font-bold text-white">
          <Link
            href={"/"}
            className="flex justify-center items-center text-4xl cursor-pointer text-characterColor-woowakgood"
          >
            WAKVIDEO
          </Link>
          <div
            onClick={handleMenuToggle}
            className={`menuTrigger ${
              ismenuOpen ? "active" : ""
            } cursor-pointer`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </section>
      <MenuContainer
        handleMenuToggle={handleMenuToggle}
        ismenuOpen={ismenuOpen}
      />
    </nav>
  );
}
