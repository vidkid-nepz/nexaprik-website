import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "danger" | "info";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Badge({
    children,
    variant = "default",
    size = "md",
    className,
}: BadgeProps) {
    const variants = {
        default: "bg-gray-100 text-gray-800",
        success: "bg-accent-100 text-accent-800",
        warning: "bg-secondary-100 text-secondary-800",
        danger: "bg-red-100 text-red-800",
        info: "bg-primary-100 text-primary-800",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center font-medium rounded-full",
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </span>
    );
}
