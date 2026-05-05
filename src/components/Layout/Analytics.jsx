import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, CreditCard, Activity } from 'lucide-react';

const data = [
    { name: 'Mon', amount: 4000 },
    { name: 'Tue', amount: 3000 },
    { name: 'Wed', amount: 2000 },
    { name: 'Thu', amount: 2780 },
    { name: 'Fri', amount: 1890 },
    { name: 'Sat', amount: 2390 },
    { name: 'Sun', amount: 3490 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const Analytics = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Analytics Overview</h1>
                <p className="text-slate-400">Track your spending habits and financial health.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { title: 'Total Expenses', value: '$4,250', icon: <Wallet className="text-blue-500" />, trend: '+12%', up: true },
                    { title: 'Monthly Budget', value: '$5,000', icon: <CreditCard className="text-emerald-500" />, trend: '-2%', up: false },
                    { title: 'Daily Average', value: '$141', icon: <Activity className="text-amber-500" />, trend: '+5%', up: true },
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-slate-800 rounded-xl">{stat.icon}</div>
                            <span className={`flex items-center text-sm font-medium ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                                {stat.trend} {stat.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                            </span>
                        </div>
                        <h3 className="text-slate-400 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Spending Chart */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <TrendingUp size={20} className="text-blue-500" /> Weekly Spending
                        </h3>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                                <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Expense Categories (Mock Chart) */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-6">Category Breakdown</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                                />
                                <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;