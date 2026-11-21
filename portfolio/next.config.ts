import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for easy deployment (Vercel, GitHub Pages, Netlify)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
