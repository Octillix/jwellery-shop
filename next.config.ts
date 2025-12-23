import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable telemetry to avoid trace file permission issues
  reactStrictMode: true,
};

export default nextConfig;
