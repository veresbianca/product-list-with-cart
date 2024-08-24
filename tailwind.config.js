/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.tsx"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'red': 'hsl(14, 86%, 42%)',
      'green': 'hsl(159, 69%, 38%)',
      'rose-50': 'hsl(20, 50%, 98%)',
      'rose-100': 'hsl(13, 31%, 94%)',
      'rose-300': 'hsl(14, 25%, 72%)',
      'rose-400': 'hsl(7, 20%, 60%)',
      'rose-500': 'hsl(12, 20%, 44%)',
      'rose-900': 'hsl(14, 65%, 9%)',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false, // prevents loading preflight.css, so we avoid overwriting default (:host) web-components styles
  },
}

