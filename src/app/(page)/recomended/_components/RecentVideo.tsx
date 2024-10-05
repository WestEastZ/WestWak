"use client";

import ContentsTitle from "@/app/_components/common/header/ContentsTitle";
import React, { useRef, useState } from "react";

import Youtube from "../../../../../public/icon/youtube.svg";
import Arrow from "../../../../../public/icon/arrow_down.svg";
import { Controller, useForm } from "react-hook-form";
import { SelectFormType } from "@/app/_types/input.type";
import { categories, subCategories } from "@/app/_constants/MemberList";
import { VideoInfo } from "@/app/_types/type";
import ProfileImage from "@/app/_components/common/profile/ProfileImage";
import Link from "next/link";
import useVideo from "@/app/hook/useVideo";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ButtonSlide from "@/app/_components/common/button/ButtonSlide";

export default function RecentVideo() {
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const handleCategies = (data: SelectFormType) => {
    setCategory(data.category);
    setSubCategory(data.subCategory);
  };

  return (
    <div className="container-style flex flex-col gap-4 w-full">
      <ContentsTitle title="최근 영상 보기" Icon={Youtube} />
      <RecentVideoForm handleCategies={handleCategies} />
      <div className="w-full h-px bg-customColor-border"></div>
      <VideoList category={category} subCategory={subCategory} />
    </div>
  );
}

// List
function VideoList({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) {
  const { videos, thumbnail, channelTitle, channelUrl, isLoading } = useVideo({
    category,
    subCategory,
  });
  const swiperRef = useRef<SwiperType>();
  const swiperOption = {
    module: [Navigation, Scrollbar],
    spaceBetween: 20,
    slidesPerView: 3,
    loop: false,
    touchRatio: 0,
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  if (!isLoading) {
    return (
      <div className="p-10 flex items-center justify-center">
        채널을 선택해주세요.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`https://www.youtube.com/${channelUrl}`}
        className="flex items-center gap-4 w-max"
      >
        <ProfileImage thumbnail={thumbnail} />
        <span className="text-2xl">{channelTitle}</span>
      </Link>

      <section className="flex items-center gap-4">
        <ButtonSlide swiperRef={swiperRef} direction="prev" />
        <Swiper {...swiperOption} className="w-full">
          {videos?.map((video) => (
            <SwiperSlide key={video.id}>
              <Video video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonSlide swiperRef={swiperRef} direction="next" />
      </section>
    </div>
  );
}

// Video
function Video({ video }: { video: VideoInfo }) {
  return (
    <div key={video.id} className="flex flex-col item-center gap-2 max-w-sm">
      <section className="rounded-xl overflow-hidden aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          className="w-full h-full"
        />
      </section>

      <div className="px-4">
        <section className="flex items-center justify-between">
          <span className="truncate block max-w-64">{video.title}</span>
          <span className="text-customColor-text">{video.publishedAt}</span>
        </section>

        <section className="flex items-center gap-2">
          <span>{video.viewCount}</span>
          <span>{video.likeCount}</span>
          <span>{video.commentCount}</span>
        </section>
      </div>
    </div>
  );
}

// Form
function RecentVideoForm({
  handleCategies,
}: {
  handleCategies: (data: SelectFormType) => void;
}) {
  const { control, handleSubmit, watch } = useForm<SelectFormType>();

  const seletedCategory = watch("category");
  const seletedSubCategory = watch("subCategory");

  const onSubmit = (data: SelectFormType) => {
    handleCategies(data);
  };

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-5 items-center"
      >
        <Controller
          name="category"
          control={control}
          defaultValue=""
          rules={{ required: "Please select a category" }}
          render={({ field, fieldState: { error } }) => (
            <div className="text-white relative">
              <select
                {...field}
                className="w-48 bg-customColor-box rounded-xl p-2 px-4 cursor-pointer appearance-none"
              >
                <option value="">채널 보기</option>
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-2 right-2 pointer-events-none">
                <Arrow width={24} height={24} />
              </div>
            </div>
          )}
        />

        <Controller
          name="subCategory"
          control={control}
          defaultValue=""
          rules={{ required: "Please select a category" }}
          render={({ field, fieldState: { error } }) => (
            <div className="text-white relative">
              <select
                {...field}
                disabled={!seletedCategory}
                className="w-48 bg-customColor-box rounded-xl p-2 px-4 cursor-pointer appearance-none"
              >
                <option>세부 채널 보기</option>
                {seletedCategory &&
                  subCategories[
                    seletedCategory as keyof typeof subCategories
                  ].map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <div className="absolute inset-y-2 right-2 pointer-events-none">
                <Arrow width={24} height={24} />
              </div>
            </div>
          )}
        />
        <button
          type="submit"
          className="button-style h-max text-base rounded-2xl px-5 py-1"
        >
          검색
        </button>
      </form>
    </div>
  );
}
