/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Excon: 'Excon',
        Melodrama: 'Melodrama',
        Ranade: 'Ranade',
      },
      keyframes: {
        fromTopToBottom: {
          from: { height: '0' },
          to: { height: '100%' },
        },
        fromBottomToTop: {
          from: { bottom: '-100%' },
          to: { bottom: '0%' },
        },
      },
    },
  },
  plugins: [],
};
