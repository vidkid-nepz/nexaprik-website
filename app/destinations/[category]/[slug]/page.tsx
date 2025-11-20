import Container from "@/components/layout/Container";
import Card, { CardContent } from "@/components/ui/Card";
import BookingModal from "@/components/booking/BookingModal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    MapPin, Clock, TrendingUp, Star, Users, Check, X,
    Calendar, Info, Shield, ChevronRight, Phone, Mail
} from "lucide-react";

// Get all destinations for static params
export async function generateStaticParams() {
    try {
        const destinations = require("@/data/destinations.json");
        return destinations.map((d: any) => ({
            category: d.category,
            slug: d.slug,
        }));
    } catch {
        return [];
    }
}

// Generate metadata for each destination
export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;
    try {
        const destinations = require("@/data/destinations.json");
        const destination = destinations.find((d: any) => d.category === category && d.slug === slug);

        if (!destination) {
            return { title: "Destination Not Found" };
        }

        return {
            title: `${destination.name} - NexaPrik Travel Co.`,
            description: destination.overview,
        };
    } catch {
        return { title: "Destination Not Found" };
    }
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;

    // Get destination data
    let destination;
    try {
        const destinations = require("@/data/destinations.json");
        destination = destinations.find((d: any) => d.category === category && d.slug === slug);
    } catch (error) {
        notFound();
    }

    if (!destination) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src={destination.featuredImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <Container className="relative z-10 h-full flex items-center">
                    <div className="text-white max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className="bg-accent-600 text-white border-none">
                                {category === 'tour' && '🗺️ Tour'}
                                {category === 'short-trek' && '🥾 Trek'}
                                {category === 'hiking' && '⛰️ Hike'}
                                {category === 'heli-tour' && '🚁 Heli Tour'}
                            </Badge>
                            <Badge className={`${destination.difficulty === 'Easy' ? 'bg-green-600' :
                                destination.difficulty === 'Moderate' ? 'bg-yellow-600' :
                                    destination.difficulty === 'Challenging' ? 'bg-orange-600' :
                                        'bg-red-600'
                                } text-white border-none`}>
                                {destination.difficulty}
                            </Badge>
                        </div>
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-4">
                            {destination.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-lg">
                            <div className="flex items-cent gap-2">
                                <MapPin size={20} />
                                <span>{destination.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={20} />
                                <span>{destination.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={20} className="fill-current text-yellow-400" />
                                <span>{destination.rating} ({destination.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Overview Section */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="font-heading font-bold text-4xl mb-6">Overview</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {destination.detailedDescription}
                            </p>

                            {/* Highlights */}
                            <h3 className="font-heading font-bold text-3xl mb-6">Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {destination.highlights.map((highlight: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Check className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Things to Do */}
                            <h3 className="font-heading font-bold text-3xl mb-6">Things to Do</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {destination.thingsToDo.map((thing: string, index: number) => (
                                    <Card key={index} className="p-4">
                                        <p className="text-gray-700">• {thing}</p>
                                    </Card>
                                ))}
                            </div>

                            {/* What to Bring */}
                            <h3 className="font-heading font-bold text-3xl mb-6">What to Bring</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                                {destination.whatToBring.map((item: string, index: number) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent-600"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Cultural Tips */}
                            {Array.isArray(destination.culturalTips) && destination.culturalTips.length > 0 && (
                                <>
                                    <h3 className="font-heading font-bold text-3xl mb-6">Cultural Tips</h3>
                                    <div className="bg-primary-50 p-6 rounded-lg mb-12">
                                        <ul className="space-y-3">
                                            {destination.culturalTips.map((tip: string, index: number) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <Info className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                                                    <span className="text-gray-700">{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}

                            {/* Included/Excluded */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="font-heading font-bold text-2xl mb-4">Included</h3>
                                    <ul className="space-y-3">
                                        {destination.included.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-2xl mb-4">Not Included</h3>
                                    <ul className="space-y-3">
                                        {destination.excluded.map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Price Card */}
                                <Card className="p-6 bg-accent-50 border-accent-200">
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-gray-600 mb-2">Starting From</div>
                                        <div className="text-5xl font-bold text-accent-600">
                                            ${destination.price}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">per person</div>
                                    </div>
                                    <BookingModal
                                        destinationId={destination.id}
                                        destinationName={destination.name}
                                        trigger={
                                            <Button className="w-full bg-accent-600 hover:bg-accent-700" size="lg">
                                                Book Now
                                            </Button>
                                        }
                                    />
                                    <Link href="/contact">
                                        <Button variant="outline" className="w-full mt-3">
                                            Customize Trip
                                        </Button>
                                    </Link>
                                </Card>

                                {/* Trip Info */}
                                <Card className="p-6">
                                    <h4 className="font-heading font-semibold text-xl mb-4">Trip Information</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between pb-3 border-b">
                                            <span className="text-gray-600">Duration</span>
                                            <span className="font-semibold">{destination.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-3 border-b">
                                            <span className="text-gray-600">Difficulty</span>
                                            <span className="font-semibold">{destination.difficulty}</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-3 border-b">
                                            <span className="text-gray-600">Max Altitude</span>
                                            <span className="font-semibold">{destination.altitude}</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-3 border-b">
                                            <span className="text-gray-600">Group Size</span>
                                            <span className="font-semibold">{destination.groupSize}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">Best Time</span>
                                            <span className="font-semibold text-sm">Year Round</span>
                                        </div>
                                    </div>
                                </Card>

                                {/* Contact Card */}
                                <Card className="p-6 bg-primary-900 text-white">
                                    <h4 className="font-heading font-semibold text-xl mb-4">Need Help?</h4>
                                    <p className="text-primary-100 mb-4 text-sm">
                                        Our travel experts are here to help you plan your perfect trip
                                    </p>
                                    <div className="space-y-3">
                                        <a href="tel:+9779841234567" className="flex items-center gap-3 text-sm hover:text-accent-400 transition-colors">
                                            <Phone size={18} />
                                            <span>+977 984-1234567</span>
                                        </a>
                                        <a href="mailto:info@nexaprik.com" className="flex items-center gap-3 text-sm hover:text-accent-400 transition-colors">
                                            <Mail size={18} />
                                            <span>info@nexaprik.com</span>
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to book this amazing experience
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg">
                                Contact Us Now
                                <ChevronRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                        <Link href={`/destinations/${category}`}>
                            <Button size="lg" variant="outline">
                                View More {category === 'tour' ? 'Tours' : category === 'short-trek' ? 'Treks' : category === 'hiking' ? 'Hikes' : 'Heli Tours'}
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
