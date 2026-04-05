'use client';
import { motion } from 'framer-motion';

/* ── helpers ── */
const accentColors = ['#D02020', '#1040C0', '#F0C020'];

/* ── Featured Projects ── */
const featuredProjects = [
  {
    category: 'Full Stack • AI/ML',
    index: '01',
    year: '2025',
    title: 'SwarmIQ',
    subtitle: 'Social Simulation Engine with Local LLMs + GraphRAG',
    description: 'A living simulation system that models how opinions form, evolve, and spread across agent networks using entirely local LLMs (Ollama) and a custom GraphRAG pipeline. Each agent has a unique persona and evolving opinions; emergent phenomena like echo chambers arise naturally.',
    results: [
      'GraphRAG pipeline: PDF/Markdown → knowledge graph → simulation world',
      'AI-generated Big Five personalities with episodic + semantic memory',
      'Async simulation engine with procedural fallback on LLM failure',
      'Interactive analyst chatbot grounded in structured simulation reports',
    ],
    stack: ['Python', 'Ollama', 'GraphRAG', 'NetworkX', 'FastAPI', 'Vue.js'],
    link: 'https://github.com/JKSANJAY27/SwarmIQ',
    github: 'https://github.com/JKSANJAY27/SwarmIQ',
    image: '/projects/swarmiq.jfif',
    accent: '#D02020',
  },
  {
    category: 'AI Engineering • Graph RAG',
    index: '02',
    year: '2025',
    title: 'Neo4j GraphReasoner',
    subtitle: 'Interactive NLP Research Knowledge Graph',
    description: 'Production-grade knowledge graph system mapping NLP research with multi-hop reasoning. Features a physics-simulated interactive graph visualizer and a local LLaMA 3.2–powered chatbot that translates natural language into Cypher queries with full observability via Langfuse.',
    results: [
      'OpenAlex pipeline ingesting real-world NLP publications into Neo4j',
      '10-tiered Cypher engine for multi-hop inference & negative pattern filtering',
      'LLM chatbot with semantic auto-correction & embedded feedback loop',
      'Full observability: Neo4j query traces, LLM spans, P95 latency alerts',
    ],
    stack: ['Neo4j', 'Node.js', 'Vanilla JS', 'vis-network', 'Ollama (LLaMA 3.2)', 'Langfuse'],
    link: 'https://github.com/JKSANJAY27/Knowledge-Graph',
    github: 'https://github.com/JKSANJAY27/Knowledge-Graph',
    image: '/projects/graphreasoner.jfif',
    accent: '#F0C020',
  },
  {
    category: 'AI Engineering • MLOps',
    index: '03',
    year: '2025',
    title: 'Production RAG System',
    subtitle: 'Hybrid Retrieval-Augmented Generation with Full Observability',
    description: 'End-to-end production-grade RAG system with hybrid retrieval (BM25 + vector search + RRF + cross-encoder re-ranking), citation enforcement, automated evaluation on golden Q&A datasets, and span-based distributed tracing. CI/CD blocks regressions automatically.',
    results: [
      'Hybrid pipeline: semantic + BM25 + RRF + cross-encoder re-ranking',
      'Citation enforcement — declines when confidence threshold not met',
      'Automated eval in GitHub Actions with F1, faithfulness & success rate',
      'Langfuse traces for every span: BM25 → vector → LLM → response',
    ],
    stack: ['Python', 'ChromaDB', 'sentence-transformers', 'BM25', 'Ollama', 'Langfuse', 'pytest', 'GitHub Actions'],
    link: 'https://github.com/JKSANJAY27/RAG-System',
    github: 'https://github.com/JKSANJAY27/RAG-System',
    image: '/projects/ragsystem.jfif',
    accent: '#1040C0',
  },
  {
    category: 'Full Stack',
    index: '04',
    year: '2025',
    title: 'Language Exchange Platform',
    subtitle: 'Dialingo',
    description: 'Global platform for 1-on-1 and group video calls with JWT authentication, real-time messaging, and screen sharing. Supports 30+ UI themes enabling seamless cross-cultural collaboration at scale.',
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
    accent: '#D02020',
  },
  {
    category: 'Research / ML',
    index: '05',
    year: '2025',
    title: 'Basketball Video Analysis',
    subtitle: 'Computer Vision Pipeline',
    description: 'Player & ball detection using YOLO models with real-time court overlays and team assignment via zero-shot learning. Live performance analytics dashboard with event detection.',
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
    accent: '#F0C020',
  },
];

