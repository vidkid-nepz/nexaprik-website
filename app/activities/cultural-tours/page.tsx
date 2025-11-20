import Container from "@/components/layout/Container";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import activitiesData from "@/data/activities.json";
import { Activity } from "@/lib/types/Activity";
import { Check, MapPin, Clock, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Cultural Tours in Nepal",
    description: "Explore Nepal's rich cultural heritage with expertly guided tours of UNESCO sites and ancient temples",
};

export default function CulturalToursPage() {
    const activity = activitiesData.find(a => a.slug === "cultural-tours") as Activity;

    const tourPackages = [
        {
            name: "Kathmandu Valley Heritage Tour",
            duration: "3-4 days",
            highlights: ["Kathmandu Durbar Square", "Swayambhunath Stupa", "Pashupatinath Temple", "Boudhanath Stupa"],
            image: "/images/cultural-tour.jpg"
        },
        {
            name: "Kathmandu-Pokhara-Chitwan Tour",
            duration: "7-8 days",
            highlights: ["UNESCO Heritage Sites", "Phewa Lake", "Wildlife Safari", "Mountain Views"],
            image: "/images/cultural-tour.jpg"
        },
        {
            name: "Lumbini Pilgrimage Tour",
            duration: "4-5 days",
            highlights: ["Buddha's Birthplace", "Maya Devi Temple", "Ashoka Pillar", "Monasteries"],
            image: "/images/cultural-tour.jpg"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={activity.image} alt="Cultural Tours" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
                <Container className="relative z-10 text-center text-white">
                    <div className="text-7xl mb-4">{activity.icon}</div>
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        {activity.name}
                    </h1>
                    <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
                        {activity.description}
                    </p>
                </Container>
            </section>

            {/* Overview */}
            <section className="py-16">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl mb-6">
                            Experience Nepal's <span className="text-accent-600">Cultural Treasures</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {activity.detailedDescription}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nepal is a living museum of cultural heritage. The Kathmandu Valley alone contains seven UNESCO World Heritage Sites,
                            including ancient royal palaces, sacred Hindu temples, and Buddhist stupas that date back over 2,000 years.
                            Our cultural tours provide deep insights into Nepal's artistic traditions, religious practices, and daily life.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Tour <span className="text-primary-600">Highlights</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activity.features.map((feature, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-start gap-3">
                                    <Check className="text-accent-600 mt-1 flex-shrink-0" size={24} />
                                    <p className="text-gray-700">{feature}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Tour Packages */}
            <section className="py-16">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Popular <span className="text-accent-600">Tour Packages</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tourPackages.map((tour, index) => (
                            <Card key={index} hover className="h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
                                </div>
                                <CardContent className="flex-1 flex flex-col">
                                    <h3 className="font-heading font-semibold text-xl mb-3">{tour.name}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                        <Clock size={16} />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <ul className="space-y-2 mb-6 flex-1">
                                        {tour.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <MapPin size={14} className="text-accent-600 mt-1 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact">
                                        <Button variant="outline" className="w-full">
                                            Inquire Now
                                            <ChevronRight size={16} className="ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Discover Nepal's Heritage
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Let our expert guides unveil the stories and secrets of Nepal's ancient culture
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Start Your Cultural Journey
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
