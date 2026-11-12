import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import GlowCard from './ui/GlowCard';
import SectionHeading from './ui/SectionHeading';
import { PROFILE } from '../utils/portfolioData';

const achievements = [
  {
    isLucide: true,
    lucideIcon: <Layers size={26} className="text-white" />,
    title: 'SEMDIV Flagship Project',
    description: 'Built an end-to-end browser workspace for PDF region markup, 14-language Indian OCR, structured documents, spreadsheets, and media.',
    link: PROFILE.semdivUrl,
    linkText: 'Launch Live App',
    accentColor: 'text-cyan-400',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: '/images/icon/leetcode.png',
    title: 'LeetCode Profile',
    description: 'Solving algorithmic problems and strengthening data structures & problem-solving skills through consistent practice.',
    link: PROFILE.leetcode,
    linkText: 'View LeetCode',
    accentColor: 'text-amber-400',
    gradient: 'from-amber-600 to-orange-600'
  },
  {
    icon: '/images/icon/hackerrank.png',
    title: 'HackerRank Profile',
    description: 'Demonstrating coding proficiency across C++, Python, Java, SQL, and problem-solving domains.',
    link: PROFILE.hackerrank,
    linkText: 'View HackerRank',
    accentColor: 'text-emerald-400',
    gradient: 'from-emerald-600 to-green-600'
  },
  {
    icon: '/images/icon/certificate.png',
    title: 'Verified Certificates',
    description: 'AWS AI/ML, Accenture Data Analytics, SAP S/4HANA, and Smart India Hackathon 2023 credentials.',
    link: PROFILE.certificatesUrl,
    linkText: 'View Certificates',
    accentColor: 'text-violet-400',
    gradient: 'from-violet-600 to-purple-600'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="container-custom">
        <SectionHeading
          title="Achievements & Profiles"
          subtitle="Flagship live work, competitive coding accounts, and verified certifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className={`p-3 bg-gradient-to-br ${achievement.gradient} rounded-xl inline-block mb-4 w-fit shadow-lg`}>
                    {achievement.isLucide ? (
                      achievement.lucideIcon
                    ) : (
                      <img 
                        src={achievement.icon} 
                        alt={achievement.title}
                        className="w-7 h-7 object-contain brightness-0 invert"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{achievement.description}</p>
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${achievement.accentColor} hover:opacity-80 transition-opacity group`}
                  >
                    {achievement.linkText} 
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
