import Container from "@/components/layout/Container";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import activitiesData from "@/data/activities.json";
import { Activity } from "@/lib/types/Activity";
import { Check, Mountain, AlertTriangle, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Peak Climbing in Nepal",
    description: "Summit Nepal's magnificent trekking peaks with professional guides and comprehensive support",
};

export default function PeakClimbingPage() {
    const activity = activitiesData.find(a => a.slug === "peak-climbing") as Activity;

    const peaks = [
        { name: "Island Peak", altitude: "6,189m", difficulty: "Moderate", duration: "14-16 days" },
        { name: "Mera Peak", altitude: "6,476m", difficulty: "Moderate", duration: "16-18 days" },
        { name: "Lobuche East", altitude: "6,119m", difficulty: "Challenging", duration: "14-16 days" },
        { name: "Pisang Peak", altitude: "6,091m", difficulty: "Moderate", duration: "12-14 days" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={activity.image} alt="Peak Climbing" className="w-full h-full object-cover" />
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
                            Climb the <span className="text-accent-600">Himalayan Peaks</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {activity.detailedDescription}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nepal's trekking peaks offer the perfect introduction to high-altitude mountaineering.
                            These officially designated peaks range from 5,500m to 6,500m and provide excellent opportunities
                            to develop climbing skills while experiencing the thrill of summiting a Himalayan peak.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Safety Notice */}
            <section className="py-12 bg-accent-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="text-accent-600 mt-1 flex-shrink-0" size={32} />
                            <div>
                                <h3 className="font-heading font-semibold text-2xl mb-3">Safety First</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Peak climbing requires proper acclimatization, technical skills, and physical fitness.
                                    Our experienced guides ensure comprehensive safety protocols, emergency rescue plans,
                                    and thorough pre-climb training for all participants.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        What We <span className="text-primary-600">Provide</span>
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

            {/* Popular Peaks */}
            <section className="py-16">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Popular <span className="text-accent-600">Climbing Peaks</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {peaks.map((peak, index) => (
                            <Card key={index} className="p-8">
                                <div className="flex items-center gap-4">
                                    <Mountain className="text-accent-600" size={48} />
                                    <div className="flex-1">
                                        <h3 className="font-heading font-semibold text-2xl mb-2">{peak.name}</h3>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <div className="text-gray-500">Altitude</div>
                                                <div className="font-semibold text-gray-900">{peak.altitude}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-500">Difficulty</div>
                                                <div className="font-semibold text-gray-900">{peak.difficulty}</div>
                                            </div>
                                            <div>
                                                <div className="text-gray-500">Duration</div>
                                                <div className="font-semibold text-gray-900">{peak.duration}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-900 text-white">
                <Container className="text-center">
                    <h2 className="font-heading font-bold text-4xl mb-4">
                        Ready for Your Summit?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Achieve your mountaineering goals with expert guidance and complete support
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Plan Your Climb
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
