import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Briefcase, Award, GraduationCap } from 'lucide-react';
import About from '../components/About';
import SectionHeading from '../components/ui/SectionHeading';
import {
  WORK_EXPERIENCE,
  CERTIFICATIONS_LIST,
  EDUCATION_LIST,
} from '../utils/portfolioData';

export default function AboutPage() {
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

      <About />

      {/* Experience & Campus Leadership */}
      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="02 / Experience"
            title="Leadership, Analytics & Project Engineering"
            subtitle="Physics Wallah Campus Ambassador leadership, Accenture data analytics training, and flagship web/OCR systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {WORK_EXPERIENCE.map((work) => (
              <article
                key={work.title}
                className="arch-card-interactive p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg">
                      <Briefcase size={16} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-signal font-medium">
                      {work.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg mb-1">
                    {work.title}
                  </h3>
                  <p className="font-mono text-xs text-fg-tertiary mb-3">{work.company}</p>
                  <p className="text-sm text-fg-secondary leading-relaxed">
                    {work.description}
                  </p>
                </div>

                {work.link && (
                  <div className="pt-4 mt-5 border-t border-line">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-fg hover:text-signal transition-colors group"
                    >
                      <span>{work.linkLabel || 'Open Link'}</span>
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

      {/* Verified Certifications */}
      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="03 / Credentials"
            title="Verified Certifications & Hackathon Leadership"
            subtitle="Documented achievements across Physics Wallah, Smart India Hackathon 2023, AWS SageMaker, and SAP S/4HANA."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {CERTIFICATIONS_LIST.map((cert) => (
              <article
                key={cert.title}
                className="arch-card-interactive p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-fg-tertiary">
                      <Award size={15} strokeWidth={1.5} className="text-fg" />
                      <span>{cert.org}</span>
                    </div>
                    <span className="font-mono text-xs text-signal">{cert.year}</span>
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
                      <span>Verify Certificate</span>
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

      {/* Education */}
      <section className="section-editorial">
        <div className="container-editorial">
          <SectionHeading
            indexLabel="04 / Education"
            title="Academic Qualifications"
            subtitle="Formal engineering and secondary academic credentials."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {EDUCATION_LIST.map((edu) => (
              <article
                key={edu.degree}
                className="arch-card p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg">
                      <GraduationCap size={16} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-signal">
                      {edu.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold tracking-[-0.015em] text-fg mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-mono text-fg-tertiary mb-3">{edu.institution}</p>
                  <p className="text-sm text-fg-secondary leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-line font-mono text-xs text-fg-tertiary">
                  {edu.period}
                </div>
              </article>
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
      title: 'About & Experience',
    },
  };
}
