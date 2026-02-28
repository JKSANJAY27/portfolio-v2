'use client';
import React, { useEffect, useRef } from 'react';

interface BuyMeCoffeeProps {
    username?: string;
    message?: string;
    className?: string;
    color?: string;
    label?: string;
}

const CoffeeIcon = () => (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
    </svg>
);

export const BuyMeCoffee: React.FC<BuyMeCoffeeProps> = ({
    username = 'JKSANJAY27',
    message = 'Enjoying my work? Buy me a coffee!',
    className = '',
    color = 'from-yellow-400 to-orange-400',
    label = 'Buy me a coffee',
}) => {
    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            {message && (
                <p className="text-white/50 text-xs text-center max-w-[200px] leading-relaxed">{message}</p>
            )}
            <a
                href={`https://www.buymeacoffee.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-target inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-900 bg-gradient-to-r ${color} shadow-[0_4px_20px_rgba(251,191,36,0.35)] hover:shadow-[0_4px_28px_rgba(251,191,36,0.55)] hover:scale-105 active:scale-95 transition-all duration-300`}
            >
                <CoffeeIcon />
                <span>{label}</span>
            </a>
        </div>
    );
};

export default BuyMeCoffee;
