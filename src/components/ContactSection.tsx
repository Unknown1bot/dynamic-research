
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Github, Linkedin, Twitter, Calendar, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the mail body with line breaks
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@johnanderson.ai?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    console.log('Form submitted and email client opened');
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all hover:shadow-md hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
