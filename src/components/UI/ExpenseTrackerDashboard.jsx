import React from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  PlusCircle, 
  MoreHorizontal, 
  Calendar,
  PieChart,
  TrendingUp,
  Target
} from 'lucide-react';

const ExpenseTrackerDashboard = () => {
  // Sample Transaction Data
  const transactions = [
    { id: 1, name: 'Amazon Purchase', category: 'Shopping', amount: -12500, date: 'Today, 14:20', iconBg: 'bg-orange-100' },
    { id: 2, name: 'Monthly Salary', category: 'Income', amount: 150000, date: 'Yesterday', iconBg: 'bg-emerald-100' },
    { id: 3, name: 'Utility Bill', category: 'Fixed', amount: -8200, date: '04 April 2026', iconBg: 'bg-blue-100' },
    { id: 4, name: 'Starbucks Coffee', category: 'Food', amount: -1200, date: '02 April 2026', iconBg: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-[#F0F5FA] p-4 md:p-10 font-sans text-slate-800">
      {/* Glassmorphism Main Container */}
      <div className="max-w-[1600px] mx-auto bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden p-6 md:p-12">
        
        {/* Header Section */}
        <header className="flex flex-col items-start justify-between gap-6 mb-12 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Financial Overview</h1>
            <p className="mt-2 text-sm font-bold tracking-widest uppercase text-slate-400">System Status: Secure</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-4 font-bold transition-all border shadow-sm bg-white/80 hover:bg-white text-slate-900 border-slate-200 rounded-2xl">
              <Calendar size={20} />
              April 2026
            </button>
            <button className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 font-bold">
              <PlusCircle size={22} />
              Add Transaction
            </button>
          </div>
        </header>

        {/* Top Analytics Cards */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Main Balance Card (Dark Theme) */}
          <div className="bg-[#1E3A8A] p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-200">
             <div className="relative z-10">
               <div className="p-3 mb-6 bg-white/20 backdrop-blur-md rounded-xl w-fit">
                <Wallet className="text-white" size={24} />
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-blue-100/70">Total Balance</p>
              <h2 className="mt-1 text-4xl font-black">LKR 185,400</h2>
              <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                Live Update <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
            {/* Abstract Background Shape */}
            <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-white/10 blur-3xl"></div>
          </div>

          {/* Monthly Income Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Monthly Income</p>
              <h3 className="mt-2 text-4xl font-black text-slate-900">+150,000</h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 mt-4 text-sm font-bold rounded-lg text-emerald-600 bg-emerald-50 w-fit">
              <TrendingUp size={16} /> +12.5%
            </div>
          </div>

          {/* Expenses Progress Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Expenses Limit</p>
              <h3 className="mt-2 text-4xl font-black text-slate-900">24%</h3>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full bg-rose-500 w-[24%] rounded-full"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">LKR 21,900 spent</p>
            </div>
          </div>

          {/* Savings Goal Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Savings Target</p>
              <h3 className="mt-2 text-4xl font-black text-slate-900">72%</h3>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase">
               <Target size={16} /> Nearly there
            </div>
          </div>
        </div>

        {/* Lower Content Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* Recent Transactions List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between px-2 mb-8">
              <h3 className="text-2xl font-black text-slate-900">Recent Transactions</h3>
              <button className="text-sm font-bold text-[#1E3A8A] hover:bg-blue-50 px-4 py-2 rounded-xl transition-all">See All</button>
            </div>
            
            <div className="space-y-4">
              {transactions.map((t) => (
                <div key={t.id} className="group bg-white/40 hover:bg-white p-5 rounded-[2rem] flex items-center justify-between transition-all border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className={`h-14 w-14 rounded-2xl ${t.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                      {t.amount > 0 ? <ArrowUpRight className="text-emerald-600" /> : <ArrowDownRight className="text-rose-600" />}
                    </div>
                    <div>
                      <p className="text-lg font-bold tracking-tight text-slate-900">{t.name}</p>
                      <p className="text-xs font-bold tracking-tighter uppercase text-slate-400">{t.category} • {t.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-black ${t.amount > 0 ? 'text-emerald-500' : 'text-slate-900'}`}>
                      {t.amount > 0 ? `+${t.amount.toLocaleString()}` : t.amount.toLocaleString()}
                    </p>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">LKR</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Breakdown / Categories */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="flex items-center gap-2 mb-8 text-xl font-black text-slate-900">
                <PieChart size={20} className="text-blue-600" />
                Category Split
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Food & Dining', val: 45, color: 'bg-orange-400' },
                  { label: 'Entertainment', val: 20, color: 'bg-purple-400' },
                  { label: 'Transportation', val: 15, color: 'bg-blue-400' },
                  { label: 'Shopping', val: 20, color: 'bg-emerald-400' }
                ].map((cat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-xs font-bold tracking-wide uppercase text-slate-500">
                      <span>{cat.label}</span>
                      <span>{cat.val}%</span>
                    </div>
                    <div className="w-full h-2 overflow-hidden rounded-full bg-slate-50">
                      <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 mt-10 text-xs font-black tracking-widest uppercase transition-colors bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-2xl">
                View Full Report
              </button>
            </div>

            {/* Quick Tip Card */}
            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 relative overflow-hidden">
               <h4 className="mb-2 text-lg font-black text-emerald-900">Smart Saving</h4>
               <p className="text-sm leading-relaxed text-emerald-700/80">
                 You spent 15% less on <span className="font-bold">Dining</span> compared to last month. Great job!
               </p>
               <div className="absolute -right-4 -bottom-4 opacity-10">
                  <TrendingUp size={100} className="text-emerald-900" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboard;