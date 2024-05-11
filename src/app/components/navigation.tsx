"use client";

import { useState } from "react";
import Menu from "./menu";

export default function Navigation() {
  const [ismenuOpen, setIsmenuOpen] = useState<boolean>(false);

  function handleMenuToggle() {
    setIsmenuOpen(!ismenuOpen);
  }
  return (
    <>
      <nav className="sticky z-[9990] w-full p-5 text-3xl  font-bold text-white bg-bgColor-100">
        <section className="flex justify-between items-center max-w-[80rem] m-auto">
          <div className="flex justify-center items-center text-4xl">
            WESTWAK
          </div>
          <div
            onClick={handleMenuToggle}
            className={`menuTrigger ${ismenuOpen ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </nav>
      <Menu handleMenuToggle={handleMenuToggle} ismenuOpen={ismenuOpen} />
    </>
  );
}
