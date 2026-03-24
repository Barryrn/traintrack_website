import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static export for Cloudflare Workers (assets-only, no server). */
  output: "export",
};

export default nextConfig;
