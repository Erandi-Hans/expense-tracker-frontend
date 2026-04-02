import React from 'react';

const ExpenseForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          type="text" 
          placeholder="Description" 
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
        <input 
          type="number" 
          placeholder="Amount" 
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
        <input 
          type="text" 
          placeholder="Category" 
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
          required
        />
      </div>
      <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;