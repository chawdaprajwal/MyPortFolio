import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.GITHUB_ACTIONS === "true" ? "/MyPortFolio" : "",
  assetPrefix: process.env.GITHUB_ACTIONS === "true" ? "/MyPortFolio/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
