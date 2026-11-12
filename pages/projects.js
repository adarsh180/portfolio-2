import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/Projects';
import { PROJECTS_DATA } from '../utils/portfolioData';

const CATEGORIES = [
  { id: 'all', name: `All (${PROJECTS_DATA.length})` },
  { id: 'fullstack', name: 'Full-Stack' },
  { id: 'ai-ml', name: 'AI/ML & OCR' },
  { id: 'frontend', name: 'Frontend' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = PROJECTS_DATA.filter(
    (project) => filter === 'all' || project.category === filter
  ).filter((project) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full py-10 sm:py-14">
      <div className="container-editorial">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-secondary hover:text-fg transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            <span>Back to Overview</span>
          </Link>
        </div>

        <SectionHeading
          indexLabel="Archive / Complete Work"
          title="Projects & Shipped Systems"
          subtitle="Complete directory of browser workspaces, 14-language Indian OCR tools, healthcare AI applications, and 100K+ record ML pipelines."
        />

        {/* Search & Sliding Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-line">
          <div className="relative w-full md:w-80">
            <Search
              size={15}
              strokeWidth={1.5}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-tertiary pointer-events-none"
            />
            <input
              type="search"
              placeholder="Filter by stack, OCR, Next.js..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search projects"
              className="input-editorial pl-9 pr-9"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-tertiary hover:text-fg"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            )}
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border border-line bg-surface w-fit"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(cat.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors duration-150 ${
                    isActive ? 'text-fg' : 'text-fg-secondary hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-archive-tab-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-surface-elevated border border-line"
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="arch-card p-12 text-center">
            <p className="text-sm text-fg-secondary mb-4">
              No projects matched &ldquo;{searchTerm}&rdquo; in this category.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="btn-arch-secondary text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects Archive',
    },
  };
}
