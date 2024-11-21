import Title from "@/app/_components/common/header/Title";
import Signin from "./components/Login";
import Signup from "./components/Signup";

export default function Sign() {
  return (
    <div className="mt-[5rem] flex h-full gap-4 px-4 max-md:flex-col max-md:gap-4">
      <Signup />
      <Signin />
    </div>
  );
}
