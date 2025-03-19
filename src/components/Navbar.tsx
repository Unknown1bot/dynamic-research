
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-6',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
        >
          John.AI
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(link.href) ? "text-primary font-semibold" : "hover:text-primary"
              )}
            >
              {link.name}
            </Link>
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
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {navLinks.map(link => (
          <Link 
            key={link.name} 
            to={link.href}
            className={cn(
              "text-2xl font-medium transition-colors",
              isActive(link.href) ? "text-primary font-semibold" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
