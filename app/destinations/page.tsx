import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { MapPin, Clock, TrendingUp, Star, Users, Calendar } from "lucide-react";

export const metadata = {
    title: "Destinations - Discover Nepal",
    description: "Explore our curated collection of destinations across Nepal - from cultural tours to Himalayan treks and helicopter adventures",
};

// Import destinations data (will be created)
const getDestinations = () => {
    try {
        return require("@/data/destinations.json");
    } catch {
        return [];
    }
};

export default function DestinationsPage() {
    const destinations = getDestinations();

    // Group by category
    const tours = destinations.filter((d: any) => d.category === 'tour');
    const shortTreks = destinations.filter((d: any) => d.category === 'short-trek');
    const hiking = destinations.filter((d: any) => d.category === 'hiking');
    const heliTours = destinations.filter((d: any) => d.category === 'heli-tour');

    const DestinationCard = ({ destination }: { destination: any }) => (
        <Card hover className="h-full flex flex-col group">
            <div className="relative h-64 overflow-hidden">
                <CardImage src={destination.featuredImage} alt={destination.name} />
                <div className="absolute top-4 right-4">
                    <Badge className="bg-accent-600 text-white border-none">
                        {destination.category === 'tour' && '🗺️ Tour'}
                        {destination.category === 'short-trek' && '🥾 Trek'}
                        {destination.category === 'hiking' && '⛰️ Hike'}
                        {destination.category === 'heli-tour' && '🚁 Heli Tour'}
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
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Discover <span className="text-accent-400">Nepal</span>
                        </h1>
                        <p className="text-xl text-primary-100 mb-8">
                            From ancient temples to towering peaks, from jungle safaris to sacred lakes -
                            explore our curated destinations across the incredible landscapes of Nepal
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#tours"><Button size="lg" variant="secondary">Tours</Button></Link>
                            <Link href="#treks"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Treks</Button></Link>
                            <Link href="#hiking"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Hiking</Button></Link>
                            <Link href="#heli"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Heli Tours</Button></Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Categories Stats */}
            <section className="py-12 bg-gray-50 border-b">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent-600 mb-2">{tours.length}</div>
                            <div className="text-gray-600">Tour Packages</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent-600 mb-2">{shortTreks.length}</div>
                            <div className="text-gray-600">Trek Routes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent-600 mb-2">{hiking.length}</div>
                            <div className="text-gray-600">Hiking Trails</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent-600 mb-2">{heliTours.length}</div>
                            <div className="text-gray-600">Heli Tours</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Destinations */}
            {destinations.filter((d: any) => d.featured).length > 0 && (
                <section className="py-16">
                    <Container>
                        <h2 className="font-heading font-bold text-4xl text-center mb-12">
                            Featured <span className="text-accent-600">Destinations</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations
                                .filter((d: any) => d.featured)
                                .slice(0, 6)
                                .map((destination: any) => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Tour Destinations */}
            {tours.length > 0 && (
                <section id="tours" className="py-16 bg-gray-50">
                    <Container>
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-bold text-4xl mb-2">
                                    Tour <span className="text-accent-600">Destinations</span>
                                </h2>
                                <p className="text-gray-600">Cultural tours, wildlife adventures, and pilgrimages</p>
                            </div>
                            <Link href="/destinations/tours">
                                <Button variant="outline">View All Tours</Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.slice(0, 3).map((destination: any) => (
                                <DestinationCard key={destination.id} destination={destination} />
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Trek Destinations */}
            {shortTreks.length > 0 && (
                <section id="treks" className="py-16">
                    <Container>
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-bold text-4xl mb-2">
                                    Trekking <span className="text-accent-600">Destinations</span>
                                </h2>
                                <p className="text-gray-600">Multi-day adventures through the Himalayas</p>
                            </div>
                            <Link href="/destinations/short-treks">
                                <Button variant="outline">View All Treks</Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {shortTreks.slice(0, 3).map((destination: any) => (
                                <DestinationCard key={destination.id} destination={destination} />
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Ready for Your Nepal Adventure?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Let our expert team help you plan the perfect journey through Nepal
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" variant="secondary">Plan Your Trip</Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                About Us
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
