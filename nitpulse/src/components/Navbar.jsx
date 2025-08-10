import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const [extrasDropdown, setExtrasDropdown] = useState(false);

  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isForgotPassword = location.pathname.toLowerCase().startsWith('/forgot-password');
  const isTeacherForgotPassword = location.pathname.toLowerCase().startsWith('/teacher/forgot-password');
  const isAuthPage = location.pathname.startsWith('/auth');

  const linkClasses = ({ isActive }) =>
    `hover:text-gray-200 transition-all ${isActive ? 'underline font-semibold' : ''}`;

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="NITPulse Logo" className="h-11 w-auto" />
          <span className="text-2xl font-bold">NIT Pulse</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        {!isAuthPage && user && (
          <div className="hidden md:flex space-x-6 text-sm">
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 hover:text-gray-200"
                onClick={() => {
                  setResourceDropdown(!resourceDropdown);
                  setExtrasDropdown(false);
                }}
              >
                <span>Resources</span>
                <ChevronDown size={16} />
              </button>
              <div
                className={`absolute top-8 left-0 w-40 bg-white text-blue-600 shadow-lg rounded-md transition-all duration-300 z-50 ${
                  resourceDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <NavLink to="/notes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  Notes
                </NavLink>
                <NavLink to="/assignments" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  Assignments
                </NavLink>
                <NavLink to="/labs" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  Lab Programs
                </NavLink>
                <NavLink to="/mqps" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  MQPs
                </NavLink>
                <NavLink to="/passing-package" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  Passing Package
                </NavLink>
                <NavLink to="/ask-ai" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                  NIT Pulse-AI
                </NavLink>
              </div>
            </div>

            {/* Extras Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 hover:text-gray-200"
                onClick={() => {
                  setExtrasDropdown(!extrasDropdown);
                  setResourceDropdown(false);
                }}
              >
                <span>Extras</span>
                <ChevronDown size={16} />
              </button>
              <div
                className={`absolute top-8 left-0 w-48 bg-white text-blue-600 shadow-lg rounded-md transition-all duration-300 z-50 ${
                  extrasDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <NavLink to="/sgpa" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  SGPA Calculator
                </NavLink>
                <NavLink to="/cgpa" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  CGPA Calculator
                </NavLink>
                <NavLink to="/vtu-results" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  VTU Results
                </NavLink>
                <NavLink to="/vtu-links" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  VTU Links
                </NavLink>
                <NavLink to="/timetable" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  College Time Table
                </NavLink>
                <NavLink to="/updates" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                  Latest Updates
                </NavLink>
              </div>
            </div>

            {/* Logout Button */}
            <button onClick={handleLogout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Slide Drawer Menu */}
      {!isAuthPage && user && menuOpen && !isForgotPassword && !isTeacherForgotPassword && (
        <div className="fixed inset-0 z-40 bg-black/50 transition-all duration-300 md:hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-white text-blue-600 shadow-lg p-4 transition-all duration-300">
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="mt-6 space-y-3 font-medium">
              <NavLink to="/notes" className="block" onClick={() => setMenuOpen(false)}>Notes</NavLink>
              <NavLink to="/assignments" className="block" onClick={() => setMenuOpen(false)}>Assignments</NavLink>
              <NavLink to="/labs" className="block" onClick={() => setMenuOpen(false)}>Lab Programs</NavLink>
              <NavLink to="/mqps" className="block" onClick={() => setMenuOpen(false)}>MQPs</NavLink>
              <NavLink to="/passing-package" className="block" onClick={() => setMenuOpen(false)}>Passing Package</NavLink>
              <NavLink to="/ask-ai" className="block" onClick={() => setMenuOpen(false)}>NIT Pulse-AI</NavLink>

              <hr className="my-2" />
              <NavLink to="/sgpa" className="block" onClick={() => setMenuOpen(false)}>SGPA Calculator</NavLink>
              <NavLink to="/cgpa" className="block" onClick={() => setMenuOpen(false)}>CGPA Calculator</NavLink>
              <NavLink to="/vtu-results" className="block" onClick={() => setMenuOpen(false)}>VTU Results</NavLink>
              <NavLink to="/vtu-links" className="block" onClick={() => setMenuOpen(false)}>VTU Links</NavLink>
              <NavLink to="/timetable" className="block" onClick={() => setMenuOpen(false)}>College Time Table</NavLink>
              <NavLink to="/updates" className="block" onClick={() => setMenuOpen(false)}>Latest Updates</NavLink>

              <button onClick={handleLogout} className="mt-4 text-red-500">Logout</button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;