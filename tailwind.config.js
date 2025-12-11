/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          bg: '#0f172a', // Slate 900
          card: '#1e293b', // Slate 800
          accent: '#3b82f6', // Blue 500
          accentHover: '#2563eb', // Blue 600
          text: '#f8fafc', // Slate 50
          muted: '#94a3b8', // Slate 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
