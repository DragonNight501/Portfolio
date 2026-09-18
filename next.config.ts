import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Needed because the root layout lives under the dynamic [lang] segment.
    globalNotFound: true,
  },
};

export default nextConfig;
