'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MouseEffectCard = dynamic(() => import('@/components/kokonutui/mouse-effect-card'), { ssr: false });

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 tech-badge mb-4">
            <span className="size-1.5 rounded-full bg-violet-400" />
            Get in Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm">
            Open to internships, full-time roles, research collaborations, and open-source contributions.
          </p>
        </motion.div>

        {/* Interactive MouseEffectCard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <MouseEffectCard
            title="Let's Talk"
            subtitle="Actively seeking internship or full-time opportunities in full-stack development, AI/ML, or research."
            topText="Open to Opportunities"
            topSubtext="Building impactful solutions"
            primaryCtaText="✉️ Email Me"
            primaryCtaUrl="mailto:j.k.sanjay2006@gmail.com"
            secondaryCtaText="💼 LinkedIn"
            secondaryCtaUrl="https://linkedin.com/in/sanjay-j-k"
            footerText="j.k.sanjay2006@gmail.com • VIT Vellore"
            dotSize={2}
            dotSpacing={18}
            repulsionRadius={70}
            repulsionStrength={18}
            className="border-violet-500/20 dark:border-violet-500/20"
          />
        </motion.div>

        {/* Additional contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="https://github.com/JKSANJAY27"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 hover:scale-105"
          >
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-violet-500/40 text-violet-300 hover:bg-violet-500/15 hover:border-violet-400/60 transition-all duration-300 hover:scale-105"
          >
            📄 Resume
          </a>
        </motion.div>

        {/* Contact footer info */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-white/35 font-mono mt-8">
          <span>j.k.sanjay2006@gmail.com</span>
          <span className="text-white/20">•</span>
          <span>+91-8122394864</span>
          <span className="text-white/20">•</span>
          <span>VIT Vellore, India</span>
        </div>
      </div>
    </section>
  );
};
