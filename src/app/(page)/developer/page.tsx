import Title from "@/app/_components/common/header/Title";

import { searchParamsType } from "@/app/_types/type";
import Introduce from "./_components/Introduce";
import User from "./_components/User";
import CommentContainer from "./_components/comment/CommentContainer";
import Links from "./_components/Links";
import ContentsTitle from "@/app/_components/common/header/ContentsTitle";

import CommentIcon from "../../../../public/icon/comment.svg";

export default function Developer({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  return (
    <div>
      <Title title={"한마디 하는 곳"} />

      <section className="flex gap-4 max-md:flex-col max-md:px-4">
        <section className="flex flex-shrink-0 flex-col gap-5">
          <Introduce />
          <Links />
        </section>

        <section className="container-style flex flex-grow flex-col gap-4">
          <div className="flex items-center justify-between">
            <ContentsTitle title="Comment" Icon={CommentIcon} />
            <User />
          </div>
          <CommentContainer searchParams={searchParams} />
        </section>
      </section>
    </div>
  );
}
