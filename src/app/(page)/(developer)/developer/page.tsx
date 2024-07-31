import Title from "@/app/_components/header/Title";

import IntroduceComponent_Developer from "./_serverComponents/IntroduceComponent_Developer";
import UserComponent_Developer from "./_serverComponents/UserComponent_Developer";
import CommentComponent_Developer from "./_serverComponents/CommentComponent_Developer";
import { searchParamsType } from "@/app/_types/type";

export default function Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <div>
      <Title title={"Talk To Developer"} />
      <section className="flex justify-center items-center gap-20 p-10">
        <IntroduceComponent_Developer />
        <UserComponent_Developer />
      </section>
      <CommentComponent_Developer searchParams={searchParams} />
    </div>
  );
}
