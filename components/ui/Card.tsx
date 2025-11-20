import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export default function Card({
    children,
    className,
    hover = false,
    onClick,
}: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-xl shadow-soft overflow-hidden",
                hover && "card-lift cursor-pointer",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

interface CardImageProps {
    src: string;
    alt: string;
    aspectRatio?: "square" | "video" | "portrait";
    className?: string;
}

export function CardImage({
    src,
    alt,
    aspectRatio = "video",
    className,
}: CardImageProps) {
    const aspectClasses = {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
    };

    return (
        <div className={cn("relative overflow-hidden", aspectClasses[aspectRatio])}>
            <img
                src={src}
                alt={alt}
                className={cn(
                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                    className
                )}
            />
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
    return (
        <h3
            className={cn(
                "font-heading font-semibold text-xl text-gray-900 mb-2",
                className
            )}
        >
            {children}
        </h3>
    );
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({
    children,
    className,
}: CardDescriptionProps) {
    return (
        <p className={cn("text-gray-600 text-sm leading-relaxed", className)}>
            {children}
        </p>
    );
}
