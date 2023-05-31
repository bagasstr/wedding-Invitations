/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      screens: {
        notSupport: { max: '299px' },
        mobile: { min: '300px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        tablet: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        Sdesktop: '1024px',
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
      colors: {
        text: '#276678',
        primary: '#D3E0EA	',
        bg: '#F6F5F5',
        accent: '#1687A7',
      },
    },
  },
  plugins: [],
}
