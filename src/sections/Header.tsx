'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(i => i.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
          }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="group flex items-center gap-2 cursor-target">
            <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_28px_rgba(124,58,237,0.6)] transition-all duration-300">
              SJ
            </div>
            <span className="font-display font-semibold text-white/90 text-sm hidden sm:block">Sanjay J K</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/8 rounded-full px-2 py-1.5 backdrop-blur-sm">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`nav-item relative cursor-target ${activeSection === item.href.slice(1)
                  ? 'text-white bg-white/10'
                  : ''
                  }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-violet-600/20 rounded-full border border-violet-500/30"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_28px_rgba(124,58,237,0.55)] transition-all duration-300 hover:scale-105 cursor-target"
            >
              Resume ↗
            </a>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col gap-1.5 w-4">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:hidden"
          >
            <nav className="container flex flex-col py-4 gap-1">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === item.href.slice(1)
                    ? 'text-white bg-violet-600/20 border border-violet-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <a href="/resume.pdf" target="_blank"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
                Download Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
