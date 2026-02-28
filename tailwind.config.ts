import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				accent: {
					violet: '#7c3aed',
					cyan: '#06b6d4',
					emerald: '#10b981',
					pink: '#ec4899',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'Inter',
					'Space Grotesk',
					'system-ui',
					'sans-serif'
				],
				display: [
					'Space Grotesk',
					'sans-serif'
				],
				mono: [
					'JetBrains Mono',
					'monospace'
				],
				serif: [
					'Space Grotesk',
					'serif'
				]
			},
			animation: {
				'ping-large': 'ping-large 1.5s cubic-bezier(0,0,0.2,1) infinite',
				'move-left': 'move-left linear infinite',
				float: 'float 6s ease-in-out infinite',
				gradient: 'gradient-shift 5s ease infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'spin-slow': 'spin 20s linear infinite'
			},
			keyframes: {
				'ping-large': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'75%, 100%': {
						transform: 'scale(3)',
						opacity: '0'
					}
				},
				'move-left': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-12px)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.5'
					},
					'50%': {
						opacity: '1'
					}
				},
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'grid-dots': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)'
			},
			backdropBlur: {
				xs: '2px'
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionDuration: {
				'400': '400ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
