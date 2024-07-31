import { MemberList } from "@/app/_constants/MemberList";
import CardCharacter from "@/app/_components/card/CardCharacter";

export default function HomeThird() {
  return (
    <div className="p-10 pb-28">
      <section className="w-[80rem] h-full m-auto flex flex-col gap-5">
        {/* 우왁굳, 아이네, 징버거 */}
        <section className="flex items-center gap-10 m-auto">
          {MemberList.slice(0, 3).map((member) => (
            <CardCharacter key={member.color} member={member} />
          ))}
        </section>

        {/* 릴파, 주르르, 고세구, 비챤 */}
        <section className="relative flex justify-between items-center">
          {MemberList.slice(3, 7).map((member) => (
            <CardCharacter key={member.color} member={member} />
          ))}
        </section>
      </section>
    </div>
  );
}
