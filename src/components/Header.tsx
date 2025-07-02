import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Cloud } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Home', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animation */}
          <div className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-1">
              <Server className="h-8 w-8 text-blue-400 transform group-hover:rotate-12 transition-transform duration-300" />
              <Code className="h-6 w-6 text-green-400 transform group-hover:scale-110 transition-transform duration-300" />
              <Cloud className="h-7 w-7 text-purple-400 transform group-hover:-rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              DevOps Engineer
            </span>
          </div>

          {/* Desktop Navigation with animations */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium group overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item}</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-gray-700">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                  <span>{item}</span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;