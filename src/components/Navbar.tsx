
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll lock
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Cleanup function to ensure scroll is enabled when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Clean up scroll lock when menu closes
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-6',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
        >
          John.AI
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="link-hover text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        {/* Close button for mobile menu */}
        <button 
          className="absolute top-6 right-6 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X className="w-6 h-6" />
        </button>

        {navLinks.map(link => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-2xl font-medium link-hover"
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
