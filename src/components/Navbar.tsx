import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-[Minecraft]">Nemesis Minecraft</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 font-[Minecraft]">
            <Link to="/" className="px-3 py-2 rounded-md font-medium hover:bg-gray-700">Home</Link>
            <Link to="/articles" className="px-3 py-2 rounded-md font-medium hover:bg-gray-700">Articles</Link>
            <Link to="/servers" className="px-3 py-2 rounded-md font-medium hover:bg-gray-700">Servers</Link>
            <Link to="/mods" className="px-3 py-2 rounded-md font-medium hover:bg-gray-700">Mods</Link>
            <Link to="/about" className="px-3 py-2 rounded-md font-medium hover:bg-gray-700">About</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
            <Link to="/articles" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Articles</Link>
            <Link to="/servers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Servers</Link>
            <Link to="/mods" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Mods</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;