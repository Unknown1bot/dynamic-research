
import React from 'react';
import SectionHeading from './SectionHeading';
import { Cpu, Brain, Server, Eye, MessageSquare, GitBranch } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Deep Learning', icon: Brain, description: 'Designing and training neural networks for various applications' },
    { name: 'Computer Vision', icon: Eye, description: 'Object detection, image segmentation, and video analysis' },
    { name: 'Natural Language Processing', icon: MessageSquare, description: 'Text analysis, language models, and sentiment analysis' },
    { name: 'Machine Learning', icon: Cpu, description: 'Supervised and unsupervised learning algorithms and techniques' },
    { name: 'Cloud Computing', icon: Server, description: 'Scalable ML infrastructure deployment on cloud platforms' },
    { name: 'MLOps', icon: GitBranch, description: 'CI/CD pipelines for ML, model versioning, and deployment' }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <SectionHeading 
          title="About Me"
          subtitle="I'm an AI researcher passionate about pushing the boundaries of what's possible with machine learning."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I am a senior AI/ML researcher with a focus on developing cutting-edge algorithms that solve real-world problems. With a PhD in Computer Science from Stanford University, I've dedicated my career to advancing the field of artificial intelligence.
            </p>
            <p className="text-lg">
              Currently, I'm leading a research team at DeepMind, where we're exploring novel approaches to reinforcement learning and transfer learning. My work has been published in top-tier conferences such as NeurIPS, ICML, and CVPR.
            </p>
            <p className="text-lg">
              Previously, I was a research scientist at Google AI, where I worked on large language models and contributed to the development of natural language understanding systems.
            </p>
          </div>
          
          <div className="bg-secondary rounded-2xl p-8 shadow-sm animate-fade-up">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Research Papers Published</p>
          </div>
          <div className="glass-card rounded-xl p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="glass-card rounded-xl p-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-2">30+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
