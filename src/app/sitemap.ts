import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wakvideo.shop";
  return [
    {
      url: "https://wakvideo.shop",
      priority: 1,
    },
    {
      url: "https://wakvideo.shop/developer",
      priority: 0.5,
    },
    {
      url: "https://wakvideo.shop/info",
      priority: 0.5,
    },
    {
      url: "https://wakvideo.shop/recomended",
      priority: 1,
    },
    {
      url: "https://wakvideo.shop/waktaface",
      priority: 0.5,
    },
  ];
}