/* ── Hackathon Projects ── */
const hackathonProjects = [
  {
    index: 'H1',
    title: 'JanVedha AI',
    award: "Judges' Choice — Sankalp 2026 & Finalist — India Innovates 2026",
    subtitle: 'AI for Local Leadership & Civic Decision Intelligence',
    description: 'Hyper-local governance platform that transforms citizen grievances and social sentiment into actionable decision intelligence. Features autonomous CCTV analysis, AI proposal generator, Voice-first casework logging, and Gemini-powered decision bot with full RBAC.',
    stack: ['Next.js', 'FastAPI', 'Gemini', 'OpenCV', 'LightGBM', 'SHAP', 'Leaflet', 'fpdf2'],
    link: 'https://github.com/JKSANJAY27/JanVedha-AI',
    github: 'https://github.com/JKSANJAY27/JanVedha-AI',
    image: '/projects/janvedha.jpeg',
    accent: '#D02020',
    hackathon: 'Sankalp Innovation Challenge 2026 · MNNIT Allahabad',
  },
  {
    index: 'H2',
    title: 'ASTRA',
    award: 'Yantra Central Hack',
    subtitle: 'Carbon-Aware Compute Intelligence for Developers',
    description: 'VS Code extension + web platform that embeds carbon and energy awareness directly into the developer workflow. Real-time API overuse detection, ML workload estimation, CI/CD carbon guardrails, and pre-deployment digital twin simulation.',
    stack: ['Next.js', 'FastAPI', 'TypeScript', 'Python', 'AST Parsing', 'LLM/RAG', 'Tree-sitter'],
    link: 'https://github.com/JKSANJAY27/Astra',
    github: 'https://github.com/JKSANJAY27/Astra',
    image: '/projects/astra.jfif',
    accent: '#1040C0',
    hackathon: "Yantra's Central Hack · VIT",
  },
  {
    index: 'H3',
    title: 'Project Granite',
    award: 'Code4Change Finalist',
    subtitle: 'Automated Educational Video Generation Pipeline',
    description: 'Multi-agent pipeline that transforms a text prompt into a fully rendered educational video in the style of 3Blue1Brown. Specialized agents handle content extraction, lesson planning, animation generation, narration, composition, and QA.',
    stack: ['Python', 'LLMs', 'Manim', 'TTS', 'FFmpeg', 'Multi-Agent Orchestration'],
    link: 'https://github.com/JKSANJAY27/Granite',
    github: 'https://github.com/JKSANJAY27/Granite',
    image: '/projects/granite.jfif',
    accent: '#F0C020',
    hackathon: 'Code4Change Hackathon · VIT',
  },
];

