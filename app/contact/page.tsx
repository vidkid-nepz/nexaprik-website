"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            Get in <span className="text-secondary-400">Touch</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            Have questions? We're here to help plan your perfect Himalayan adventure
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-soft p-8">
                            <h2 className="font-heading font-bold text-3xl mb-6">Send Us a Message</h2>

                            {submitted ? (
                                <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 text-center">
                                    <div className="text-4xl mb-4">✅</div>
                                    <h3 className="font-semibold text-xl text-accent-800 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <Input
                                        label="Full Name"
                                        placeholder="John Doe"
                                        required
                                    />
                                    <Input
                                        type="email"
                                        label="Email Address"
                                        placeholder="john@example.com"
                                        required
                                    />
                                    <Input
                                        type="tel"
                                        label="Phone Number"
                                        placeholder="+1 234 567 8900"
                                    />
                                    <Select
                                        label="Trek Interest"
                                        options={[
                                            { value: "", label: "Select a trek" },
                                            { value: "everest", label: "Everest Base Camp" },
                                            { value: "annapurna", label: "Annapurna Circuit" },
                                            { value: "langtang", label: "Langtang Valley" },
                                            { value: "other", label: "Other / General Inquiry" },
                                        ]}
                                    />
                                    <Input
                                        type="number"
                                        label="Number of People"
                                        placeholder="2"
                                        min="1"
                                    />
                                    <Textarea
                                        label="Message"
                                        placeholder="Tell us about your trekking plans..."
                                        rows={6}
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-soft p-8">
                                <h2 className="font-heading font-bold text-3xl mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg">
                                            <MapPin className="text-primary-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Office Address</h3>
                                            <p className="text-gray-600">
                                                Thamel, Kathmandu<br />
                                                Nepal 44600
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg">
                                            <Phone className="text-primary-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+9779841234567" className="hover:text-primary-600">
                                                    +977 984-1234567
                                                </a><br />
                                                <a href="tel:+9771234567" className="hover:text-primary-600">
                                                    +977 1-234567 (Office)
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg">
                                            <Mail className="text-primary-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@nepaladventure.com" className="hover:text-primary-600">
                                                    info@nepaladventure.com
                                                </a><br />
                                                <a href="mailto:bookings@nepaladventure.com" className="hover:text-primary-600">
                                                    bookings@nepaladventure.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg">
                                            <Clock className="text-primary-600" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Office Hours</h3>
                                            <p className="text-gray-600">
                                                Sunday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                <span className="text-sm text-gray-500">Nepal Time (NPT)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-xl shadow-soft overflow-hidden h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0191454389544!2d85.30938!3d27.715173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4f2b56bff%3A0x4c65e53c9c7d2f1e!2sThamel%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
