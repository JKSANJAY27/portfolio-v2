'use client';

import { motion } from 'framer-motion';
import RotatingText from '@/components/animations/RotatingText';
import CurvedLoop from '@/components/animations/CurvedLoop';
import ProfileCard from '@/components/animations/ProfileCard';

const stats = [
  { value: '9.45', label: 'CGPA', suffix: '/10' },
  { value: '200+', label: 'Users Impacted', suffix: '' },
  { value: '2', label: 'Patents Filed', suffix: '' },
  { value: '3', label: 'Hackathon Finals', suffix: '' },
];

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col overflow-x-clip">
      {/* Background: Gradient mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary violet glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-violet-600/8 rounded-full blur-[120px]" />
        {/* Secondary cyan glow */}
        <div className="absolute top-[10%] right-[-15%] w-[50%] h-[60%] bg-cyan-500/6 rounded-full blur-[100px]" />
        {/* Tertiary emerald accent */}
        <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[40%] bg-emerald-500/4 rounded-full blur-[80px]" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
        {/* Grid dots */}
        <div className="absolute inset-0 grid-dots opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-12">

            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2.5 bg-white/5 border border-violet-500/30 rounded-full px-4 py-2 w-fit backdrop-blur-sm cursor-target"
              >
                <span className="size-2 rounded-full bg-emerald-400 animate-ping-large" />
                <span className="text-sm font-medium text-white/80">Open to Internships & Research</span>
              </motion.div>

              {/* Name */}
              <div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                  <span className="text-white">Sanjay</span>{' '}
                  <span className="text-gradient">J K</span>
                </h1>
                <div className="mt-3 flex items-center gap-2 text-2xl md:text-3xl font-semibold text-white/80">
                  <span>I build</span>
                  <div className="overflow-hidden h-[1.2em] inline-flex items-center">
                    <RotatingText
                      texts={['Full Stack Apps', 'AI Systems', 'Research Tools', 'Scalable APIs']}
                      mainClassName="text-gradient-violet font-bold"
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
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                CS student at <span className="text-violet-400 font-medium">VIT (CGPA 9.45)</span> — crafting scalable software,
                multimodal AI systems, and research tools that make real-world impact.
                UKIERI 2025 Scholar • 2× Patent Filed • Google Cloud Agentic AI Hackathon Finalist.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="metric-card text-center cursor-target"
                  >
                    <div className="text-xl font-bold text-gradient font-mono">
                      {stat.value}<span className="text-sm text-white/40">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-white/50 mt-0.5 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollTo('projects')}
                  className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-[0_0_24px_rgba(124,58,237,0.5)] hover:shadow-[0_0_36px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                >
                  Explore My Work ↓
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/8 border border-white/15 text-white hover:bg-white/12 hover:border-white/25 transition-all duration-300 hover:scale-105"
                >
                  👋 Let&apos;s Connect
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-violet-500/40 text-violet-300 hover:bg-violet-500/15 hover:border-violet-400/60 transition-all duration-300 hover:scale-105"
                >
                  Resume ↗
                </a>
              </motion.div>

              {/* Contact line */}
              <div className="flex flex-wrap gap-4 text-xs text-white/40 font-mono">
                <span>j.k.sanjay2006@gmail.com</span>
                <span>•</span>
                <span>@JKSANJAY27</span>
                <span>•</span>
                <span>VIT Vellore</span>
              </div>
            </motion.div>

            {/* Right: ProfileCard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[320px]">
                <ProfileCard
                  name="Sanjay J K"
                  title="Full Stack Dev & AI Researcher"
                  handle="JKSANJAY27"
                  status="Open to Opportunities"
                  contactText="Connect"
                  behindGlowColor="rgba(124,58,237,0.45)"
                  onContactClick={() => scrollTo('contact')}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* CurvedLoop marquee at bottom */}
      <div className="relative z-10 -mt-8 pb-0">
        <CurvedLoop
          marqueeText="SANJAY J K • CS @ VIT • FULL STACK DEV • AI RESEARCHER • UKIERI SCHOLAR • PATENT HOLDER • "
          speed={1.5}
          curveAmount={180}
          direction="left"
          className="text-violet-400/40 text-[3.5rem] font-black"
        />
      </div>
    </div>
  );
};
