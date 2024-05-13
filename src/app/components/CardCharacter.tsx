import Image from "next/image";
import { MemberListType } from "../types/type";
import Link from "next/link";

export default function CardCharacter({ member }: { member: MemberListType }) {
  return (
    <section
      id={member.name}
      className={`relative w-[18rem] h-[18rem] flex justify-center items-center rounded-full overflow-hidden border-4 transform duration-300 hover:scale-110 cursor-pointer`}
      style={{ backgroundColor: member.color }}
    >
      <div className="absolute w-full h-full flex justify-center items-center text-white text-opacity-0 bg-black bg-opacity-0 transform duration-300 hover:bg-opacity-60 hover:text-opacity-100 ">
        <p>test</p>
      </div>
      {member.name === "Woowakgood" ? (
        <Image src={member.image} alt={member.name} width={180} height={180} />
      ) : (
        <Image src={member.image} alt={member.name} width={300} height={300} />
      )}
    </section>
  );
}
