import { motion } from 'framer-motion';
import { Code2, Layout, Wrench, Database } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';
import SectionHeading from './ui/SectionHeading';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={20} className="text-violet-400" />,
    gradient: 'from-violet-600 to-indigo-600',
    skills: [
      { name: 'TypeScript / JavaScript', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'C++ / C', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Java', level: 72 },
    ]
  },
  {
    category: 'Frameworks & Web Systems',
    icon: <Layout size={20} className="text-fuchsia-400" />,
    gradient: 'from-fuchsia-600 to-pink-600',
    skills: [
      { name: 'Next.js (App & Pages Router)', level: 88 },
      { name: 'React', level: 86 },
      { name: 'TailwindCSS & Modern CSS', level: 90 },
      { name: 'Prisma ORM & PostgreSQL', level: 82 },
      { name: 'WebAssembly & WebCodecs', level: 78 },
    ]
  },
  {
    category: 'AI/ML, OCR & Document Tech',
    icon: <Wrench size={20} className="text-cyan-400" />,
    gradient: 'from-cyan-600 to-blue-600',
    skills: [
      { name: 'Multilingual OCR & Bounding Boxes', level: 88 },
      { name: 'PDF & Document Layout Parsing', level: 90 },
      { name: 'Machine Learning (Scikit-Learn, XGBoost)', level: 80 },
      { name: 'Dataset Curation & Ground-Truth QA', level: 92 },
      { name: 'AWS SageMaker', level: 75 },
    ]
  },
  {
    category: 'DevOps, Systems & Languages',
    icon: <Database size={20} className="text-emerald-400" />,
    gradient: 'from-emerald-600 to-teal-600',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker & Kubernetes', level: 72 },
      { name: 'Linux & Windows Systems', level: 85 },
      { name: 'Hindi (Native — Devanagari)', level: 100 },
      { name: 'English (Fluent Professional)', level: 95 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="Full-stack web engineering, multilingual Indian OCR & document systems, machine learning, and cloud tools."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-[1.25rem] border border-white/[0.08] p-2 md:rounded-[1.5rem] md:p-3 h-full">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative h-full rounded-xl border border-white/[0.06] bg-[hsl(var(--card))] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="flex items-center mb-6">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-20 mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold font-display">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/[0.06] rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
