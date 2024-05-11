import Link from "next/link";
import { menuItems } from "../../constants/menuItems";

const hoverTextColorMap: { [key: string]: string } = {
  Woowakgood: "hover:text-[#1CBC74]",
  Ine: "hover:text-[#8A2BE2]",
  Jingburger: "hover:text-[#F0A957]",
  Lilpa: "hover:text-[#3330db]",
  Jururu: "hover:text-[#FF008C]",
  Gosegu: "hover:text-[#467EC6]",
  Vlichan: "hover:text-[#95C100]",
};

function getHoverTextColor(menuItemName: string) {
  return hoverTextColorMap[menuItemName] || null;
}

export default function Menu({ ismenuOpen }: { ismenuOpen: boolean }) {
  return (
    <section
      className={`absolute h-[20rem] left-0 right-0 flex p-5 bg-bgColor-100 transition-transform duration-500 ease-in-out transform ${
        ismenuOpen ? "translate-y-[0]" : "-translate-y-[20rem]"
      }`}
    >
      <div className="w-[80rem] h-full m-auto grid grid-cols-7 place-items-center gap-10">
        {menuItems.map((menuItem) => (
          <li key={menuItem.name} className={`nav-center w-full h-full`}>
            <Link href={"#"}>
              <div
                className={`text-2xl font-bold ${menuItem.color} transition-all duration-300 hover:scale-125`}
              >
                {menuItem.name}
              </div>
            </Link>
            <ul className="flex flex-col gap-5 mt-5 nav-text text-white font-medium">
              {menuItem.items.map((item) => (
                <li
                  key={item}
                  className={`
                  transition-all duration-300 hover:scale-125 ${getHoverTextColor(
                    menuItem.name
                  )}`}
                >
                  <Link href={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </section>
  );
}
