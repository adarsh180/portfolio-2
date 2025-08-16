import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Arogya Sahayak - Medical AI Assistant',
    description: 'An intelligent medical AI web application that provides health assistance, symptom analysis, and medical guidance using advanced AI algorithms.',
    image: '/images/image.png',
    tags: ['AI/ML', 'Healthcare', 'React', 'Medical Tech'],
    demoLink: 'https://arogya-sahayakl.netlify.app',
    githubLink: 'https://github.com/adarsh180/arogya-sahayak',
    category: 'ai-ml'
  },
  {
    id: 2,
    title: 'Movie Review App',
    description: 'A web application for searching and filtering movies by genres with a clean UI and responsive design.',
    image: '/projects/movie-app.jpg',
    tags: ['React', 'Axios', 'MUI', 'Custom Hooks'],
    demoLink: 'https://movie-review-app.vercel.app',
    githubLink: 'https://github.com/adarsh180/movie-review-app',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Malware Detection using ML',
    description: 'Machine learning project using Decision Tree, Random Forest, AdaBoost, XGBoost, and Linear Regression algorithms on a dataset with 100K+ entries.',
    image: '/projects/malware.jpg',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    demoLink: '',
    githubLink: 'https://github.com/adarsh180/malware-detection',
    category: 'ai-ml'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with dark mode and animations built with Next.js and TailwindCSS.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    demoLink: '',
    githubLink: 'https://github.com/adarsh180/portfolio',
    category: 'frontend'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai-ml', name: 'AI/ML' }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.1 * (index % 3)}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 dark:text-gray-400">Project Image</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div>
                      {project.demoLink ? (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:underline"
                        >
                          Live Demo <FiExternalLink className="ml-1" />
                        </a>
                      ) : (
                        <span className="text-gray-400">Demo N/A</span>
                      )}
                    </div>
                    <div>
                      {project.githubLink ? (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-primary"
                        >
                          <FiGithub className="mr-1" /> Code
                        </a>
                      ) : (
                        <span className="text-gray-400">Private</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link 
            href="/projects" 
            className="btn btn-primary inline-flex items-center"
          >
            View All Projects <FiArrowRight className="ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}