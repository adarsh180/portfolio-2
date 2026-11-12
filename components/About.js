import { GraduationCap, Award, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { PROFILE, EDUCATION_LIST } from '../utils/portfolioData';

export default function About() {
  const metrics = [
    {
      icon: <GraduationCap size={17} strokeWidth={1.5} />,
      value: "B.Tech '25",
      label: 'Electronics & Comm. Eng.',
      detail: 'Techno India University',
    },
    {
      icon: <Award size={17} strokeWidth={1.5} />,
      value: '7.23 / 10',
      label: 'Cumulative GPA',
      detail: 'Oct 2021 – Aug 2025',
      highlight: true,
    },
    {
      icon: <Layers size={17} strokeWidth={1.5} />,
      value: '7+ Systems',
      label: 'Production & ML Work',
      detail: 'Web, OCR & 100K+ Data',
    },
    {
      icon: <ShieldCheck size={17} strokeWidth={1.5} />,
      value: '5+ Verified',
      label: 'Credentials & Leadership',
      detail: 'PW, SIH 2023, AWS, SAP',
    },
  ];

  return (
    <section id="about" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="01 / Overview"
          title="Engineering Background & Focus"
          subtitle="Bridging full-stack product architecture, multilingual Indian document vision, and structured dataset engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Academic & Leadership Dossier Card */}
          <div className="lg:col-span-5 flex">
            <div className="arch-card p-6 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center gap-4 pb-5 border-b border-line">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-line portrait-studio-backdrop shrink-0 flex items-end justify-center">
                    <img
                      src="/images/adarsh-portrait-studio.webp"
                      alt="Adarsh Tiwari"
                      width={80}
                      height={86}
                      className="w-[90%] h-[94%] object-contain object-bottom"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-fg tracking-[-0.015em]">
                      {PROFILE.name}
                    </h3>
                    <p className="text-xs font-mono text-fg-secondary mt-0.5">
                      Kolkata, India · Full-Time Ready
                    </p>
                    <p className="text-xs font-mono text-signal mt-1">
                      Hindi (Native) · English (Fluent)
                    </p>
                  </div>
                </div>

                {/* Education Timeline Compact */}
                <div className="mt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary mb-3.5">
                    Academic Record
                  </div>
                  <div className="space-y-3.5">
                    {EDUCATION_LIST.map((edu) => (
                      <div
                        key={edu.degree}
                        className="p-3 rounded-xl bg-surface-elevated border border-line"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs font-semibold text-fg leading-snug">
                            {edu.degree}
                          </span>
                          <span className="font-mono text-[11px] font-medium text-signal shrink-0">
                            {edu.metric}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-1 text-xs text-fg-secondary">
                          <span>{edu.institution}</span>
                          <span className="font-mono text-[11px] text-fg-tertiary shrink-0">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-line flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-fg-tertiary">
                  PW Campus Ambassador (Till Nov 2025)
                </span>
                <a
                  href={PROFILE.pwCertificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-medium text-fg hover:text-signal transition-colors group shrink-0"
                >
                  <span>Verify</span>
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography + 2x2 Specification Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="arch-card p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-fg-tertiary mb-3">
                Profile Summary
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.025em] text-fg mb-4 leading-snug">
                Practical software systems built with clean interfaces, local-first privacy, and verifiable data accuracy.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-fg-secondary leading-relaxed max-w-[65ch]">
                <p>
                  I graduated in August 2025 with a B.Tech in Electronics and Communication Engineering from{' '}
                  <span className="text-fg font-medium">Techno India University, Kolkata</span>, and served as a certified{' '}
                  <a
                    href={PROFILE.pwCertificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg font-medium underline decoration-line-strong underline-offset-4 hover:decoration-fg transition-colors"
                  >
                    Physics Wallah (PW) Campus Ambassador
                  </a>{' '}
                  through November 2025, recognized by PW Project Leadership for peer mentoring and bilingual academic outreach.
                </p>

                <p>
                  My engineering work centers on shipping complete web and document tools — most notably{' '}
                  <a
                    href={PROFILE.semdivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg font-medium underline decoration-line-strong underline-offset-4 hover:decoration-fg transition-colors"
                  >
                    SEMDIV &amp; Folio Scan
                  </a>
                  , which brings PDF region bounding-box markup, perspective deskewing, and 14-language Indian OCR (including Devanagari, Bengali, Marathi, Tamil, and Telugu) directly into the browser alongside Next.js, TypeScript, Python, and PostgreSQL applications on{' '}
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg transition-colors"
                  >
                    {PROFILE.githubHandle}
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* 2x2 Balanced Specification Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="arch-card-interactive p-5 flex items-start justify-between gap-4"
                >
                  <div>
                    <div
                      className={`font-mono text-xl sm:text-2xl font-semibold tracking-[-0.03em] ${
                        item.highlight ? 'text-signal' : 'text-fg'
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="text-sm font-medium text-fg mt-1">{item.label}</div>
                    <div className="font-mono text-xs text-fg-tertiary mt-1">{item.detail}</div>
                  </div>
                  <div className="w-9 h-9 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg-secondary shrink-0">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
