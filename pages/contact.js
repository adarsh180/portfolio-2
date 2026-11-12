import Link from 'next/link';
import { ArrowLeft, Mail, Download } from 'lucide-react';
import Contact from '../components/Contact';
import SectionHeading from '../components/ui/SectionHeading';
import { PROFILE } from '../utils/portfolioData';

const FAQS = [
  {
    q: 'Are you available for immediate full-time joining?',
    a: 'Yes. Having completed my B.Tech in Electronics and Communication Engineering at Techno India University in August 2025 (7.23 CGPA), I am available immediately with 100% full-time commitment for software engineering, AI/ML, and document/data roles.',
  },
  {
    q: 'What are your primary technical strengths?',
    a: 'Full-stack web development (Next.js, React, TypeScript, PostgreSQL), multilingual Indian OCR and 2D bounding-box PDF layout engines (SEMDIV & Folio Scan), and Python machine learning / 100K+ dataset curation.',
  },
  {
    q: 'Which languages can you read, write, and annotate fluently?',
    a: 'I have native reading, writing, proofreading, and Unicode typing fluency in Hindi (Devanagari script) alongside full professional fluency in English.',
  },
  {
    q: 'Why do SEMDIV links reference @adarsh560 while open-source repos use @adarsh180?',
    a: '@adarsh180 hosts my public open-source repositories, ML notebooks, and web apps, while @adarsh560 is my dedicated workspace account associated with the private SEMDIV codebase.',
  },
];

export default function ContactPage() {
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

      <Contact />

      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="FAQ / Recruiter Brief"
            title="Common Questions"
            subtitle="Quick answers regarding availability, technical specialization, and language proficiency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {FAQS.map((item, idx) => (
              <article key={idx} className="arch-card p-6">
                <div className="font-mono text-xs text-fg-tertiary mb-2">
                  Q0{idx + 1}
                </div>
                <h3 className="text-base font-semibold tracking-[-0.015em] text-fg mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 arch-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg">
                Need a copy of my resume for your hiring team?
              </h3>
              <p className="text-sm text-fg-secondary mt-1">
                Download the latest single-page PDF or email me directly at {PROFILE.email}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="/ADARSH-TIWARI.pdf"
                download="Adarsh_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arch-secondary"
              >
                <Download size={15} strokeWidth={1.5} />
                <span>Resume PDF</span>
              </a>
              <a href={`mailto:${PROFILE.email}`} className="btn-arch-primary">
                <Mail size={15} strokeWidth={1.5} />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact',
    },
  };
}
