'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SwapyItem {
    id: string;
    content: React.ReactNode;
    slot?: string;
}

interface DefaultSwapyProps {
    items?: SwapyItem[];
    className?: string;
}

// A grid layout showcasing skills/tools in a bento-like arrangement
// (Swapy grid functionality rendered as an animated bento grid since the swapy package may not be available)
export const DefaultSwapy: React.FC<DefaultSwapyProps> = ({
    className = '',
    items,
}) => {
    const defaultItems = [
        { id: '1', label: 'Full Stack', emoji: '🌐', desc: 'React, Next.js, Node.js', color: 'from-violet-600 to-violet-400' },
        { id: '2', label: 'AI / ML', emoji: '🤖', desc: 'PyTorch, ViT, Transformers', color: 'from-cyan-600 to-cyan-400' },
        { id: '3', label: 'Backend', emoji: '⚙️', desc: 'Express, REST, WebRTC', color: 'from-emerald-600 to-emerald-400' },
        { id: '4', label: 'Research', emoji: '🔬', desc: '2 Patents Filed', color: 'from-pink-600 to-violet-500' },
        { id: '5', label: 'Cloud', emoji: '☁️', desc: 'Vercel, Render, Railway', color: 'from-orange-500 to-yellow-500' },
        { id: '6', label: 'Database', emoji: '🗄️', desc: 'MongoDB, PostgreSQL, SQL', color: 'from-blue-600 to-cyan-500' },
    ];

    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
            {defaultItems.map((item, idx) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="glass-card p-5 shimmer-card cursor-target"
                >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <h4 className={`font-bold text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.label}
                    </h4>
                    <p className="text-white/50 text-xs mt-1">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default DefaultSwapy;
