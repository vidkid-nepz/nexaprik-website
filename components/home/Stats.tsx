"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { Users, Map, Award, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
    {
        id: 1,
        label: "Happy Travelers",
        value: 5000,
        suffix: "+",
        icon: Users,
        color: "text-blue-500",
    },
    {
        id: 2,
        label: "Destinations",
        value: 50,
        suffix: "+",
        icon: Map,
        color: "text-green-500",
    },
    {
        id: 3,
        label: "Years Experience",
        value: 20,
        suffix: "+",
        icon: Calendar,
        color: "text-orange-500",
    },
    {
        id: 4,
        label: "Awards Won",
        value: 15,
        suffix: "",
        icon: Award,
        color: "text-purple-500",
    },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="font-bold text-4xl md:text-5xl text-gray-900">
            {count}{suffix}
        </span>
    );
};

export default function Stats() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 ${stat.color}`}>
                                <stat.icon size={32} className="transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="mb-2">
                                <CountUp value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
