/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        magic: {
          purple: {
            DEFAULT: '#8b5cf6', // Enchanted Purple
            dark: '#6b38d4',
            light: '#d0bcff',
            soft: '#f3e8ff',
          },
          yellow: {
            DEFAULT: '#ffe24c', // Sunbeam Yellow
            dark: '#6d5e00',
            light: '#ffe24c',
            soft: '#fef9c3',
          },
          pink: {
            DEFAULT: '#f472b6', // Coral Pink
            dark: '#a12e70',
            light: '#ffd8e7',
            soft: '#fce7f3',
          },
          blue: {
            DEFAULT: '#38bdf8', // Sky Blue
            dark: '#0369a1',
            light: '#e0f2fe',
            soft: '#f0f9ff',
          },
          green: {
            DEFAULT: '#34d399', // Mint Green
            dark: '#047857',
            light: '#a7f3d0',
            soft: '#ecfdf5',
          },
          bg: '#F5F3FF', // Soft paperback purple background
        }
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      boxShadow: {
        'magic': '0 10px 30px -10px rgba(139, 92, 246, 0.15)',
        'magic-hover': '0 20px 40px -15px rgba(139, 92, 246, 0.3)',
        'magic-glow': '0 0 15px rgba(139, 92, 246, 0.4)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
