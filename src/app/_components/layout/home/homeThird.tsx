import SwiperComponent from "../../common/Swiper/SwiperCompoenent";

export default function HomeThird() {
  const swiperImage = [
    {
      imageUrl: "/image/chart.webp",
      title: "Music Info",
      description: "왁타버스 공식 음원의 정보를 확인해보세요!",
    },
    {
      imageUrl: "/image/recomended.webp",
      title: "Recent & Live",
      description: "최신 유튜브 영상과 실시간 라이브를 확인해보세요!",
    },
    {
      imageUrl: "/image/wakface.webp",
      title: "WaktaFace",
      description: "나와 닮은 고정멤버를 찾아보세요!",
    },
  ];

  const woowakgood = "/image/woowakgood_tong.webp";
  return (
    <div className="relative m-auto flex h-screen items-center justify-center">
      <div className="gradient-overlay"></div>
      <section className="absolute -left-24 w-fit">
        <SwiperComponent
          slides={swiperImage}
          swiperOptions={{
            spaceBetween: 10,
            slidesPerView: 2,
            centeredSlides: false,
          }}
          loop={true}
          speed={10000}
          direction={"vertical"}
          imageSize={{ width: 576, height: 320, objectFit: "contain" }}
          containerStyle={{ maxHeight: "100vh" }}
          swiperType="home"
        />
      </section>

      <section className="relative flex h-2/3 w-1/3 flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl text-3xl font-bold text-customColor-main">
        <span>짭치 탈출은</span>

        <span>왁비디오와 함께</span>
      </section>

      <section className="absolute -right-24 w-fit">
        <SwiperComponent
          slides={swiperImage}
          swiperOptions={{
            spaceBetween: 5,
            slidesPerView: 2,
            centeredSlides: false,
          }}
          loop={true}
          speed={10000}
          direction={"vertical"}
          autoplayDirection={true}
          imageSize={{ width: 576, height: 320, objectFit: "contain" }}
          containerStyle={{ maxHeight: "100vh" }}
          swiperType="home"
        />
      </section>
    </div>
  );
}
