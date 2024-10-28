/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        crypto: false,
        encoding: false,
      };
    }

    return config;
  },
  images: {
    domains: [
      "profile.img.sooplive.co.kr",
      "wakvideo.s3.ap-northeast-2.amazonaws.com",
      "yt3.ggpht.com",
    ],
  },
};

export default nextConfig;
