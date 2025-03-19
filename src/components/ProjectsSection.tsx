
import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard, { Project } from './ProjectCard';

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Neural Image Synthesis Framework',
      description: 'An advanced framework for generating high-quality images using GANs and diffusion models.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      technologies: ['PyTorch', 'CUDA', 'Python', 'GANs', 'Diffusion Models'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '2',
      title: 'Transformer-based Document Analysis',
      description: 'A system that extracts structured information from documents using transformer architectures.',
      image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d',
      technologies: ['Transformers', 'NLP', 'OCR', 'Python', 'TensorFlow'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '3',
      title: 'Real-time Object Detection for Autonomous Systems',
      description: 'Efficient object detection models designed for deployment on edge devices in autonomous systems.',
      image: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71',
      technologies: ['Computer Vision', 'Edge AI', 'YOLO', 'TensorRT', 'C++'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '4',
      title: 'Federated Learning Framework',
      description: 'A scalable framework for training ML models across distributed devices while preserving privacy.',
      image: 'https://images.unsplash.com/photo-1478432780021-b8d273730d8c',
      technologies: ['Federated Learning', 'Privacy', 'Distributed Systems', 'Python'],
      githubUrl: '#'
    },
    {
      id: '5',
      title: 'Interactive ML Model Visualizer',
      description: 'A web-based tool for visualizing the decision boundaries and feature importance of ML models.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['JavaScript', 'D3.js', 'React', 'TensorFlow.js'],
      githubUrl: '#',
      demoUrl: '#'
    },
    {
      id: '6',
      title: 'Reinforcement Learning for Robotics',
      description: 'A reinforcement learning system for training robotic agents to perform complex manipulation tasks.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
      technologies: ['Reinforcement Learning', 'Robotics', 'PyTorch', 'ROS'],
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="section-container">
        <SectionHeading 
          title="Featured Projects"
          subtitle="A selection of my research projects, implementations, and open-source contributions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
