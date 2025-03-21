/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static HTML export
    images: {
        unoptimized: true, // Required for static export
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