/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.unsplash.com", "plus.unsplash.com"],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.dog.ceo',
          pathname: '/**',
        }
      ],
    },
  };
  
  export default nextConfig;