import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Zap, 
  FolderOpen, 
  GraduationCap, 
  Mail, 
  Menu, 
  X,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const Navigation3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const navItems = [
    { icon: Home, label: 'Home', section: 0 },
    { icon: Zap, label: 'Skills', section: 1 },
    { icon: FolderOpen, label: 'Projects', section: 2 },
    { icon: GraduationCap, label: 'Education', section: 3 },
    { icon: Mail, label: 'Contact', section: 4 },
  ];

  const navigateToSection = (sectionIndex: number) => {
    if ((window as any).navigateToSection) {
      (window as any).navigateToSection(sectionIndex);
      setCurrentSection(sectionIndex);
      setIsOpen(false);
    }
  };

  const navigateVertical = (direction: 'up' | 'down') => {
    const newSection = direction === 'up' 
      ? Math.max(0, currentSection - 1)
      : Math.min(navItems.length - 1, currentSection + 1);
    
    if (newSection !== currentSection) {
      navigateToSection(newSection);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-black/20 backdrop-blur-md rounded-2xl p-2 border border-white/10"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentSection === index;
            
            return (
              <motion.button
                key={item.label}
                onClick={() => navigateToSection(index)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 last:mb-0 transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Vertical Navigation Arrows */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-4">
        <motion.button
          onClick={() => navigateVertical('up')}
          disabled={currentSection === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === 0
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-black/20 backdrop-blur-md text-white hover:bg-white/10 border border-white/10'
          }`}
          whileHover={currentSection !== 0 ? { scale: 1.1 } : {}}
          whileTap={currentSection !== 0 ? { scale: 0.95 } : {}}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
        
        <motion.button
          onClick={() => navigateVertical('down')}
          disabled={currentSection === navItems.length - 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSection === navItems.length - 1
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-black/20 backdrop-blur-md text-white hover:bg-white/10 border border-white/10'
          }`}
          whileHover={currentSection !== navItems.length - 1 ? { scale: 1.1 } : {}}
          whileTap={currentSection !== navItems.length - 1 ? { scale: 0.95 } : {}}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute top-16 right-0 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[200px]"
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentSection === index;
                
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => navigateToSection(index)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl mb-2 last:mb-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10"
        >
          <div className="flex items-center space-x-2">
            {navItems.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === index ? 'bg-blue-400 w-6' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyboard Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="fixed bottom-6 right-6 z-40 hidden lg:block"
      >
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-3 border border-white/10">
          <p className="text-white text-xs">
            Use ↑↓ arrows or scroll to navigate
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation3D;