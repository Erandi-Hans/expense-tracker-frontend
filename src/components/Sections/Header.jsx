import React from 'react';
import studentImg from '../../assets/images/student.png';

const ExpenseTrackerHeader = () => {
  return (
    <div className="bg-[#111] min-h-screen text-white font-sans p-6 md:p-12">
      {/* 1. Navbar Layout */}
      <nav className="flex items-center justify-between pb-4 mb-12 border-b border-gray-800">
        <div className="px-4 text-2xl font-semibold border-r border-gray-800">
          Portfolio / Tracker
        </div>
        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          {['Summary', 'Add Expense', 'Categories', 'Goals', 'Settings'].map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-white">
              {item}
            </a>
          ))}
        </div>
        {/* Mobile menu button could go here */}
      </nav>

      {/* 2. Main Body Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
        
        {/* Left Side: Text and Form */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#E5E5D5] tracking-tight">
            DO YOU LIKE TO TRACK YOUR EXPENSES?
          </h1>
          <p className="max-w-lg text-lg text-gray-400">
            Easily manage and visualize your spending habits.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#444] text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side: Fixed Image Area */}
        {/* Aspect ratio and background remain, but upload features are removed */}
        <div className="relative aspect-[3/4] bg-[#222] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* 3. Static Image Display */}
          <img 
            src={studentImg}
            alt="Student" 
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerHeader;