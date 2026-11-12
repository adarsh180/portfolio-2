import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold font-display text-sm shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
              AT
            </div>
            <span className="text-lg font-bold font-display gradient-text hidden sm:block">
              Adarsh Tiwari
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/[0.08]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2.5 rounded-full bg-white/5 border border-white/[0.08] hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={16} className="text-amber-400" /> : <FiMoon size={16} />}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-white/5 border border-white/[0.08] hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={16} className="text-amber-400" /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-full bg-white/5 border border-white/[0.08] hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/60 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      router.pathname === link.href
                        ? 'bg-white/10 text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}