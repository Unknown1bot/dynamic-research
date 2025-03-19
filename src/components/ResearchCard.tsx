
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  publication: string;
  year: number;
  url: string;
  tags: string[];
}

interface ResearchCardProps {
  paper: ResearchPaper;
  className?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ paper, className }) => {
  return (
    <div className={cn(
      "bg-white border border-border rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-3 flex flex-wrap gap-2">
          {paper.tags.map(tag => (
            <span key={tag} className="chip bg-secondary/50">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold line-clamp-2 mb-2">
          {paper.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {paper.publication} • {paper.year}
        </p>
        
        <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">
          {paper.abstract}
        </p>
        
        <a 
          href={paper.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-medium hover:underline mt-2"
        >
          Read Paper <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ResearchCard;
