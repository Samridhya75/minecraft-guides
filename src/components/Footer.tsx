import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-[Minecraft]">Nemesis Minecraft</Link>
            <p className="mt-2 text-sm font-[Minecraft] text-gray-400">Your ultimate Minecraft resource</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
              <div className="mt-4 space-y-2">
                <Link to="/" className="text-sm text-gray-400 hover:text-white block">Home</Link>
                <Link to="/articles" className="text-sm text-gray-400 hover:text-white block">Articles</Link>
                <Link to="/servers" className="text-sm text-gray-400 hover:text-white block">Servers</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <div className="mt-4 space-y-2">
                <Link to="/mods" className="text-sm text-gray-400 hover:text-white block">Mods</Link>
                <Link to="/textures" className="text-sm text-gray-400 hover:text-white block">Texture Packs</Link>
                <Link to="/maps" className="text-sm text-gray-400 hover:text-white block">Maps</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <div className="mt-4 space-y-2">
                <Link to="/about" className="text-sm text-gray-400 hover:text-white block">About</Link>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white block">Contact</Link>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white block">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm text-gray-400">© {currentYear} Nemesis Minecraft. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              {/* Social media links can be added here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;