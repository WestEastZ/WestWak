"use client";

import { InformationType } from "@/app/_types/type";
import React, { useEffect, useMemo, useState } from "react";

import CircleCheck from "../../../../../public/icon/circleCheck.svg";
import Search from "../../../../../public/icon/search.svg";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function MusicChoose() {
  const [musicDatas, setMusicData] = useState<InformationType[]>([]);
  const [pathId, setPathId] = useState<number>();
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const fetchPromise = [...Array(2)].map(async (_, index) => {
          const url = `${
            process.env.NEXT_PUBLIC_LOCAL_URL
          }/information/get?id=${index + 1}`;
          const response = await fetch(url);
          return response.json();
        });

        const result = await Promise.all(fetchPromise);
        setMusicData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMusicData();
  }, []);

  useEffect(() => {
    const path = pathname.split("/").pop();
    console.log(path);

    if (path === "info") {
      setPathId(1);
    } else if (path) {
      setPathId(parseInt(path));
    } else if (!path) {
      setPathId(1);
    }
  }, [pathname]);

  const handleMusic = (id: number) => {
    setPathId(id);
    router.push(`/info/${id}`);
  };

  const filterMusic = useMemo(() => {
    return musicDatas.filter(
      (music) =>
        music.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        music.artist.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [musicDatas, searchKeyword]);

  return (
    <div className="h-full flex flex-col gap-5 text-white">
      <section className="relative">
        <div className="absolute inset-y-1 left-2">
          <Search width={24} height={24} />
        </div>
        <input
          placeholder="곡 검색하기"
          className="w-full bg-customColor-box rounded-full p-1 pl-10 border border-customColor-border focus:outline-none"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </section>

      <section className="m-auto text-customColor-text text-sm font-semibold">
        왁비디오는 음원사이트에 등록된 음원 정보만 제공합니다.
      </section>

      <section className="h-full">
        {filterMusic.length > 0 ? (
          filterMusic.map((music) => (
            <div
              key={music.id}
              onClick={() => handleMusic(music.id)}
              className=" flex justify-between items-center border-b border-customColor-border p-3 cursor-pointer hover:border-b-customColor-main transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={`/image/${music.title}.jpg`}
                  alt="cover"
                  width={50}
                  height={50}
                  className="rounded-full overflow-hidden"
                />
                <div className="flex flex-col">
                  <span className="text-lg">{music.title}</span>
                  <span className="text-sm text-customColor-text">
                    {music.artist}
                  </span>
                </div>
              </div>
              <div>
                <CircleCheck
                  width={28}
                  height={28}
                  fill={pathId == music.id ? "#1CBC74" : "#373737"}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full min-h-full">
            <span>검색 결과가 없습니다.</span>
          </div>
        )}
      </section>
    </div>
  );
}
