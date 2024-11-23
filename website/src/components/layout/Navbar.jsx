import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Your Name</Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <a href="/#about" className="hover:text-blue-600">About</a>
            <a href="/#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 hover:bg-gray-50">Home</Link>
              <Link to="/projects" className="block px-3 py-2 hover:bg-gray-50">Projects</Link>
              <a href="/#about" className="block px-3 py-2 hover:bg-gray-50">About</a>
              <a href="/#contact" className="block px-3 py-2 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;