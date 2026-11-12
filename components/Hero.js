import Link from 'next/link';
import { ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';
import { PROFILE } from '../utils/portfolioData';
import { GitHubMark, LinkedInMark } from './ui/BrandIcons';

export default function Hero() {
  return (
    <section id="top" className="py-14 sm:py-20 lg:py-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7">
            {/* Live Signal Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full pill-status mb-7">
              <span
                className="w-2 h-2 rounded-full bg-signal signal-dot-pulse"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.08em]">
                Available Full-Time · Immediate Joiner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.035em] text-fg leading-[1.08] mb-5">
              Adarsh Tiwari
              <span className="block text-fg-secondary font-normal text-2xl sm:text-3xl lg:text-[2.1rem] tracking-[-0.025em] mt-2.5 leading-[1.2]">
                Full-Stack Engineer building document OCR, AI workflows, and browser software.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-fg-secondary leading-relaxed max-w-[60ch] mb-8">
              2025 B.Tech graduate in Electronics &amp; Communication Engineering from{' '}
              <span className="text-fg font-medium">Techno India University</span> (7.23 CGPA).
              Creator of{' '}
              <a
                href={PROFILE.semdivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg font-medium underline decoration-line-strong underline-offset-4 hover:decoration-fg transition-colors"
              >
                SEMDIV &amp; Folio Scan
              </a>{' '}
              — an on-device browser office suite and 14-language Indian OCR annotation engine — ready to join full-time engineering and AI data teams immediately.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-9">
              <a href="#projects" className="btn-arch-primary group">
                <span>Selected Work</span>
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a href="#contact" className="btn-arch-secondary">
                <span>Get in Touch</span>
              </a>

              <a
                href="/ADARSH-TIWARI.pdf"
                download="Adarsh_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arch-secondary group"
              >
                <Download
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-150 group-hover:translate-y-0.5"
                />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Verified Quick Links & Metadata Strip */}
            <div className="pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-fg-secondary">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-fg transition-colors group"
              >
                <GitHubMark className="w-4 h-4 text-fg" />
                <span>github.com/adarsh180</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-fg-tertiary group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-fg transition-colors group"
              >
                <LinkedInMark className="w-4 h-4 text-fg" />
                <span>LinkedIn</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-fg-tertiary group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 hover:text-fg transition-colors group"
              >
                <span>7 Shipped Projects</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="text-fg-tertiary group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Architectural Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="arch-card p-2.5 max-w-[400px] mx-auto lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden border border-line portrait-studio-backdrop aspect-[4/4.3] flex items-end justify-center">
                {/* Subtle Architectural Grid Overlay Behind Subject */}
                <div
                  className="absolute inset-0 architectural-grid opacity-70 pointer-events-none"
                  aria-hidden="true"
                />

                <img
                  src="/images/adarsh-portrait-studio.webp"
                  alt="Adarsh Tiwari — Full-Stack and AI/ML Engineer"
                  width={480}
                  height={515}
                  className="relative z-10 w-[88%] h-[94%] object-contain object-bottom select-none"
                />

                {/* Soft Studio Bottom Edge Vignette */}
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/45 pointer-events-none z-20"
                  aria-hidden="true"
                />
              </div>

              {/* Architectural Spec Caption Bar */}
              <div className="px-2.5 pt-3 pb-1 flex items-center justify-between gap-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-tertiary">
                    B.Tech ECE · 2021–2025
                  </div>
                  <div className="text-sm font-medium text-fg mt-0.5">
                    Techno India University, Kolkata
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-tertiary">
                    Standing
                  </div>
                  <div className="font-mono text-sm font-semibold text-signal mt-0.5">
                    7.23 CGPA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
