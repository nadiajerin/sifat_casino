/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/players-proxy',
        destination: 'https://api.httpsgamexaglobal.net/api/players',
      },
    ];
  },
}

module.exports = nextConfig
