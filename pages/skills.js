import Skills from '../components/Skills';
import { motion } from 'framer-motion';
import { Code2, Layout, Wrench, Database, Monitor, Users, ExternalLink } from 'lucide-react';
import GlowCard from '../components/ui/GlowCard';
import SectionHeading from '../components/ui/SectionHeading';
import { CERTIFICATIONS_LIST, PROFILE } from '../utils/portfolioData';

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: <Code2 size={20} className="text-violet-400" />,
      title: 'Programming Languages',
      description: 'Core languages used across production web systems, algorithms, and data pipelines.',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++ & C', 'Java & SQL']
    },
    {
      icon: <Layout size={20} className="text-fuchsia-400" />,
      title: 'Web & Product Engineering',
      description: 'Frameworks and browser APIs powering SEMDIV and full-stack web platforms.',
      skills: ['Next.js (App & Pages Router)', 'React', 'TailwindCSS & Material UI', 'Prisma & PostgreSQL', 'WebAssembly & WebCodecs']
    },
    {
      icon: <Wrench size={20} className="text-cyan-400" />,
      title: 'Document, OCR & AI/ML',
      description: 'Multilingual document analysis, annotation pipelines, and machine learning models.',
      skills: ['14-Language Indian OCR (Tesseract)', '2D Bounding-Box & Layout Parsing', 'Scikit-Learn & XGBoost', '100K+ Dataset Curation & QA', 'AWS SageMaker']
    },
    {
      icon: <Database size={20} className="text-emerald-400" />,
      title: 'Cloud, Security & DevOps',
      description: 'Deployment, containerization, cryptographic sealing, and version control.',
      skills: ['Git & GitHub', 'Vercel & Netlify CI/CD', 'Docker & Kubernetes', 'SHA-256 & AES-256-GCM Security', 'AWS Cloud']
    },
    {
      icon: <Monitor size={20} className="text-amber-400" />,
      title: 'Systems & Networking',
      description: 'Operating systems and core electronics & communication engineering foundations.',
      skills: ['Linux & Shell Scripting', 'Windows Administration', 'DBMS & Relational Modeling', 'TCP/IP & Networking', 'System Optimization']
    },
    {
      icon: <Users size={20} className="text-rose-400" />,
      title: 'Leadership, Languages & QA',
      description: 'PW Campus Ambassador leadership, bilingual fluency, and proofreading precision.',
      skills: [
        'PW Campus Ambassador Leadership (Till Nov 2025)',
        'Hindi — Native (Devanagari Read/Write/Type)',
        'English — Fluent Professional',
        'High-Precision Proofreading & Content Review',
        'Team Leadership (Smart India Hackathon 2023)'
      ],
      badgeLink: PROFILE.pwCertificateUrl,
      badgeLabel: 'View PW Ambassador Certificate'
    }
  ];

  return (
    <div className="pt-20">
      <Skills />
      
      {/* Skill Categories Grid */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading
            title="Skill Categories"
            subtitle="Detailed breakdown of technical capabilities, document/OCR expertise, leadership, and spoken languages."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.05 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlowCard className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.06]">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">{category.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2 flex-grow">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                    {category.badgeLink && (
                      <div className="mt-4 pt-3 border-t border-white/[0.06]">
                        <a
                          href={category.badgeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {category.badgeLabel} <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading
            title="Certifications & Verified Credentials"
            subtitle="Physics Wallah Campus Ambassador recognition, national hackathon honours, and cloud certifications."
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {CERTIFICATIONS_LIST.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card p-6 rounded-2xl hover:bg-white/[0.06] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold font-display text-foreground">{cert.title}</h3>
                    {cert.certLink && (
                      <a
                        href={cert.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/20 transition-colors w-fit"
                      >
                        View Certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-violet-400 text-sm mb-1">{cert.org}</p>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{cert.desc}</p>
                  <div className="text-xs text-muted-foreground/70">{cert.year}</div>
                </div>
              </motion.div>
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
      title: 'Skills'
    }
  };
}
