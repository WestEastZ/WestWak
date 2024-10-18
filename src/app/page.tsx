import HomeFirst from "./_components/layout/home/homeFirst";
import HomeSecond from "./_components/layout/home/homeSecond";
import HomeScroll from "./_components/layout/home/homeScroll";
import HomeThird from "./_components/layout/home/homeThird";

export default function Main() {
  return (
    <div>
      <HomeFirst />
      <HomeScroll />
      <HomeThird />
    </div>
  );
}
