import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': { DEFAULT: '#0b2027', 100: '#020708', 200: '#040d10', 300: '#071418', 400: '#091a20', 500: '#0b2027', 600: '#1f5b6f', 700: '#3496b7', 800: '#70bdd7', 900: '#b7deeb' },
        'cerulean': { DEFAULT: '#40798c', 100: '#0d181c', 200: '#1a3038', 300: '#274954', 400: '#336170', 500: '#40798c', 600: '#579bb2', 700: '#81b4c5', 800: '#abcdd8', 900: '#d5e6ec' },
        'verdigris': { DEFAULT: '#70a9a1', 100: '#152321', 200: '#2a4642', 300: '#3f6964', 400: '#548c85', 500: '#70a9a1', 600: '#8cbab4', 700: '#a9cbc7', 800: '#c6ddda', 900: '#e2eeec' },
        'ash-gray': { DEFAULT: '#cfd7c7', 100: '#293022', 200: '#536145', 300: '#7c9167', 400: '#a5b496', 500: '#cfd7c7', 600: '#d8dfd2', 700: '#e2e7dd', 800: '#ecefe8', 900: '#f5f7f4' },
        'cornsilk': { DEFAULT: '#f6f1d1', 100: '#4c440f', 200: '#98871e', 300: '#d8c339', 400: '#e7da84', 500: '#f6f1d1', 600: '#f8f4da', 700: '#f9f6e3', 800: '#fbf9ec', 900: '#fdfcf6' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}