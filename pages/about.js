import About from '../components/About';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { WORK_EXPERIENCE, CERTIFICATIONS_LIST, EDUCATION_LIST } from '../utils/portfolioData';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      
      {/* Work Experience */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading 
            title="Work Experience"
            subtitle="Product engineering, independent software development, and data analytics experience."
          />
          
          <div className="max-w-3xl mx-auto">
            {WORK_EXPERIENCE.map((work, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 pb-10 border-l border-cyan-500/25 last:border-0 last:pb-0"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full shadow-lg shadow-cyan-500/30" />
                <div className="mb-1 flex items-center gap-2">
                  <Briefcase size={14} className="text-cyan-400" />
                  <span className="text-sm text-muted-foreground">{work.period}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-foreground">{work.title}</h3>
                {work.link ? (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm mb-1.5 transition-colors"
                  >
                    {work.company} <ExternalLink size={13} />
                  </a>
                ) : (
                  <p className="text-cyan-400 text-sm mb-1.5">{work.company}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading 
            title="Certifications & Achievements"
            subtitle="Hackathon leadership, cloud AI/ML training, and enterprise software courses."
          />
          
          <div className="max-w-3xl mx-auto">
            {CERTIFICATIONS_LIST.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 pb-10 border-l border-violet-500/20 last:border-0 last:pb-0"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full shadow-lg shadow-violet-500/30" />
                <div className="mb-1 flex items-center gap-2">
                  <Calendar size={14} className="text-violet-400" />
                  <span className="text-sm text-muted-foreground">{exp.year}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-foreground">{exp.title}</h3>
                <p className="text-violet-400 text-sm mb-1">{exp.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading 
            title="Education"
            subtitle="Academic background and qualifications."
          />
          
          <div className="max-w-3xl mx-auto">
            {EDUCATION_LIST.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 pb-10 border-l border-fuchsia-500/20 last:border-0 last:pb-0"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full shadow-lg shadow-fuchsia-500/30" />
                <div className="mb-1 flex items-center gap-2">
                  <BookOpen size={14} className="text-fuchsia-400" />
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <h3 className="text-lg font-bold font-display text-foreground">{edu.degree}</h3>
                <p className="text-fuchsia-400 text-sm mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
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
      title: 'About'
    }
  };
}
