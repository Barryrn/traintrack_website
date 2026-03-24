import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Redirect bare / to /en — works on all platforms including Cloudflare. */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
