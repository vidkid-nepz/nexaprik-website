export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category: string;
    tags: string[];
    author: {
        name: string;
        avatar?: string;
    };
    publishedAt: string;
    updatedAt?: string;
    status: "draft" | "published";
    metaTitle?: string;
    metaDescription?: string;
    readTime?: number; // in minutes
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    postCount: number;
}
