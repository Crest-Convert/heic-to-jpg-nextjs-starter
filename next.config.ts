import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["crestconvert"],
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
