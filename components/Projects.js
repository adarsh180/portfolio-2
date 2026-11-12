import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { GitHubMark } from './ui/BrandIcons';
import {
  MovieDiscoveryWireframeSVG,
  PortfolioWireframeSVG,
} from './ui/TechnicalSchematics';
import { PROJECTS_DATA } from '../utils/portfolioData';

export function ProjectMediaPreview({ project }) {
  if (project.wireframe === 'movie-discovery') {
    return <MovieDiscoveryWireframeSVG />;
  }
  if (project.wireframe === 'editorial-portfolio') {
    return <PortfolioWireframeSVG />;
  }
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />
    );
  }
  return <PortfolioWireframeSVG />;
}

export function ProjectCard({ project }) {
  return (
    <article className="arch-card-interactive p-2.5 flex flex-col h-full group">
      {/* Nested Media Frame */}
      <div className="relative rounded-xl overflow-hidden border border-line bg-surface-elevated aspect-[16/9.6] shrink-0">
        <ProjectMediaPreview project={project} />
        {project.featured && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-surface/90 backdrop-blur-sm border border-line font-mono text-[10px] uppercase tracking-[0.08em] text-signal">
            Flagship
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="px-3.5 pt-4 pb-3 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold tracking-[-0.02em] text-fg leading-snug mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-fg-secondary leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Specification Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="spec-tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="spec-tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Bottom-Aligned Action Footer */}
        <div className="pt-3.5 border-t border-line flex items-center justify-between gap-3 mt-auto">
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-fg hover:text-signal transition-colors group/link"
            >
              <span>{project.demoLabel || 'Live App'}</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="font-mono text-xs text-fg-tertiary">
              ML Research Pipeline
            </span>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-fg-secondary hover:text-fg transition-colors group/git"
            >
              <GitHubMark className="w-3.5 h-3.5" />
              <span>{project.codeLabel || 'Source'}</span>
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="text-fg-tertiary group-hover/git:text-fg transition-transform duration-150 group-hover/git:translate-x-0.5 group-hover/git:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const CATEGORIES = [
  { id: 'all', name: 'Selected (6)' },
  { id: 'fullstack', name: 'Full-Stack' },
  { id: 'ai-ml', name: 'AI/ML & OCR' },
  { id: 'frontend', name: 'Frontend' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const displayedProjects =
    filter === 'all'
      ? PROJECTS_DATA.slice(0, 6)
      : PROJECTS_DATA.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="03 / Selected Work"
          title="Shipped Products & Engineering Systems"
          subtitle="Production browser suites, multilingual Indian OCR & PDF tools, domain AI applications, and large-scale ML pipelines."
          action={
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border border-line bg-surface"
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
                        layoutId="selected-work-tab-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        className="absolute inset-0 rounded-lg bg-surface-elevated border border-line"
                      />
                    )}
                    <span className="relative z-10">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Equal-Height Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Clean Compact Archive Footer Row (No Dead Void) */}
        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-fg-secondary">
            Public open-source repositories hosted on{' '}
            <a
              href="https://github.com/adarsh180"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg"
            >
              @adarsh180
            </a>{' '}
            · Flagship SEMDIV workspace profile on{' '}
            <a
              href="https://github.com/adarsh560"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg"
            >
              @adarsh560
            </a>
            .
          </p>

          <Link href="/projects" className="btn-arch-secondary group shrink-0 w-fit">
            <span>View All {PROJECTS_DATA.length} Projects</span>
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
