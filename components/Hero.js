import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { PROFILE } from '../utils/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 pt-28">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              Available Full-Time · Immediate Joiner
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-foreground"
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block gradient-text"
              >
                Adarsh Tiwari
              </motion.span>
            </h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl mb-6 text-muted-foreground font-medium"
            >
              {PROFILE.shortRole}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg mb-8 max-w-lg text-muted-foreground/80 leading-relaxed"
            >
              2025 B.Tech ECE graduate from Techno India University passionate about full-stack development, multilingual Indian OCR &amp; document tools, data curation, and machine learning. Ready to contribute immediately with 100% focus.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/projects" 
                className="btn btn-primary flex items-center gap-2 group"
              >
                View Projects 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-secondary flex items-center gap-2"
              >
                Contact Me
              </Link>
              <a 
                href="/ADARSH-TIWARI.pdf" 
                download="Adarsh_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center gap-2 group"
              >
                Resume 
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative order-1 md:order-2 flex justify-center"
          >
            {/* Orbit ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[110%] h-[110%] rounded-full border border-violet-500/10 animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[125%] h-[125%] rounded-full border border-indigo-500/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
            </div>

            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-violet-600/20 rounded-full blur-3xl animate-glow-pulse" />
            </div>

            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
              <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 shadow-2xl shadow-violet-500/20">
                <div className="rounded-full overflow-hidden bg-background h-full w-full">
                  <Image 
                    src="/images/ADARSH-TIWARI(2).jpg" 
                    alt="Adarsh Tiwari" 
                    width={500} 
                    height={500} 
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-8 -left-4 md:top-12 md:-left-8 glass-card px-4 py-2 rounded-xl"
            >
              <span className="text-sm font-medium text-violet-400">🎓 B.Tech ECE ’25</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 -right-4 md:bottom-12 md:-right-8 glass-card px-4 py-2 rounded-xl"
            >
              <span className="text-sm font-medium text-cyan-400">💻 Full Stack &amp; AI</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
