import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { MapPin, Clock, TrendingUp, Star, Users, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Tour Destinations in Nepal",
    description: "Explore our cultural tours, wildlife adventures, and pilgrimage journeys across Nepal",
};

const getDestinations = () => {
    try {
        return require("@/data/destinations.json").filter((d: any) => d.category === 'tour');
    } catch {
        return [];
    }
};

export default function ToursPage() {
    const destinations = getDestinations();

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-800">
                <Container className="relative z-10 text-center text-white">
                    <Badge className="mb-4 bg-accent-600 text-white border-none text-lg px-6 py-2">
                        🗺️ Cultural & Adventure Tours
                    </Badge>
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        Tour Destinations
                    </h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                        Discover Nepal's rich cultural heritage, diverse wildlife, and sacred sites
                        through our carefully curated tour packages
                    </p>
                </Container>
            </section>

            {/* Destinations Grid */}
            <section className="py-16">
                <Container>
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg">
                            Showing {destinations.length} tour {destinations.length === 1 ? 'destination' : 'destinations'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination: any) => (
                            <Card key={destination.id} hover className="h-full flex flex-col group">
                                <div className="relative h-64 overflow-hidden">
                                    <CardImage src={destination.featuredImage} alt={destination.name} />
                                    <div className="absolute top-4 left-4">
                                        {destination.featured && (
                                            <Badge className="bg-accent-600 text-white border-none">
                                                ⭐ Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <div className="flex items-center gap-2 text-white">
                                            <MapPin size={16} />
                                            <span className="text-sm">{destination.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="flex-1 flex flex-col">
                                    <CardTitle className="text-2xl mb-3 group-hover:text-primary-600 transition-colors">
                                        {destination.name}
                                    </CardTitle>

                                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                                        {destination.overview}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-accent-600" />
                                            <span className="text-gray-700">{destination.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-accent-600" />
                                            <span className="text-gray-700">{destination.difficulty}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star size={16} className="text-yellow-500 fill-current" />
                                            <span className="text-gray-700">{destination.rating} ({destination.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-accent-600" />
                                            <span className="text-gray-700">{destination.groupSize}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div>
                                            <div className="text-sm text-gray-500">From</div>
                                            <div className="text-2xl font-bold text-accent-600">${destination.price}</div>
                                        </div>
                                        <Link href={`/destinations/${destination.category}/${destination.slug}`}>
                                            <Button variant="outline" className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                                                View Details
                                                <ChevronRight size={16} className="ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {destinations.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No tour destinations available at the moment.</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Contact us to create a custom tour package tailored to your interests and schedule
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Contact Us
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
