/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F5E9', 100: '#C8E6C9', 200: '#A5D6A7', 300: '#81C784',
          400: '#66BB6A', 500: '#4CAF50', 600: '#43A047', 700: '#388E3C',
          800: '#2E7D32', 900: '#1B5E20', 950: '#0D3A13',
        },
        accent: { DEFAULT: '#FFB300', light: '#FFD54F', dark: '#FF8F00', 50: '#FFF8E1' },
      },
      fontFamily: { poppins: ['Poppins', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31,38,135,0.15)',
        glow: '0 0 30px rgba(76,175,80,0.35)',
        'glow-lg': '0 0 50px rgba(76,175,80,0.45)',
        'glow-accent': '0 0 30px rgba(255,179,0,0.4)',
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.12)',
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
    },
  },
  plugins: [],
}
