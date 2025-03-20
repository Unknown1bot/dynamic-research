
import React from 'react';
import SectionHeading from './SectionHeading';
import { Code, Server, Cpu, Database, Globe, GitBranch } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: {
    name: string;
    proficiency: number; // 1-5 scale
  }[];
}

const ProgrammingSkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: "1",
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", proficiency: 5 },
        { name: "JavaScript/TypeScript", proficiency: 5 },
        { name: "C++", proficiency: 4 },
        { name: "Java", proficiency: 4 },
        { name: "Go", proficiency: 3 },
        { name: "Rust", proficiency: 3 }
      ]
    },
    {
      id: "2",
      title: "Frameworks & Libraries",
      icon: GitBranch,
      skills: [
        { name: "PyTorch", proficiency: 5 },
        { name: "TensorFlow", proficiency: 5 },
        { name: "React", proficiency: 4 },
        { name: "Node.js", proficiency: 4 },
        { name: "Flask", proficiency: 4 },
        { name: "Django", proficiency: 3 }
      ]
    },
    {
      id: "3",
      title: "Cloud & Infrastructure",
      icon: Server,
      skills: [
        { name: "AWS", proficiency: 4 },
        { name: "Google Cloud", proficiency: 4 },
        { name: "Docker", proficiency: 5 },
        { name: "Kubernetes", proficiency: 4 },
        { name: "CI/CD", proficiency: 4 },
        { name: "Terraform", proficiency: 3 }
      ]
    },
    {
      id: "4",
      title: "Data & Databases",
      icon: Database,
      skills: [
        { name: "SQL", proficiency: 4 },
        { name: "MongoDB", proficiency: 4 },
        { name: "Redis", proficiency: 3 },
        { name: "Elasticsearch", proficiency: 3 },
        { name: "Pandas", proficiency: 5 },
        { name: "Spark", proficiency: 4 }
      ]
    }
  ];

  // Render proficiency bar
  const renderProficiency = (level: number) => {
    return (
      <div className="flex w-28 h-2 bg-secondary rounded overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className={`h-full w-1/5 ${i <= level ? 'bg-primary' : 'bg-transparent'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <SectionHeading 
          title="Programming Skills"
          subtitle="Technologies and tools I work with regularly."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: `${parseInt(category.id) * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    {renderProficiency(skill.proficiency)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-lg shadow-sm border border-border bg-secondary/20 text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-3xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Programming Languages</p>
          </div>
          <div className="p-5 rounded-lg shadow-sm border border-border bg-secondary/20 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold mb-2">20+</h3>
            <p className="text-muted-foreground">Frameworks & Libraries</p>
          </div>
          <div className="p-5 rounded-lg shadow-sm border border-border bg-secondary/20 text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-3xl font-bold mb-2">8+</h3>
            <p className="text-muted-foreground">Years Coding</p>
          </div>
          <div className="p-5 rounded-lg shadow-sm border border-border bg-secondary/20 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-3xl font-bold mb-2">100+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSkillsSection;
