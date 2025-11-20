"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/hero-everest.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60" />

            <Container className="relative z-10 text-center text-white">
                <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
                    Ready to Start Your Adventure?
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    Let us help you plan the perfect trip to Nepal. Whether you want to trek to Everest or explore the culture of Kathmandu, we're here to make it happen.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white border-none px-8 py-4 text-lg rounded-full">
                            Book Your Trip Now
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                    <Link href="/destinations">
                        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                            Explore Destinations
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
