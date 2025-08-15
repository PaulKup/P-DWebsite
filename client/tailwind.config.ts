import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FFF6F2',
          100: '#FCEDE6',
          200: '#F6DBCC',
          300: '#F0C9B3',
          400: '#E9B699',
          500: '#D78F6A',
          600: '#B87350',
          700: '#8F5332',
          800: '#6E3E25',
          900: '#3E2415'
        },
        ink:   { 900:'#0F172A', 700:'#334155', 600:'#475569' },
        sand:  { 50:'#FAF6F3', 100:'#F5EFEA', 200:'#E9E1D8' }
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px'
      }
    }
  },
  plugins: []
} satisfies Config
