import React from 'react';
import { Map, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <div className="text-sm text-gray-500">
                    Welcome back, Admin
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Destinations"
                    value="12"
                    icon={<Map className="text-blue-600" size={24} />}
                    trend="+8 this week"
                    trendUp={true}
                />
                <StatCard
                    title="Total Bookings"
                    value="156"
                    icon={<Users className="text-green-600" size={24} />}
                    trend="+12% vs last month"
                    trendUp={true}
                />
                <StatCard
                    title="Average Rating"
                    value="4.8"
                    icon={<Star className="text-yellow-500" size={24} />}
                    trend="Based on 450 reviews"
                    trendUp={true}
                />
                <StatCard
                    title="Revenue"
                    value="$45.2k"
                    icon={<TrendingUp className="text-purple-600" size={24} />}
                    trend="+5% vs last month"
                    trendUp={true}
                />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/destinations/new" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center gap-2 group">
                            <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                                <Map className="text-blue-600" size={20} />
                            </div>
                            <span className="font-medium text-gray-700">Add Destination</span>
                        </Link>
                        <Link href="/admin/content" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-center gap-2 group">
                            <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                                <Users className="text-green-600" size={20} />
                            </div>
                            <span className="font-medium text-gray-700">View Bookings</span>
                        </Link>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <ActivityItem
                            action="New Destination Added"
                            target="Everest Base Camp Heli Tour"
                            time="2 hours ago"
                        />
                        <ActivityItem
                            action="Content Updated"
                            target="Annapurna Circuit Trek"
                            time="5 hours ago"
                        />
                        <ActivityItem
                            action="New Review"
                            target="Pokhara Lakeside Tour (5 stars)"
                            time="1 day ago"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, trend, trendUp }: { title: string, value: string, icon: React.ReactNode, trend: string, trendUp: boolean }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">
                    {icon}
                </div>
            </div>
            <div className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                {trend}
            </div>
        </div>
    );
}

function ActivityItem({ action, target, time }: { action: string, target: string, time: string }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <div>
                <p className="font-medium text-gray-800">{action}</p>
                <p className="text-sm text-gray-500">{target}</p>
            </div>
            <span className="text-xs text-gray-400">{time}</span>
        </div>
    );
}
