import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-60px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(60px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8) rotate(-2deg)', opacity: '0' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%) rotate(5deg)', opacity: '0' },
					'100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' },
					'50%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.8), 0 0 90px hsl(var(--primary) / 0.4)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3) translateY(100px)', opacity: '0' },
					'50%': { transform: 'scale(1.05) translateY(-10px)', opacity: '0.8' },
					'70%': { transform: 'scale(0.9) translateY(5px)', opacity: '0.9' },
					'100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'slide-in-blur': {
					'0%': { transform: 'translateX(-100px)', opacity: '0', filter: 'blur(10px)' },
					'100%': { transform: 'translateX(0)', opacity: '1', filter: 'blur(0px)' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'elastic-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'25%': { transform: 'scale(1.2)', opacity: '0.7' },
					'50%': { transform: 'scale(0.9)', opacity: '0.9' },
					'75%': { transform: 'scale(1.1)', opacity: '0.95' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'slide-up': 'slide-up 1s cubic-bezier(0.4, 0, 0.2, 1)',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'bounce-in': 'bounce-in 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'float': 'float 3s ease-in-out infinite',
				'slide-in-blur': 'slide-in-blur 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'zoom-in': 'zoom-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'elastic-in': 'elastic-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
