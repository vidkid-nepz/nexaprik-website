import Container from "@/components/layout/Container";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import activitiesData from "@/data/activities.json";
import { Activity } from "@/lib/types/Activity";
import { Check, Mountain, Users, Shield, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Himalayan Expeditions",
    description: "Join world-class expeditions to the highest peaks on Earth with comprehensive support",
};

export default function ExpeditionsPage() {
    const activity = activitiesData.find(a => a.slug === "expeditions") as Activity;

    const expeditions = [
        { name: "Mount Everest", altitude: "8,849m", duration: "60+ days", season: "Spring/Autumn" },
        { name: "Cho Oyu", altitude: "8,188m", duration: "50-55 days", season: "Spring/Autumn" },
        { name: "Manaslu", altitude: "8,163m", duration: "45-50 days", season: "Spring/Autumn" },
        { name: "Ama Dablam", altitude: "6,812m", duration: "30-35 days", season: "Spring/Autumn" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={activity.image} alt="Expeditions" className="w-full h-full object-cover" />
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
                            Conquer the <span className="text-accent-600">Highest Peaks</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {activity.detailedDescription}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our expedition team has decades of collective experience on the world's tallest mountains.
                            We provide complete expedition management from basecamp setup to summit support, utilizing
                            the latest equipment and weather forecasting technology to maximize safety and success rates.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Expedition <span className="text-primary-600">Excellence</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <Mountain className="text-accent-600" size={64} />
                            </div>
                            <h3 className="font-heading font-semibold text-2xl mb-3">Expert Team</h3>
                            <p className="text-gray-600">
                                Western guides and elite Sherpa climbers with multiple 8,000m summits
                            </p>
                        </Card>
                        <Card className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <Shield className="text-accent-600" size={64} />
                            </div>
                            <h3 className="font-heading font-semibold text-2xl mb-3">Complete Safety</h3>
                            <p className="text-gray-600">
                                Advanced rescue equipment, satellite phones, and comprehensive insurance
                            </p>
                        </Card>
                        <Card className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <Users className="text-accent-600" size={64} />
                            </div>
                            <h3 className="font-heading font-semibold text-2xl mb-3">Full Support</h3>
                            <p className="text-gray-600">
                                From permits to basecamp setup, we handle every detail of your expedition
                            </p>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Expedition Peaks */}
            <section className="py-16">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Available <span className="text-accent-600">Expeditions</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expeditions.map((expedition, index) => (
                            <Card key={index} className="p-8">
                                <h3 className="font-heading font-semibold text-3xl mb-4 text-accent-600">
                                    {expedition.name}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-500">Summit</div>
                                        <div className="font-semibold text-lg text-gray-900">{expedition.altitude}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Duration</div>
                                        <div className="font-semibold text-lg text-gray-900">{expedition.duration}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Best Season</div>
                                        <div className="font-semibold text-lg text-gray-900">{expedition.season}</div>
                                    </div>
                                    <div className="flex items-end">
                                        <Link href="/contact" className="w-full">
                                            <Button variant="outline" size="sm" className="w-full">
                                                Inquire
                                            </Button>
                                        </Link>
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
                        Ready for the Ultimate Challenge?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Contact our expedition team to discuss your high-altitude mountaineering goals
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Plan Your Expedition
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
