// src/components/Navbar.tsx
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-gradient-to-r bg-[#2B2D42] shadow-xl backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                  alt="PDF Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 relative z-10 drop-shadow-lg"
                />
              </div>
              <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-white drop-shadow-lg group-hover:text-blue-100 transition-colors duration-300">
                PDF Grinder
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            <ul className="flex items-center space-x-2">
              <ListItem NavLink="/">Home</ListItem>
              <ListItem NavLink="/upload">Merge</ListItem>
              <ListItem NavLink="/about">About</ListItem>
              <ListItem NavLink="/contact">Contact</ListItem>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 z-40 transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="bg-white/95 backdrop-blur-md shadow-2xl border-t border-white/20">
            <ul className="px-4 py-4 space-y-1">
              <ListItem NavLink="/" onClick={() => setOpen(false)}>Home</ListItem>
              <ListItem NavLink="/upload" onClick={() => setOpen(false)}>Merge</ListItem>
              <ListItem NavLink="/about" onClick={() => setOpen(false)}>About</ListItem>
              <ListItem NavLink="/contact" onClick={() => setOpen(false)}>Contact</ListItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, onClick }: { children: React.ReactNode; NavLink: string; onClick?: () => void }) => {
  return (
    <li>
      <a
        href={NavLink}
        onClick={onClick}
        className="flex py-3 px-5 text-base font-semibold text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-white lg:ml-7 lg:inline-flex rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-white/10 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:text-lg lg:font-semibold"
      >
        {children}
      </a>
    </li>
  );
};
