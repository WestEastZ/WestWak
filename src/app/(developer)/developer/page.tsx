import Title from "@/app/_components/header/Title";
import CommentComponent_Developer from "./_clientComponents/CommentComponent_Developer";
import IntroduceComponent_Developer from "./_serverComponents/IntroduceComponent_Developer";
import UserComponent_Developer from "./_serverComponents/UserComponent_Developer";

export default function Developer() {
  return (
    <>
      <Title title={"Talk To Developer"} />
      <section className="flex justify-center items-center gap-20 px-5">
        <IntroduceComponent_Developer />
        <UserComponent_Developer />
      </section>
      <CommentComponent_Developer />
    </>
  );
}
