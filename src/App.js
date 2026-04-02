import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {
  // ... (කලින් තිබුණු state සහ functions ටික මෙතන තියෙන්න ඕනේ) ...

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 italic">
          💰 Expense Tracker
        </h1>

        {/* Form Component එක පාවිච්චි කිරීම */}
        <ExpenseForm 
          formData={formData} 
          setFormData={setFormData} 
          handleSubmit={handleSubmit} 
        />

        {/* Table Component එක පාවිච්චි කිරීම */}
        <ExpenseTable 
          expenses={expenses} 
          handleDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;