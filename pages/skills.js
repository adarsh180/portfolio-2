import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Layers,
  ScanText,
  Database,
  Cpu,
  Users,
} from 'lucide-react';
import Skills from '../components/Skills';
import SectionHeading from '../components/ui/SectionHeading';
import { CERTIFICATIONS_LIST, PROFILE } from '../utils/portfolioData';

const DOMAIN_MATRIX = [
  {
    icon: <Code2 size={17} strokeWidth={1.5} />,
    title: 'Core Programming',
    description: 'Type-safe application code, algorithmic structures, and relational queries.',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++ & C', 'Java & SQL'],
  },
  {
    icon: <Layers size={17} strokeWidth={1.5} />,
    title: 'Web & Browser Architecture',
    description: 'Frameworks and low-level browser APIs powering SEMDIV and full-stack web apps.',
    items: [
      'Next.js (App & Pages Router)',
      'React 18',
      'TailwindCSS & Material UI',
      'Prisma & PostgreSQL',
      'WebAssembly & WebCodecs',
    ],
  },
  {
    icon: <ScanText size={17} strokeWidth={1.5} />,
    title: 'Document Vision & Indian OCR',
    description: 'Multilingual layout analysis, region annotation, and verbatim transcription QA.',
    items: [
      '14-Language Indian OCR',
      '2D Bounding-Box Coordinates',
      'Reading-Order Graph Extraction',
      'Perspective Deskewing & Otsu',
      'PDF Region Markup',
    ],
  },
  {
    icon: <Database size={17} strokeWidth={1.5} />,
    title: 'Machine Learning & Data QA',
    description: 'Large-scale dataset cleaning, feature engineering, and ensemble classification.',
    items: [
      'Scikit-Learn & XGBoost',
      'Random Forest & AdaBoost',
      '100K+ Dataset Curation',
      'Accenture 7-Dataset Analytics',
      'AWS SageMaker',
    ],
  },
  {
    icon: <Cpu size={17} strokeWidth={1.5} />,
    title: 'Security, Cloud & Systems',
    description: 'Cryptographic document integrity, containerization, and OS administration.',
    items: [
      'SHA-256 & AES-256-GCM',
      'Git, GitHub & Vercel CI/CD',
      'Docker & Kubernetes',
      'Linux & Windows Systems',
      'DBMS & TCP/IP Networking',
    ],
  },
  {
    icon: <Users size={17} strokeWidth={1.5} />,
    title: 'Leadership & Spoken Languages',
    description: 'Verified campus leadership, bilingual communication, and proofreading accuracy.',
    items: [
      'Hindi — Native (Devanagari)',
      'English — Fluent Professional',
      'PW Campus Ambassador (Till Nov 2025)',
      'SIH 2023 Team Lead',
      'High-Precision Proofreading',
    ],
    link: PROFILE.pwCertificateUrl,
    linkLabel: 'PW Ambassador Certificate',
  },
];

export default function SkillsPage() {
  return (
    <div className="w-full">
      <div className="container-editorial pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-secondary hover:text-fg transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          <span>Back to Overview</span>
        </Link>
      </div>

      <Skills />

      {/* Detailed 6-Domain Capability Matrix */}
      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="Matrix / Domain Breakdown"
            title="Applied Engineering Specifications"
            subtitle="Granular view of languages, browser engines, OCR pipelines, leadership roles, and bilingual fluency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {DOMAIN_MATRIX.map((domain) => (
              <article
                key={domain.title}
                className="arch-card-interactive p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg mb-1.5">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-fg-secondary leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  <ul className="space-y-2">
                    {domain.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-fg"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-fg-tertiary shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {domain.link && (
                  <div className="pt-4 mt-5 border-t border-line">
                    <a
                      href={domain.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-fg hover:text-signal transition-colors group"
                    >
                      <span>{domain.linkLabel}</span>
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Credentials */}
      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="Credentials / Verification"
            title="Verified Certifications"
            subtitle="Direct links to official certificates and credential folders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.title}
                className="arch-card-interactive p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs text-fg-tertiary mb-2">
                    <span>{cert.org}</span>
                    <span className="text-signal">{cert.year}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-[-0.02em] text-fg mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-fg-secondary leading-relaxed">{cert.desc}</p>
                </div>

                {cert.certLink && (
                  <div className="pt-4 mt-5 border-t border-line">
                    <a
                      href={cert.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-fg hover:text-signal transition-colors group"
                    >
                      <span>Open Certificate</span>
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Technical Stack',
    },
  };
}
