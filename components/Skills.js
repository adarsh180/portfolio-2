import { Code2, Layers, ScanSearch, Server } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const STACK_SPECIFICATIONS = [
  {
    code: 'STK-01',
    category: 'Programming Languages',
    subtitle: 'Core languages for web systems, algorithms, and data modeling.',
    icon: <Code2 size={18} strokeWidth={1.5} />,
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'Python',
      'C++',
      'C',
      'SQL',
      'Java',
      'HTML5 & CSS3',
    ],
  },
  {
    code: 'STK-02',
    category: 'Web Frameworks & Runtime APIs',
    subtitle: 'Modern application frameworks, relational ORMs, and browser engines.',
    icon: <Layers size={18} strokeWidth={1.5} />,
    items: [
      'Next.js (App & Pages Router)',
      'React 18',
      'TailwindCSS',
      'Material UI',
      'Prisma ORM',
      'PostgreSQL',
      'WebAssembly',
      'WebCodecs API',
    ],
  },
  {
    code: 'STK-03',
    category: 'Document Vision, OCR & AI/ML',
    subtitle: 'Multilingual layout parsing, supervised learning, and ground-truth curation.',
    icon: <ScanSearch size={18} strokeWidth={1.5} />,
    items: [
      '14-Language Indian OCR',
      '2D Region Bounding Boxes',
      'PDF Layout & Reading Order',
      'Scikit-Learn',
      'XGBoost & Random Forest',
      '100K+ Dataset Curation & QA',
      'AWS SageMaker',
      'Perspective Deskewing',
    ],
  },
  {
    code: 'STK-04',
    category: 'DevOps, Systems & Spoken Languages',
    subtitle: 'Cloud deployment, cryptographic primitives, OS tooling, and bilingual fluency.',
    icon: <Server size={18} strokeWidth={1.5} />,
    items: [
      'Git & GitHub',
      'Vercel & Netlify CI/CD',
      'Docker & Kubernetes',
      'Linux & Windows Systems',
      'SHA-256 & AES-256-GCM',
      'Hindi — Native (Devanagari)',
      'English — Fluent Professional',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-editorial">
      <div className="container-editorial">
        <SectionHeading
          indexLabel="04 / Technical Stack"
          title="Languages, Frameworks & Tooling"
          subtitle="Structured specification of technologies used across shipped web applications, document OCR tools, and machine learning pipelines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {STACK_SPECIFICATIONS.map((group) => (
            <div
              key={group.code}
              className="arch-card-interactive p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-line">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg shrink-0">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold tracking-[-0.02em] text-fg">
                        {group.category}
                      </h3>
                      <p className="text-xs text-fg-secondary mt-0.5">{group.subtitle}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-fg-tertiary shrink-0">
                    {group.code}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const isLanguageHighlight = skill.startsWith('Hindi');
                    return (
                      <span
                        key={skill}
                        className={
                          isLanguageHighlight
                            ? 'inline-flex items-center px-3 py-1.5 rounded-md font-mono text-xs leading-none pill-status'
                            : 'inline-flex items-center px-3 py-1.5 rounded-md font-mono text-xs leading-none bg-surface-elevated border border-line text-fg hover:border-line-strong transition-colors'
                        }
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
