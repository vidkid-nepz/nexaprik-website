import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(price);
}

export function formatDate(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(d);
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function getDifficultyColor(difficulty: string): string {
    const colors: { [key: string]: string } = {
        easy: "bg-accent-500 text-white",
        moderate: "bg-primary-500 text-white",
        challenging: "bg-secondary-500 text-white",
        strenuous: "bg-red-600 text-white",
    };
    return colors[difficulty.toLowerCase()] || colors.moderate;
}

export function getRegionColor(region: string): string {
    const colors: { [key: string]: string } = {
        everest: "text-primary-600",
        annapurna: "text-secondary-600",
        langtang: "text-accent-600",
        manaslu: "text-purple-600",
        mustang: "text-orange-600",
    };
    return colors[region.toLowerCase()] || "text-gray-600";
}
