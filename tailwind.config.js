/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#07162f',
        navy: '#0b2551',
        azure: '#1f7aec',
        mint: '#27d3a2',
        cloud: '#f6f9fc',
        line: '#dbe5ef',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(7, 22, 47, 0.12)',
        glow: '0 24px 70px rgba(31, 122, 236, 0.25)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(31,122,236,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(31,122,236,.16) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
