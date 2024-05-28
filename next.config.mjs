/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dja68ij3b/image/upload/**',
          },
        ],
      },
      async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/:path*' // Proxy to Backend
            }
        ];
    },
};

export default nextConfig;
