// @ts-nocheck
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/home-decor', // Set GitHub Pages base path
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'www.jaipurcraftonline.com',
      },
      {
        protocol: 'https',
        hostname: 'www.craftpassion.com',
      }
    ],
  },
};

module.exports = nextConfig;
