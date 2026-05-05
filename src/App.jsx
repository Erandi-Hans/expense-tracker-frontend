import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Layout/Navbar';
import ExpenseTrackerDashboard from './components/UI/ExpenseTrackerDashboard';
import ExpenseTrackerHeader from './components/Sections/Header';
import Analytics from './components/Layout/Analytics';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar eka hama page ekakatama penna ona nisa Routes walata udin thiyanawa */}
      <Navbar />

      <div className="pt-16"> {/* Navbar eka fixed nisa content eka yata wena eka nawaththanna */}
        <Routes>
          {/* Default path (Home) ekata Header saha Dashboard dekama damma */}
          <Route path="/" element={
            <>
              <ExpenseTrackerHeader />
              <ExpenseTrackerDashboard />
              <Analytics />
            </>
          } />

          {/* Analytics page eka wenama load wenna */}
          <Route path="/analytics" element={<Analytics />} />

          {/* Thawa page ekak onenam methana danna puluwan */}
          <Route path="/expenses" element={<ExpenseTrackerDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;