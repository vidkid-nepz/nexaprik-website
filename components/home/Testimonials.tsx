"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        location: "United Kingdom",
        image: "/images/hero-culture.jpg", // Placeholder
        rating: 5,
        text: "The Everest Base Camp trek with NexaPrik was absolutely life-changing. The guides were incredibly knowledgeable and supportive, making sure we were safe and comfortable every step of the way."
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Singapore",
        image: "/images/hero-everest.jpg", // Placeholder
        rating: 5,
        text: "I've done many treks in Asia, but the level of service provided by NexaPrik is unmatched. From the airport pickup to the farewell dinner, everything was perfect. Highly recommended!"
    },
    {
        id: 3,
        name: "Emma Williams",
        location: "Australia",
        image: "/images/hero-heli.jpg", // Placeholder
        rating: 5,
        text: "Our helicopter tour to Everest was the highlight of our trip. The pilot was professional and the views were breathtaking. Thank you for making our dream come true!"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-400 font-semibold tracking-wider uppercase text-sm">Guest Stories</span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3">
                        Memories That Last a Lifetime
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <Quote size={32} />
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 text-gray-100">
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 text-yellow-400 mb-3">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>
                                <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-400 text-sm">{testimonials[currentIndex].location}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
