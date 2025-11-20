import Link from "next/link";
import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, ChevronRight } from "lucide-react";
import treksData from "@/data/treks.json";
import { Trek } from "@/lib/types/Trek";
import { formatPrice, getDifficultyColor } from "@/lib/utils";

export const metadata = {
    title: "All Treks",
    description: "Explore our complete collection of trekking adventures in Nepal",
};

export default function TreksPage() {
    const treks = treksData as Trek[];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Explore Nepal <span className="text-secondary-400">Treks</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            Choose from our curated collection of trekking adventures across the Himalayas
                        </p>
                    </div>
                </Container>
            </section>

            {/* Trek Grid */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treks.map((trek) => (
                            <Card key={trek.id} hover className="group h-full flex flex-col">
                                <div className="relative overflow-hidden">
                                    <CardImage src={trek.featuredImage} alt={trek.name} />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        {trek.popular && (
                                            <Badge variant="warning" className="shadow-lg">
                                                🔥 Popular
                                            </Badge>
                                        )}
                                        {trek.featured && (
                                            <Badge variant="info" className="shadow-lg">
                                                ⭐ Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <Badge className={getDifficultyColor(trek.difficulty)}>
                                            {trek.difficulty}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                        <span className="text-primary-600">📍 {trek.region}</span>
                                        <span>•</span>
                                        <span>{trek.duration} days</span>
                                        <span>•</span>
                                        <span>{trek.maxAltitude}m</span>
                                    </div>
                                    <CardTitle>{trek.name}</CardTitle>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {trek.overview}
                                    </p>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex text-secondary-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    fill={
                                                        i < Math.floor(trek.rating) ? "currentColor" : "none"
                                                    }
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {trek.rating} ({trek.reviewCount})
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div>
                                            <span className="text-sm text-gray-500">From</span>
                                            <div className="font-bold text-2xl text-primary-600">
                                                {formatPrice(trek.price)}
                                            </div>
                                        </div>
                                        <Link href={`/treks/${trek.slug}`}>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                                            >
                                                View Details
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
        </div>
    );
}
