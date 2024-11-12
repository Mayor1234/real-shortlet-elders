/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
          'conic-gradient(#0d1013 0deg 94.68deg, #5e4200 94.68deg 170.64deg, #fcba00 170.64deg 360deg)',
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
