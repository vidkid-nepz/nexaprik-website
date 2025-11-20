"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";
import Button from "@/components/ui/Button";

interface BookingModalProps {
    destinationId: string;
    destinationName: string;
    trigger?: React.ReactNode;
}

export default function BookingModal({ destinationId, destinationName, trigger }: BookingModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsSuccess(false);
        }, 2000);
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)}>
                {trigger || <Button>Book Now</Button>}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
                        >
                            <div
                                className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 border-b flex justify-between items-center bg-gray-50 flex-shrink-0">
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-gray-900">
                                            Book Your Trip
                                        </h3>
                                        <p className="text-sm text-gray-500">{destinationName}</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                    >
                                        <X size={20} className="text-gray-500" />
                                    </button>
                                </div>

                                <div className="p-6 overflow-y-auto flex-1">
                                    {isSuccess ? (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Booking Received!</h4>
                                            <p className="text-gray-600">
                                                We'll be in touch shortly to confirm your adventure.
                                            </p>
                                        </div>
                                    ) : (
                                        <BookingForm
                                            destinationId={destinationId}
                                            destinationName={destinationName}
                                            onSuccess={handleSuccess}
                                            onCancel={() => setIsOpen(false)}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
