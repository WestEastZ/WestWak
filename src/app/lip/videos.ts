import { VideoData } from "../_types/type";
import { formatCount } from "../util/formatNumber";

// 채널 썸네일
async function getThumbUrl({ channelId }: { channelId: string }) {
  try {
    const url = `/api/playlist/thumbUrl?id=${channelId}`;

    const response = await fetch(url);

    const data = await response.json();

    const channelThumbnail = data.items[0]?.snippet.thumbnails.default.url;
    const channelUrl = data.items[0]?.snippet.customUrl;

    return {
      channelThumbnail,
      channelUrl,
    };
  } catch (error) {
    console.error(`Failed to fetch channel thumbnail: ${error}`);
  }
}

// 오늘의 추천 비디오
export async function getTodayMusic() {
  try {
    let playListUrl = `${process.env.YOUTUBE_PLATLISTITEM_URL}&playlistId=${process.env.ORIGINAL_API_KEY}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;
    let videosId = [];
    let pageToken = undefined || "";
    let today = new Date().toISOString().split("T")[0];

    do {
      const response = await fetch(
        `${playListUrl}${pageToken ? "&pageToken=" + pageToken : ""}`,
      );
      let playListData: VideoData = await response.json();

      videosId.push(
        playListData.items.map((item: any) => item.snippet.resourceId.videoId),
      );

      pageToken = playListData.nextPageToken;
    } while (pageToken);

    videosId = [].concat(...videosId);

    const randomVideoId = videosId[Math.floor(Math.random() * videosId.length)];

    return randomVideoId;
  } catch (error) {
    console.error(`Failed to fetch recomend videos: `, error);
  }
}

// 노래 / 영상 Statistics
async function fetchVideoStatistics(videoId: string) {
  const url = `/api/playlist/statistics?id=${videoId}`;

  const response = await fetch(url);

  const data = await response.json();
  const statistics = data.items[0]?.statistics || {};

  const value = {
    viewCount: statistics.viewCount || 0,
    likeCount: statistics.likeCount || 0,
    commentCount: statistics.commentCount || 0,
  };

  const result = formatCount(value);

  return {
    result,
  };
}

// 노래 정보
export async function getMusicVideo(id: string) {
  const url = `${process.env.YOUTUBE_VIDEO_URL}&id=${id}&key=${process.env.YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const statistics = data.items[0]?.statistics || {};

    const value = {
      viewCount: statistics.viewCount || 0,
      likeCount: statistics.likeCount || 0,
      commentCount: statistics.commentCount || 0,
    };

    const result = formatCount(value);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// 비디오 정보
async function getVideoData({ videosData }: { videosData: VideoData }) {
  const videoPromises = videosData.items.map(async (item: any) => {
    const videoId = item.snippet.resourceId.videoId;
    const publishedAt = new Date(item.snippet.publishedAt).toLocaleDateString();

    try {
      const statistics = await fetchVideoStatistics(videoId);

      return {
        id: videoId,
        title: item.snippet.title,
        publishedAt: publishedAt,
        viewCount: statistics.result.viewCount || 0,
        likeCount: statistics.result.likeCount || 0,
        commentCount: statistics.result.commentCount || 0,
      };
    } catch (error) {
      console.log(error);
    }
  });
  return await Promise.all(videoPromises);
}

// 채널 playList
export async function getVideos({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) {
  try {
    const playlistUrl = `/api/playlist?category=${category}&subCategory=${subCategory}`;
    const response = await fetch(playlistUrl);

    const videosData: VideoData = await response.json();

    if (!videosData) {
      return null;
    }

    const channelTitle = videosData.items[0]?.snippet.channelTitle;
    const channelId = videosData.items[0]?.snippet.channelId;

    const videos = await getVideoData({ videosData });
    const thumbUrl = await getThumbUrl({ channelId });

    return {
      videos,
      channelTitle,
      thumbUrl,
    };
  } catch (error) {
    console.error(`Failed to fetch playList :`, error);
  }
}
