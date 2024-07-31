import Title from "@/app/_components/header/Title";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default function Sign() {
  return (
    <div className="h-full flex flex-col">
      <Title title="Sign" />
      <section className="p-10 flex grow justify-center items-center gap-20">
        <Signup />
        <Signin />
      </section>
    </div>
  );
}
