/* Bauhaus 3-shape logo mark — circle, square, triangle */
const BauhausLogo = () => (
  <div className="flex items-center gap-0.5 relative">
    <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-white/40 flex-shrink-0" />
    <div className="w-4 h-4 bg-[#1040C0] border-2 border-white/40 flex-shrink-0" />
    <div
      className="w-0 h-0 flex-shrink-0"
      style={{
        borderLeft: '9px solid transparent',
        borderRight: '9px solid transparent',
        borderBottom: '16px solid #F0C020',
        filter: 'drop-shadow(0 0 0 1px rgba(255,255,255,0.3))',
      }}
    />
  </div>
);

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#121212] border-t-4 border-[#D02020] relative overflow-hidden">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Main footer content */}
      <div className="relative container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-b-2 border-white/10 pb-12 mb-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BauhausLogo />
              <div>
                <p className="font-black text-white uppercase tracking-wider text-sm">Sanjay J K</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">CS @ VIT · Vellore, India</p>
              </div>
            </div>
            <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs mb-6">
              Building scalable software, multimodal AI systems, and research tools that make real-world impact.
            </p>
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 border-2 border-[#F0C020] bg-[#F0C020]/10 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#F0C020] animate-ping-large" />
              <span className="text-xs font-black uppercase tracking-widest text-[#F0C020]">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {['Projects', 'Research', 'About', 'Achievements', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'GitHub', href: 'https://github.com/JKSANJAY27', bg: '#FFFFFF', text: '#121212' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/sanjay-j-k', bg: '#1040C0', text: '#FFFFFF' },
                { label: 'LeetCode', href: 'https://leetcode.com/u/SanjayJK/', bg: '#F0C020', text: '#121212' },
                { label: 'Email', href: 'mailto:j.k.sanjay2006@gmail.com', bg: '#D02020', text: '#FFFFFF' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs font-black uppercase tracking-wider hover:-translate-y-0.5 transition-transform duration-200 border-2 border-transparent hover:border-white/20"
                  style={{ backgroundColor: link.bg, color: link.text, boxShadow: '3px 3px 0px 0px rgba(255,255,255,0.15)' }}
                >
                  {link.label}
                  <span className="ml-auto">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-bold uppercase tracking-widest">
            © {year} Sanjay J K · Crafted with ❤ using Next.js
          </p>

          {/* Three geometric shapes as decorative footer mark */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-white/20" />
            <div className="w-5 h-5 bg-[#1040C0] border-2 border-white/20" />
            <div
              style={{
                width: 0, height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderBottom: '20px solid #F0C020',
                filter: 'drop-shadow(0 0 0 1px rgba(255,255,255,0.2))',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
