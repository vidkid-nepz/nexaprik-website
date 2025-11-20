"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { Calendar, Users, Mail, Phone, User } from "lucide-react";

interface BookingFormProps {
    destinationId?: string;
    destinationName?: string;
    onSuccess?: () => void;
    onCancel?: () => void;
}

export default function BookingForm({ destinationId, destinationName, onSuccess, onCancel }: BookingFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            destinationId,
            destinationName,
            customerName: formData.get("customerName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            date: formData.get("date"),
            guests: Number(formData.get("guests")),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit booking");
            }

            if (onSuccess) {
                onSuccess();
            } else {
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <Input
                    name="customerName"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    icon={<User size={18} />}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="john@example.com"
                        required
                        icon={<Mail size={18} />}
                    />
                    <Input
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="+1 234 567 890"
                        required
                        icon={<Phone size={18} />}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        name="date"
                        type="date"
                        label="Preferred Date"
                        required
                        icon={<Calendar size={18} />}
                    />
                    <Input
                        name="guests"
                        type="number"
                        label="Number of Guests"
                        placeholder="2"
                        min="1"
                        required
                        icon={<Users size={18} />}
                    />
                </div>
                <Textarea
                    name="message"
                    label="Special Requests / Message"
                    placeholder="Any dietary requirements or special requests?"
                    rows={4}
                />
            </div>

            <div className="flex gap-3 pt-2">
                {onCancel && (
                    <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
                        Cancel
                    </Button>
                )}
                <Button type="submit" isLoading={isSubmitting} className="flex-1 bg-accent-600 hover:bg-accent-700">
                    Confirm Booking
                </Button>
            </div>
        </form>
    );
}
