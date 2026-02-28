'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinearCardProps {
    title?: string;
    description?: string;
    tags?: string[];
    date?: string;
    status?: 'active' | 'inprogress' | 'done';
    priority?: 'low' | 'medium' | 'high';
    assignee?: string;
    children?: React.ReactNode;
}

const statusConfig = {
    active: { label: 'Active', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
    inprogress: { label: 'In Progress', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25' },
    done: { label: 'Done', color: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
};

const priorityConfig = {
    low: { label: 'Low', icon: '▼', color: 'text-emerald-400' },
    medium: { label: 'Medium', icon: '●', color: 'text-yellow-400' },
    high: { label: 'High', icon: '▲', color: 'text-red-400' },
};

export const LinearCard: React.FC<LinearCardProps> = ({
    title = 'Task Title',
    description = 'Task description goes here.',
    tags = ['React', 'TypeScript'],
    date = 'Feb 27, 2025',
    status = 'active',
    priority = 'medium',
    assignee = 'SJ',
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const s = statusConfig[status];
    const p = priorityConfig[priority];

    return (
        <>
            <motion.div
                whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(124,58,237,0.15)' }}
                className="glass-card p-4 cursor-pointer shimmer-card cursor-target"
                onClick={() => setIsOpen(true)}
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm truncate">{title}</h3>
                        <p className="text-white/50 text-xs mt-1 line-clamp-2">{description}</p>
                    </div>
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium border ${s.color}`}>
                        {s.label}
                    </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-white/35 font-mono">
                    <span className={`flex items-center gap-1 font-bold ${p.color}`}>
                        {p.icon} {p.label}
                    </span>
                    <div className="flex items-center gap-3">
                        <span>{date}</span>
                        <div className="size-5 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-[8px] font-bold text-white">
                            {assignee}
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={e => { if (e.target === e.currentTarget) setIsOpen(false); }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="glass-card p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="font-display text-xl font-bold text-white">{title}</h2>
                                    <p className="text-white/40 text-xs mt-1 font-mono">{date}</p>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white text-xl leading-none">×</button>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${s.color}`}>{s.label}</span>
                                <span className={`flex items-center gap-1 text-[10px] font-bold ${p.color}`}>{p.icon} {p.label}</span>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
                            </div>
                            {children && <div className="text-white/60 text-sm">{children}</div>}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LinearCard;
