/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF4444', // Red from logo
          dark: '#DC2626',
          light: '#F87171',
        },
        secondary: {
          DEFAULT: '#1F2937', // Dark navy from logo text
          light: '#374151',
        },
      },
    },
  },
  plugins: [],
}
