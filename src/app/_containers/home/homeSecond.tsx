export default function HomeSecond() {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center gap-10">
      {/* 메인 안내 문구 */}
      <section className="flex flex-col justify-center items-center gap-5 text-4xl text-white font-bold">
        <div>왁타버스를</div>
        <div>쉽고 빠르게 볼 수 있는</div>
        <div>
          <span className="text-[#1CBC74]">왁비디오</span>입니다
        </div>
      </section>
      {/* 서브 안내 문구 */}
      <section className="flex flex-col justify-center items-center gap-2 text-xl text-white font-normal">
        <p>왁비디오는 수많은 왁타버스 채널을 돌아다니는게</p>
        <p>귀찮아서 만든 유용한 웹사이트입니다</p>
      </section>
    </div>
  );
}
