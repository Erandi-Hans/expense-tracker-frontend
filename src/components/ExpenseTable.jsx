import React from 'react';

const ExpenseTable = ({ expenses, handleDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{exp.description}</td>
              <td className="px-4 py-2 font-semibold text-green-600">Rs. {exp.amount}</td>
              <td className="px-4 py-2 italic">{exp.category}</td>
              <td className="px-4 py-2 text-center">
                <button 
                  onClick={() => handleDelete(exp.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;