'use client';

import { motion } from 'framer-motion';
import RotatingText from '@/components/animations/RotatingText';

const stats = [
  { value: '9.45', label: 'CGPA at VIT', suffix: '/10' },
  { value: '670', label: 'GATE Score', suffix: '' },
  { value: '2', label: 'Patents Published', suffix: '' },
  { value: '5×', label: 'Hackathon Finalist', suffix: '' },
];

/* Pure CSS Bauhaus geometric composition for the right panel */
const GeometricComposition = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Large background circle outline */}
    <div
      className="absolute rounded-full border-[6px] border-white/20"
      style={{ width: 380, height: 380 }}
    />
    {/* Solid large yellow circle */}
    <div
      className="absolute rounded-full bg-[#F0C020] border-4 border-[#121212]"
      style={{ width: 220, height: 220, top: '50%', left: '50%', transform: 'translate(-35%, -55%)' }}
    />
    {/* Red square rotated 45° */}
    <div
      className="absolute bg-[#D02020] border-4 border-[#121212]"
      style={{ width: 130, height: 130, top: '50%', left: '50%', transform: 'translate(-80%, 0%) rotate(45deg)' }}
    />
    {/* White square (window) */}
    <div
      className="absolute bg-white border-4 border-[#121212] flex flex-col items-start justify-start p-4 gap-2"
      style={{ width: 160, height: 160, bottom: '15%', right: '10%' }}
    >
      <div className="w-full h-2 bg-[#121212]" />
      <div className="w-4/5 h-2 bg-[#121212]/40" />
      <div className="w-3/5 h-2 bg-[#121212]/20" />
      <div className="mt-auto flex gap-2">
        <div className="w-6 h-6 bg-[#D02020]" />
        <div className="w-6 h-6 bg-[#1040C0]" />
        <div className="w-6 h-6 bg-[#F0C020] border border-[#121212]" />
      </div>
    </div>
    {/* Small triangle accent */}
    <div
      className="absolute"
      style={{
        width: 0, height: 0,
        borderLeft: '30px solid transparent',
        borderRight: '30px solid transparent',
        borderBottom: '52px solid white',
        top: '12%', right: '25%',
        filter: 'drop-shadow(2px 2px 0 #121212)',
      }}
    />
    {/* Dot grid overlay */}
    <div
      className="absolute inset-0 bauhaus-dot-grid-white"
      style={{ backgroundSize: '20px 20px' }}
    />
    {/* "SJ" monogram */}
    <div
      className="absolute font-black text-white/10 select-none pointer-events-none"
      style={{ fontSize: '160px', bottom: '-20px', right: '-10px', lineHeight: 1 }}
    >
      SJ
    </div>
  </div>
);

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="min-h-screen flex flex-col pt-[72px] border-b-4 border-[#121212]">

      {/* Main split */}
      <div className="flex-1 grid lg:grid-cols-[1fr,420px] xl:grid-cols-[1fr,480px]">

        {/* LEFT — white panel with text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20 border-b-4 lg:border-b-0 lg:border-r-4 border-[#121212] bg-[#F0F0F0] relative overflow-hidden"
        >
          {/* Background stripes */}
          <div className="absolute inset-0 bauhaus-dot-grid pointer-events-none" style={{ backgroundSize: '20px 20px' }} />

          <div className="relative z-10 max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#F0C020] border-2 border-[#121212] px-4 py-2 mb-8 bauhaus-shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#121212] animate-ping-large" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#121212]">
                Seeking AI Engineer &amp; SWE Roles · Open to Internships
              </span>
            </motion.div>

            {/* Name headline */}
            <div className="mb-4">
              <h1 className="font-black text-[#121212] leading-none uppercase" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}>
                Sanjay
              </h1>
              <h1 className="font-black text-[#D02020] leading-none uppercase" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}>
                J K
              </h1>
            </div>

            {/* Rotating subtitle */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-8 bg-[#D02020]" />
              <div className="text-lg md:text-xl font-bold text-[#121212]/70 uppercase tracking-wide flex items-center gap-2">
                <span>Building</span>
                <div className="overflow-hidden h-[1.3em] inline-flex items-center">
                  <RotatingText
                    texts={['AI Systems', 'Production LLMs', 'Full Stack Apps', 'Graph RAG Pipelines', 'Scalable APIs']}
                    mainClassName="font-black text-[#1040C0]"
                    rotationInterval={2500}
                    staggerDuration={0.025}
                    staggerFrom="first"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-120%', opacity: 0 }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#121212]/70 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-medium">
              <span className="text-[#121212] font-black">AI Engineer &amp; Software Engineer</span> — CS student at{' '}
              <span className="text-[#D02020] font-black">VIT (CGPA 9.45)</span> building production AI systems,
              full-stack applications, and LLM pipelines that make real-world impact.
              GATE CSE 2026 · AIR 1603 · 2 Patents Published · UKIERI Scholar.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="bauhaus-btn bauhaus-btn-red"
              >
                Explore My Work ↓
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="bauhaus-btn bauhaus-btn-blue"
              >
                Let&apos;s Connect
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                className="bauhaus-btn bauhaus-btn-outline"
              >
                Resume ↗
              </a>
            </motion.div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-xs text-[#121212]/50 font-bold uppercase tracking-widest">
              <span>j.k.sanjay2006@gmail.com</span>
              <span>·</span>
              <span>@JKSANJAY27</span>
              <span>·</span>
              <span>VIT Vellore</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — blue panel with geometric composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-[#1040C0] relative min-h-[400px] lg:min-h-0 overflow-hidden"
        >
          <GeometricComposition />
        </motion.div>
      </div>

      {/* Stats strip — yellow bar across full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="bg-[#F0C020] border-t-4 border-[#121212] grid grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-5 px-4 text-center ${i < stats.length - 1 ? 'border-r-4 border-[#121212]' : ''}`}
          >
            <div className="font-black text-2xl md:text-3xl text-[#121212] leading-none">
              {stat.value}<span className="text-base font-bold">{stat.suffix}</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#121212]/60 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
