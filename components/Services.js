import { motion } from 'framer-motion';
import { Monitor, FileText, BrainCircuit, Layers, ShieldCheck, TrendingUp } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import SectionHeading from './ui/SectionHeading';

const services = [
  {
    icon: <Monitor size={20} className="text-violet-400" />,
    title: 'Full-Stack Web Engineering',
    description: 'Building fast, responsive, production-grade web applications with Next.js, React, TypeScript, and PostgreSQL.'
  },
  {
    icon: <FileText size={20} className="text-fuchsia-400" />,
    title: 'Document, PDF & OCR Systems',
    description: 'Designing bounding-box annotation tools, 14-language Indian OCR pipelines, structured tables, and local-first PDF engines.'
  },
  {
    icon: <BrainCircuit size={20} className="text-cyan-400" />,
    title: 'AI/ML & Data Curation',
    description: 'Training classification models, cleaning 100K+ record datasets, and executing verbatim regional-language ground-truth QA.'
  },
  {
    icon: <Layers size={20} className="text-emerald-400" />,
    title: 'UI/UX & Interactive Motion',
    description: 'Crafting polished interfaces with intuitive layouts, fluid animations, dark-mode design systems, and crisp typography.'
  },
  {
    icon: <ShieldCheck size={20} className="text-amber-400" />,
    title: 'Privacy-First Architecture',
    description: 'Implementing on-device WebAssembly processing, SHA-256 tamper-evident sealing, and client-side AES-256 encryption.'
  },
  {
    icon: <TrendingUp size={20} className="text-rose-400" />,
    title: 'SEO & Performance Optimization',
    description: 'Optimizing Core Web Vitals, structured JSON-LD metadata, and sub-second page delivery on modern cloud infrastructure.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading 
          title="What I Do"
          subtitle="End-to-end product engineering across web suites, document & OCR pipelines, and AI/ML."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
