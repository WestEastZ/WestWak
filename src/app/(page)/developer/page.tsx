import Title from "@/app/_components/common/header/Title";

import { searchParamsType } from "@/app/_types/type";
import Introduce from "./_components/Introduce";
import User from "./_components/User";
import CommentContainer from "./_components/comment/CommentContainer";

export default function Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <div>
      <Title title={"Talk To Developer"} />

      <section className="flex p-10">
        <Introduce />
        <section className="flex-grow">
          <User />
          <CommentContainer searchParams={searchParams} />
        </section>
      </section>
    </div>
  );
}
