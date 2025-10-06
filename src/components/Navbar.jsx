import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex w-full z-50 transition-all duration-300 bg-neutral-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <span className="text-pink-500 font-bold text-3xl">
            Israt <span className="text-white">Jahan</span>
          </span>
          <span className="ml-2 text-sm text-neutral-400 hidden md:inline">
            | React & Laravel Developer
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-pink-500">Home</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-800 px-4 py-4 flex flex-col space-y-3">
          <a href="#hero" className="hover:text-pink-500">Home</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
