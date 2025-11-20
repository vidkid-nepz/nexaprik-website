import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { MapPin, Clock, TrendingUp, Star, Users, Mountain, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Short Trek Destinations in Nepal",
    description: "Explore our collection of multi-day trekking adventures through the Himalayas",
};

const getDestinations = () => {
    try {
        return require("@/data/destinations.json").filter((d: any) => d.category === 'short-trek');
    } catch {
        return [];
    }
};

export default function ShortTreksPage() {
    const destinations = getDestinations();

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-800">
                <Container className="relative z-10 text-center text-white">
                    <Badge className="mb-4 bg-accent-600 text-white border-none text-lg px-6 py-2">
                        🥾 Himalayan Adventures
                    </Badge>
                    <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                        Trekking Destinations
                    </h1>
                    <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                        Embark on unforgettable journeys through the world's highest mountains
                        with our expertly guided trekking packages
                    </p>
                </Container>
            </section>

            {/* Info Bar */}
            <section className="py-8 bg-gray-50 border-b">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <Mountain className="mx-auto text-accent-600 mb-2" size={32} />
                            <div className="font-semibold">Himalayan Peaks</div>
                            <div className="text-sm text-gray-600">8,000m+ Mountains</div>
                        </div>
                        <div>
                            <Clock className="mx-auto text-accent-600 mb-2" size={32} />
                            <div className="font-semibold">7-18 Days</div>
                            <div className="text-sm text-gray-600">Trek Durations</div>
                        </div>
                        <div>
                            <Users className="mx-auto text-accent-600 mb-2" size={32} />
                            <div className="font-semibold">Expert Guides</div>
                            <div className="text-sm text-gray-600">Certified & Experienced</div>
                        </div>
                        <div>
                            <Star className="mx-auto text-accent-600 mb-2 fill-current" size={32} />
                            <div className="font-semibold">Top Rated</div>
                            <div className="text-sm text-gray-600">1000+ Reviews</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Destinations Grid */}
            <section className="py-16">
                <Container>
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg">
                            Showing {destinations.length} trekking {destinations.length === 1 ? 'destination' : 'destinations'}
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
                                    <div className="absolute top-4 right-4">
                                        <Badge className={`${destination.difficulty === 'Easy' ? 'bg-green-600' :
                                            destination.difficulty === 'Moderate' ? 'bg-yellow-600' :
                                                destination.difficulty === 'Challenging' ? 'bg-orange-600' :
                                                    'bg-red-600'
                                            } text-white border-none`}>
                                            {destination.difficulty}
                                        </Badge>
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
                                            <Mountain size={16} className="text-accent-600" />
                                            <span className="text-gray-700">{destination.altitude}</span>
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
                            <p className="text-gray-500 text-lg">No trekking destinations available at the moment.</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Ready to Trek the Himalayas?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Let our experienced guides lead you on the adventure of a lifetime
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Plan Your Trek
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
