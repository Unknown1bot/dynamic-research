
import React from 'react';
import SectionHeading from './SectionHeading';
import { School, Calendar, Award } from 'lucide-react';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  years: string;
  description: string;
  achievements?: string[];
}

const AcademicsSection = () => {
  const education: Education[] = [
    {
      id: "1",
      institution: "Stanford University",
      degree: "Ph.D.",
      field: "Computer Science",
      years: "2012 - 2016",
      description: "Focused on machine learning and artificial intelligence with emphasis on computer vision algorithms.",
      achievements: [
        "Dissertation: 'Novel Approaches to Deep Reinforcement Learning in Computer Vision Tasks'",
        "Published 5 papers in top-tier conferences (NeurIPS, ICML, CVPR)",
        "Graduate Teaching Assistant for Advanced Machine Learning course"
      ]
    },
    {
      id: "2",
      institution: "Massachusetts Institute of Technology",
      degree: "M.S.",
      field: "Computer Science",
      years: "2010 - 2012",
      description: "Specialized in artificial intelligence and computational theory.",
      achievements: [
        "Research Assistant in the Computer Science and Artificial Intelligence Laboratory (CSAIL)",
        "Master's Thesis: 'Efficient Algorithms for Multi-Agent Systems'"
      ]
    },
    {
      id: "3",
      institution: "University of California, Berkeley",
      degree: "B.S.",
      field: "Computer Science",
      years: "2006 - 2010",
      description: "Graduated summa cum laude with focus on algorithms and computational mathematics.",
      achievements: [
        "Undergraduate Research Fellowship",
        "Dean's List all semesters",
        "Senior project on distributed computing algorithms"
      ]
    }
  ];

  return (
    <section id="academics" className="py-20 bg-secondary/30">
      <div className="section-container">
        <SectionHeading 
          title="Academic Background"
          subtitle="My educational journey and academic achievements."
        />
        
        <div className="space-y-8">
          {education.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: `${parseInt(item.id) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                  <School className="h-8 w-8" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.institution}</h3>
                    <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{item.years}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="font-medium">{item.degree} in {item.field}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-medium flex items-center mb-2">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-1">
                        {item.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