/* ── Image or Color-Block fallback ── */
const ProjectImageOrBlock = ({ image, accent, title }: { image: string; accent: string; title: string }) => {
  if (image) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ backgroundColor: accent }}>
      <div className="bauhaus-dot-grid-white absolute inset-0" style={{ backgroundSize: '20px 20px', opacity: 0.2 }} />
      <span className="font-black text-white/10 text-7xl select-none">{title.slice(0, 2).toUpperCase()}</span>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#F0F0F0] border-b-4 border-[#121212] relative">

      {/* Background dot grid */}
      <div className="absolute inset-0 bauhaus-dot-grid pointer-events-none" style={{ backgroundSize: '20px 20px' }} />

      {/* Section header */}
      <div className="relative border-b-4 border-[#121212]">
        <div className="container py-10 lg:py-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D02020] mb-2">Portfolio</p>
            <h2 className="font-black uppercase text-[#121212] leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
              Featured<br />Projects
            </h2>
          </div>
          <p className="text-[#121212]/60 font-medium max-w-xs text-sm leading-relaxed">
            Production AI systems, full-stack apps, and research tools — built to solve real problems.
          </p>
        </div>
      </div>

      {/* Featured projects list */}
      <div className="relative">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={`border-b-4 border-[#121212] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F0F0F0]'}`}
          >
            <div className={`container grid lg:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}>

              {/* Content */}
              <div className={`py-12 lg:py-16 ${idx % 2 === 1 ? 'lg:border-l-4 lg:pl-12 border-[#121212] lg:pr-0' : 'lg:border-r-4 lg:pr-12 border-[#121212]'} flex flex-col gap-6`}>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-[#121212] shrink-0"
                    style={{ backgroundColor: project.accent, color: project.accent === '#F0C020' ? '#121212' : '#fff' }}
                  >
                    {project.index}
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-[#121212]/50">{project.category}</span>
                    <span className="ml-3 text-xs font-bold text-[#121212]/30">{project.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-black text-[#121212] uppercase leading-none text-3xl md:text-4xl tracking-tight">{project.title}</h3>
                  <p className="text-[#121212]/50 text-sm font-bold uppercase tracking-wider mt-2">{project.subtitle}</p>
                </div>

                <p className="text-[#121212]/70 text-sm leading-relaxed font-medium">{project.description}</p>

                <ul className="flex flex-col gap-2">
                  {project.results.map(r => (
                    <li key={r} className="flex items-start gap-3 text-sm text-[#121212]/80 font-medium">
                      <span className="mt-1.5 w-2 h-2 shrink-0" style={{ backgroundColor: project.accent }} />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(t => (
                    <span key={t} className="bauhaus-tag text-[#121212]">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bauhaus-btn border-2 border-[#121212] text-xs"
                    style={{
                      backgroundColor: project.accent,
                      color: project.accent === '#F0C020' ? '#121212' : '#fff',
                      boxShadow: '4px 4px 0px 0px #121212',
                    }}
                  >
                    View Live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bauhaus-btn bauhaus-btn-outline text-xs"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={`relative min-h-[280px] md:min-h-[380px] border-t-4 lg:border-t-0 border-[#121212] overflow-hidden`}>
                <ProjectImageOrBlock image={project.image} accent={project.accent} title={project.title} />
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-[#121212] z-10" style={{ backgroundColor: project.accent }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hackathon Projects divider */}
      <div className="relative border-t-4 border-b-4 border-[#121212] bg-[#121212]">
        <div className="container py-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F0C020] mb-2">Competition Builds</p>
            <h3 className="font-black uppercase text-white leading-none text-3xl md:text-4xl tracking-tight">
              Hackathon<br />Projects
            </h3>
          </div>
          <p className="text-white/50 font-medium max-w-xs text-sm leading-relaxed">
            Award-winning builds across national-level innovation challenges.
          </p>
        </div>
      </div>

      {/* Hackathon grid */}
      <div className="relative">
        <div className="container py-12 lg:py-16 grid md:grid-cols-3 gap-6">
          {hackathonProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bauhaus-card flex flex-col overflow-hidden"
            >
              {/* Image or color block */}
              <div className="relative h-44 border-b-4 border-[#121212] overflow-hidden">
                <ProjectImageOrBlock image={project.image} accent={project.accent} title={project.title} />
                {/* Award badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2 border-t-2 border-[#121212] text-[10px] font-black uppercase tracking-wider z-10"
                  style={{ backgroundColor: project.accent, color: project.accent === '#F0C020' ? '#121212' : '#fff' }}
                >
                  🏆 {project.award}
                </div>
              </div>

              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Index + Title */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center font-black text-xs border-2 border-[#121212] shrink-0 mt-0.5"
                    style={{ backgroundColor: project.accent, color: project.accent === '#F0C020' ? '#121212' : '#fff' }}
                  >
                    {project.index}
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[#121212] text-lg leading-tight tracking-tight">{project.title}</h4>
                    <p className="text-[10px] text-[#121212]/50 font-bold uppercase tracking-widest mt-0.5">{project.hackathon}</p>
                  </div>
                </div>

                <p className="text-xs text-[#121212]/60 leading-relaxed font-medium flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 border-2 border-[#121212] font-bold uppercase tracking-wide bg-transparent">{t}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 border-2 border-[#121212] font-bold bg-[#121212] text-white">+{project.stack.length - 4}</span>
                  )}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bauhaus-btn text-[10px] border-2 border-[#121212] mt-auto justify-center"
                  style={{
                    backgroundColor: project.accent,
                    color: project.accent === '#F0C020' ? '#121212' : '#fff',
                    boxShadow: '3px 3px 0px 0px #121212',
                  }}
                >
                  View on GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
