/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbfaf7',
          100: '#f5f2eb',
          200: '#e8e2d4',
          300: '#d8cfba',
          400: '#c0b398',
          500: '#a59578',
          600: '#83735d',
          700: '#635846',
          800: '#3f382d',
          900: '#171613'
        },
        pine: {
          50: '#eef4ff',
          100: '#dde8ff',
          200: '#c3d6ff',
          300: '#9bbcff',
          400: '#7198ff',
          500: '#4f79f5',
          600: '#3b5fcd',
          700: '#314da6',
          800: '#2b4286',
          900: '#26396e'
        }
      },
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 42px rgba(19, 23, 34, 0.12)'
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(145deg, #fbfaf7 0%, #f3efe6 52%, #eee8db 100%)'
      }
    }
  },
  plugins: []
};
