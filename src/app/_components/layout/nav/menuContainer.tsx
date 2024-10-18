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
      className={`absolute z-[9999] h-full top-0 left-0 right-0 flex transition duration-500 ease-in-out transform ${
        ismenuOpen ? "" : "-translate-y-[10rem]"
      }`}
    >
      <div className="w-[40rem] m-auto flex justify-around text-white text-lg font-semibold">
        <Link
          href={"/info"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          Music Info
        </Link>
        <Link
          href={"/recomended"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          Recent & Live
        </Link>
        <Link
          href={"/waktaface"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          WaktaFace
        </Link>
      </div>
    </section>
  );
}
