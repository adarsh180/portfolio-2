import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { PROFILE } from '../utils/portfolioData';

export default function ContactPage() {
  const faqs = [
    {
      question: 'What are your core areas of expertise?',
      answer: 'I specialize in full-stack web engineering (Next.js, React, TypeScript, PostgreSQL), document & PDF systems, multilingual Indian OCR & bounding-box layout pipelines, and machine learning (Python, Scikit-Learn, XGBoost).'
    },
    {
      question: 'What have you built recently?',
      answer: 'I built SEMDIV & Folio Scan (www.semdiv.com) — a flagship browser project for PDF region markup, 14-language Indian OCR, structured documents, spreadsheets, and media, alongside Arogya Sahayak (Medical AI), AccidentAware, and 100K+ record ML pipelines on @adarsh180.'
    },
    {
      question: 'Are you available for full-time, remote, or contract roles?',
      answer: 'Yes! As a 2025 B.Tech ECE graduate from Techno India University, I am an immediate joiner with 100% dedicated availability for full-time, remote, contract, and AI/data or engineering roles.'
    },
    {
      question: 'Which languages can you work in?',
      answer: 'I have native reading, writing, proofreading, and Unicode typing fluency in Hindi (Devanagari script) and full professional fluency in English.'
    }
  ];

  return (
    <div className="pt-20">
      <Contact />
      
      {/* FAQs */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers about my background, availability, and product work."
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-card p-6 rounded-2xl hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 mt-0.5">
                      <MessageCircle size={16} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display mb-2 text-foreground">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center glass-card p-10 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              <span className="gradient-text">Let&apos;s Connect!</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Reach out for job opportunities, collaborations, questions about SEMDIV, or just to say hello.
            </p>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="btn btn-primary inline-flex items-center gap-2 group"
            >
              Email Me <Mail size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact'
    }
  };
}
