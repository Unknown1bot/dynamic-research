
import React from 'react';
import ParticleBackground from './ParticleBackground';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
        <p className="inline-block text-sm md:text-base font-medium bg-secondary px-3 py-1 rounded-full mb-4 animate-pulse-subtle">
          AI & Machine Learning Researcher
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          John Anderson
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto">
          Deep Learning • Natural Language Processing • Computer Vision
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a 
            href="#research"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px]"
          >
            View Research
          </a>
          <a 
            href="#about"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:translate-y-[-2px]"
          >
            About Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a 
          href="#about" 
          className="block rounded-full bg-white/10 backdrop-blur-sm p-3 shadow-lg hover:bg-white/20 transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
