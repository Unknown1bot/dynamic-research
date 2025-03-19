
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ResearchCard, { ResearchPaper } from './ResearchCard';

const ResearchSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const researchPapers: ResearchPaper[] = [
    {
      id: '1',
      title: 'Self-Supervised Learning for Vision Transformers in Medical Imaging',
      abstract: 'This paper introduces a novel approach to pretraining vision transformers using self-supervised learning techniques on medical imaging data, resulting in improved performance for downstream tasks with limited labeled data.',
      publication: 'IEEE Transactions on Medical Imaging',
      year: 2023,
      url: '#',
      tags: ['Computer Vision', 'Self-Supervised Learning', 'Medical AI']
    },
    {
      id: '2',
      title: 'Efficient Transformers for Natural Language Understanding',
      abstract: 'We propose a new architecture for transformer models that significantly reduces computational complexity while maintaining state-of-the-art performance on natural language understanding benchmarks.',
      publication: 'Proceedings of ACL',
      year: 2022,
      url: '#',
      tags: ['NLP', 'Transformers', 'Efficiency']
    },
    {
      id: '3',
      title: 'Reinforcement Learning from Human Feedback: A Survey',
      abstract: 'This comprehensive survey examines the growing field of reinforcement learning from human feedback (RLHF), categorizing approaches and analyzing their effectiveness across various domains.',
      publication: 'Journal of Artificial Intelligence Research',
      year: 2023,
      url: '#',
      tags: ['Reinforcement Learning', 'Human Feedback', 'Survey']
    },
    {
      id: '4',
      title: 'Multi-Modal Representation Learning for Enhanced Visual Reasoning',
      abstract: 'We present a new framework for learning joint representations across text, image, and video modalities that enables more robust visual reasoning capabilities in downstream tasks.',
      publication: 'CVPR',
      year: 2022,
      url: '#',
      tags: ['Computer Vision', 'Multi-Modal', 'Representation Learning']
    },
    {
      id: '5',
      title: 'Towards More Efficient Federated Learning: Communication vs Computation Trade-offs',
      abstract: 'This paper explores the fundamental trade-offs between communication efficiency and computational complexity in federated learning systems, proposing new algorithms that optimize this balance.',
      publication: 'NeurIPS',
      year: 2021,
      url: '#',
      tags: ['Federated Learning', 'Distributed Systems', 'Optimization']
    },
    {
      id: '6',
      title: 'Causal Representation Learning for Robust Decision Making',
      abstract: 'We introduce a causal representation learning framework that identifies invariant features across diverse environments, leading to more robust decision-making systems in real-world applications.',
      publication: 'ICML',
      year: 2023,
      url: '#',
      tags: ['Causal Inference', 'Representation Learning', 'Decision Making']
    }
  ];

  // Extract unique tags
  const allTags = Array.from(new Set(researchPapers.flatMap(paper => paper.tags)));
  
  // Filter papers based on active filter
  const filteredPapers = activeFilter === 'all' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.tags.includes(activeFilter));

  return (
    <section id="research" className="bg-secondary/30 py-20">
      <div className="section-container">
        <SectionHeading 
          title="Research Publications"
          subtitle="A collection of my published papers in top-tier academic conferences and journals."
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white text-foreground hover:bg-secondary'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white text-foreground hover:bg-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <ResearchCard 
              key={paper.id} 
              paper={paper} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
