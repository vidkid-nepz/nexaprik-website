import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { Testimonial } from "@/lib/types/Testimonial";

export const metadata = {
    title: "Testimonials",
    description: "Read reviews from our happy trekkers",
};

export default function TestimonialsPage() {
    const testimonials = testimonialsData as Testimonial[];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Client <span className="text-secondary-400">Testimonials</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            Real experiences from real adventurers who trusted us with their Himalayan dreams
                        </p>
                    </div>
                </Container>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="text-secondary-500"
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.reviewText}"
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t">
                                    <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-lg font-bold text-primary-700">
                                        {testimonial.customerName.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.customerName}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {testimonial.country} • {testimonial.trekName}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
