import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <nav className="bg-white shadow-sm dark:shadow-gray-600 sticky top-0 z-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Christian Knab
          </Link>
          {/* mobile menu button */}
          <button
            className="md:hidden text-gray-900 dark:text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
              Projects
            </Link>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
              About
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
              Contact
            </a>
            {/* Dark/light */}
          <button
              onClick={toggleTheme}
              className="text-gray-900 dark:text-gray-100 rounded-md"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>
        {/* mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden transition-all ease-in-out duration-300">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md px-4 pt-4 pb-2 space-y-2">
              <Link
                to="/"
                className="block text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="block text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <a
                href="/#about"
                className="block text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#contact"
                className="block text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
