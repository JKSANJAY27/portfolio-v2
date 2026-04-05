'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const SmoothTab = dynamic(() => import('@/components/kokonutui/smooth-tab'), { ssr: false });

const techCategories = [
  { label: 'Languages', items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript'], accent: '#D02020' },
  { label: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'LLMs (Ollama)', 'Langchain', 'Graph RAG', 'ViT', 'Mask R-CNN', 'Scikit-learn', 'ChromaDB'], accent: '#1040C0' },
  { label: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'TypeScript'], accent: '#F0C020' },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebRTC', 'JWT Auth'], accent: '#D02020' },
  { label: 'Databases', items: ['MongoDB', 'Neo4j', 'PostgreSQL', 'ChromaDB', 'SQL'], accent: '#1040C0' },
  { label: 'MLOps & Tools', items: ['Langfuse', 'GitHub Actions', 'pytest', 'Git', 'Docker', 'Zustand'], accent: '#F0C020' },
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

/* ——— Tab content components ——— */

const SummaryTab = () => (
  <div className="p-6 h-full flex flex-col">
    <h3 className="font-black uppercase text-[#121212] text-lg tracking-tight mb-4 flex items-center gap-3">
      <span className="w-4 h-4 bg-[#D02020]" />
      Professional Summary
    </h3>
    <p className="text-[#121212]/70 text-sm leading-relaxed mb-3 font-medium">
      <span className="text-[#121212] font-black">AI Engineer &amp; Software Engineer</span> — CS student at{' '}
      <span className="text-[#D02020] font-black">VIT (CGPA 9.45)</span> building production AI systems,
      LLM pipelines, Graph RAG applications, and full-stack products that solve real-world problems.
    </p>
    <p className="text-[#121212]/60 text-sm leading-relaxed mb-6 font-medium">
      Designed and deployed applications used by <span className="text-[#121212] font-black">200+ users</span>.{' '}
      Pursuing research in multimodal AI with <span className="text-[#121212] font-black">2 patents published</span>.
      Secured <span className="text-[#121212] font-black">GATE CSE 2026 (AIR 1603)</span> — seeking internship &amp; full-time roles in AI Engineering and Software Engineering.
    </p>
    <div className="mt-auto grid grid-cols-3 gap-3">
      {[
        { val: '9.45', label: 'CGPA at VIT', accent: '#D02020' },
        { val: '670', label: 'GATE Score', accent: '#1040C0' },
        { val: '2027', label: 'Expected Grad', accent: '#F0C020' },
      ].map(s => (
        <div key={s.label} className="text-center p-3 border-4 border-[#121212]" style={{ backgroundColor: s.accent }}>
          <div className="text-xl font-black leading-none" style={{ color: s.accent === '#F0C020' ? '#121212' : '#fff' }}>{s.val}</div>
          <div className="text-[10px] font-bold uppercase tracking-wide mt-1" style={{ color: s.accent === '#F0C020' ? '#121212' : 'rgba(255,255,255,0.7)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceTab = () => (
  <div className="p-6 h-full flex flex-col overflow-y-auto">
    <h3 className="font-black uppercase text-[#121212] text-lg tracking-tight mb-4 flex items-center gap-3">
      <span className="w-4 h-4 bg-[#1040C0]" />
      Experience
    </h3>
    {experiences.map(exp => (
      <div key={exp.role}>
        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
          <div>
            <h4 className="font-black text-[#121212] text-sm uppercase tracking-wide">{exp.role}</h4>
            <p className="text-[#D02020] font-bold text-xs mt-0.5 uppercase tracking-widest">{exp.company}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-[#121212]/50 uppercase">{exp.period}</span>
            <div className="mt-1">
              <span className="text-[10px] font-black px-2 py-1 border-2 border-[#121212] bg-[#F0C020] text-[#121212] uppercase tracking-wider">
                {exp.type}
              </span>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {exp.bullets.map(b => (
            <li key={b} className="flex items-start gap-2 text-xs text-[#121212]/70 font-medium">
              <span className="mt-1 w-2 h-2 bg-[#1040C0] shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const SkillsTab = () => (
  <div className="p-6 h-full flex flex-col overflow-y-auto">
    <h3 className="font-black uppercase text-[#121212] text-lg tracking-tight mb-4 flex items-center gap-3">
      <span className="w-4 h-4 bg-[#F0C020] border-2 border-[#121212]" />
      Technical Skills
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {techCategories.map(cat => (
        <div key={cat.label}>
          <div
            className="text-[10px] font-black uppercase tracking-[0.15em] mb-2 px-2 py-1 inline-block border-2 border-[#121212]"
            style={{ backgroundColor: cat.accent, color: cat.accent === '#F0C020' ? '#121212' : '#fff' }}
          >
            {cat.label}
          </div>
          <div className="flex flex-wrap gap-1">
            {cat.items.map(item => (
              <span
                key={item}
                className="text-[11px] px-2 py-0.5 border-2 border-[#121212] font-bold bg-white hover:bg-[#121212] hover:text-white transition-colors duration-150 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EducationTab = () => (
  <div className="p-6 h-full flex flex-col overflow-y-auto">
    <h3 className="font-black uppercase text-[#121212] text-lg tracking-tight mb-4 flex items-center gap-3">
      <span className="w-4 h-4 bg-[#D02020]" />
      Education
    </h3>
    <div className="space-y-3 mb-6">
      <div className="border-l-4 border-[#D02020] border-y-2 border-r-2 border-[#121212] p-4 bg-white">
        <p className="font-black text-sm text-[#121212] uppercase tracking-wide">B.Tech — Computer Science</p>
        <p className="text-[#D02020] text-xs mt-0.5 font-bold uppercase tracking-widest">Vellore Institute of Technology</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-[#121212]/50 font-bold">2023 – 2027</span>
          <span className="text-xs font-black text-[#121212] bg-[#F0C020] px-2 py-0.5 border-2 border-[#121212]">CGPA: 9.45</span>
        </div>
      </div>
      <div className="border-l-4 border-[#1040C0] border-y-2 border-r-2 border-[#121212] p-4 bg-white">
        <p className="font-black text-sm text-[#121212] uppercase tracking-wide">High School — CBSE</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-[#121212]/50 font-bold">Class XII</span>
          <span className="text-xs font-black text-[#121212] bg-[#F0C020] px-2 py-0.5 border-2 border-[#121212]">93.5%</span>
        </div>
      </div>
    </div>
    <h3 className="font-black uppercase text-[#121212] text-base tracking-tight mb-3 flex items-center gap-3">
      <span className="w-3 h-3 bg-[#1040C0]" />
      Connect
    </h3>
    <div className="flex flex-col gap-2">
      {[
        { label: 'GitHub', href: 'https://github.com/JKSANJAY27', icon: '⌨' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/sanjay-j-k', icon: '💼' },
        { label: 'Email', href: 'mailto:j.k.sanjay2006@gmail.com', icon: '✉' },
      ].map(link => (
        <a key={link.label} href={link.href} target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 bg-white border-2 border-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-200 text-xs font-bold uppercase tracking-wider text-[#121212] group"
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
          <span className="ml-auto">↗</span>
        </a>
      ))}
    </div>
  </div>
);

const aboutTabs = [
  { id: 'summary', title: 'Summary', color: 'bg-[#D02020] hover:bg-[#B01818]', cardContent: <SummaryTab /> },
  { id: 'experience', title: 'Experience', color: 'bg-[#1040C0] hover:bg-[#0D35A0]', cardContent: <ExperienceTab /> },
  { id: 'skills', title: 'Skills', color: 'bg-[#F0C020] hover:bg-[#D8A818]', cardContent: <SkillsTab /> },
  { id: 'education', title: 'Education', color: 'bg-[#121212] hover:bg-[#2a2a2a]', cardContent: <EducationTab /> },
];

export const AboutSection = () => {
  return (
    <section id="about" className="bg-[#F0F0F0] border-b-4 border-[#121212] relative overflow-hidden">

      {/* Background dot grid */}
      <div className="absolute inset-0 bauhaus-dot-grid pointer-events-none" style={{ backgroundSize: '20px 20px' }} />

      {/* Section header */}
      <div className="relative border-b-4 border-[#121212]">
        <div className="container py-10 lg:py-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1040C0] mb-2">Who I Am</p>
            <h2 className="font-black uppercase text-[#121212] leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
              About<br />Me
            </h2>
          </div>
          {/* Decorative geometric accent */}
          <div className="flex items-end gap-3">
            <div className="w-12 h-12 bg-[#D02020] border-4 border-[#121212]" />
            <div className="w-8 h-8 rounded-full bg-[#1040C0] border-4 border-[#121212]" />
            <div
              style={{ width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '32px solid #F0C020', filter: 'drop-shadow(0 0 0 3px #121212)' }}
            />
          </div>
        </div>
      </div>

      {/* Tabbed content */}
      <div className="relative container py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Override SmoothTab visual wrapper with Bauhaus borders */}
          <div className="border-4 border-[#121212] bauhaus-shadow-lg bg-white">
            <SmoothTab
              items={aboutTabs}
              defaultTabId="summary"
              activeColor="bg-[#D02020]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};