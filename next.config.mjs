import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
      "stimg.sooplive.co.kr",
      "wakvideo.s3.ap-northeast-2.amazonaws.com",
      "yt3.ggpht.com",
    ],
  },
};

export default nextConfig;

// const analyzeBundleEnabled = process.env.ANALYZE === "true";
// export default withBundleAnalyzer({
//   enabled: analyzeBundleEnabled,
//   openAnalyzer: analyzeBundleEnabled,
// })(nextConfig);
