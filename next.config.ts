import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Allow access from network
  async rewrites() {
    return [];
  },
};

export default nextConfig;
