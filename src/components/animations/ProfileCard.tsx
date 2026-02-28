'use client';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#3b1d6e8c 0%,#7c3aed44 100%)';

const ANIMATION_CONFIG = {
    INITIAL_DURATION: 1200,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20,
    ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
    round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

if (typeof document !== 'undefined' && !document.getElementById('pc-keyframes')) {
    const style = document.createElement('style');
    style.id = 'pc-keyframes';
    style.textContent = `@keyframes pc-holo-bg{0%{background-position:0 var(--background-y),0 0,center}100%{background-position:0 var(--background-y),90% 90%,center}}`;
    document.head.appendChild(style);
}

interface ProfileCardProps {
    avatarUrl?: string;
    iconUrl?: string;
    grainUrl?: string;
    innerGradient?: string;
    behindGlowEnabled?: boolean;
    behindGlowColor?: string;
    behindGlowSize?: string;
    className?: string;
    enableTilt?: boolean;
    miniAvatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
    showUserInfo?: boolean;
    onContactClick?: () => void;
}

interface TiltEngine {
    setImmediate: (x: number, y: number) => void;
    setTarget: (x: number, y: number) => void;
    toCenter: () => void;
    beginInitial: (durationMs: number) => void;
    getCurrent: () => { x: number; y: number; tx: number; ty: number };
    cancel: () => void;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
    avatarUrl = '/profile.png',
    iconUrl,
    grainUrl,
    innerGradient,
    behindGlowEnabled = true,
    behindGlowColor,
    behindGlowSize,
    className = '',
    enableTilt = true,
    miniAvatarUrl,
    name = 'Sanjay J K',
    title = 'Full Stack Developer & AI Researcher',
    handle = 'JKSANJAY27',
    status = 'Open to Opportunities',
    contactText = 'Connect',
    showUserInfo = true,
    onContactClick
}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const shellRef = useRef<HTMLDivElement>(null);
    const enterTimerRef = useRef<number | null>(null);
    const leaveRafRef = useRef<number | null>(null);

    const tiltEngine = useMemo<TiltEngine | null>(() => {
        if (!enableTilt) return null;
        let rafId: number | null = null;
        let running = false, lastTs = 0, currentX = 0, currentY = 0, targetX = 0, targetY = 0, initialUntil = 0;
        const DEFAULT_TAU = 0.14, INITIAL_TAU = 0.6;

        const setVarsFromXY = (x: number, y: number) => {
            const shell = shellRef.current, wrap = wrapRef.current;
            if (!shell || !wrap) return;
            const width = shell.clientWidth || 1, height = shell.clientHeight || 1;
            const percentX = clamp((100 / width) * x), percentY = clamp((100 / height) * y);
            const centerX = percentX - 50, centerY = percentY - 50;
            const props: Record<string, string> = {
                '--pointer-x': `${percentX}%`, '--pointer-y': `${percentY}%`,
                '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`, '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                '--pointer-from-top': `${percentY / 100}`, '--pointer-from-left': `${percentX / 100}`,
                '--rotate-x': `${round(-(centerX / 5))}deg`, '--rotate-y': `${round(centerY / 4)}deg`
            };
            for (const [k, v] of Object.entries(props)) wrap.style.setProperty(k, v);
        };

        const step = (ts: number) => {
            if (!running) return;
            if (lastTs === 0) lastTs = ts;
            const dt = (ts - lastTs) / 1000; lastTs = ts;
            const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
            const k = 1 - Math.exp(-dt / tau);
            currentX += (targetX - currentX) * k; currentY += (targetY - currentY) * k;
            setVarsFromXY(currentX, currentY);
            if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05 || document.hasFocus()) rafId = requestAnimationFrame(step);
            else { running = false; lastTs = 0; if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
        };

        const start = () => { if (running) return; running = true; lastTs = 0; rafId = requestAnimationFrame(step); };

        return {
            setImmediate(x: number, y: number) { currentX = x; currentY = y; setVarsFromXY(x, y); },
            setTarget(x: number, y: number) { targetX = x; targetY = y; start(); },
            toCenter() { const shell = shellRef.current; if (!shell) return; this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2); },
            beginInitial(durationMs: number) { initialUntil = performance.now() + durationMs; start(); },
            getCurrent() { return { x: currentX, y: currentY, tx: targetX, ty: targetY }; },
            cancel() { if (rafId) cancelAnimationFrame(rafId); rafId = null; running = false; lastTs = 0; }
        };
    }, [enableTilt]);

    const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    };

    const handlePointerMove = useCallback((event: PointerEvent) => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        const { x, y } = getOffsets(event, shell);
        tiltEngine.setTarget(x, y);
    }, [tiltEngine]);

    const handlePointerEnter = useCallback((event: PointerEvent) => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        shell.classList.add('active', 'entering');
        if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
        enterTimerRef.current = window.setTimeout(() => shell.classList.remove('entering'), ANIMATION_CONFIG.ENTER_TRANSITION_MS);
        const { x, y } = getOffsets(event, shell);
        tiltEngine.setTarget(x, y);
    }, [tiltEngine]);

    const handlePointerLeave = useCallback(() => {
        const shell = shellRef.current;
        if (!shell || !tiltEngine) return;
        tiltEngine.toCenter();
        const checkSettle = () => {
            const { x, y, tx, ty } = tiltEngine.getCurrent();
            if (Math.hypot(tx - x, ty - y) < 0.6) { shell.classList.remove('active'); leaveRafRef.current = null; }
            else leaveRafRef.current = requestAnimationFrame(checkSettle);
        };
        if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
        leaveRafRef.current = requestAnimationFrame(checkSettle);
    }, [tiltEngine]);

    useEffect(() => {
        if (!enableTilt || !tiltEngine) return;
        const shell = shellRef.current;
        if (!shell) return;
        shell.addEventListener('pointerenter', handlePointerEnter as EventListener);
        shell.addEventListener('pointermove', handlePointerMove as EventListener);
        shell.addEventListener('pointerleave', handlePointerLeave as EventListener);
        const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        tiltEngine.setImmediate(initialX, ANIMATION_CONFIG.INITIAL_Y_OFFSET);
        tiltEngine.toCenter();
        tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);
        return () => {
            shell.removeEventListener('pointerenter', handlePointerEnter as EventListener);
            shell.removeEventListener('pointermove', handlePointerMove as EventListener);
            shell.removeEventListener('pointerleave', handlePointerLeave as EventListener);
            if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
            if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
            tiltEngine.cancel();
            shell.classList.remove('entering');
        };
    }, [enableTilt, tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave]);

    const cardRadius = '24px';
    const cardStyle = useMemo(() => ({
        '--icon': iconUrl ? `url(${iconUrl})` : 'none',
        '--grain': grainUrl ? `url(${grainUrl})` : 'none',
        '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
        '--behind-glow-color': behindGlowColor ?? 'rgba(124, 58, 237, 0.5)',
        '--behind-glow-size': behindGlowSize ?? '50%',
        '--pointer-x': '50%', '--pointer-y': '50%', '--pointer-from-center': '0',
        '--pointer-from-top': '0.5', '--pointer-from-left': '0.5', '--card-opacity': '0',
        '--rotate-x': '0deg', '--rotate-y': '0deg', '--background-x': '50%', '--background-y': '50%',
        '--card-radius': cardRadius,
        '--sunpillar-1': 'hsl(270, 100%, 73%)', '--sunpillar-2': 'hsl(220, 100%, 69%)',
        '--sunpillar-3': 'hsl(180, 100%, 69%)', '--sunpillar-4': 'hsl(140, 100%, 76%)',
        '--sunpillar-5': 'hsl(280, 100%, 74%)', '--sunpillar-6': 'hsl(320, 100%, 73%)',
        '--sunpillar-clr-1': 'var(--sunpillar-1)', '--sunpillar-clr-2': 'var(--sunpillar-2)',
        '--sunpillar-clr-3': 'var(--sunpillar-3)', '--sunpillar-clr-4': 'var(--sunpillar-4)',
        '--sunpillar-clr-5': 'var(--sunpillar-5)', '--sunpillar-clr-6': 'var(--sunpillar-6)'
    }), [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize, cardRadius]);

    const shineStyle: React.CSSProperties = {
        filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
        animation: 'pc-holo-bg 18s linear infinite',
        mixBlendMode: 'color-dodge',
        transform: 'translate3d(0,0,1px)',
        overflow: 'hidden',
        zIndex: 3,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `repeating-linear-gradient(0deg,var(--sunpillar-clr-1) 5%,var(--sunpillar-clr-2) 10%,var(--sunpillar-clr-3) 15%,var(--sunpillar-clr-4) 20%,var(--sunpillar-clr-5) 25%,var(--sunpillar-clr-6) 30%,var(--sunpillar-clr-1) 35%),repeating-linear-gradient(-45deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,29%,66%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12%),radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y),hsla(0,0%,0%,0.1) 12%,hsla(0,0%,0%,0.15) 20%,hsla(0,0%,0%,0.25) 120%)`,
        gridArea: '1 / -1', borderRadius: cardRadius, pointerEvents: 'none'
    };

    const glareStyle: React.CSSProperties = {
        transform: 'translate3d(0,0,1.1px)', overflow: 'hidden',
        backgroundImage: `radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y),hsl(270,25%,80%) 12%,hsla(220,40%,30%,0.8) 90%)`,
        mixBlendMode: 'overlay', filter: 'brightness(0.8) contrast(1.2)',
        zIndex: 4, gridArea: '1 / -1', borderRadius: cardRadius, pointerEvents: 'none'
    };

    return (
        <div ref={wrapRef} className={`relative touch-none ${className}`.trim()}
            style={{ perspective: '500px', transform: 'translate3d(0,0,0.1px)', ...cardStyle } as React.CSSProperties}>
            {behindGlowEnabled && (
                <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-200 ease-out"
                    style={{ background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y),var(--behind-glow-color) 0%,transparent var(--behind-glow-size))`, filter: 'blur(50px)', opacity: 'calc(0.8 * var(--card-opacity))' }} />
            )}
            <div ref={shellRef} className="relative z-[1]">
                <section className="grid relative overflow-hidden"
                    style={{
                        height: '75svh', maxHeight: '520px', aspectRatio: '0.718', borderRadius: cardRadius,
                        boxShadow: 'rgba(0,0,0,0.8) calc((var(--pointer-from-left)*10px) - 3px) calc((var(--pointer-from-top)*20px) - 6px) 20px -5px',
                        transition: 'transform 1s ease', transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)', background: 'rgba(5,8,22,0.95)', backfaceVisibility: 'hidden'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transition = 'none'; e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))'; }}
                    onMouseLeave={e => { e.currentTarget.style.transition = 'transform 1s ease'; e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)'; }}>
                    <div className="absolute inset-0" style={{ backgroundImage: 'var(--inner-gradient)', backgroundColor: 'rgba(5,8,22,0.9)', borderRadius: cardRadius, display: 'grid', gridArea: '1 / -1' }}>
                        <div style={shineStyle} />
                        <div style={glareStyle} />
                        <div className="overflow-visible" style={{ mixBlendMode: 'luminosity', transform: 'translateZ(2px)', gridArea: '1 / -1', borderRadius: cardRadius, pointerEvents: 'none', backfaceVisibility: 'hidden' }}>
                            {/* Avatar image area */}
                            <div className="w-full absolute left-1/2 bottom-[-1px] will-change-transform transition-transform duration-[120ms] ease-out"
                                style={{ transform: 'translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0)', borderRadius: cardRadius, backfaceVisibility: 'hidden', overflow: 'hidden', height: '75%' }}>
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt={`${name} avatar`} loading="lazy"
                                        className="w-full h-full object-cover object-top"
                                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-violet-900/30 to-violet-600/20">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">👨‍💻</div>
                                            <p className="text-white/40 text-sm">Add profile.png to /public</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {showUserInfo && (
                                <div className="absolute z-[2] flex items-center justify-between backdrop-blur-[30px] border border-white/10 pointer-events-auto"
                                    style={{ bottom: '16px', left: '16px', right: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '10px 14px' } as React.CSSProperties}>
                                    <div className="flex items-center gap-2.5">
                                        <div className="size-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0 bg-violet-900/50">
                                            {(miniAvatarUrl || avatarUrl) ? (
                                                <img className="w-full h-full object-cover rounded-full" src={miniAvatarUrl || avatarUrl} alt="mini" loading="lazy" onError={e => { (e.target as HTMLImageElement).style.opacity = '0.3'; }} />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-lg">👨‍💻</div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <div className="text-xs font-semibold text-white/90 leading-none">@{handle}</div>
                                            <div className="text-[10px] text-violet-400 leading-none">{status}</div>
                                        </div>
                                    </div>
                                    <button className="border border-violet-500/40 rounded-lg px-3 py-2 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-[10px] transition-all duration-200 hover:border-violet-400 hover:bg-violet-500/20 hover:-translate-y-px"
                                        onClick={onContactClick} type="button">
                                        {contactText}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="max-h-full overflow-hidden text-center relative z-[5]"
                            style={{ transform: 'translate3d(calc(var(--pointer-from-left)*-6px+3px),calc(var(--pointer-from-top)*-6px+3px),0.1px)', mixBlendMode: 'luminosity', gridArea: '1 / -1', borderRadius: cardRadius, pointerEvents: 'none' }}>
                            <div className="w-full absolute flex flex-col items-center px-6" style={{ top: '2.5em' }}>
                                <h3 className="font-bold m-0 text-center"
                                    style={{ fontSize: 'min(5svh,2.5em)', backgroundImage: 'linear-gradient(to bottom,#fff,#a78bfa)', WebkitTextFillColor: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
                                    {name}
                                </h3>
                                <p className="font-medium text-center mt-1 text-[13px] px-4"
                                    style={{ backgroundImage: 'linear-gradient(to bottom,#c4b5fd,#7c3aed)', WebkitTextFillColor: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
                                    {title}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
