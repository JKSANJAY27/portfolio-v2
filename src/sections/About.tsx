'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const SmoothTab = dynamic(() => import('@/components/kokonutui/smooth-tab'), { ssr: false });

const techCategories = [
  {
    label: 'Languages',
    items: ['C++', 'C', 'Java', 'Python', 'JavaScript'],
    color: 'violet',
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'TypeScript'],
    color: 'cyan',
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebRTC', 'JWT Auth'],
    color: 'emerald',
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'SQL'],
    color: 'violet',
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Zustand', 'TanStack Query', 'Convex'],
    color: 'cyan',
  },
  {
    label: 'AI/ML',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ViT', 'Detectron2', 'Mask R-CNN'],
    color: 'emerald',
  },
];

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Valsco Technology',
    period: 'Jun 2024 – Sep 2024',
    type: 'Remote',
    bullets: [
      'Built and deployed NoteSwap, a ReactJS platform used by 200+ students',
      'Reduced manual note exchange by 70% and optimized performance by 20%',
      'Improved user retention by 15% across 1,000+ active sessions',
      'Delivered responsive, production-ready UI components',
    ],
  },
];

const colorMap: Record<string, string> = {
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/40',
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/40',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/40',
};

const SummaryTab = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-violet-500/5 to-transparent" />
    </div>
    <div className="relative flex flex-col p-6 h-full">
      <h3 className="font-display text-xl font-bold text-white mb-3 flex items-center gap-2">
        <span>👨‍💻</span> Professional Summary
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-3">
        Computer Science student at <span className="text-violet-400 font-semibold">VIT (CGPA 9.45)</span> with proven experience
        in full-stack development, AI/ML, and scalable software engineering.
      </p>
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        Designed and deployed applications adopted by <span className="text-white font-medium">200+ users</span>,
        improved system performance by <span className="text-white font-medium">20%</span>,
        and increased collaboration efficiency by <span className="text-white font-medium">30%</span>.
        Currently pursuing research in multimodal AI.
      </p>
      <div className="mt-auto grid grid-cols-3 gap-3">
        {[
          { val: '9.45', label: 'CGPA at VIT' },
          { val: '200+', label: 'Users Impacted' },
          { val: '2027', label: 'Expected Grad' },
        ].map(s => (
          <div key={s.label} className="text-center p-2.5 rounded-xl bg-white/3 border border-white/5">
            <div className="text-lg font-bold text-gradient font-mono">{s.val}</div>
            <div className="text-[10px] text-white/40 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceTab = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-500/5 to-transparent" />
    </div>
    <div className="relative flex flex-col p-6 h-full overflow-y-auto">
      <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>💼</span> Experience
      </h3>
      {experiences.map(exp => (
        <div key={exp.role}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
              <p className="text-violet-400 font-medium text-xs mt-0.5">{exp.company}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-white/50">{exp.period}</span>
              <div className="mt-1">
                <span className="tech-badge text-[10px]">{exp.type}</span>
              </div>
            </div>
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {exp.bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-xs text-white/60">
                <span className="mt-1 size-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const SkillsTab = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-500/5 to-transparent" />
    </div>
    <div className="relative flex flex-col p-6 h-full overflow-y-auto">
      <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>⚡</span> Technical Skills
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {techCategories.map(cat => (
          <div key={cat.label}>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1.5">{cat.label}</div>
            <div className="flex flex-wrap gap-1">
              {cat.items.map(item => (
                <span key={item} className={`text-[11px] px-2 py-0.5 rounded-full border font-medium transition-all duration-200 ${colorMap[cat.color]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EducationTab = () => (
  <div className="relative h-full">
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-amber-500/5 to-transparent" />
    </div>
    <div className="relative flex flex-col p-6 h-full">
      <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🎓</span> Education
      </h3>
      <div className="space-y-3 mb-6">
        <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/20">
          <p className="font-semibold text-sm text-white">B.Tech — Computer Science</p>
          <p className="text-violet-400 text-xs mt-0.5 font-medium">Vellore Institute of Technology</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-white/40 font-mono">2023 – 2027</span>
            <span className="text-xs font-bold text-emerald-400 font-mono">CGPA: 9.45</span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-white/3 border border-white/8">
          <p className="font-semibold text-sm text-white">High School (CBSE)</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-white/40">Class XII</span>
            <span className="text-xs font-bold text-cyan-400 font-mono">Score: 93.5%</span>
          </div>
        </div>
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
        <span>🔗</span> Connect
      </h3>
      <div className="flex flex-col gap-1.5">
        {[
          { label: 'GitHub', href: 'https://github.com/JKSANJAY27', icon: '⌨️' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/sanjay-j-k', icon: '💼' },
          { label: 'Email', href: 'mailto:j.k.sanjay2006@gmail.com', icon: '✉️' },
        ].map(link => (
          <a key={link.label} href={link.href} target="_blank"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/3 border border-white/5 hover:bg-white/8 hover:border-white/15 transition-all duration-200 text-xs text-white/70 hover:text-white">
            <span className="text-sm">{link.icon}</span>
            <span className="font-medium">{link.label}</span>
            <span className="ml-auto text-[10px] text-white/30">↗</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const aboutTabs = [
  {
    id: 'summary',
    title: 'Summary',
    color: 'bg-violet-600 hover:bg-violet-700',
    cardContent: <SummaryTab />,
  },
  {
    id: 'experience',
    title: 'Experience',
    color: 'bg-cyan-600 hover:bg-cyan-700',
    cardContent: <ExperienceTab />,
  },
  {
    id: 'skills',
    title: 'Skills',
    color: 'bg-emerald-600 hover:bg-emerald-700',
    cardContent: <SkillsTab />,
  },
  {
    id: 'education',
    title: 'Education',
    color: 'bg-amber-500 hover:bg-amber-600',
    cardContent: <EducationTab />,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 tech-badge mb-4">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            About Me
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            A Glimpse Into <span className="text-gradient">My World</span>
          </h2>
        </motion.div>

        {/* Tabbed content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <SmoothTab
            items={aboutTabs}
            defaultTabId="summary"
            activeColor="bg-violet-600"
          />
        </motion.div>
      </div>
    </section>
  );
};