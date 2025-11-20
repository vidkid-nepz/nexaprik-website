/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance: Enable React Compiler for better optimization
    reactStrictMode: true,

    // Performance: Use SWC minifier for faster builds
    swcMinify: true,

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        // Performance: Enable image formats for better compression
        formats: ['image/webp', 'image/avif'],
        // Performance: Optimize images on demand
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Build optimizations
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Performance: Experimental optimizations
    experimental: {
        // Performance: Optimize CSS loading
        optimizeCss: true,
        // Performance: Optimize fonts
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },

    // Performance: Enable compression
    compress: true,

    // Performance: Reduce bundle size
    poweredByHeader: false,
}

module.exports = nextConfig
