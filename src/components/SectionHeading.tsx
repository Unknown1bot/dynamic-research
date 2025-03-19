
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <div className={cn('mb-12', alignmentClasses[alignment], className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
        <span className="heading-underline">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
