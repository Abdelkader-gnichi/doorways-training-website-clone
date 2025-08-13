/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  allowedDevOrigins: [
    "*",
    "*.preview.same-app.com",
    "evolving-rationally-dragon.ngrok-free.app",
    "*.ngrok-free.app",
    "*.ngrok.io",
    "*.ngrok.app",
  ],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
