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
      className={`fixed z-[9990] left-0 right-0 flex p-5 bg-customColor-background opacity-90 transition duration-500 ease-in-out transform ${
        ismenuOpen
          ? "translate-y-[4.75rem] opacity-100"
          : "-translate-y-[10rem] opacity-0"
      }`}
    >
      <div className="w-[40rem] m-auto flex justify-around text-white text-2xl font-semibold">
        <Link
          href={"/info"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          음원 정보
        </Link>
        <Link
          href={"/recomended"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          추천 & Live
        </Link>
        <Link
          href={"/waktaface"}
          className="hover:scale-105 hover:text-customColor-main transition-all duration-200"
        >
          WAKTAFACE
        </Link>
      </div>
    </section>
  );
}
