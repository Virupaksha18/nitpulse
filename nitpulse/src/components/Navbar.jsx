import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const [extrasDropdown, setExtrasDropdown] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-gray-200 transition-all ${isActive ? 'underline font-semibold' : ''}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="NITPulse Logo" className="h-15 w-auto" />
          <span className="text-2xl font-bold">NIT Pulse</span>
        </NavLink>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
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
              </NavLink><br />
              <NavLink to="/assignments" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                Assignments
              </NavLink><br />
              <NavLink to="/labs" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                Lab Programs
              </NavLink><br />
              <NavLink to="/mqps" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setResourceDropdown(false)}>
                MQPs
              </NavLink><br />
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
              <NavLink to="/passing-package" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                Passing Package
              </NavLink>
              <NavLink to="/updates" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setExtrasDropdown(false)}>
                Latest Updates
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <NavLink to="/notes" className={linkClasses} onClick={() => setMenuOpen(false)}>Notes</NavLink><br />
          <NavLink to="/assignments" className={linkClasses} onClick={() => setMenuOpen(false)}>Assignments</NavLink><br />
          <NavLink to="/labs" className={linkClasses} onClick={() => setMenuOpen(false)}>Lab Programs</NavLink><br />
          <NavLink to="/mqps" className={linkClasses} onClick={() => setMenuOpen(false)}>MQPs</NavLink><br />
          <NavLink to="/sgpa" className={linkClasses} onClick={() => setMenuOpen(false)}>SGPA Calculator</NavLink><br />
          <NavLink to="/cgpa" className={linkClasses} onClick={() => setMenuOpen(false)}>CGPA Calculator</NavLink><br />
          <NavLink to="/vtu-results" className={linkClasses} onClick={() => setMenuOpen(false)}>VTU Results</NavLink><br />
          <NavLink to="/vtu-links" className={linkClasses} onClick={() => setMenuOpen(false)}>VTU Links</NavLink><br />
          <NavLink to="/passing-package" className={linkClasses} onClick={() => setMenuOpen(false)}>Passing Package</NavLink><br />
          <NavLink to="/updates" className={linkClasses} onClick={() => setMenuOpen(false)}>Latest Updates</NavLink><br />
        </div>
      )}
    </nav>
  );
};

export default Navbar;