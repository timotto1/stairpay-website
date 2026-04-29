import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/intelligence-layers/sales",
        destination: "/sales",
        permanent: true,
      },
      {
        source: "/intelligence-layers/lease",
        destination: "/compliance",
        permanent: true,
      },
      {
        source: "/intelligence-layers/aftersales",
        destination: "/aftersales",
        permanent: true,
      },
      {
        source: "/intelligence-layers/resident-portal",
        destination: "/resident",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
