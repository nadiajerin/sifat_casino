/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/external/:path*',
        destination: 'https://api.httpsgamexaglobal.net/api/:path*',
      },
    ];
  },
};

export default nextConfig;
