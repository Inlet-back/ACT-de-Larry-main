
import nextPWA from 'next-pwa';
  const withPWA = nextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'act.kinadi.ac.jp',
        port: '',
        pathname: '/academic-theater/common/img/common/logo-academic-head.svg',
      },
    ],
    reactStrictMode: true,
  },
});

export default nextConfig;
