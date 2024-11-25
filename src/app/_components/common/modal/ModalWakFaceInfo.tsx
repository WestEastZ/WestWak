import React from "react";

export default function ModalWakFaceInfo() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto text-white">
      <section className="flex flex-1 flex-col gap-2">
        <span className="text-lg font-bold text-customColor-main">
          사용 방법
        </span>
        <ul className="box-style flex h-full flex-col justify-between p-4">
          <li>1. 사진을 찍거나 기존 사진을 업로드하세요.</li>
          <li>2. AI가 당신의 얼굴을 분석합니다.</li>
          <li>3. 가장 닮은 왁타버스 멤버를 확인하세요!</li>
        </ul>
      </section>

      <div className="h-px w-full bg-customColor-border"></div>

      <section className="flex flex-1 flex-col gap-2">
        <span className="text-lg font-bold text-customColor-main">
          자주 묻는 질문
        </span>
        <ul className="box-style flex h-full flex-col justify-between gap-2 p-4">
          <li>
            <span className="font-semibold">
              Q: 내 사진은 어떻게 처리되나요?
            </span>
            <p className="text-customColor-text">
              A: 모든 사진은 안전하게 처리되며, 분석 후 즉시 삭제됩니다.
            </p>
          </li>
          <li>
            <span className="font-semibold">
              Q: 결과의 정확도는 어느 정도인가요?
            </span>
            <p className="text-customColor-text">
              A: 높은 정확도를 자랑하지만 완벽하지 않을 수 있어요.
            </p>
          </li>
          <li>
            <span className="font-semibold">Q: 여러 번 시도해도 되나요?</span>
            <p className="text-customColor-text">
              A: 물론이죠! 다양한 각도와 표정으로 여러 번 시도해보세요.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
