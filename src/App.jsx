import React, { useState } from 'react';
import ExpenseForm from './components/Layout/ExpenseForm';
import ExpenseTable from './components/Layout/ExpenseTable';
import Navbar from './components/Layout/Navbar';
import ExpenseTrackerDashboard from './components/UI/ExpenseTrackerDashboard';
import ExpenseTrackerHeader from './components/Sections/Header';

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
      <Navbar />
      <ExpenseTrackerHeader />
      <ExpenseTrackerDashboard />
      
    </div>
  );
}

export default App;