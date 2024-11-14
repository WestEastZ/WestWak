export type IconName =
  | "Youtube"
  | "Genie"
  | "Melon"
  | "Bugs"
  | "Flo"
  | "Spotify";

export const streamingSite: { name: IconName; url: string }[] = [
  { name: "Youtube", url: "https://www.youtube.com/watch?v=" },
  { name: "Genie", url: "https://www.genie.co.kr/detail/songInfo?xgnm=" },
  { name: "Melon", url: "https://www.melon.com/song/detail.htm?songId=" },
  { name: "Bugs", url: "https://music.bugs.co.kr/track/" },
  { name: "Flo", url: "https://www.music-flo.com/detail/track/" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/track/",
  },
] as const;
