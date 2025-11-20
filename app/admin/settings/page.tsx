"use client";

import { useState, useEffect } from "react";
import { Settings, Save } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "",
        contactEmail: "",
        contactPhone: "",
        address: "",
        facebook: "",
        instagram: "",
        twitter: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/settings")
            .then((res) => res.json())
            .then((data) => {
                setSettings(data);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage("");

        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });

            if (res.ok) {
                setMessage("Settings saved successfully!");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage("Failed to save settings.");
            }
        } catch (error) {
            setMessage("An error occurred.");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="p-8">Loading settings...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-gray-100 p-3 rounded-full">
                    <Settings size={24} className="text-gray-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Global Settings</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
                {message && (
                    <div className={`p-4 rounded-lg ${message.includes("Failed") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                        {message}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Site Name"
                        name="siteName"
                        value={settings.siteName}
                        onChange={handleChange}
                    />
                    <Input
                        label="Contact Email"
                        name="contactEmail"
                        value={settings.contactEmail}
                        onChange={handleChange}
                    />
                    <Input
                        label="Contact Phone"
                        name="contactPhone"
                        value={settings.contactPhone}
                        onChange={handleChange}
                    />
                    <Input
                        label="Address"
                        name="address"
                        value={settings.address}
                        onChange={handleChange}
                    />
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input
                            label="Facebook URL"
                            name="facebook"
                            value={settings.facebook}
                            onChange={handleChange}
                        />
                        <Input
                            label="Instagram URL"
                            name="instagram"
                            value={settings.instagram}
                            onChange={handleChange}
                        />
                        <Input
                            label="Twitter URL"
                            name="twitter"
                            value={settings.twitter}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit" isLoading={isSaving} className="flex items-center gap-2">
                        <Save size={18} />
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
}
