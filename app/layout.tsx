import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "NexaPrik Travel Co. | Where Adventure Meets Elegance",
        template: "%s | NexaPrik Travel Co.",
    },
    description:
        "Experience luxury adventure tourism in the Himalayas with NexaPrik Travel Co. Premium trekking, cultural tours, peak climbing, and expeditions with expert guides. Where adventure meets elegance.",
    keywords: [
        "NexaPrik",
        "luxury trekking Nepal",
        "premium Himalayan tours",
        "Everest base camp",
        "Annapurna circuit",
        "adventure tourism Nepal",
        "peak climbing",
        "cultural tours Nepal",
        "mountain expeditions",
        "Nepal trekking company",
    ],
    authors: [{ name: "NexaPrik Travel Co." }],
    creator: "NexaPrik Travel Co.",
    publisher: "NexaPrik Travel Co.",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://nexaprik.com"),
    openGraph: {
        title: "NexaPrik Travel Co. | Where Adventure Meets Elegance",
        description:
            "Discover premium Himalayan adventures with NexaPrik. From Everest to Annapurna, experience trekking that combines adventure with elegance.",
        url: "https://nexaprik.com",
        siteName: "NexaPrik Travel Co.",
        images: [
            {
                url: "/images/logo.jpg",
                width: 1200,
                height: 630,
                alt: "NexaPrik Travel Co. - Where Adventure Meets Elegance",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NexaPrik Travel Co. | Premium Himalayan Adventures",
        description:
            "Where adventure meets elegance. Premium trekking and tours in Nepal with expert guides.",
        images: ["/images/logo.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
