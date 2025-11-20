export interface Testimonial {
    id: string;
    customerName: string;
    country: string;
    trekName: string;
    trekSlug: string;
    rating: number; // 1-5
    reviewText: string;
    customerPhoto?: string;
    date: string;
    featured: boolean;
    status: "pending" | "approved" | "rejected";
    createdAt: string;
}

export interface TestimonialFormData {
    customerName: string;
    country: string;
    trekName: string;
    rating: number;
    reviewText: string;
    customerPhoto?: File;
}
