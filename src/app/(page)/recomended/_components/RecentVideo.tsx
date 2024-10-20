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
    <div className="container-style flex w-full flex-col gap-4">
      <ContentsTitle title="최근 영상 보기" Icon={Youtube} />
      <RecentVideoForm handleCategies={handleCategies} />
      <div className="h-px w-full bg-customColor-border"></div>
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
      <div className="flex items-center justify-center p-10">
        채널을 선택해주세요.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`https://www.youtube.com/${channelUrl}`}
        className="ml-14 flex w-max items-center gap-4"
      >
        <ProfileImage thumbnail={thumbnail} />
        <span className="text-2xl">{`${channelTitle} > `}</span>
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
    <div key={video.id} className="item-center flex max-w-sm flex-col gap-2">
      <section className="aspect-h-9 aspect-w-16 overflow-hidden rounded-xl">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          className="h-full w-full"
        />
      </section>

      <div className="px-4">
        <section className="flex items-center justify-between">
          <span className="block max-w-full truncate">{video.title}</span>
        </section>

        <section className="flex items-center justify-between gap-2">
          <span className="text-customColor-text">{video.publishedAt}</span>
          <div className="flex gap-2 text-sm text-customColor-text">
            <span>조회수 {video.viewCount}</span>

            <span>좋아요 {video.likeCount}</span>

            <span>댓글 {video.commentCount}</span>
          </div>
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
        className="flex items-center gap-5"
      >
        <Controller
          name="category"
          control={control}
          defaultValue=""
          rules={{ required: "Please select a category" }}
          render={({ field, fieldState: { error } }) => (
            <div className="relative text-white">
              <select
                {...field}
                className="w-48 cursor-pointer appearance-none rounded-xl bg-customColor-box p-2 px-4"
              >
                <option value="">채널 보기</option>
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-2 right-2">
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
            <div className="relative text-white">
              <select
                {...field}
                disabled={!seletedCategory}
                className="w-48 cursor-pointer appearance-none rounded-xl bg-customColor-box p-2 px-4"
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
              <div className="pointer-events-none absolute inset-y-2 right-2">
                <Arrow width={24} height={24} />
              </div>
            </div>
          )}
        />
        <button
          type="submit"
          className="button-style h-max rounded-2xl px-5 py-1 text-base"
        >
          검색
        </button>
      </form>
    </div>
  );
}
