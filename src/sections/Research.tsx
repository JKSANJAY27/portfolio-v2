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
    index: string;
}

const researchProjects: ResearchProject[] = [
    {
        title: 'Pan-Chronological Vision–Language Transformer for Tamil Script Decipherment',
        shortTitle: 'Tamil Script VLT',
        organization: 'Vellore Institute of Technology',
        period: '2025 – 2026',
        status: 'Patent Published',
        description: 'Designed a cross-era Tamil inscription recognition system spanning Tamil-Brahmi, Vatteluttu, Grantha, and Modern Tamil scripts. Implemented Vision Transformer encoder + cross-attention Transformer decoder for end-to-end transliteration.',
        highlights: [
            'ViT encoder + cross-attention Transformer decoder architecture',
            'Temporal Positional Embeddings (TPE) for era-aware encoding',
            'Grapheme-to-Phoneme (G2P) unification module for phonemic alignment',
            'Auxiliary chronological classification head for automatic period attribution',
            '~8,000 curated inscription samples across 4 historical eras',
        ],
        metrics: [
            { label: 'Char Error Rate', value: '5.12%' },
            { label: 'Word Error Rate', value: '12.84%' },
            { label: 'Historical Eras', value: '4' },
            { label: 'Training Samples', value: '~8K' },
        ],
        tags: ['Vision Transformer', 'Cross-Attention', 'NLP', 'OCR', 'Deep Learning'],
        index: '01',
    },
    {
        title: 'Personalized AI System for Color Vision Deficiency',
        shortTitle: 'CVD AI System',
        organization: 'Vellore Institute of Technology',
        period: '2025 – 2026',
        status: 'Patent Published',
        description: 'End-to-end AI system for personalized color perception modeling and adaptive garment recommendation for CVD users. Features psychophysical adaptive staircase algorithm and AR-based real-time accessibility support.',
        highlights: [
            'Psychophysical adaptive staircase algorithm for perceptual threshold estimation',
            'Personalized CIELAB a*/b* color gamut modeling per user',
            'Detectron2 Mask R-CNN + adaptive K-means for color extraction',
            'CVD-aware recommendation engine with fuzzy logic + ML safety weighting',
            'Real-time AR bounding box detection with audio feedback',
        ],
        metrics: [
            { label: 'Domain', value: 'Accessibility' },
            { label: 'Architecture', value: 'Multi-Stage' },
            { label: 'AI Model', value: 'Mask R-CNN' },
            { label: 'Axes Modeled', value: 'CIELAB a*/b*' },
        ],
        tags: ['Accessibility AI', 'Computer Vision', 'Mask R-CNN', 'Fuzzy Logic', 'AR'],
        index: '02',
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
            { label: 'National Selection', value: 'Top 9' },
            { label: 'University', value: 'Heriot-Watt' },
            { label: 'Program', value: 'SPARC/UKIERI' },
            { label: 'Competition', value: 'Runner-up' },
        ],
        tags: ['Electrochemistry', 'Hydrogen', 'Green Energy', 'Data Analysis', 'CV/LSV'],
        index: '03',
    },
];

const metricAccents = ['#D02020', '#F0C020', '#1040C0', '#D02020'];

