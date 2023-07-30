/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        'bg-primary' : '#060606',
        'bg-secondary' : '#131417',
      },
      gradientColorStops:{
        'g-stop-left' : '#e812a6',
        'g-stop-right' : '#7d08b8',
      },
      borderColor:{
        'border-primary' : '#222529',
      },
      textColor:{
        'text-primary' : '#131417',
      }
    },
  },
  plugins: [],
}

