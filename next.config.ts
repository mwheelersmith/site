import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [{ source: "/resume", destination: "/cv", permanent: true }];
  },
};

export default nextConfig;
