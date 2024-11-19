import Link from "next/link";

export default function MenuContainer({
  ismenuOpen,
  handleMenuToggle,
}: {
  ismenuOpen: boolean;
  handleMenuToggle: () => void;
}) {
  return (
    <section
      onClick={handleMenuToggle}
      className={`absolute left-0 right-0 top-0 z-[9999] flex h-full transform transition duration-500 ease-in-out ${
        ismenuOpen ? "" : "-translate-y-[10rem]"
      } max-md:fixed max-md:bottom-0 max-md:bg-black/80 max-md:backdrop-blur-sm ${ismenuOpen ? "" : "max-md:invisible max-md:hidden max-md:-translate-y-full max-md:opacity-0"}`}
    >
      <div className="m-auto flex w-[40rem] justify-around text-lg font-semibold text-white max-md:w-full max-md:flex-col max-md:items-center max-md:gap-24 max-md:text-3xl">
        <Link
          href={"/info"}
          className="transition-all duration-200 hover:scale-105 hover:text-customColor-main"
        >
          Music Info
        </Link>
        <Link
          href={"/recomended"}
          className="transition-all duration-200 hover:scale-105 hover:text-customColor-main"
        >
          Recent & Live
        </Link>
        <Link
          href={"/waktaface"}
          className="transition-all duration-200 hover:scale-105 hover:text-customColor-main"
        >
          WaktaFace
        </Link>
      </div>
    </section>
  );
}
