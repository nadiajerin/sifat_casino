/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.sitestatic.net',
        port: '',
        pathname: '',
      },
    ],
  },
};

export default nextConfig;
