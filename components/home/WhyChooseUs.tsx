"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Shield, Heart, Users, Globe } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Your safety is our top priority. Our guides are certified in first aid and mountain safety protocols."
    },
    {
        icon: Heart,
        title: "Personalized Care",
        description: "We treat every guest like family, ensuring your journey is tailored to your preferences and pace."
    },
    {
        icon: Users,
        title: "Expert Local Guides",
        description: "Our team consists of experienced local Sherpas who know the mountains like the back of their hand."
    },
    {
        icon: Globe,
        title: "Sustainable Travel",
        description: "We are committed to eco-friendly practices that preserve the Himalayas for future generations."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero-everest.jpg"
                                alt="Trekker enjoying the view"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-4xl font-bold text-accent-600">20+</div>
                                <div className="text-sm text-gray-600 font-medium leading-tight">Years of<br />Excellence</div>
                            </div>
                            <p className="text-xs text-gray-500">
                                Delivering unforgettable Himalayan experiences since 2005.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">Why Choose NexaPrik</span>
                            <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-6 text-gray-900">
                                Experience the Himalayas <br />
                                <span className="text-primary-800">With True Experts</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We don't just organize trips; we craft life-changing experiences.
                                With NexaPrik, you're not just a tourist, you're an explorer
                                embarking on a journey of discovery with the best support team in Nepal.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
