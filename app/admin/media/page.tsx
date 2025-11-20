"use client";

import { useState, useEffect } from "react";
import ImageUpload from "@/components/admin/ImageUpload";
import { Trash, Copy, Check } from "lucide-react";
import Image from "next/image";

interface MediaFile {
    name: string;
    url: string;
    size: number;
    createdAt: string;
}

export default function MediaLibraryPage() {
    const [files, setFiles] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState<string | null>(null);

    const fetchFiles = async () => {
        try {
            const res = await fetch("/api/media");
            const data = await res.json();
            setFiles(data.files);
        } catch (error) {
            console.error("Error fetching files:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleDelete = async (filename: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return;

        try {
            const res = await fetch("/api/media", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ filename }),
            });

            if (res.ok) {
                fetchFiles();
            } else {
                alert("Failed to delete file");
            }
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopied(url);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleUploadSuccess = (url: string) => {
        fetchFiles();
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
            </div>

            {/* Upload Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Upload New Image</h2>
                <ImageUpload onChange={handleUploadSuccess} label="Select or Drop Image" />
            </div>

            {/* Gallery */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-6">Uploaded Images</h2>

                {loading ? (
                    <div className="text-center py-12 text-gray-500">Loading media...</div>
                ) : files.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">No images uploaded yet.</div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {files.map((file) => (
                            <div key={file.name} className="group relative bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                                <div className="aspect-square relative">
                                    <Image
                                        src={file.url}
                                        alt={file.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleCopy(file.url)}
                                            className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                                            title="Copy URL"
                                        >
                                            {copied === file.url ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(file.name)}
                                            className="p-2 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs text-gray-500 truncate" title={file.name}>
                                        {file.name}
                                    </p>
                                    <p className="text-[10px] text-gray-400 mt-1">
                                        {(file.size / 1024).toFixed(1)} KB
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
