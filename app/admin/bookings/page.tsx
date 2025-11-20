"use client";

import { useState, useEffect } from "react";
import { Booking } from "@/lib/types/Booking";
import { Calendar, Mail, Phone, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function AdminBookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch("/api/bookings");
            if (response.ok) {
                const data = await response.json();
                setBookings(data);
            }
        } catch (error) {
            console.error("Failed to fetch bookings", error);
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "confirmed":
                return <Badge className="bg-green-100 text-green-800 border-green-200">Confirmed</Badge>;
            case "cancelled":
                return <Badge className="bg-red-100 text-red-800 border-red-200">Cancelled</Badge>;
            default:
                return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center">Loading bookings...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
                <div className="text-sm text-gray-500">
                    Total: {bookings.length}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Customer</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Destination</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Date & Guests</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No bookings found.
                                    </td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{booking.customerName}</div>
                                            <div className="text-xs text-gray-500 mt-1">ID: {booking.id}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-900">{booking.destinationName || "General Inquiry"}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Calendar size={14} />
                                                <span>{booking.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                                <Users size={14} />
                                                <span>{booking.guests} Guests</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(booking.status)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <a href={`mailto:${booking.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600">
                                                    <Mail size={14} />
                                                    {booking.email}
                                                </a>
                                                <a href={`tel:${booking.phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent-600">
                                                    <Phone size={14} />
                                                    {booking.phone}
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
