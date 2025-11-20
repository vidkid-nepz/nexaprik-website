export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    meals?: string;
    accommodation?: string;
}

export interface Destination {
    id: string;
    name: string;
    slug: string;
    category: 'tour' | 'short-trek' | 'hiking' | 'heli-tour';
    location: string;
    duration: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
    altitude: string;

    // Core Information
    overview: string; // 300+ words
    highlights: string[];
    detailedDescription: string; // 800+ words

    // Tourist Information
    bestTimeToVisit: string;
    whatToBring: string[];
    thingsToDo: string[];
    accommodation: string;
    transportation: string;
    localCuisine?: string;
    culturalTips: string[];

    // Logistics
    price: number;
    groupSize: string;
    included: string[];
    excluded: string[];
    itinerary?: ItineraryDay[];

    // Media
    featuredImage: string;
    gallery?: string[];

    // Meta
    rating: number;
    reviews: number;
    featured: boolean;
}
