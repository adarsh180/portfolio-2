import Link from 'next/link';
import { Globe, Mail } from 'lucide-react';
import { PROFILE } from '../utils/portfolioData';
import { MonogramMark, GitHubMark, LinkedInMark } from './ui/BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { href: '/#about', label: 'Overview' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/projects', label: 'Projects Archive' },
    { href: '/skills', label: 'Technical Stack' },
    { href: '/about', label: 'Experience & Education' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: PROFILE.github,
      icon: <GitHubMark className="w-4 h-4" />,
      label: 'GitHub (@adarsh180)',
    },
    {
      href: PROFILE.linkedin,
      icon: <LinkedInMark className="w-4 h-4" />,
      label: 'LinkedIn',
    },
    {
      href: PROFILE.semdivUrl,
      icon: <Globe size={16} strokeWidth={1.5} />,
      label: 'SEMDIV Suite',
    },
    {
      href: `mailto:${PROFILE.email}`,
      icon: <Mail size={16} strokeWidth={1.5} />,
      label: 'Email Adarsh Tiwari',
    },
  ];

  return (
    <footer className="border-t border-line bg-surface relative z-10">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-line">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-fg hover:opacity-85 transition-opacity"
            >
              <MonogramMark className="w-6 h-6 text-fg" />
              <span className="text-base font-semibold tracking-[-0.02em]">{PROFILE.name}</span>
            </Link>
            <p className="mt-3 text-sm text-fg-secondary max-w-sm leading-relaxed">
              2025 B.Tech ECE Graduate from Techno India University. Building full-stack web suites, 14-language Indian OCR systems, and structured ML pipelines.
            </p>
          </div>

          {/* Quick Directory */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-fg-tertiary mb-3">
              Directory
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-fg-secondary hover:text-fg transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Availability */}
          <div className="md:col-span-3 md:text-right flex flex-col md:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-fg-tertiary mb-3">
                Verified Profiles
              </div>
              <div className="flex items-center md:justify-end gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    title={social.label}
                    className="w-9 h-9 rounded-lg border border-line bg-surface-elevated flex items-center justify-center text-fg-secondary hover:text-fg hover:border-line-strong transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Engineering Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-fg-tertiary">
          <p>
            © {currentYear} Adarsh Tiwari. All rights reserved.
          </p>
          <p>
            Engineered with Next.js &amp; TailwindCSS · Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  );
}
