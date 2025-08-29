import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['picsum.photos', 'randomuser.me'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
