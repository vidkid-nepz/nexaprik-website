import Container from "@/components/layout/Container";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import activitiesData from "@/data/activities.json";
import treksData from "@/data/treks.json";
import { Activity } from "@/lib/types/Activity";
import { Trek } from "@/lib/types/Trek";
import { Check, Mountain, Calendar, TrendingUp, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Trekking in Nepal",
    description: "Experience world-class trekking in the Himalayas with expert guides and premium service",
};

export default function TrekkingPage() {
    const activity = activitiesData.find(a => a.slug === "trekking") as Activity;
    const trekkingTrips = treksData.slice(0, 6) as Trek[];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={activity.image} alt="Trekking" className="w-full h-full object-cover" />
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
                            Discover <span className="text-accent-600">Himalayan Trekking</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {activity.detailedDescription}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nepal is home to eight of the world's fourteen 8,000-meter peaks, including Mount Everest.
                            Our trekking routes traverse diverse landscapes - from subtropical forests to alpine meadows,
                            from traditional Sherpa villages to remote Buddhist monasteries. Every trek is a journey through
                            stunning natural beauty and rich cultural heritage.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        What Makes Our Treks <span className="text-primary-600">Special</span>
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

            {/* Trek Highlights */}
            <section className="py-16">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Popular <span className="text-accent-600">Trekking Routes</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trekkingTrips.map((trek) => (
                            <Card key={trek.id} hover className="h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={trek.featuredImage} alt={trek.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                                </div>
                                <CardContent className="flex-1 flex flex-col">
                                    <h3 className="font-heading font-semibold text-xl mb-3">{trek.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                                        {trek.overview}
                                    </p>
                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar size={16} />
                                            <span>{trek.duration} days</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <TrendingUp size={16} />
                                            <span>Max altitude: {trek.maxAltitude}m</span>
                                        </div>
                                    </div>
                                    <Link href={`/treks/${trek.slug}`}>
                                        <Button variant="outline" className="w-full">
                                            View Details
                                            <ChevronRight size={16} className="ml-2" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/treks">
                            <Button size="lg">
                                View All Treks
                                <ChevronRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Best Seasons */}
            <section className="py-16 bg-primary-900 text-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading font-bold text-4xl mb-6">
                            Best Time for <span className="text-accent-400">Trekking</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {activity.bestSeasons.map((season, index) => (
                                <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                                    <h3 className="font-heading font-semibold text-2xl text-accent-400 mb-3">
                                        {season}
                                    </h3>
                                    <p className="text-primary-100">
                                        {index === 0 ?
                                            "Clear skies, moderate temperatures, and blooming rhododendrons make spring perfect for trekking" :
                                            "Stable weather, crystal-clear mountain views, and comfortable temperatures offer ideal conditions"
                                        }
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Ready to Trek the Himalayas?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let us create a customized trekking experience tailored to your preferences and fitness level
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg">
                                Plan Your Trek
                                <ChevronRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                        <Link href="/treks">
                            <Button size="lg" variant="outline">
                                Browse All Treks
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
