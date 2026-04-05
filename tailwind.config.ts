import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Bauhaus primaries */
        "bauhaus-red": "#D02020",
        "bauhaus-blue": "#1040C0",
        "bauhaus-yellow": "#F0C020",
        "bauhaus-black": "#121212",
        "bauhaus-bg": "#F0F0F0",
        "bauhaus-muted": "#E0E0E0",

        /* shadcn compat (minimal) */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "#D02020",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1040C0",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F0C020",
          foreground: "#121212",
          red: "#D02020",
          blue: "#1040C0",
          yellow: "#F0C020",
        },
        muted: {
          DEFAULT: "#E0E0E0",
          foreground: "#121212",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        mono: ["Outfit", "monospace"],
      },
      borderRadius: {
        none: "0px",
        full: "9999px",
        /* Bauhaus: only extremes */
        DEFAULT: "0px",
      },
      boxShadow: {
        "bauhaus-sm": "3px 3px 0px 0px #121212",
        "bauhaus-md": "6px 6px 0px 0px #121212",
        "bauhaus-lg": "8px 8px 0px 0px #121212",
        "bauhaus-xl": "12px 12px 0px 0px #121212",
        "bauhaus-white-sm": "3px 3px 0px 0px #FFFFFF",
        "bauhaus-white-md": "6px 6px 0px 0px #FFFFFF",
        "bauhaus-white-lg": "8px 8px 0px 0px #FFFFFF",
      },
      animation: {
        "move-left": "move-left linear infinite",
        "ping-large": "ping-large 1.5s cubic-bezier(0,0,0.2,1) infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "spin-medium": "spin 10s linear infinite",
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ping-large": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(3)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "bauhaus-dots": "radial-gradient(#121212 1.5px, transparent 1.5px)",
        "bauhaus-dots-white": "radial-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
        "bauhaus-stripes":
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(18,18,18,0.08) 10px, rgba(18,18,18,0.08) 20px)",
      },
      backgroundSize: {
        "dots-20": "20px 20px",
      },
      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
