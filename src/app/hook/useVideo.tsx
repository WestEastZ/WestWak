"use client";

import React, { useEffect, useState } from "react";
import { VideoInfo } from "../_types/type";
import { getVideos } from "../lip/videos";

export default function useVideo({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) {
  const [videos, setVideos] = useState<VideoInfo[] | undefined>([]);
  const [thumbnail, setThumbnail] = useState<string | undefined>("");
  const [channelUrl, setChannelUrl] = useState<string | undefined>("");
  const [channelTitle, setChannelTitle] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await getVideos({ category, subCategory });
        if (response) {
          setThumbnail(response?.thumbUrl?.channelThumbnail);
          setChannelUrl(response?.thumbUrl?.channelUrl);
          setChannelTitle(response?.channelTitle);
          setVideos(response?.videos);
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, [category, subCategory]);

  return { videos, thumbnail, channelTitle, channelUrl, isLoading };
}
