import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const highlights = [
  {
    id: 1,
    badge: 'SEMDIV Suite · www.semdiv.com',
    title: '17 Browser Apps, Zero Auto-Renewing Subscriptions',
    subtitle: 'Scribe · Folio · Gridora · Sparkdeck · Pressa · FluxCut · Sign · Drive · Prism AI',
    content:
      'Designed and engineered SEMDIV so documents, spreadsheets, multi-track MP4 video edits, compressed PDFs, and SHA-256 tamper-evident e-signatures run directly in a single calm browser workspace with local-first privacy.',
  },
  {
    id: 2,
    badge: 'Document Vision & Multilingual OCR',
    title: '14-Language Indian OCR & 2D Bounding-Box Layout Engine',
    subtitle: 'Hindi (Devanagari) · Bengali · Marathi · Tamil · Telugu · English',
    content:
      'Built SEMDIV Folio Scan with automated edge detection, perspective deskewing, Otsu contrast filtering, normalized word/region bounding boxes, and hierarchical block-to-word reading order for Indian regional documents.',
  },
  {
    id: 3,
    badge: 'AI/ML & Data Engineering · @adarsh180',
    title: '100,000+ Structured Records & Domain AI Applications',
    subtitle: 'Arogya Sahayak · AccidentAware · Malware Classification ML',
    content:
      'Shipped healthcare symptom triage (Arogya Sahayak), full-stack smart-helmet safety e-commerce (AccidentAware), and 100K+ record Scikit-Learn & XGBoost pipelines backed by rigorous dataset cleaning and ground-truth QA.',
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent(current === highlights.length - 1 ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? highlights.length - 1 : current - 1);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent(prevIdx => (prevIdx === highlights.length - 1 ? 0 : prevIdx + 1));
    }, 5500);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading
          title="Product & Engineering Highlights"
          subtitle="Deep dives into the architecture and real-world systems I have designed and shipped."
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {highlights.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card p-8 md:p-10 rounded-2xl relative">
                    <div className="absolute top-6 right-8 opacity-15">
                      <Sparkles size={52} className="text-violet-500" />
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
                      {item.badge}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cyan-400 mb-4 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 group"
            aria-label="Previous highlight"
          >
            <ChevronLeft size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 group"
            aria-label="Next highlight"
          >
            <ChevronRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-500 w-8' 
                    : 'bg-white/20 hover:bg-white/30 w-2'
                }`}
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
