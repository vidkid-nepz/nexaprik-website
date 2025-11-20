import Link from "next/link";
import Container from "./Container";
import {
    Facebook,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Send,
    ArrowRight,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Why Book With Us", href: "/why-book-with-us" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];

    const popularDestinations = [
        { name: "Everest Base Camp Trek", href: "/destinations/short-trek/everest-base-camp-trek" },
        { name: "Annapurna Circuit", href: "/destinations/trekking/annapurna-circuit-trek" },
        { name: "Langtang Valley", href: "/destinations/trekking/langtang-valley-trek" },
        { name: "Manaslu Circuit", href: "/destinations/trekking/manaslu-circuit-trek" },
        { name: "Upper Mustang", href: "/destinations/tour/upper-mustang-tour" },
    ];

    const legalLinks = [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Travel Information", href: "/travel-information" },
    ];

    return (
        <footer className="bg-[#0B1120] text-gray-300 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-900/10 rounded-full blur-3xl" />

            {/* Newsletter Section */}
            <div className="relative z-10 border-b border-white/5">
                <Container>
                    <div className="py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl text-center lg:text-left">
                            <h3 className="text-3xl font-heading font-bold text-white mb-3">
                                Join Our <span className="text-accent-500">Adventure</span> Community
                            </h3>
                            <p className="text-gray-400 text-lg">
                                Subscribe for exclusive trekking tips, hidden gem destinations, and special offers delivered to your inbox.
                            </p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto min-w-[400px]">
                            <div className="relative flex-grow">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-600/20 flex items-center justify-center gap-2 group"
                            >
                                <span>Subscribe</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </Container>
            </div>

            {/* Main Footer Content */}
            <Container>
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Company Info - Spans 4 columns */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block">
                            <div className="font-heading font-bold text-3xl text-white tracking-tight">
                                NexaPrik<span className="text-accent-500">.</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Crafting unforgettable Himalayan journeys since 2010. We combine luxury, adventure, and cultural immersion to create the trip of a lifetime.
                        </p>
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent-500/10 transition-colors">
                                    <MapPin size={20} className="text-accent-500" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium mb-1">Head Office</h5>
                                    <p className="text-sm text-gray-400">Thamel Marg, Kathmandu 44600, Nepal</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent-500/10 transition-colors">
                                    <Phone size={20} className="text-accent-500" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium mb-1">Call Us 24/7</h5>
                                    <a href="tel:+9779841234567" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        +977 984-1234567
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent-500/10 transition-colors">
                                    <Mail size={20} className="text-accent-500" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium mb-1">Email Support</h5>
                                    <a href="mailto:info@nexaprik.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        info@nexaprik.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Spans 2 columns */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-heading font-bold text-white text-xl mb-8 relative inline-block">
                            Company
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent-500" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Destinations - Spans 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="font-heading font-bold text-white text-xl mb-8 relative inline-block">
                            Popular Adventures
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-500 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {popularDestinations.map((destination) => (
                                <li key={destination.name}>
                                    <Link
                                        href={destination.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent-500" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{destination.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Payments - Spans 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading font-bold text-white text-xl mb-8 relative inline-block">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent-500 rounded-full"></span>
                        </h4>
                        <div className="flex gap-4 mb-10">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent-600 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        <div>
                            <h5 className="font-medium text-white text-sm mb-4 opacity-80">
                                Secure Payments
                            </h5>
                            <div className="grid grid-cols-3 gap-2">
                                {["VISA", "Mastercard", "PayPal", "Amex", "JCB", "UnionPay"].map((card) => (
                                    <div key={card} className="bg-white px-2 py-1.5 rounded text-[10px] font-bold text-gray-800 text-center shadow-sm">
                                        {card}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-[#050914]">
                <Container>
                    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-sm text-gray-500">
                            © {currentYear} NexaPrik Travel Co. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-500 hover:text-accent-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

