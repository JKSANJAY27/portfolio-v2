export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-10 border-t border-white/6 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
      <div className="container relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            SJ
          </div>
          <div>
            <p className="font-display font-semibold text-white/90 text-sm">Sanjay J K</p>
            <p className="text-[10px] text-white/35 font-mono">CS @ VIT • Vellore, India</p>
          </div>
        </div>

        {/* Center: copyright */}
        <p className="text-xs text-white/35 order-3 md:order-2">
          © {year} Sanjay J K. Crafted with ❤️ using Next.js
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3 order-2 md:order-3">
          {[
            { label: 'GH', href: 'https://github.com/JKSANJAY27', title: 'GitHub' },
            { label: 'LI', href: 'https://linkedin.com/in/sanjay-j-k', title: 'LinkedIn' },
            { label: 'LC', href: 'https://leetcode.com/u/SanjayJK/', title: 'LeetCode' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              title={link.title}
              className="cursor-target size-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[10px] font-bold text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 hover:scale-110 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
