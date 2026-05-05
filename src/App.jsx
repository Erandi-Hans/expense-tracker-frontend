import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import ExpenseForm from './components/Layout/ExpenseForm';
import ExpenseTable from './components/Layout/ExpenseTable';
import Navbar from './components/Layout/Navbar';
import ExpenseTrackerDashboard from './components/UI/ExpenseTrackerDashboard';
import ExpenseTrackerHeader from './components/Sections/Header';
import Analytics from './components/Layout/Analytics';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routers>
        <ExpenseTrackerHeader />
        <ExpenseTrackerDashboard />
        <Analytics id="Analytics" />
      </Routers>

    </BrowserRouter>
  );

}

export default App;