
import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Github, Linkedin, Twitter, Calendar } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would connect to an email service
    console.log('Form submitted');
    // You could add a toast notification here
  };

  return (
    <section id="contact" className="bg-secondary/30 py-20">
      <div className="section-container">
        <SectionHeading 
          title="Contact & Collaboration"
          subtitle="Interested in collaborating on research or have a question about my work? Let's connect."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new research opportunities, collaborations, or technical challenges in the field of AI and machine learning.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@johnanderson.ai" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 -ml-2"
              >
                <Mail className="h-5 w-5" />
                <span>contact@johnanderson.ai</span>
              </a>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Schedule a Meeting</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  If you'd like to discuss a specific topic, you can schedule a meeting directly in my calendar.
                </p>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all hover:shadow-md hover:shadow-primary/20"
                >
                  Schedule via Calendly
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-up">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all hover:shadow-md hover:shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
