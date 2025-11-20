'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Destination } from '@/lib/types/Destination';
import { Save, ArrowLeft, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import ImageUpload from './ImageUpload';

interface DestinationFormProps {
    initialData?: Destination;
    isEditMode?: boolean;
}

export default function DestinationForm({ initialData, isEditMode = false }: DestinationFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Destination>>(
        initialData || {
            name: '',
            slug: '',
            category: 'tour',
            location: '',
            duration: '',
            difficulty: 'Moderate',
            altitude: '',
            price: 0,
            overview: '',
            highlights: [''],
            detailedDescription: '',
            bestTimeToVisit: '',
            whatToBring: [''],
            thingsToDo: [''],
            accommodation: '',
            transportation: '',
            localCuisine: '',
            culturalTips: [''],
            groupSize: '',
            included: [''],
            excluded: [''],
            featuredImage: '/images/hero-everest.jpg', // Default placeholder
            rating: 5.0,
            reviews: 0,
            featured: false,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value
        }));
    };

    const handleArrayChange = (index: number, value: string, field: keyof Destination) => {
        const newArray = [...(formData[field] as string[])];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const addArrayItem = (field: keyof Destination) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...(prev[field] as string[]), '']
        }));
    };

    const removeArrayItem = (index: number, field: keyof Destination) => {
        const newArray = [...(formData[field] as string[])];
        newArray.splice(index, 1);
        setFormData(prev => ({ ...prev, [field]: newArray }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEditMode
                ? `/api/destinations/${initialData?.slug}`
                : '/api/destinations';

            const method = isEditMode ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    id: isEditMode ? initialData?.id : formData.slug, // Ensure ID is set
                }),
            });

            if (response.ok) {
                router.push('/admin/destinations');
                router.refresh();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error saving destination:', error);
            alert('Failed to save destination');
        } finally {
            setLoading(false);
        }
    };

    // Helper to render array input fields
    const renderArrayField = (label: string, field: keyof Destination) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            {(formData[field] as string[]).map((item, index) => (
                <div key={index} className="flex gap-2">
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange(index, e.target.value, field)}
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => removeArrayItem(index, field)}
                        className="text-red-500 hover:text-red-700 p-2"
                    >
                        <Trash size={18} />
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => addArrayItem(field)}
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            >
                <Plus size={16} /> Add Item
            </button>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto pb-20">
            <div className="flex items-center justify-between sticky top-0 bg-gray-100 py-4 z-10 border-b border-gray-200 mb-6">
                <div className="flex items-center gap-4">
                    <Link href="/admin/destinations" className="text-gray-500 hover:text-gray-700">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {isEditMode ? `Edit: ${formData.name}` : 'New Destination'}
                    </h1>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                    <Save size={20} />
                    {loading ? 'Saving...' : 'Save Destination'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="tour">Tour</option>
                                <option value="short-trek">Short Trek</option>
                                <option value="hiking">Hiking</option>
                                <option value="heli-tour">Heli Tour</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                            <select
                                name="difficulty"
                                value={formData.difficulty}
                                onChange={handleChange}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="Easy">Easy</option>
                                <option value="Moderate">Moderate</option>
                                <option value="Challenging">Challenging</option>
                                <option value="Strenuous">Strenuous</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="e.g. 5 days"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Altitude</label>
                        <input
                            type="text"
                            name="altitude"
                            value={formData.altitude}
                            onChange={handleChange}
                            placeholder="e.g. 5,545m"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <ImageUpload
                            label="Featured Image"
                            value={formData.featuredImage}
                            onChange={(url) => setFormData(prev => ({ ...prev, featuredImage: url }))}
                        />
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <input
                            type="checkbox"
                            name="featured"
                            checked={formData.featured}
                            onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                            className="h-4 w-4 text-blue-600 rounded"
                        />
                        <label className="text-sm font-medium text-gray-700">Mark as Featured</label>
                    </div>
                </div>

                {/* Description & Details */}
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Content & Details</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Overview</label>
                        <textarea
                            name="overview"
                            value={formData.overview}
                            onChange={handleChange}
                            rows={3}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Detailed Description</label>
                        <textarea
                            name="detailedDescription"
                            value={formData.detailedDescription}
                            onChange={handleChange}
                            rows={8}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Best Time to Visit</label>
                        <input
                            type="text"
                            name="bestTimeToVisit"
                            value={formData.bestTimeToVisit}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>

            {/* Lists Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
                    <h2 className="text-xl font-semibold">Highlights & Activities</h2>
                    {renderArrayField('Highlights', 'highlights')}
                    {renderArrayField('Things To Do', 'thingsToDo')}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
                    <h2 className="text-xl font-semibold">Logistics</h2>
                    {renderArrayField('Included', 'included')}
                    {renderArrayField('Excluded', 'excluded')}
                    {renderArrayField('What To Bring', 'whatToBring')}
                    {renderArrayField('Cultural Tips', 'culturalTips')}
                </div>
            </div>

            {/* Extra Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Accommodation</label>
                        <textarea
                            name="accommodation"
                            value={formData.accommodation}
                            onChange={handleChange}
                            rows={2}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Transportation</label>
                        <textarea
                            name="transportation"
                            value={formData.transportation}
                            onChange={handleChange}
                            rows={2}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Local Cuisine</label>
                        <textarea
                            name="localCuisine"
                            value={formData.localCuisine}
                            onChange={handleChange}
                            rows={2}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Group Size</label>
                        <input
                            type="text"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
