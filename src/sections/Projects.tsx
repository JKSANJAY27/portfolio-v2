'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TiltedCard from '@/components/animations/TiltedCard';

const portfolioProjects = [
  {
    category: 'Full Stack',
    year: '2025',
    title: 'Language Exchange Platform',
    subtitle: 'Dialingo',
    description: 'Global platform for 1-on-1 and group video calls with JWT authentication, messaging, and screen sharing. Supports 30+ UI themes enabling cross-cultural collaboration.',
    results: [
      '1-on-1 & group video calls via WebRTC',
      'JWT auth + real-time messaging',
      '30+ UI themes, Zustand state management',
      'TanStack Query for seamless data fetching',
    ],
    stack: ['React', 'Express.js', 'MongoDB', 'WebRTC', 'Zustand'],
    link: 'https://dialingo.onrender.com/',
    github: 'https://github.com/JKSANJAY27',
    image: '/projects/dialingo.png',
    color: 'from-violet-600 to-cyan-500',
  },
  {
    category: 'Full Stack',
    year: '2024',
    title: 'Collaborative Docs',
    subtitle: 'Real-time Document Editing',
    description: 'Real-time document collaboration tool with team creation, shared editing, and access control. Reduced turnaround time by 30% for 50+ student teams.',
    results: [
      'Real-time multi-user editing with Convex',
      'Team creation & access control',
      'Next.js SSR/ISR for optimal performance',
      '30% faster turnaround for 50+ teams',
    ],
    stack: ['Next.js', 'Convex', 'TailwindCSS', 'TypeScript'],
    link: 'https://collaborative-docs-fqd7.vercel.app/',
    github: 'https://github.com/JKSANJAY27',
    image: '/projects/collaborativedocs.png',
    color: 'from-emerald-600 to-cyan-500',
  },
  {
    category: 'Research / ML',
    year: '2025',
    title: 'Basketball Video Analysis',
    subtitle: 'Computer Vision Pipeline',
    description: 'Player & ball detection using YOLO models with real-time court overlays and team assignment via zero-shot learning.',
    results: [
      'YOLO-based player & ball detection',
      'Real-time court overlays & event detection',
      'Zero-shot team assignment learning',
      'Live performance analytics dashboard',
    ],
    stack: ['Python', 'YOLO', 'OpenCV', 'PyTorch'],
    link: 'https://github.com/JKSANJAY27/Basketball-Analysis',
    github: 'https://github.com/JKSANJAY27/Basketball-Analysis',
    image: '/projects/basketball.png',
    color: 'from-orange-600 to-yellow-500',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 tech-badge mb-4">
            <span className="size-1.5 rounded-full bg-violet-400" />
            Real-world Results
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm md:text-base">
            From collaborative apps to AI pipelines — building tools that people actually use.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="flex flex-col gap-24">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}
            >
              {/* Content */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-white/30 font-mono">{project.year}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/50 text-sm mt-1 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>

                <ul className="flex flex-col gap-2">
                  {project.results.map(r => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-white/70">
                      <span className={`mt-1 size-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${project.color}`} />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_28px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    View Live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image with TiltedCard */}
              <div className="relative w-full h-[300px] md:h-[400px]">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showTooltip={true}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
