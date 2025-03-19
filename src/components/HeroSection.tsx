
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <ParticleBackground />
      
      <div className="max-w-5xl mx-auto z-10 animate-fade-in flex flex-col md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:flex-1">
          <p className="inline-block text-sm md:text-base font-medium bg-secondary px-3 py-1 rounded-full mb-4 animate-pulse-subtle">
            AI & Machine Learning Researcher
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            John Anderson
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto md:mx-0">
            Deep Learning • Natural Language Processing • Computer Vision
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
            <Link 
              to="/research"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px]"
            >
              View Research
            </Link>
            <Link 
              to="/about"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:translate-y-[-2px]"
            >
              About Me
            </Link>
          </div>
        </div>
        
        <div className="animate-fade-in animate-delay-200 md:flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-30"></div>
            <Avatar className="w-64 h-64 rounded-full border-4 border-white shadow-xl">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=512&h=512&q=80" 
                alt="John Anderson" 
              />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <Link 
          to="/about" 
          className="block rounded-full bg-white/10 backdrop-blur-sm p-3 shadow-lg hover:bg-white/20 transition-colors"
          aria-label="Learn more"
        >
          <ArrowDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
