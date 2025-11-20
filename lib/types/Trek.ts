export interface Trek {
    id: string;
    slug: string;
    name: string;
    region: string;
    activity: string;
    duration: number; // in days
    difficulty: "easy" | "moderate" | "challenging" | "strenuous";
    maxAltitude: number; // in meters
    bestSeasons: string[];
    price: number; // in USD
    groupSize: {
        min: number;
        max: number;
    };
    overview: string;
    highlights: string[];
    itinerary: ItineraryDay[];
    costIncludes: string[];
    costExcludes: string[];
    images: string[];
    featuredImage: string;
    rating: number;
    reviewCount: number;
    featured: boolean;
    popular: boolean;
    metaTitle?: string;
    metaDescription?: string;
    publishedAt: string;
    status: "draft" | "published";
}

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    altitude?: number;
    distance?: string;
    duration?: string;
}

export interface TrekFilters {
    region?: string[];
    duration?: {
        min?: number;
        max?: number;
    };
    difficulty?: string[];
    priceRange?: {
        min?: number;
        max?: number;
    };
    season?: string[];
    search?: string;
}

export interface TrekSortOption {
    field: "popular" | "price" | "duration" | "difficulty" | "name";
    order: "asc" | "desc";
}
