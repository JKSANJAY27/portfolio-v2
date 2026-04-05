'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MouseEffectCard = dynamic(() => import('@/components/kokonutui/mouse-effect-card'), { ssr: false });

const contactLinks = [
  {
    label: 'Email Me',
    href: 'mailto:j.k.sanjay2006@gmail.com',
    accent: '#D02020',
    textColor: '#fff',
    icon: '✉',
    description: 'j.k.sanjay2006@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sanjay-j-k',
    accent: '#1040C0',
    textColor: '#fff',
    icon: '💼',
    description: 'linkedin.com/in/sanjay-j-k',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JKSANJAY27',
    accent: '#121212',
    textColor: '#fff',
    icon: '⌨',
    description: 'github.com/JKSANJAY27',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    accent: '#F0C020',
    textColor: '#121212',
    icon: '📄',
    description: 'Download PDF',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#F0C020] border-b-4 border-[#121212] relative overflow-hidden">

      {/* Background stripes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(18,18,18,0.04) 20px, rgba(18,18,18,0.04) 40px)',
        }}
      />

      {/* Decorative large geometric shapes */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border-8 border-[#121212]/10 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D02020]/10 border-8 border-[#121212]/10 pointer-events-none rotate-45" />

      {/* Section header */}
      <div className="relative border-b-4 border-[#121212]">
        <div className="container py-10 lg:py-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#121212]/50 mb-2">Get in Touch</p>
          <h2
            className="font-black uppercase text-[#121212] leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Let&apos;s<br />Connect
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Two-column layout: big CTA + contact links */}
        <div className="grid lg:grid-cols-2 border-b-4 border-[#121212]">

          {/* Left: description + MouseEffectCard */}
          <div className="lg:border-r-4 border-[#121212]">
            <div className="p-8 lg:p-12">
              <p className="text-[#121212]/70 text-base md:text-lg leading-relaxed font-medium mb-8 max-w-md">
                Open to <span className="font-black text-[#121212]">internships</span>, full-time roles,{' '}
                <span className="font-black text-[#121212]">research collaborations</span>, and open-source contributions.
                Let&apos;s build something meaningful together.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-4 border-[#121212] bauhaus-shadow-md bg-white"
              >
                <MouseEffectCard
                  title="Let's Talk"
                  subtitle="Actively seeking internship or full-time opportunities in full-stack development, AI/ML, or research."
                  topText="Open to Opportunities"
                  topSubtext="Building impactful solutions"
                  primaryCtaText="✉ Email Me"
                  primaryCtaUrl="mailto:j.k.sanjay2006@gmail.com"
                  secondaryCtaText="💼 LinkedIn"
                  secondaryCtaUrl="https://linkedin.com/in/sanjay-j-k"
                  footerText="j.k.sanjay2006@gmail.com · VIT Vellore"
                  dotSize={2}
                  dotSpacing={18}
                  repulsionRadius={70}
                  repulsionStrength={18}
                  className="border-none"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: contact link grid */}
          <div className="grid grid-cols-2">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col justify-between p-8 border-2 border-[#121212] hover:-translate-y-1 transition-transform duration-200 group
                  ${idx % 2 === 0 ? 'border-r-0' : ''}
                  ${idx < 2 ? 'border-b-0 md:border-b-0' : ''}
                `}
                style={{
                  backgroundColor: link.accent,
                  color: link.textColor,
                  borderWidth: '0 0 4px 0',
                  borderColor: '#121212',
                  borderStyle: 'solid',
                  outline: '4px solid #121212',
                  outlineOffset: '-4px',
                }}
              >
                <span className="text-3xl mb-4">{link.icon}</span>
                <div>
                  <div className="font-black text-lg uppercase tracking-wide leading-none mb-1">{link.label}</div>
                  <div className="text-xs font-bold opacity-70 uppercase tracking-widest">{link.description}</div>
                </div>
                <div className="mt-4 font-black text-2xl group-hover:translate-x-1 transition-transform duration-200">↗</div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact info footer row */}
        <div className="container py-6 flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-xs font-black uppercase tracking-widest text-[#121212]/60">
            <span>j.k.sanjay2006@gmail.com</span>
            <span>·</span>
            <span>+91-8122394864</span>
            <span>·</span>
            <span>VIT Vellore, India</span>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#121212]/40">
            Available for new opportunities
          </div>
        </div>
      </div>
    </section>
  );
};
