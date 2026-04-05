'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const FlowingMenu = dynamic(() => import('@/components/animations/FlowingMenu'), { ssr: false });

const achievementItems = [
  { link: '#', text: 'GATE CSE 2026 — AIR 1603 · Score 670', image: '/gate.png' },
  { link: '#', text: "Judges' Choice — Sankalp Innovation Challenge 2026 · MNNIT Allahabad", image: '/projects/janvedha.jpeg' },
  { link: '#', text: 'UKIERI 2025 Research Scholar — Heriot-Watt University', image: '/ukieri.jpeg' },
  { link: '#', text: 'India Innovates 2026 Finalist — Bharat Mandapam, New Delhi', image: '/projects/janvedha.jpeg' },
  { link: '#', text: 'Google Cloud Agentic AI Hackathon Finalist', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80' },
  { link: '#', text: 'DeepShiva LLM Hackathon Finalist', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80' },
  { link: '#', text: 'Code4Change Hackathon Finalist — Project Granite', image: '/projects/granite.jfif' },
  { link: '#', text: 'Board Member — Design Lead @ AEE VIT', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80' },
  { link: '#', text: 'Senior Core Member — CodeChef VIT & TAM-VIT AI/ML Club', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
];

const achievementCards = [
  {
    icon: '🎓',
    index: '01',
    title: 'GATE CSE 2026',
    description: 'Secured GATE CSE 2026 with a score of 670 and All India Rank 1603 — a nationally recognised benchmark of CS fundamentals and engineering aptitude, qualifying for PSU and IIT/IISc PG admissions.',
    tags: ['AIR 1603', 'Score 670', 'CSE 2026'],
    accent: '#D02020',
  },
  {
    icon: '🏆',
    index: '02',
    title: "Judges' Choice — Sankalp 2026",
    description: "Won Judges' Choice Award at the Sankalp Innovation Challenge 2026 at MNNIT Allahabad, Prayagraj — a national-level AI and innovation challenge in association with Medha AI. Built JanVedha AI, a civic decision intelligence platform.",
    tags: ['National Award', 'AI for India', 'MNNIT Allahabad'],
    accent: '#F0C020',
  },
  {
    icon: '🇮🇳',
    index: '03',
    title: 'India Innovates 2026 Finalist',
    description: "Finalist at India Innovates 2026 — the World's Largest Civic Tech Hackathon, held at Bharat Mandapam, New Delhi on 28 March 2026. Among the brightest student innovators selected to present governance, security, and national systems solutions.",
    tags: ['Bharat Mandapam', 'Civic Tech', 'New Delhi'],
    accent: '#1040C0',
  },
  {
    icon: '🏛️',
    index: '04',
    title: 'UKIERI 2025 Research Scholar',
    description: "Nationally selected (Top 9) for UK–India bilateral hydrogen research exchange. Applied AI/ML skills in data analysis and optimization at Heriot-Watt University's Research Centre for Carbon Solutions.",
    tags: ['International', 'Research', 'Heriot-Watt'],
    accent: '#D02020',
  },
  {
    icon: '☁️',
    index: '05',
    title: 'Google Cloud Agentic AI Hackathon',
    description: "Finalist in Google Cloud's Agentic AI Hackathon. Developed a multi-agent system leveraging Gemini and Vertex AI for intelligent workflow automation.",
    tags: ['Google Cloud', 'Agentic AI', 'Finalist'],
    accent: '#F0C020',
  },
  {
    icon: '🤖',
    index: '06',
    title: 'DeepShiva LLM Hackathon Finalist',
    description: 'Finalist in the DeepShiva LLM Hackathon. Built a domain-specific RAG pipeline for Indian legal document analysis.',
    tags: ['LLM', 'RAG', 'Finalist'],
    accent: '#1040C0',
  },
  {
    icon: '🎨',
    index: '07',
    title: 'Board Member — Design Lead, AEE VIT',
    description: 'Elected Board Member and Design Lead for the Association of Electrical Engineers (AEE) at VIT. Led visual identity and UX across 10+ events attended by 500+ students.',
    tags: ['Leadership', 'Design', 'VIT'],
    accent: '#D02020',
  },
  {
    icon: '💻',
    index: '08',
    title: 'Senior Core Member — CodeChef VIT',
    description: 'Organized coding events, workshops, and hackathons for 1,000+ students. Led competitive programming workshops and mentored junior members at CodeChef VIT & TAM-VIT AI/ML Club.',
    tags: ['Competitive Programming', 'Mentoring', '1000+ Students'],
    accent: '#F0C020',
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="bg-[#1040C0] border-b-4 border-[#121212] relative overflow-hidden">

      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none bauhaus-dot-grid-white"
        style={{ backgroundSize: '20px 20px', opacity: 0.12 }}
      />

      {/* Section header */}
      <div className="relative border-b-4 border-[#121212]">
        <div className="container py-10 lg:py-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50 mb-2">Milestones</p>
            <h2
              className="font-black uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              My<br />Achievements
            </h2>
          </div>
          {/* GATE highlight callout */}
          <div className="flex items-end gap-3">
            <div className="bg-[#F0C020] border-4 border-[#121212] px-5 py-3 text-center" style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.3)' }}>
              <div className="font-black text-[#121212] text-2xl leading-none">670</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#121212]/70">GATE Score</div>
              <div className="text-[10px] font-bold text-[#121212]/50 mt-0.5">AIR 1603 · CSE 2026</div>
            </div>
            <div className="bg-[#D02020] border-4 border-[#121212] px-5 py-3 text-center" style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.3)' }}>
              <div className="font-black text-white text-2xl leading-none">8×</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/70">Awards &amp;</div>
              <div className="text-[10px] font-bold text-white/50 mt-0.5">Recognition</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* FlowingMenu panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b-4 border-[#121212]"
          style={{ height: '380px' }}
        >
          <FlowingMenu
            items={achievementItems}
            speed={18}
            textColor="rgba(255,255,255,0.9)"
            bgColor="#0D35A0"
            marqueeBgColor="#F0C020"
            marqueeTextColor="#121212"
            borderColor="rgba(255,255,255,0.15)"
          />
        </motion.div>

        {/* Achievement cards grid */}
        <div className="container py-12 lg:py-16">
          <p className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Highlights
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementCards.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="bg-white border-4 border-white flex flex-col gap-4 p-5 hover:-translate-y-1 transition-transform duration-200 relative"
                style={{ boxShadow: '6px 6px 0px 0px rgba(255,255,255,0.3)' }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 border-l-4 border-b-4 border-white"
                  style={{ backgroundColor: achievement.accent }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center font-black text-xs border-4 border-[#121212] shrink-0"
                    style={{ backgroundColor: achievement.accent, color: achievement.accent === '#F0C020' ? '#121212' : '#fff' }}
                  >
                    {achievement.index}
                  </div>
                  <h3 className="font-black text-[#121212] text-xs uppercase tracking-tight leading-tight pr-6">
                    {achievement.title}
                  </h3>
                </div>

                <p className="text-[#121212]/60 text-[11px] leading-relaxed flex-1 font-medium">{achievement.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {achievement.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-0.5 border-2 border-[#121212] font-black uppercase tracking-wide"
                      style={{ backgroundColor: achievement.accent, color: achievement.accent === '#F0C020' ? '#121212' : '#fff' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
