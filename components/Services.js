import {
  Terminal,
  ScanText,
  Database,
  LayoutGrid,
  Shield,
  Gauge,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const CAPABILITIES = [
  {
    code: 'CAP-01',
    icon: <Terminal size={18} strokeWidth={1.5} />,
    title: 'Full-Stack Web Systems',
    description:
      'Production web applications architected with Next.js, React, TypeScript, Prisma, and PostgreSQL with clean API boundaries.',
    specs: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    code: 'CAP-02',
    icon: <ScanText size={18} strokeWidth={1.5} />,
    title: 'Document Vision & Indian OCR',
    description:
      'Normalized 2D region bounding boxes, reading-order extraction, perspective deskewing, and 14-language Indic & English OCR.',
    specs: ['14 Scripts', '2D BBox', 'PDF Engine'],
  },
  {
    code: 'CAP-03',
    icon: <Database size={18} strokeWidth={1.5} />,
    title: 'ML Pipelines & Data Curation',
    description:
      'Supervised classification across 100K+ structured records, multi-dataset schema cleaning, and verbatim regional-language QA.',
    specs: ['Scikit-Learn', 'XGBoost', 'Ground-Truth QA'],
  },
  {
    code: 'CAP-04',
    icon: <LayoutGrid size={18} strokeWidth={1.5} />,
    title: 'Design Systems & Interfaces',
    description:
      'Accessible dual-theme component libraries, editorial typography, keyboard-friendly controls, and responsive bento layouts.',
    specs: ['TailwindCSS', 'WCAG Contrast', 'Responsive UI'],
  },
  {
    code: 'CAP-05',
    icon: <Shield size={18} strokeWidth={1.5} />,
    title: 'Local-First & Cryptographic Privacy',
    description:
      'On-device WebAssembly & WebCodecs media processing paired with SHA-256 document sealing and client-side AES-256 encryption.',
    specs: ['WebAssembly', 'SHA-256', 'WebCodecs'],
  },
  {
    code: 'CAP-06',
    icon: <Gauge size={18} strokeWidth={1.5} />,
    title: 'Deployment & Performance',
    description:
      'CI/CD delivery on Vercel and cloud platforms with Core Web Vitals optimization, structured metadata, and deterministic builds.',
    specs: ['Vercel CI/CD', 'Core Web Vitals', 'Docker'],
  },
];

export default function Services() {
  return (
    <section id="capabilities" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="02 / Capabilities"
          title="Core Engineering Domains"
          subtitle="End-to-end execution across full-stack web suites, multilingual document layout engines, and structured machine learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((item) => (
            <div
              key={item.code}
              className="arch-card-interactive p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[11px] text-fg-tertiary tracking-[0.08em]">
                    {item.code}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-line flex flex-wrap gap-1.5">
                {item.specs.map((spec) => (
                  <span key={spec} className="spec-tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
