/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pry: '#cab339',
        sec: ' #ffa500',
        dark: '#0d1013',
        darkLight: '#292829',
        brown: '#564e42',
        light: '#fff',
      },
      backgroundImage: {
        'pie-chart':
          'conic-gradient(#0d1013 0deg 94.68deg, #564e42 94.68deg 170.64deg, #cab339 170.64deg 360deg)',
        // 'conic-gradient(#4caf50 0deg 144deg, #2196f3 144deg 252deg, #ff5722 252deg 360deg)',
      },
    },
  },
  plugins: [],
};