export const ResearchSection = () => {
    return (
        <section id="research" className="bg-[#D02020] border-b-4 border-[#121212] relative overflow-hidden">

            {/* Background dot grid */}
            <div
                className="absolute inset-0 pointer-events-none bauhaus-dot-grid-white"
                style={{ backgroundSize: '20px 20px', opacity: 0.15 }}
            />

            {/* Section header */}
            <div className="relative border-b-4 border-[#121212] bg-[#D02020]">
                <div className="container py-10 lg:py-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60 mb-2">Academic Work</p>
                        <h2
                            className="font-black uppercase text-white leading-none"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
                        >
                            Research &amp;<br />Innovation
                        </h2>
                    </div>
                    <p className="text-white/70 font-medium max-w-xs text-sm leading-relaxed">
                        Focused on multimodal AI systems, accessibility technology, and cross-domain innovation.
                        2 patents published · 1 international research exchange.
                    </p>
                </div>
            </div>

            {/* Research cards */}
            <div className="container relative py-12 lg:py-16 flex flex-col gap-8">
                {researchProjects.map((project, idx) => (
                    <motion.div
                        key={project.shortTitle}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bauhaus-card overflow-hidden relative"
                    >
                        {/* Top color stripe */}
                        <div className="h-2 w-full bg-[#F0C020] border-b-4 border-[#121212]" />

                        <div className="p-6 md:p-8">
                            {/* Header row */}
                            <div className="flex flex-wrap items-start gap-4 mb-6">
                                {/* Index number */}
                                <div className="w-12 h-12 bg-[#121212] flex items-center justify-center font-black text-white text-lg shrink-0">
                                    {project.index}
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span
                                            className="px-3 py-0.5 text-xs font-black uppercase tracking-widest border-2 border-[#121212]"
                                            style={{
                                                backgroundColor: project.status === 'Patent Published' ? '#1040C0' : '#F0C020',
                                                color: project.status === 'Patent Published' ? '#fff' : '#121212',
                                            }}
                                        >
                                            {project.status}
                                        </span>
                                        <span className="text-xs text-[#121212]/50 font-bold uppercase tracking-wide">{project.period}</span>
                                    </div>
                                    <h3 className="font-black text-[#121212] uppercase text-xl md:text-2xl leading-tight tracking-tight">
                                        {project.shortTitle}
                                    </h3>
                                    <p className="text-[#D02020] font-bold text-sm mt-0.5">{project.organization}</p>
                                    <p className="text-[#121212]/40 text-xs italic mt-1">{project.title}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-[1fr,200px] gap-8">
                                <div>
                                    <p className="text-[#121212]/70 text-sm leading-relaxed mb-5 font-medium">{project.description}</p>

                                    {/* Highlights */}
                                    <ul className="flex flex-col gap-2 mb-6">
                                        {project.highlights.map(h => (
                                            <li key={h} className="flex items-start gap-3 text-sm text-[#121212]/80">
                                                <span className="mt-1.5 w-2 h-2 bg-[#D02020] shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="bauhaus-tag text-[#121212]">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics grid */}
                                <div className="grid grid-cols-2 md:grid-cols-1 gap-3 content-start">
                                    {project.metrics.map((m, mi) => (
                                        <div
                                            key={m.label}
                                            className="border-4 border-[#121212] p-3 text-center"
                                            style={{ backgroundColor: metricAccents[mi % metricAccents.length] }}
                                        >
                                            <div
                                                className="font-black text-xl leading-none"
                                                style={{ color: metricAccents[mi % metricAccents.length] === '#F0C020' ? '#121212' : '#fff' }}
                                            >
                                                {m.value}
                                            </div>
                                            <div
                                                className="text-[10px] font-bold uppercase tracking-wide mt-1"
                                                style={{ color: metricAccents[mi % metricAccents.length] === '#F0C020' ? '#121212' : 'rgba(255,255,255,0.7)' }}
                                            >
                                                {m.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Research Output box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-[#1040C0] border-4 border-[#121212] p-8"
                    style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.3)' }}
                >
                    <h3 className="font-black uppercase text-white text-2xl tracking-tight mb-6">
                        Research Output
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { type: 'Patent (2025)', title: 'Wardrobe Colour Diversity & Personalized CVD Gamut Modeling System', status: 'Published' },
                            { type: 'Patent (2025)', title: 'Pan-Chronological Vision–Language Transformer for Tamil Script Decipherment', status: 'Published' },
                        ].map(output => (
                            <div key={output.title} className="bg-white border-4 border-[#121212] p-4 flex items-start gap-3">
                                <div className="shrink-0">
                                    <span
                                        className="text-[11px] font-black px-2 py-1 uppercase tracking-wider border-2 border-[#121212]"
                                        style={{
                                            backgroundColor: output.status === 'Published' ? '#1040C0' : output.status === 'In Progress' ? '#F0C020' : '#D02020',
                                            color: output.status === 'In Progress' ? '#121212' : '#fff',
                                        }}
                                    >
                                        {output.status}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#1040C0] mb-1">{output.type}</p>
                                    <p className="text-xs text-[#121212]/70 leading-relaxed font-medium">{output.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
