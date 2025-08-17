import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

// Extended project data
const projectsData = [
  {
    id: 1,
    title: 'Arogya Sahayak - Medical AI Assistant',
    description: 'An intelligent medical AI web application that provides health assistance, symptom analysis, and medical guidance using advanced AI algorithms.',
    image: '/images/image.png',
    tags: ['AI/ML', 'Healthcare', 'React', 'Medical Tech'],
    demoLink: 'https://arogya-sahayakl.netlify.app',
    githubLink: 'https://github.com/adarsh180/arogya-sahayak',
    category: 'ai-ml',
    featured: true
  },
  {
    id: 2,
    title: 'AccidentAware - AI-Powered Safety E-commerce Platform',
    description: 'A full-stack e-commerce platform for smart helmet technology with integrated accident detection, emergency response systems, and complete payment integration.',
    image: '/images/accident-website.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Razorpay', 'AI Safety'],
    demoLink: 'https://accident-detectionl.vercel.app/',
    githubLink: 'https://github.com/adarsh180/accidentaware',
    category: 'fullstack',
    featured: true
  },
  {
    id: 3,
    title: 'Movie Review App',
    description: 'A web application for searching and filtering movies by genres with a clean UI and responsive design.',
    image: '/images/movie-review-webisite.png',
    tags: ['React', 'Axios', 'MUI', 'Custom Hooks'],
    demoLink: 'https://adarsh-react-movie.netlify.app/',
    githubLink: 'https://github.com/adarsh180/movie-react-app',
    category: 'frontend',
    featured: true
  },
  {
    id: 4,
    title: 'Malware Detection using ML',
    description: 'Machine learning project using Decision Tree, Random Forest, AdaBoost, XGBoost, and Linear Regression algorithms on a dataset with 100K+ entries.',
    image: '/images/malware-detection.png',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    demoLink: '',
    githubLink: 'https://github.com/adarsh180/Malware_Detection_using_Machine_Learning-main',
    category: 'ai-ml',
    featured: false
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with dark mode and animations built with Next.js and TailwindCSS.',
    image: '/images/portfolio-website.png',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    demoLink: 'https://adarsh-tiwari-portfolio-sable.vercel.app/',
    githubLink: 'https://github.com/adarsh180/portfolio-2',
    category: 'frontend',
    featured: false
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];
  
  const filteredProjects = projectsData
    .filter(project => filter === 'all' || project.category === filter)
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              A collection of my work, side projects, and experiments.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700"
                />
              </div>
              
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiFilter /> Filter: {categories.find(c => c.id === filter)?.name}
                </button>
                
                {isFilterMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setFilter(category.id);
                          setIsFilterMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          filter === category.id ? 'bg-gray-100 dark:bg-gray-700' : ''
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
          
          {filteredProjects.length === 0 ? (
            <AnimatedSection className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={0.1 * (index % 3)}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-500 dark:text-gray-400">Project Image</div>
                      )}
                      
                      {project.featured && (
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow">
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
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex justify-between">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:underline"
                        >
                          Live Demo <FiExternalLink className="ml-1" />
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-primary"
                        >
                          <FiGithub className="mr-1" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects'
    }
  };
}