import Link from "next/link";
import { MemberList } from "../../_constants/MemberList";

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
      className={`fixed z-[9990] left-0 right-0 flex p-5 bg-bgColor-100 uppercase transition duration-500 ease-in-out transform ${
        ismenuOpen
          ? "translate-y-[5rem] opacity-100"
          : "-translate-y-[10rem] opacity-0"
      }`}
    >
      <div className="w-[80rem] m-auto grid grid-cols-7 place-items-center gap-10">
        {MemberList.map((member) => (
          <li key={member.name} className={`nav-center w-full h-full`}>
            <Link href={`/${member.name}`}>
              <div
                className={`text-2xl font-bold transition-all duration-300 hover:scale-125`}
                style={{
                  color:
                    member.name === "Woowakgood" ? "#1CBC74" : member.color,
                }}
              >
                {member.name}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </section>
  );
}
