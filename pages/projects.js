import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';
import { GlowingEffect } from '../components/ui/GlowingEffect';
import SectionHeading from '../components/ui/SectionHeading';
import { PROJECTS_DATA } from '../utils/portfolioData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai-ml', name: 'AI/ML & OCR' },
    { id: 'frontend', name: 'Frontend' }
  ];
  
  const filteredProjects = PROJECTS_DATA
    .filter(project => filter === 'all' || project.category === filter)
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="pt-20">
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading
            title="Projects & Product Work"
            subtitle="Explore SEMDIV, multilingual OCR & document tools, AI assistants, and open-source projects on @adarsh180."
          />
          
          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10"
          >
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects, OCR, Next.js..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                      : 'bg-white/5 border border-white/[0.08] text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          ) : (
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
                      <div className="h-48 overflow-hidden relative">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-muted-foreground">Project Image</div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent" />
                        {project.featured && (
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/30 text-violet-300 text-xs font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-lg font-bold font-display mb-2 text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                          {project.demoLink ? (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                              Live App <ExternalLink size={14} />
                            </a>
                          ) : (
                            <span className="text-sm text-muted-foreground/50">Research / ML</span>
                          )}
                          {project.githubLink ? (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
