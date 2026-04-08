import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, PlusCircle } from 'lucide-react';

const ExpenseTrackerDashboardContent = () => {
  // Sample data for transactions
  const transactions = [
    { id: 1, name: 'Grocery Shopping', category: 'Food', amount: -4500, date: '2026-04-05' },
    { id: 2, name: 'Freelance Project', category: 'Income', amount: 25000, date: '2026-04-04' },
    { id: 3, name: 'Electricity Bill', category: 'Utilities', amount: -3200, date: '2026-04-03' },
    { id: 4, name: 'Fuel', category: 'Transport', amount: -1500, date: '2026-04-02' },
  ];

  return (
    // Main Container - Removed Nav section
    // Use bg-gray-50 or bg-white based on your existing layout's needs
    <div className="min-h-screen p-6 font-sans text-gray-900 bg-gray-50 md:p-8">
      
      {/* Main Content Area */}
      <div className="max-w-[1700px] mx-auto">
        
        {/* Top Header Section with Title and Add Button */}
        <header className="flex flex-col items-start justify-between gap-4 mb-10 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-950">Financial Overview</h1>
            <p className="mt-1 text-sm text-gray-600 md:text-base">Monitor your spending and income activities here.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-sm hover:shadow transition-all font-medium whitespace-nowrap">
            <PlusCircle size={20} />
            Add New Transaction
          </button>
        </header>

        {/* Summary Statistics Cards Row */}
        <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-3">
          {/* Total Balance Card */}
          <div className="transition-shadow bg-white border border-gray-100 shadow-sm p-7 rounded-3xl hover:shadow-md">
            <div className="flex items-start justify-between mb-5">
              <div className="p-3 border border-blue-100 bg-blue-50 rounded-2xl">
                <Wallet className="text-blue-600" size={26} />
              </div>
              <span className="px-3 py-1 text-xs font-medium text-blue-700 rounded-full bg-blue-50">Primary Account</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Total Balance</p>
            <h2 className="text-4xl font-extrabold mt-1.5 text-gray-950">LKR 45,800.00</h2>
            <p className="mt-4 text-sm text-gray-500">Updated just now</p>
          </div>

          {/* Monthly Income Card */}
          <div className="transition-shadow bg-white border border-gray-100 shadow-sm p-7 rounded-3xl hover:shadow-md">
            <div className="flex items-start justify-between mb-5">
              <div className="p-3 border bg-emerald-50 rounded-2xl border-emerald-100">
                <ArrowUpRight className="text-emerald-600" size={26} />
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full text-emerald-700 bg-emerald-50">+12% from last month</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Monthly Income</p>
            <h2 className="text-4xl font-extrabold mt-1.5 text-emerald-600">+ LKR 75,000</h2>
            <p className="mt-4 text-sm text-gray-500">Total from all sources</p>
          </div>

          {/* Monthly Expenses Card */}
          <div className="transition-shadow bg-white border border-gray-100 shadow-sm p-7 rounded-3xl hover:shadow-md">
            <div className="flex items-start justify-between mb-5">
              <div className="p-3 border bg-rose-50 rounded-2xl border-rose-100">
                <ArrowDownRight className="text-rose-600" size={26} />
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full text-rose-700 bg-rose-50">Within Limit</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Monthly Expenses</p>
            <h2 className="text-4xl font-extrabold mt-1.5 text-rose-600">- LKR 29,200</h2>
            <p className="mt-4 text-sm text-gray-500">Based on current cycle</p>
          </div>
        </div>

        {/* Detailed Insights Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Recent Transactions Table Component */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm lg:col-span-2 rounded-3xl">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-950">Recent Transactions</h3>
                <button className="px-3 py-1 text-sm font-medium transition rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">Description</th>
                    <th className="pb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">Category</th>
                    <th className="pb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">Date</th>
                    <th className="pb-4 text-sm font-semibold tracking-wider text-right text-gray-500 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactions.map((t) => (
                    <tr key={t.id} className="transition-colors hover:bg-gray-50/80">
                      <td className="py-5 font-semibold text-gray-900">{t.name}</td>
                      <td className="py-5">
                        <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full">{t.category}</span>
                      </td>
                      <td className="py-5 text-sm text-gray-600">{t.date}</td>
                      <td className={`py-5 text-right font-bold text-lg ${t.amount > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {t.amount > 0 ? `+${t.amount.toLocaleString()}` : t.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category-wise Budget Progress Tracking */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
            <h3 className="mb-8 text-xl font-bold text-gray-950">Budget Progress</h3>
            <div className="space-y-8">
              {/* Food Category Progress */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-base font-semibold text-gray-800">Food & Drinks</span>
                  <span className="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">75%</span>
                </div>
                <div className="w-full h-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-full">
                  <div className="h-full transition-all duration-500 bg-blue-500" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>LKR 15,000 spent</span>
                  <span>Goal: 20k</span>
                </div>
              </div>

              {/* Rent Category Progress */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-base font-semibold text-gray-800">Monthly Rent</span>
                  <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">100%</span>
                </div>
                <div className="w-full h-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-full">
                  <div className="h-full bg-emerald-500" style={{ width: '100%' }}></div>
                </div>
                 <p className="mt-2 text-xs text-gray-500">LKR 25,000 / LKR 25,000</p>
              </div>

              {/* Entertainment Category Progress */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-base font-semibold text-gray-800">Entertainment</span>
                  <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">90%</span>
                </div>
                <div className="w-full h-3 overflow-hidden bg-gray-100 border border-gray-200 rounded-full">
                  <div className="h-full bg-rose-500" style={{ width: '90%' }}></div>
                </div>
                 <p className="mt-2 text-xs text-gray-500">LKR 9,000 / LKR 10,000</p>
              </div>
            </div>
            
            <button className="w-full mt-10 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3.5 rounded-2xl transition-all border border-gray-200 shadow-sm active:scale-[0.98]">
                Configure Budgets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboardContent;