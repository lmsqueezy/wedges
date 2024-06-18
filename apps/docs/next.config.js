/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/wedges/docs",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/getting-started",
        destination: "/",
        permanent: true,
      },
      {
        source: "/installation",
        destination: "/installation/nextjs",
        permanent: true,
      },
      {
        source: "/theming",
        destination: "/theming/tailwind-css-plugin",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/components/alert",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/components/alert",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
