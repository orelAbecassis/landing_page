/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050505', // Deeper black
          800: '#0a0a0f', // Very dark blue-ish black
          700: '#12121a',
          600: '#1c1c2e',
        },
        primary: {
          400: '#a78bfa', // Light Purple
          500: '#8b5cf6', // Purple
          600: '#7c3aed', // Dark Purple
        },
        secondary: {
          400: '#60a5fa', // Light Blue
          500: '#3b82f6', // Blue
          600: '#2563eb', // Dark Blue
        },
        accent: {
          glow: 'rgba(139, 92, 246, 0.5)' // Purple glow
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.2), 0 0 10px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
