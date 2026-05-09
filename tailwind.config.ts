import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        'bg-secondary': '#0a0a14',
        'bg-card': 'rgba(255,255,255,0.025)',
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          subtle: 'rgba(255,255,255,0.04)',
          accent: 'rgba(59,130,246,0.3)',
        },
        blue: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        purple: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-purple-gradient': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'purple-cyan-gradient': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.15), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'glow-line': 'linear-gradient(90deg, transparent, rgba(59,130,246,0.8), transparent)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 3s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-400% 0' },
          '100%': { backgroundPosition: '400% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(59,130,246,0.3)' },
          '50%': { borderColor: 'rgba(139,92,246,0.6)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.25)',
        'glow-blue-lg': '0 0 60px rgba(59,130,246,0.35)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.25)',
        'glow-purple-lg': '0 0 60px rgba(139,92,246,0.4)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
