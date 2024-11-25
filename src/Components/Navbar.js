// src/components/Navbar.jsx
import React, { useState } from 'react';
import dropdownPNG from '../icons/dropdown icon.png'
import HamburgerPNG from '../icons/Hamburger Icon.png'
import dropdownWHitePNG from '../icons/dropdownWHite.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="sm:text-3xl text-2xl font-bold">IP Survivor's Kit</h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <button className="font-bold hover:bg-neutral-700 hover:rounded px-2 py-2 ">
         Datesheet  <img src={dropdownPNG} alt="DropDown icon" className="h-2 ml-1 inline-block "/> </button>
        <button className="font-bold hover:bg-neutral-700 hover:rounded px-2 py-2 ">Previous Versions</button>
        <button className="font-bold hover:bg-neutral-700 hover:rounded px-2 py-2 ">About</button>
      </div>
      <div className="hidden md:flex space-x-6 items-center">
      <button className="font-bold bg-yellow-400 text-black px-4 py-2 rounded" onClick={()=> window.open("https://github.com/not-AdityaRawat/IP-Survivor-s-Kit-3.0","_blank")} > Contribute</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <span className="material-icons"><img src={HamburgerPNG} alt="HamburgerPNG" className='w-5 h-5 mt-2' /></span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-12 bg-gray-100 text-black shadow-md w-48 rounded-md">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Datesheet<img src={dropdownWHitePNG} alt="DropDown icon" className="h-3 ml-1 inline-block "/>
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Previous Versions
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              About
            </button>
            <button className="font-bold w-full bg-yellow-400 text-black px-4 py-2 rounded">Contribute</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
