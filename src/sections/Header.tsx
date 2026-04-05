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

/* Three-shape Bauhaus logo mark */
const BauhausLogo = () => (
  <div className="flex items-center gap-0.5 relative">
    {/* Red circle */}
    <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-[#121212] flex-shrink-0" />
    {/* Blue square */}
    <div className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212] flex-shrink-0" />
    {/* Yellow triangle */}
    <div
      className="w-0 h-0 flex-shrink-0"
      style={{
        borderLeft: '9px solid transparent',
        borderRight: '9px solid transparent',
        borderBottom: '16px solid #F0C020',
        filter: 'drop-shadow(0 0 0 1px #121212)',
      }}
    />
  </div>
);

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
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#F0F0F0] border-b-4 border-[#121212] transition-all duration-300 ${
          scrolled ? 'shadow-[0_4px_0px_0px_#121212]' : ''
        }`}
      >
        <div className="container flex items-center justify-between h-[72px]">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <BauhausLogo />
            <span className="font-black text-[#121212] text-base uppercase tracking-wider hidden sm:block">
              Sanjay J K
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0 border-2 border-[#121212]">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-4 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200
                    ${idx < navItems.length - 1 ? 'border-r-2 border-[#121212]' : ''}
                    ${isActive
                      ? 'bg-[#D02020] text-white'
                      : 'bg-transparent text-[#121212] hover:bg-[#121212] hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="hidden md:inline-flex bauhaus-btn bauhaus-btn-red text-xs"
            >
              Resume ↗
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden w-10 h-10 border-2 border-[#121212] bg-white flex flex-col items-center justify-center gap-1.5 hover:bg-[#121212] hover:text-white transition-colors duration-200 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[#121212] group-hover:bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#121212] group-hover:bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#121212] group-hover:bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#1040C0] border-b-4 border-[#121212] md:hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-6 py-4 text-lg font-black uppercase tracking-wider transition-all duration-200 border-b-2 border-white/20
                    ${activeSection === item.href.slice(1)
                      ? 'bg-[#D02020] text-white'
                      : 'text-white hover:bg-[#D02020]'
                    }`}
                >
                  <span className="text-white/40 font-mono text-sm mr-3">0{idx + 1}</span>
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="mx-6 my-4 bauhaus-btn bauhaus-btn-yellow text-center justify-center border-2 border-[#121212]"
              >
                Download Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
