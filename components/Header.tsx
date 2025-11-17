
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Funcionalidades' },
    { href: '#benefits', label: 'Benefícios' },
    { href: '#pricing', label: 'Preços' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`glass sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-3' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#0B1F36] hover:text-[#FF6B2C] transition-colors duration-300">
          Ativo<span className="text-[#FF6B2C]">+</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-[#5F6B7A] hover:text-[#0B1F36] font-medium transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B2C] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="btn-primary font-semibold py-2.5 px-6 rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-slate-700 hover:text-teal-600 focus:outline-none p-2 rounded-lg hover:bg-teal-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 pb-4 animate-fade-in-up">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[#5F6B7A] hover:text-[#0B1F36] font-medium transition-colors py-2"
            >
              {link.label}
            </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="btn-primary font-semibold py-3 px-8 rounded-xl mt-2 transition-all duration-300"
            >
              Solicitar Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
