import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import SnowAnimation from "@/components/SnowAnimation";
import { getFeaturedDestinations } from "@/lib/destinations";

export default async function Home() {
    const featuredDestinations = await getFeaturedDestinations();

    return (
        <main className="min-h-screen">
            <SnowAnimation />
            <Hero />
            <Stats />
            <FeaturedDestinations destinations={featuredDestinations} />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </main>
    );
}

