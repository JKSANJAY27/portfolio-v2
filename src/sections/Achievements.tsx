'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const FlowingMenu = dynamic(() => import('@/components/animations/FlowingMenu'), { ssr: false });

const achievementItems = [
  {
    link: '#',
    text: 'UKIERI 2025 Research Scholar',
    image: '/ukieri.jpeg',
  },
  {
    link: '#',
    text: 'Google Cloud Agentic AI Hackathon Finalist',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80',
  },
  {
    link: '#',
    text: 'DeepShiva LLM Hackathon Finalist',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80',
  },
  {
    link: '#',
    text: 'Board Member – Design Lead @ AEE VIT',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  },
  {
    link: '#',
    text: 'Senior Core Member – CodeChef VIT & TAM-VIT',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
  },
];

const achievementCards = [
  {
    icon: '🏛️',
    title: 'UKIERI 2025 Research Scholar',
    description: 'Nationally selected (9 candidates) for UK–India bilateral hydrogen research exchange. Applied CS skills in data analysis and optimization at Heriot-Watt University\'s Research Centre for Carbon Solutions.',
    tags: ['International', 'Research', 'AI/ML'],
    color: 'violet',
  },
  {
    icon: '☁️',
    title: 'Google Cloud Agentic AI Hackathon',
    description: 'Reached the finalist round in Google Cloud\'s Agentic AI Hackathon. Developed a multi-agent system leveraging Gemini and Vertex AI for intelligent workflow automation.',
    tags: ['Google Cloud', 'Agentic AI', 'Finalist'],
    color: 'cyan',
  },
  {
    icon: '🤖',
    title: 'DeepShiva LLM Hackathon Finalist',
    description: 'Finalist in the DeepShiva LLM Hackathon focused on large language model applications. Built a domain-specific RAG pipeline for Indian legal document analysis.',
    tags: ['LLM', 'RAG', 'Finalist'],
    color: 'emerald',
  },
  {
    icon: '🎨',
    title: 'Board Member – Design Lead, AEE VIT',
    description: 'Elected as a Board Member and served as Design Lead for the Association of Electrical Engineers (AEE) at VIT. Led visual identity and UX across 10+ events attended by 500+ students.',
    tags: ['Leadership', 'Design', 'Management'],
    color: 'violet',
  },
  {
    icon: '💻',
    title: 'Senior Core Member – CodeChef VIT',
    description: 'Organized coding events, workshops, and hackathons for 1,000+ students. Led competitive programming workshops and mentored junior members at CodeChef VIT & TAM-VIT AI/ML Club.',
    tags: ['Leadership', 'Competitive Programming', 'Mentoring'],
    color: 'cyan',
  },
];

const colorMap: Record<string, string> = {
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
};

const accentMap: Record<string, string> = {
  violet: 'from-violet-600 to-violet-400',
  cyan: 'from-cyan-600 to-cyan-400',
  emerald: 'from-emerald-600 to-emerald-400',
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 tech-badge mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Notable Achievements
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {/* FlowingMenu panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 mb-16 rounded-2xl overflow-hidden border border-white/8 cursor-target"
          style={{ height: '400px' }}
        >
          <FlowingMenu
            items={achievementItems}
            speed={18}
            textColor="rgba(255,255,255,0.85)"
            bgColor="#0a0a0a"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#fff"
            borderColor="rgba(255,255,255,0.08)"
          />
        </motion.div>

        {/* Achievement cards grid */}
        <p className="text-center text-white/40 text-sm mb-8">More details about each achievement</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementCards.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card p-6 shimmer-card cursor-target flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{achievement.icon}</span>
                <h3 className={`text-sm font-bold leading-tight bg-gradient-to-r ${accentMap[achievement.color]} bg-clip-text text-transparent`}>
                  {achievement.title}
                </h3>
              </div>
              <p className="text-white/60 text-xs leading-relaxed flex-1">{achievement.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {achievement.tags.map(tag => (
                  <span key={tag} className={`text-[10px] px-2 py-1 rounded-full border font-medium ${colorMap[achievement.color]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
