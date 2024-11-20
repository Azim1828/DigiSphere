/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/path/to/your/pattern.svg')",
      },
      colors: {
        primary: '#1A73E8', // DigiSphere primary color
        secondary: '#FF6F61', // Accent color
        dark: '#1F2937', // Dark text color
        light: '#F3F4F6', // Light background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-left': 'slide-left 0.3s ease-out'
      }
    },
  },
  plugins: [],
}
