import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "cdn.sanity.io",
      // },
      {
        protocol: "https",
        hostname: "api.4eagency.ourtestingdomain.site",
      }
    ],
  },
};

export default nextConfig;
