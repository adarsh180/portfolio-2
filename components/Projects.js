import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';
import SectionHeading from './ui/SectionHeading';
import { PROJECTS_DATA } from '../utils/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const homeProjects = PROJECTS_DATA.slice(0, 6);
  const filteredProjects = filter === 'all' 
    ? homeProjects 
    : PROJECTS_DATA.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'Featured Work' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai-ml', name: 'AI/ML & OCR' },
    { id: 'frontend', name: 'Frontend' }
  ];

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects & Products"
          subtitle="Production web suites, multilingual Indian OCR & PDF tools, AI assistants, and machine learning pipelines."
        />
        
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-white/5 border border-white/[0.08] text-muted-foreground hover:bg-white/10 hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 * (index % 3), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              layout
            >
              <div className="relative rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 h-full group">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative h-full flex flex-col rounded-xl border border-white/[0.06] bg-[hsl(var(--card))] overflow-hidden shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-muted-foreground">
                        Project Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent" />
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/30 text-violet-300 text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-display mb-2 text-foreground line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/[0.08]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
                      {project.demoLink ? (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          Live App <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground/50">Research / ML</span>
                      )}
                      {project.githubLink ? (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={14} />
                          {project.codeLabel || 'Code'}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground/50">Private</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects" 
            className="btn btn-primary inline-flex items-center gap-2 group"
          >
            View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
