import Link from 'next/link';
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiHeart } from 'react-icons/fi';
import { PROFILE } from '../utils/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: PROFILE.github, icon: <FiGithub size={18} />, label: 'GitHub (@adarsh180)' },
    { href: PROFILE.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
    { href: PROFILE.semdivUrl, icon: <FiGlobe size={18} />, label: 'SEMDIV (www.semdiv.com)' },
    { href: `mailto:${PROFILE.email}`, icon: <FiMail size={18} />, label: 'Email' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      {/* Gradient line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className="bg-black/20 backdrop-blur-xl py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="text-xl font-bold font-display gradient-text">
                Adarsh Tiwari
              </Link>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                © {currentYear} Adarsh Tiwari · Built with <FiHeart className="text-rose-500 inline" size={12} /> All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/[0.08] hover:bg-violet-600/20 hover:border-violet-500/30 hover:text-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
