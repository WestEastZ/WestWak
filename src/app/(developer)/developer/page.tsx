import Title from "@/app/_components/header/title";
import CommentComponent_Developer from "./_clientComponents/CommentComponent_Developer";
import IntroduceComponent_Developer from "./_serverComponents/IntroduceComponent_Developer";
import SignComponent_Developer from "./_clientComponents/SignComponent_Developer";

export default function Developer() {
  return (
    <div className="w-full h-full pt-[8rem] text-white">
      <section className="w-[80rem] p-10 m-auto flex flex-col gap-10">
        <Title title={"Talk To Developer"} />
        <section className="flex justify-center items-center gap-20 px-5">
          <IntroduceComponent_Developer /> {/* server */}
          <SignComponent_Developer /> {/* client */}
        </section>
        <CommentComponent_Developer /> {/* server */}
      </section>
    </div>
  );
}
