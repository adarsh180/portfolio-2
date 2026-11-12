import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, BadgeCheck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../utils/portfolioData';

export default function About() {
  const stats = [
    { icon: <GraduationCap size={20} className="text-violet-400" />, value: "B.Tech '25", label: 'ECE Graduate' },
    { icon: <Award size={20} className="text-fuchsia-400" />, value: '7.23', label: 'CGPA' },
    { icon: <Code2 size={20} className="text-cyan-400" />, value: '7+', label: 'Live Projects' },
    { icon: <BadgeCheck size={20} className="text-emerald-400" />, value: '4+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading 
          title="About Me" 
          subtitle="2025 B.Tech graduate focused on full-stack web applications, document & OCR tools, and AI/ML."
        />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image 
                  src="/images/ADARSH-TIWARI(2).jpg" 
                  alt="Adarsh Tiwari" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-foreground">
              Full-Stack Developer · <span className="gradient-text">AI/ML &amp; OCR Builder</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a 2025 B.Tech graduate in Electronics &amp; Communication Engineering from Techno India University, Kolkata. I enjoy turning complex problems into clean, practical web applications — from{' '}
              <a
                href={PROFILE.semdivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 font-medium"
              >
                SEMDIV &amp; Folio Scan
              </a>{' '}
              (a browser office, PDF region markup, and 14-language Indian OCR project) to healthcare AI and e-commerce platforms.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With hands-on experience across Next.js, React, TypeScript, Python, PostgreSQL, and 100K+ record dataset curation (<a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">{PROFILE.githubHandle}</a>), I bring patience, strong attention to detail, and immediate availability to contribute to impactful teams.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-4 rounded-xl text-center hover:bg-white/[0.06] transition-colors"
                >
                  <div className="mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-xl font-bold font-display text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
