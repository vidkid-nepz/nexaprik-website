"use client";

import { useState, useEffect } from "react";
import { FileText, Save } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function AdminContentPage() {
    const [content, setContent] = useState({
        homeHeroTitle: "",
        homeHeroSubtitle: "",
        aboutIntro: "",
        contactMessage: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/content")
            .then((res) => res.json())
            .then((data) => {
                setContent(data);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage("");

        try {
            const res = await fetch("/api/content", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(content),
            });

            if (res.ok) {
                setMessage("Content updated successfully!");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage("Failed to update content.");
            }
        } catch (error) {
            setMessage("An error occurred.");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="p-8">Loading content...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-50 p-3 rounded-full">
                    <FileText size={24} className="text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Page Content Management</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-8">
                {message && (
                    <div className={`p-4 rounded-lg ${message.includes("Failed") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                        {message}
                    </div>
                )}

                <section>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Home Page</h3>
                    <div className="space-y-4">
                        <Input
                            label="Hero Title"
                            name="homeHeroTitle"
                            value={content.homeHeroTitle}
                            onChange={handleChange}
                        />
                        <Textarea
                            label="Hero Subtitle"
                            name="homeHeroSubtitle"
                            value={content.homeHeroSubtitle}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">About Page</h3>
                    <div className="space-y-4">
                        <Textarea
                            label="Introduction Text"
                            name="aboutIntro"
                            value={content.aboutIntro}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Contact Page</h3>
                    <div className="space-y-4">
                        <Textarea
                            label="Contact Message"
                            name="contactMessage"
                            value={content.contactMessage}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>
                </section>

                <div className="flex justify-end pt-4">
                    <Button type="submit" isLoading={isSaving} className="flex items-center gap-2">
                        <Save size={18} />
                        Save Content
                    </Button>
                </div>
            </form>
        </div>
    );
}
