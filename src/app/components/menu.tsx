import Link from "next/link";
import { menuItems } from "../../constants/menuItems";

export default function Menu({
  ismenuOpen,
  handleMenuToggle,
}: {
  ismenuOpen: boolean;
  handleMenuToggle: () => void;
}) {
  return (
    <section
      onClick={handleMenuToggle}
      className={`absolute left-0 right-0 flex p-5 bg-bgColor-100 transition-transform duration-300 ease-in-out transform ${
        ismenuOpen ? "translate-y-[0]" : "-translate-y-[5rem]"
      }`}
    >
      <div className="w-[80rem] m-auto grid grid-cols-7 place-items-center gap-10">
        {menuItems.map((menuItem) => (
          <li key={menuItem.name} className={`nav-center w-full h-full`}>
            <Link href={`/${menuItem.name}`}>
              <div
                className={`text-2xl font-bold ${menuItem.color} transition-all duration-300 hover:scale-125`}
              >
                {menuItem.name}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </section>
  );
}
