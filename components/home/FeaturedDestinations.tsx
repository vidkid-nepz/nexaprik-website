"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Destination } from "@/lib/types/Destination";

interface FeaturedDestinationsProps {
    destinations: Destination[];
}

export default function FeaturedDestinations({ destinations }: FeaturedDestinationsProps) {
    // Take only the first 4 featured destinations for the grid
    const displayDestinations = destinations.slice(0, 4).map((dest, index) => {
        // Assign sizes based on index for the masonry layout
        let size = "small";
        if (index === 0) size = "large";
        else if (index === 3) size = "wide";

        return { ...dest, size };
    });

    return (
        <section className="py-24 bg-gray-50">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-600 font-semibold tracking-wider uppercase text-sm"
                        >
                            Curated Experiences
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading font-bold text-4xl md:text-5xl mt-3 text-gray-900"
                        >
                            Featured Destinations
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/destinations">
                            <Button variant="outline" className="group">
                                View All Destinations
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {displayDestinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${dest.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                                dest.size === 'wide' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <Link href={`/destinations/${dest.category}/${dest.slug}`} className="block h-full w-full">
                                <Image
                                    src={dest.featuredImage || "/images/placeholder.jpg"}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-300">
                                        <MapPin size={16} className="text-accent-500" />
                                        <span>{dest.location}</span>
                                        <span className="mx-2">•</span>
                                        <Star size={16} className="text-yellow-400 fill-current" />
                                        <span>{dest.rating}</span>
                                    </div>
                                    <h3 className={`font-heading font-bold mb-2 ${dest.size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                                        {dest.name}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <span className="text-lg font-semibold text-accent-400">
                                            From ${dest.price}
                                        </span>
                                        <span className="flex items-center text-sm font-medium hover:underline">
                                            View Details <ArrowRight size={16} className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

