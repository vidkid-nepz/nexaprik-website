"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const HERO_SLIDES = [
    {
        id: 1,
        image: "/images/hero-everest.jpg",
        title: "Conquer the Giants",
        subtitle: "Experience the majesty of Mount Everest and the Himalayas",
        cta: "Explore Treks",
        link: "/destinations/short-treks"
    },
    {
        id: 2,
        image: "/images/hero-culture.jpg",
        title: "Ancient Heritage",
        subtitle: "Immerse yourself in the rich culture and history of Nepal",
        cta: "Discover Tours",
        link: "/destinations/tours"
    },
    {
        id: 3,
        image: "/images/hero-heli.jpg",
        title: "Sky High Luxury",
        subtitle: "Witness the peaks from above in our premium helicopter tours",
        cta: "View Heli Tours",
        link: "/destinations/heli-tours"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <motion.div
                    key={`content-${currentSlide}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase">
                        NexaPrik Travel Co.
                    </div>
                    <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-lg">
                        {HERO_SLIDES[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
                        {HERO_SLIDES[currentSlide].subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={HERO_SLIDES[currentSlide].link}>
                            <Button
                                size="lg"
                                className="bg-accent-600 hover:bg-accent-700 text-white border-none px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                            >
                                {HERO_SLIDES[currentSlide].cta}
                                <ChevronRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
                            >
                                Plan Your Trip
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-accent-500" : "w-2 bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}
