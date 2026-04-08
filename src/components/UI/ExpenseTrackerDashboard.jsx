import React from 'react';
import { LayoutDashboard, Wallet, ArrowUpRight, ArrowDownRight, PlusCircle } from 'lucide-react';

const ExpenseTrackerDashboard = () => {
  // Sample data for transactions
  const transactions = [
    { id: 1, name: 'Grocery Shopping', category: 'Food', amount: -4500, date: '2026-04-05' },
    { id: 2, name: 'Freelance Project', category: 'Income', amount: 25000, date: '2026-04-04' },
    { id: 3, name: 'Electricity Bill', category: 'Utilities', amount: -3200, date: '2026-04-03' },
    { id: 4, name: 'Fuel', category: 'Transport', amount: -1500, date: '2026-04-02' },
  ];

  return (
    <div className="min-h-screen p-6 font-sans text-gray-100 bg-gray-900">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Financial Dashboard</h1>
          <p className="text-sm text-gray-400">Welcome back to your expenses tracker</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-white transition-all rounded-lg bg-emerald-500 hover:bg-emerald-600">
          <PlusCircle size={20} />
          Add Transaction
        </button>
      </header>

      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        {/* Total Balance Card */}
        <div className="p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Wallet className="text-blue-500" size={24} />
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-400 uppercase">Total Balance</p>
          <h2 className="mt-1 text-3xl font-bold">LKR 45,800.00</h2>
        </div>

        {/* Monthly Income Card */}
        <div className="p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <ArrowUpRight className="text-emerald-500" size={24} />
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-400 uppercase">Monthly Income</p>
          <h2 className="mt-1 text-3xl font-bold text-emerald-400">+ LKR 75,000</h2>
        </div>

        {/* Monthly Expenses Card */}
        <div className="p-6 bg-gray-800 border border-gray-700 shadow-lg rounded-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-rose-500/10">
              <ArrowDownRight className="text-rose-500" size={24} />
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-400 uppercase">Monthly Expenses</p>
          <h2 className="mt-1 text-3xl font-bold text-rose-400">- LKR 29,200</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Transactions Table */}
        <div className="p-6 bg-gray-800 border border-gray-700 lg:col-span-2 rounded-2xl">
          <h3 className="mb-4 text-lg font-bold">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-3 font-medium text-gray-400">Name</th>
                  <th className="pb-3 font-medium text-gray-400">Category</th>
                  <th className="pb-3 font-medium text-gray-400">Date</th>
                  <th className="pb-3 font-medium text-right text-gray-400">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {transactions.map((t) => (
                  <tr key={t.id} className="transition-colors hover:bg-gray-700/30">
                    <td className="py-4 font-medium">{t.name}</td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-xs bg-gray-700 rounded">{t.category}</span>
                    </td>
                    <td className="py-4 text-sm text-gray-400">{t.date}</td>
                    <td className={`py-4 text-right font-semibold ${t.amount > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {t.amount > 0 ? `+${t.amount}` : t.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Budget Goals / Spending Limit Section */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl">
          <h3 className="mb-6 text-lg font-bold">Budget Progress</h3>
          <div className="space-y-6">
            {/* Example of a progress bar for Food category */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Food & Drinks</span>
                <span className="text-sm text-gray-400">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Example of a progress bar for Rent category */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Monthly Rent</span>
                <span className="text-sm text-gray-400">100%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Example of a progress bar for Entertainment */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Entertainment</span>
                <span className="text-sm text-gray-400">90%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div className="h-2 rounded-full bg-rose-500" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerDashboard;