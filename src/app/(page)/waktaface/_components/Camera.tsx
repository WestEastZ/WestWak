"use client";

import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import ModalWakFaceInfo from "@/app/_components/common/modal/ModalWakFaceInfo";
import ModalWakfaceResult from "@/app/_components/common/modal/ModalWakfaceResult";
import Portal from "@/app/_components/common/modal/Portal";
import useFaceAPI from "@/app/hook/useFaceAPI";
import { useState } from "react";
import Ai from "../../../../../public/icon/ai.svg";
import Album from "../../../../../public/icon/album.svg";
import ArrowBack from "../../../../../public/icon/arrow_back.svg";
import CameraIcon from "../../../../../public/icon/camera.svg";
import Info from "../../../../../public/icon/info.svg";
import UploadIcon from "../../../../../public/icon/upload.svg";
import Capture from "./Capture";
import UploadImg from "./UploadImg";

export default function Camera({ data }: { data: string[] }) {
  const [methodFile, setMethodFile] = useState<boolean | undefined>(true);
  const [choseMethod, setCHoseMethod] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(undefined);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const {
    compare,
    result,
    resultArr,
    setResultArr,
    isResultOpen,
    setIsResultOpen,
  } = useFaceAPI(data);

  const handleCompare = async () => {
    await compare(imgSrc);
  };

  const handleMetodCamera = () => {
    setMethodFile(false);
    setCHoseMethod(true);
  };
  const handleMetodFile = () => {
    setMethodFile(true);
    setCHoseMethod(true);
  };

  const handleRefresh = () => {
    setCHoseMethod(false);
    setImgSrc(undefined);
    setMethodFile(undefined);
    setResultArr(undefined);
  };

  return (
    <div className="flex gap-4">
      {choseMethod ? (
        <section className="container-style m-auto flex w-2/3 flex-col gap-4">
          {methodFile ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <ContentsTitle title="사진 업로드하기" Icon={Album} />
                <button onClick={() => handleRefresh()}>
                  <ArrowBack width={24} height={24} />
                </button>
              </div>
              <UploadImg
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
                handleCompare={handleCompare}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <ContentsTitle title="사진 촬영하기" Icon={Album} />
                <button onClick={() => handleRefresh()}>
                  <ArrowBack width={24} height={24} />
                </button>
              </div>
              <Capture
                imgSrc={imgSrc}
                setImgSrc={setImgSrc}
                handleCompare={handleCompare}
              />
            </div>
          )}
        </section>
      ) : (
        <section className="container-style m-auto flex h-[490px] w-2/3 flex-col items-center justify-center gap-36 text-center">
          <div className="flex w-full items-center justify-evenly">
            <button
              onClick={handleMetodCamera}
              className="box-style rounded-3xl p-20"
            >
              <CameraIcon width={120} height={120} />
            </button>
            <button
              onClick={handleMetodFile}
              className="box-style rounded-3xl p-20"
            >
              <UploadIcon width={120} height={120} />
            </button>
          </div>
        </section>
      )}

      <section className="container-style flex flex-grow flex-col gap-4 text-center">
        <ContentsTitle title="정보" Icon={Info} />
        <div className="flex h-full flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold text-customColor-main">
              나와 닮은 왁타버스 멤버는 누구?
            </span>
            <span>인공지능으로 나와 닮은 왁타버스 멤버를 찾아보세요!</span>
            <span className="text-sm text-customColor-text">
              비교대상은 고정멤버, 고멤 아카데미입니다.
            </span>
          </div>

          <div className="box-style flex flex-grow flex-col justify-evenly gap-4 p-4 text-left">
            <span className="text-lg font-bold text-customColor-main">
              왜 WaktaFace인가요?
            </span>
            <ul className="flex flex-col gap-2">
              <li>1. 정확한 얼굴 인식 기술로 높은 정확도를 제공합니다</li>
              <li>2. 친구들과 결과를 공유하며 즐거운 시간을 보내세요.</li>
              <li>3. 좋아하는 멤버와의 유사성을 발견하는 특별한 경험!</li>
              <li className="text-center text-sm text-customColor-text">
                얼굴 인식이 안될 경우가 생길 수 있습니다!
              </li>
            </ul>
          </div>

          <div className="text-sm text-customColor-text">
            <button onClick={() => setIsInfoOpen(true)}>
              {"사용 방법 | 자주 묻는 질문 >"}
            </button>
          </div>
        </div>
      </section>

      <Portal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        type="bottom"
      >
        <ContentsTitle title="사용 방법 | 자주 묻는 질문" Icon={Info} />
        <ModalWakFaceInfo />
      </Portal>

      <Portal
        isOpen={isResultOpen}
        onClose={() => setIsResultOpen(false)}
        type="middle"
      >
        <ContentsTitle title="결과" Icon={Ai} />
        <ModalWakfaceResult result={result} resultArr={resultArr} />
      </Portal>
    </div>
  );
}

{
  /* <section className="container-style flex flex-col flex-2 gap-4">
          <ContentsTitle title="당신과 닮은 고정멤버" Icon={Ai} />
          <div className="w-full h-[340px] box-style">
            {result ? (
              <img
                src={result?.blob}
                className="w-full h-full object-contain"
              />
            ) : null}
          </div>
        </section> */
}
