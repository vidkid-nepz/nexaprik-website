import Link from "next/link";
import Container from "@/components/layout/Container";
import Card, { CardContent, CardImage, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Clock, Calendar, User } from "lucide-react";
import blogsData from "@/data/blogs.json";
import { BlogPost } from "@/lib/types/Blog";
import { formatDate } from "@/lib/utils";

export const metadata = {
    title: "Blog",
    description: "Travel tips, trekking guides, and adventure stories from Nepal",
};

export default function BlogPage() {
    const blogs = blogsData as BlogPost[];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Travel <span className="text-secondary-400">Blog</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            Expert guides, travel tips, and inspiring stories from the Himalayas
                        </p>
                    </div>
                </Container>
            </section>

            {/* Blog Grid */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post) => (
                            <Card key={post.id} hover className="group h-full flex flex-col">
                                <CardImage src={post.featuredImage} alt={post.title} />
                                <CardContent className="flex-1 flex flex-col">
                                    <div className="mb-3">
                                        <Badge variant="info">{post.category}</Badge>
                                    </div>
                                    <CardTitle className="group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                    <p className="text-gray-600 text-sm mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t">
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{formatDate(post.publishedAt)}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{post.readTime} min</span>
                                        </div>
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
