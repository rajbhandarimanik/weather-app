/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(200 200 200 / 30%) transparent',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(200 200 200 / 30%)',
            borderRadius: '20px',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
