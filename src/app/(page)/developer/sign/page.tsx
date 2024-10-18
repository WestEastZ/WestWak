import Title from "@/app/_components/common/header/Title";
import Signin from "./components/Login";
import Signup from "./components/Signup";

export default function Sign() {
  return (
    <div className="h-full flex mt-[5rem]">
      <Signup />
      <Signin />
    </div>
  );
}
