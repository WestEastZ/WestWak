import { VideoInfo } from "./../_types/type";
import { channelGroup } from "../_constants/MemberList";
import { VideoData } from "../_types/type";

async function getThumbnail({ channelId }: { channelId: string }) {
  const url = `${process.env.YOUTUBE_CHANNEL_URL}&id=${channelId}&key=${process.env.YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();

    return data.items[0]?.snippet.thumbnails.default.url;
  } catch (error) {
    console.error(`Failed to fetch channel thumbnail: ${error}`);
  }
}

export async function getVideos(groupName: string) {
  const group = channelGroup[groupName as keyof typeof channelGroup];

  if (!group) {
    throw new Error(`Invalid group name: ${groupName}`);
  }

  const result: { [key: string]: VideoData } = {};

  for (const [channelName, playlistId] of Object.entries(group)) {
    const playlistUrl = `${process.env.YOUTUBE_PLATLIST_URL}&playlistId=${playlistId}&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`;

    try {
      const response = await fetch(playlistUrl);

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      // 채널 별 playlist
      const playListData: VideoData = await response.json();
      const channelTitle = playListData.items[0]?.snippet.channelTitle;
      const channelId = playListData.items[0]?.snippet.channelId;

      const channelThumbnail = await getThumbnail({ channelId });

      const videoPromises = playListData.items.map(async (item: any) => {
        const videoId = item.snippet.resourceId.videoId;
        const publishedAt = new Date(
          item.snippet.publishedAt
        ).toLocaleDateString();

        const videoUrl = `${process.env.YOUTUBE_VIDEO_URL}&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;

        const videoResponse = await fetch(videoUrl);

        if (!videoResponse.ok) {
          throw new Error(`Error ${videoResponse.status}`);
        }

        const videoData = await videoResponse.json();

        const statistics = videoData.items[0]?.statistics || {};

        return {
          id: videoId,
          title: item.snippet.title,
          publishedAt: publishedAt,
          viewCount: statistics.viewCount || 0,
          likeCount: statistics.likeCount || 0,
        };
      });

      const videos = await Promise.all(videoPromises);

      result[channelTitle] = {
        channelThumbnail,
        videos,
      };
    } catch (error) {
      console.error(`Failed to fetch videos for ${channelName}:`, error);
    }
  }
  return result;
}
