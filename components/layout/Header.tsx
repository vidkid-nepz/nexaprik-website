"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "../ui/Button";
import { Menu, X, Search, Phone, Mail, ChevronDown } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-primary-900 text-white py-2">
                <Container>
                    <div className="flex items-center justify-between text-sm">
                        <div className="hidden md:flex items-center gap-6">
                            <a
                                href="tel:+9779841234567"
                                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
                            >
                                <Phone size={14} />
                                <span>+977 984-1234567</span>
                            </a>
                            <a
                                href="mailto:info@nexaprik.com"
                                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
                            >
                                <Mail size={14} />
                                <span>info@nexaprik.com</span>
                            </a>
                        </div>
                        <div className="ml-auto text-xs">
                            <span>🏔️ 20+ Years of Experience | 500+ Happy Travelers</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Enhanced Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Image
                                src="/images/logo.jpg"
                                alt="NexaPrik Travel Co."
                                width={60}
                                height={60}
                                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="font-heading font-bold text-2xl text-primary-950 group-hover:text-primary-800 transition-colors">
                                NexaPrik <span className="text-accent-600">Travel Co.</span>
                            </div>
                            <div className="text-[11px] text-accent-600 tracking-wider uppercase font-semibold">
                                Where Adventure Meets Elegance
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Home
                        </Link>

                        {/* Destinations Dropdown - FIXED */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors font-medium">
                                Destinations
                                <ChevronDown size={16} />
                            </button>
                            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                                    <Link
                                        href="/destinations"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        All Destinations
                                    </Link>
                                    <div className="border-t my-2"></div>
                                    <Link
                                        href="/destinations/tours"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Tour Destinations
                                    </Link>
                                    <Link
                                        href="/destinations/short-treks"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Trekking Destinations
                                    </Link>
                                    <Link
                                        href="/destinations/hiking"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Hiking Destinations
                                    </Link>
                                    <Link
                                        href="/destinations/heli-tours"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Heli Tour Destinations
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Activities Dropdown - FIXED */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors font-medium">
                                Activities
                                <ChevronDown size={16} />
                            </button>
                            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="w-52 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                                    <Link
                                        href="/activities/cultural-tours"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Cultural Tours
                                    </Link>
                                    <Link
                                        href="/activities/peak-climbing"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Peak Climbing
                                    </Link>
                                    <Link
                                        href="/activities/expeditions"
                                        className="block px-4 py-2 text-gray-700 hover:bg-accent-50 hover:text-primary-600 transition-colors"
                                    >
                                        Expeditions
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>
                        <Link href="/contact">
                            <Button size="sm" className="bg-accent-600 hover:bg-accent-700">Book Now</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Search Bar */}
            {searchOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg animate-slide-down">
                    <Container>
                        <div className="py-6">
                            <form className="relative">
                                <input
                                    type="text"
                                    placeholder="Search destinations, activities..."
                                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                                    autoFocus
                                />
                                <Search
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                            </form>
                        </div>
                    </Container>
                </div>
            )}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg animate-slide-down">
                    <Container>
                        <nav className="py-4 space-y-2">
                            <Link
                                href="/"
                                className="block py-3 font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Destinations Mobile */}
                            <div>
                                <div className="font-semibold text-gray-900 py-2 text-sm uppercase tracking-wide">Destinations</div>
                                <div className="pl-4 space-y-1">
                                    <Link href="/destinations" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>All Destinations</Link>
                                    <Link href="/destinations/tours" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Tour Destinations</Link>
                                    <Link href="/destinations/short-treks" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Trekking Destinations</Link>
                                    <Link href="/destinations/hiking" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Hiking Destinations</Link>
                                    <Link href="/destinations/heli-tours" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Heli Tour Destinations</Link>
                                </div>
                            </div>

                            {/* Activities Mobile - Trekking Removed */}
                            <div>
                                <div className="font-semibold text-gray-900 py-2 text-sm uppercase tracking-wide">Activities</div>
                                <div className="pl-4 space-y-1">
                                    <Link href="/activities/cultural-tours" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Cultural Tours</Link>
                                    <Link href="/activities/peak-climbing" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Peak Climbing</Link>
                                    <Link href="/activities/expeditions" className="block py-2 text-sm text-gray-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Expeditions</Link>
                                </div>
                            </div>

                            <Link
                                href="/about"
                                className="block py-3 font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/blog"
                                className="block py-3 font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="block py-3 font-medium text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="pt-4">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-accent-600 hover:bg-accent-700">Book Now</Button>
                                </Link>
                            </div>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
}
