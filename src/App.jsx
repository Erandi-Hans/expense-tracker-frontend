import React, { useState } from 'react';
import ExpenseForm from './components/Layout/ExpenseForm';
import ExpenseTable from './components/Layout/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Lunch', amount: 500, category: 'Food' },
    { id: 2, description: 'Bus Fare', amount: 150, category: 'Transport' }
  ]);

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    const newExpense = {
      id: Date.now(),
      description: formData.description,
      amount: parseFloat(formData.amount),
      category: formData.category
    };

    setExpenses([...expenses, newExpense]);
    setFormData({ description: '', amount: '', category: '' });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-10 text-3xl font-bold text-center text-indigo-600 uppercase">
          💰 Expense Tracker
        </h1>
        <ExpenseForm 
          formData={formData} 
          setFormData={setFormData} 
          handleSubmit={handleSubmit} 
        />
        <div className="mt-10">
          <ExpenseTable expenses={expenses} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;