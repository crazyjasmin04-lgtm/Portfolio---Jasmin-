
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Impact', id: 'impact' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onTabChange(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-2xl font-bold text-navy tracking-tight font-serif">Jasmin S. A</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium transition-all relative py-1 px-2 ${
                  activeTab === link.id 
                  ? 'text-navy font-bold' 
                  : 'text-slate-600 hover:text-navy'
                }`}
              >
                {link.name}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 animate-in slide-in-from-left duration-300"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-navy text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-all transform hover:scale-105 shadow-md shadow-navy/20"
            >
              Hire Me
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === link.id ? 'bg-navy/5 text-navy' : 'text-slate-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
