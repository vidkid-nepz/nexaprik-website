import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import activitiesData from "@/data/activities.json";
import { Activity } from "@/lib/types/Activity";
import { ChevronRight, Check } from "lucide-react";

export const metadata = {
    title: "Activities",
    description: "Explore our range of adventure activities in Nepal - Trekking, Cultural Tours, Peak Climbing, and Expeditions",
};

export default function ActivitiesPage() {
    const activities = activitiesData as Activity[];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Our <span className="text-accent-400">Activities</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            From gentle cultural explorations to extreme high-altitude expeditions,
                            discover the perfect adventure for your spirit
                        </p>
                    </div>
                </Container>
            </section>

            {/* Activities Grid */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <Card key={activity.id} hover className="overflow-hidden">
                                <div className="relative h-64">
                                    <CardImage src={activity.image} alt={activity.name} />
                                    <div className="absolute top-4 left-4">
                                        <div className="text-6xl">{activity.icon}</div>
                                    </div>
                                </div>
                                <CardContent>
                                    <CardTitle className="text-3xl mb-3">{activity.name}</CardTitle>
                                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                        {activity.detailedDescription}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider mb-3">
                                            Key Features
                                        </h3>
                                        <div className="grid grid-cols-1 gap-2">
                                            {activity.features.slice(0, 4).map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <Check className="text-accent-600 mt-0.5 flex-shrink-0" size={18} />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t flex items-center justify-between">
                                        <div className="text-sm">
                                            <span className="text-gray-600">Difficulty: </span>
                                            <span className="font-semibold text-gray-900">{activity.difficultyRange}</span>
                                        </div>
                                        <Link href={`/activities/${activity.slug}`}>
                                            <Button variant="outline">
                                                Learn More
                                                <ChevronRight size={16} className="ml-1" />
                                            </Button>
                                        </Link>
                                    </div>
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
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        Contact our expert team to plan your perfect Himalayan experience
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">
                            Get in Touch
                            <ChevronRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
