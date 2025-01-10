/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        screens: {
          sm: '100%', // Full width on small screens
          md: '640px', // Custom width for medium screens
          lg: '800px', // Custom width for large screens
          xl: '1024px', // Custom width for extra-large screens
          '2xl': '1200px', // Custom width for 2xl screens
        },
      },
      colors: {
        pry: '#fcba00',
        sec: '#ffa500',
        dark: '#0d1013',
        darkLight: '#292829',
        brown: '#564e42',
        light: '#fff',
      },
      backgroundImage: {
        'pie-chart':
          'conic-gradient( #5e4200 94.68deg 288deg, #fcba00 288deg 360deg)',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        garamond: ['EB Garamond', 'serif'],
        Lora: ['EB+Lora', 'sans-serif'],
      },
      keyframes: {
        'translate-x-loop': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0.75rem)' }, // 0.75rem = translate-x-3
        },
      },
      animation: {
        'translate-x-loop': 'translate-x-loop 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
