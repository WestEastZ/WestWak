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
    <nav className="relative">
      <section
        className={`sticky z-[9999] flex w-full items-center justify-start p-4 transition duration-500 ease-in-out`}
      >
        {/* text */}
        <section className="m-auto flex w-full max-w-[80rem] items-center justify-between overflow-hidden text-3xl font-bold text-white">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center justify-center text-3xl text-characterColor-woowakgood"
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
