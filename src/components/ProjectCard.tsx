
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div 
      className={cn(
        "group relative bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-80" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="chip bg-secondary/50 text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Repository</span>
            </a>
          )}
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-foreground hover:text-primary transition-colors"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
