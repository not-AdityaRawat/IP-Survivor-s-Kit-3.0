// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">IP Survivor's Kit</h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button className="hover:underline">Datesheet</button>
        <button className="hover:underline">Previous Versions</button>
        <button className="hover:underline">About</button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">Contribute</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <span className="material-icons">menu</span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-12 bg-gray-100 text-green-700 shadow-md w-48 rounded-md">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Datesheet
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Previous Versions
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              About
            </button>
            <button className="block w-full text-left px-4 py-2 bg-yellow-400 text-black rounded">
              Contribute
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
