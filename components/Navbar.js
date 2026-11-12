import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { MonogramMark } from './ui/BrandIcons';

const NAV_ITEMS = [
  { id: 'about', href: '/#about', pageHref: '/about', label: 'Overview' },
  { id: 'capabilities', href: '/#capabilities', pageHref: '/about', label: 'Capabilities' },
  { id: 'projects', href: '/#projects', pageHref: '/projects', label: 'Work' },
  { id: 'skills', href: '/#skills', pageHref: '/skills', label: 'Stack' },
  { id: 'recognition', href: '/#recognition', pageHref: '/about', label: 'Recognition' },
  { id: 'contact', href: '/#contact', pageHref: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      if (window.scrollY < 180) {
        setActiveSection('');
        return;
      }
      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNavClick = (e, item) => {
    setIsOpen(false);
    if (isHome) {
      const target = document.getElementById(item.id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `/#${item.id}`);
        setActiveSection(item.id);
      }
    }
  };

  const isItemActive = (item) => {
    if (isHome) {
      return activeSection === item.id;
    }
    return router.pathname === item.pageHref && item.pageHref !== '/about'
      ? true
      : router.pathname === '/about' && item.id === 'about';
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-line backdrop-blur-md transition-colors duration-150"
      style={{ backgroundColor: 'var(--header-bg)' }}
    >
      <div className="container-editorial h-16 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-2.5 text-fg hover:opacity-85 transition-opacity shrink-0"
        >
          <MonogramMark className="w-6 h-6 text-fg" />
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-[-0.02em] text-fg">
              Adarsh Tiwari
            </span>
            <span className="hidden lg:inline font-mono text-[11px] text-fg-tertiary">
              / ECE &apos;25
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                  active
                    ? 'bg-surface-elevated text-fg'
                    : 'text-fg-secondary hover:text-fg hover:bg-surface-elevated/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="/ADARSH-TIWARI.pdf"
            download="Adarsh_Tiwari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-surface text-xs font-mono font-medium text-fg-secondary hover:text-fg hover:border-line-strong transition-colors duration-150"
          >
            <FileDown size={14} strokeWidth={1.5} />
            <span>Resume.pdf</span>
          </a>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-md border border-line bg-surface flex items-center justify-center text-fg-secondary hover:text-fg hover:border-line-strong transition-colors duration-150"
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {darkMode ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-md border border-line bg-surface flex items-center justify-center text-fg-secondary hover:text-fg transition-colors"
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {darkMode ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-9 h-9 rounded-md border border-line bg-surface flex items-center justify-center text-fg-secondary hover:text-fg transition-colors"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-line bg-surface">
          <div className="container-editorial py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-surface-elevated text-fg'
                      : 'text-fg-secondary hover:text-fg hover:bg-surface-elevated'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-line flex items-center justify-between gap-3">
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono text-fg-secondary hover:text-fg"
              >
                All Projects Archive -&gt;
              </Link>
              <a
                href="/ADARSH-TIWARI.pdf"
                download="Adarsh_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-surface-elevated text-xs font-mono font-medium text-fg"
              >
                <FileDown size={14} strokeWidth={1.5} />
                <span>Resume.pdf</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
