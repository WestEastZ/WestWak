"use client";

import { InformationSelectType } from "@/app/_types/type";
import React, { useEffect, useMemo, useState } from "react";

import CircleCheck from "../../../../../public/icon/circleCheck.svg";
import Search from "../../../../../public/icon/search.svg";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { ALBUM_COVERS } from "@/app/_constants/AlbumList";

export default function MusicChoose() {
  const [musicDatas, setMusicData] = useState<InformationSelectType[]>([]);
  const [pathId, setPathId] = useState<number>();
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchMusicData = async () => {
      const response = await fetch("/api/information");
      const data = await response.json();
      setMusicData(data);
    };

    fetchMusicData();
  }, []);

  useEffect(() => {
    const path = pathname.split("/").pop();

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
        music.artist.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [musicDatas, searchKeyword]);

  return (
    <div className="flex h-full flex-col gap-5 text-white">
      <section className="relative">
        <div className="absolute inset-y-1 left-2">
          <Search width={24} height={24} />
        </div>
        <input
          placeholder="곡 검색하기"
          className="w-full rounded-full border border-customColor-border bg-customColor-box p-1 pl-10 focus:outline-none"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </section>

      <section className="m-auto text-sm font-semibold text-customColor-text">
        왁비디오는 음원사이트에 등록된 음원 정보만 제공합니다.
      </section>

      <section className="mb-14 h-full overflow-y-auto">
        {filterMusic.length > 0 ? (
          filterMusic.map((music) => {
            const key = music.title as keyof typeof ALBUM_COVERS;
            const albumCover = ALBUM_COVERS[key] || ALBUM_COVERS.DEFAULT;

            return (
              <div
                key={music.id}
                onClick={() => handleMusic(music.id)}
                className="flex cursor-pointer items-center justify-between border-b border-customColor-border p-3 transition-all duration-200 hover:border-b-customColor-main"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={albumCover}
                    alt="cover"
                    width={50}
                    height={50}
                    className="overflow-hidden rounded-full"
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
            );
          })
        ) : (
          <div className="flex min-h-full w-full items-center justify-center">
            <span>검색 결과가 없습니다.</span>
          </div>
        )}
      </section>
    </div>
  );
}
