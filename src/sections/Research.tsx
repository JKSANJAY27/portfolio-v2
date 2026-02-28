'use client';
import { motion } from 'framer-motion';

interface ResearchProject {
    title: string;
    shortTitle: string;
    organization: string;
    period: string;
    status: string;
    description: string;
    highlights: string[];
    metrics: { label: string; value: string }[];
    tags: string[];
    icon: string;
    color: string;
}

const researchProjects: ResearchProject[] = [
    {
        title: 'Pan-Chronological Vision–Language Transformer for Tamil Script Decipherment',
        shortTitle: 'Tamil Script VLT',
        organization: 'Vellore Institute of Technology',
        period: '2025 – Present',
        status: 'Patent Filing Stage',
        description: 'Designed a cross-era Tamil inscription recognition system spanning Tamil-Brahmi, Vatteluttu, Grantha, and Modern Tamil scripts. Implemented Vision Transformer encoder + cross-attention Transformer decoder for end-to-end transliteration.',
        highlights: [
            'ViT encoder + cross-attention Transformer decoder architecture',
            'Temporal Positional Embeddings (TPE) for era-aware encoding',
            'Grapheme-to-Phoneme (G2P) unification module for phonemic alignment',
            'Auxiliary chronological classification head for automatic period attribution',
            '~8,000 curated inscription samples across 4 historical eras',
        ],
        metrics: [
            { label: 'Character Error Rate', value: '5.12%' },
            { label: 'Word Error Rate', value: '12.84%' },
            { label: 'Historical Eras', value: '4' },
            { label: 'Training Samples', value: '~8K' },
        ],
        tags: ['Vision Transformer', 'Cross-Attention', 'NLP', 'OCR', 'Deep Learning'],
        icon: '📜',
        color: 'from-violet-600 to-cyan-500',
    },
    {
        title: 'Personalized AI System for Color Vision Deficiency',
        shortTitle: 'CVD AI System',
        organization: 'Vellore Institute of Technology',
        period: '2025 – Present',
        status: 'Patent Filing Stage',
        description: 'End-to-end AI system for personalized color perception modeling and adaptive garment recommendation for CVD users. Features psychophysical adaptive staircase algorithm and AR-based real-time accessibility support.',
        highlights: [
            'Psychophysical adaptive staircase algorithm for perceptual threshold estimation',
            'Personalized CIELAB a*/b* color gamut modeling per user',
            'Detectron2 Mask R-CNN + adaptive K-means for color extraction',
            'CVD-aware recommendation engine with fuzzy logic + ML safety weighting',
            'Real-time AR bounding box detection with audio feedback',
        ],
        metrics: [
            { label: 'Technology Readiness', value: 'TRL-3' },
            { label: 'Architecture', value: 'Multi-Stage' },
            { label: 'AI Models', value: 'Mask R-CNN' },
            { label: 'Axes Modeled', value: 'CIELAB a*/b*' },
        ],
        tags: ['Accessibility AI', 'Computer Vision', 'Mask R-CNN', 'Fuzzy Logic', 'AR'],
        icon: '👁️',
        color: 'from-pink-600 to-violet-500',
    },
    {
        title: 'UKIERI–SPARC Hydrogen Catalyst Validation',
        shortTitle: 'Hydrogen Research',
        organization: 'Heriot-Watt University, UK',
        period: 'May 2025 – Jul 2025',
        status: 'UKIERI Scholar',
        description: 'Selected among 9 candidates nationally for UK–India hydrogen research exchange. Conducted electrochemical validation of OER/HER catalysts and contributed to scalable electrolyser stack conceptual modeling.',
        highlights: [
            'Electrochemical validation of OER/HER catalysts using CV, LSV, Tafel analysis',
            'Interpreted performance curves and reaction kinetics for efficiency benchmarking',
            'Contributed to scalable electrolyser stack conceptual modeling',
            'Runner-up in research commercialization competition',
        ],
        metrics: [
            { label: 'National Selection', value: '9/∞' },
            { label: 'University', value: 'Heriot-Watt UK' },
            { label: 'Program', value: 'SPARC/UKIERI' },
            { label: 'Competition', value: 'Runner-up' },
        ],
        tags: ['Electrochemistry', 'Hydrogen', 'Green Energy', 'Data Analysis', 'CV/LSV'],
        icon: '⚗️',
        color: 'from-emerald-600 to-cyan-500',
    },
];

export const ResearchSection = () => {
    return (
        <section id="research" className="py-20 lg:py-32 relative">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 tech-badge mb-4">
                        <span className="size-1.5 rounded-full bg-violet-400" />
                        Research Work
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                        Research & <span className="text-gradient">Innovation</span>
                    </h2>
                    <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
                        Focused on multimodal AI systems, accessibility technology, and cross-domain innovation.
                        2 patents filed · 1 international research exchange.
                    </p>
                </motion.div>

                {/* Research cards */}
                <div className="flex flex-col gap-8">
                    {researchProjects.map((project, idx) => (
                        <motion.div
                            key={project.shortTitle}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="glass-card p-8 shimmer-card cursor-target overflow-hidden relative"
                        >
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color}`} />

                            <div className="grid md:grid-cols-[1fr,auto] gap-6 items-start">
                                <div className="flex-1">
                                    {/* Title row */}
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-2xl">{project.icon}</span>
                                        <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                            {project.status}
                                        </span>
                                        <span className="text-xs text-white/30 font-mono">{project.period}</span>
                                    </div>

                                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">{project.shortTitle}</h3>
                                    <p className="text-violet-400 text-sm font-medium mb-1">{project.organization}</p>
                                    <p className="text-xs text-white/40 italic mb-4 leading-tight">{project.title}</p>

                                    <p className="text-white/60 text-sm leading-relaxed mb-5">{project.description}</p>

                                    {/* Highlights */}
                                    <ul className="flex flex-col gap-1.5 mb-5">
                                        {project.highlights.map(h => (
                                            <li key={h} className="flex items-start gap-2.5 text-sm text-white/65">
                                                <span className={`mt-1.5 size-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${project.color}`} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tech-badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics column */}
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:w-44">
                                    {project.metrics.map(m => (
                                        <div key={m.label} className="metric-card text-center">
                                            <div className={`text-xl font-bold font-mono bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                                {m.value}
                                            </div>
                                            <div className="text-[10px] text-white/40 mt-1 leading-tight">{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Research output */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 glass-card p-6 border-gradient"
                >
                    <h3 className="font-display text-lg font-bold text-white mb-4">📄 Research Output</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { type: 'Patent (2025)', title: 'Wardrobe Colour Diversity & Personalized CVD Gamut Modeling System', status: 'Filing Stage' },
                            { type: 'Patent (2025)', title: 'Pan-Chronological Vision–Language Transformer for Tamil Script Decipherment', status: 'Filing Stage' },
                            { type: 'Manuscript', title: 'Accessibility AI Systems — in preparation for journal submission', status: 'In Progress' },
                            { type: 'Manuscript', title: 'Epigraphic AI Systems — in preparation for journal submission', status: 'In Progress' },
                        ].map(output => (
                            <div key={output.title} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5">
                                <div className="flex-shrink-0">
                                    <span className={`text-[11px] whitespace-nowrap font-bold px-2 py-1 rounded-full ${output.status === 'Filing Stage' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25' : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25'}`}>
                                        {output.status}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-violet-400 font-semibold uppercase tracking-wide">{output.type}</p>
                                    <p className="text-xs text-white/60 mt-1 leading-relaxed">{output.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
