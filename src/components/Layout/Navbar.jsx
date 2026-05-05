import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Receipt, PieChart, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link data tika array ekakata dammu code eka clean wenna
  const navLinks = [
    { name: 'Dashboard', to: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Expenses', to: '/expenses', icon: <Receipt size={20} /> },
    { name: 'Analytics', to: '/analytics', icon: <PieChart size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-gray-800">
                Expense<span className="text-blue-600">Tracker</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 pl-4 ml-4 border-l border-gray-200">
              <button className="text-gray-500 hover:text-gray-700">
                <User size={20} />
              </button>
              <button className="p-2 text-red-600 transition-colors rounded-full bg-red-50 hover:bg-red-100">
                <LogOut size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="bg-white border-t border-gray-100 md:hidden animate-in slide-in-from-top">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 text-base font-medium text-gray-600 rounded-md hover:bg-blue-50 hover:text-blue-600"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <hr className="my-2" />
            <div className="flex items-center gap-3 px-3 py-3 text-red-600 rounded-md hover:bg-red-50 cursor-pointer">
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;