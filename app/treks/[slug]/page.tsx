import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, Clock, TrendingUp, Users, Check, X } from "lucide-react";
import treksData from "@/data/treks.json";
import { Trek } from "@/lib/types/Trek";
import { formatPrice, getDifficultyColor } from "@/lib/utils";

export async function generateStaticParams() {
    return treksData.map((trek) => ({
        slug: trek.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const trek = treksData.find((t) => t.slug === slug) as Trek | undefined;

    if (!trek) {
        return {
            title: "Trek Not Found",
        };
    }

    return {
        title: trek.metaTitle || trek.name,
        description: trek.metaDescription || trek.overview,
    };
}

export default async function TrekDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const trek = treksData.find((t) => t.slug === slug) as Trek | undefined;

    if (!trek) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end">
                <img
                    src={trek.featuredImage}
                    alt={trek.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <Container className="relative z-10 pb-12">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge className={getDifficultyColor(trek.difficulty)}>
                                {trek.difficulty}
                            </Badge>
                            <Badge variant="info">📍 {trek.region}</Badge>
                            {trek.popular && (
                                <Badge variant="warning">🔥 Popular Trek</Badge>
                            )}
                        </div>
                        <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
                            {trek.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white text-lg">
                            <div className="flex items-center gap-2">
                                <Clock size={20} />
                                <span>{trek.duration} days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={20} />
                                <span>Max: {trek.maxAltitude}m</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={20} />
                                <span>Group: {trek.groupSize.min}-{trek.groupSize.max}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex text-secondary-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            fill={i < Math.floor(trek.rating) ? "currentColor" : "none"}
                                        />
                                    ))}
                                </div>
                                <span>{trek.rating} ({trek.reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div className="bg-white rounded-xl shadow-soft p-8">
                                <h2 className="font-heading font-bold text-3xl mb-6">Trek Overview</h2>
                                <p className="text-gray-700 leading-relaxed mb-6">{trek.overview}</p>

                                <h3 className="font-heading font-semibold text-xl mb-4">Trek Highlights</h3>
                                <ul className="space-y-3">
                                    {trek.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="text-accent-500 mt-0.5 flex-shrink-0" size={20} />
                                            <span className="text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Itinerary */}
                            {trek.itinerary.length > 0 && (
                                <div className="bg-white rounded-xl shadow-soft p-8">
                                    <h2 className="font-heading font-bold text-3xl mb-6">Detailed Itinerary</h2>
                                    <div className="space-y-4">
                                        {trek.itinerary.map((day) => (
                                            <div key={day.day} className="border-l-4 border-primary-500 pl-6 py-4">
                                                <h3 className="font-semibold text-lg mb-2">
                                                    Day {day.day}: {day.title}
                                                </h3>
                                                <p className="text-gray-700 mb-2">{day.description}</p>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    {day.altitude && <span>🏔️ Altitude: {day.altitude}m</span>}
                                                    {day.distance && <span>📏 Distance: {day.distance}</span>}
                                                    {day.duration && <span>⏱️ Duration: {day.duration}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Cost Details */}
                            <div className="bg-white rounded-xl shadow-soft p-8">
                                <h2 className="font-heading font-bold text-3xl mb-6">Cost Details</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-4 text-accent-600">
                                            ✓ What's Included
                                        </h3>
                                        <ul className="space-y-2">
                                            {trek.costIncludes.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm">
                                                    <Check className="text-accent-500 mt-0.5 flex-shrink-0" size={16} />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-4 text-red-600">
                                            ✗ Not Included
                                        </h3>
                                        <ul className="space-y-2">
                                            {trek.costExcludes.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm">
                                                    <X className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-premium p-8 sticky top-24">
                                <div className="text-center mb-6">
                                    <div className="text-sm text-gray-500 mb-2">Starting from</div>
                                    <div className="font-heading font-bold text-5xl text-primary-600 mb-1">
                                        {formatPrice(trek.price)}
                                    </div>
                                    <div className="text-sm text-gray-600">per person</div>
                                </div>

                                <div className="space-y-4 mb-6 text-sm">
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Duration</span>
                                        <span className="font-semibold">{trek.duration} days</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Difficulty</span>
                                        <span className="font-semibold capitalize">{trek.difficulty}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Group Size</span>
                                        <span className="font-semibold">{trek.groupSize.min}-{trek.groupSize.max}</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Best Seasons</span>
                                        <span className="font-semibold">{trek.bestSeasons.join(", ")}</span>
                                    </div>
                                </div>

                                <Button className="w-full mb-3" size="lg">
                                    Book This Trek
                                </Button>
                                <Button variant="outline" className="w-full" size="lg">
                                    Ask a Question
                                </Button>

                                <div className="mt-6 pt-6 border-t text-center text-sm">
                                    <p className="text-gray-600 mb-2">Need help planning?</p>
                                    <a
                                        href="tel:+9779841234567"
                                        className="text-primary-600 font-semibold hover:underline"
                                    >
                                        📞 +977 984-1234567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
