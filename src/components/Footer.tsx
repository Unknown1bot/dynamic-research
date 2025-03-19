
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold tracking-tighter">
              John.AI
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Advancing AI research through rigorous investigation.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            <Link to="/" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/research" className="text-sm text-foreground hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/projects" className="text-sm text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Anderson. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
