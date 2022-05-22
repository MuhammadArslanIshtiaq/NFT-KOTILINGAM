module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        titleBold: ['MrEavesXLModNarOT'],
      },
      backgroundImage: {
        heroD: "url('/public/assets/images/bg-hero-d.svg')",
        heroM: "url('/public/assets/images/bg-hero-m.svg')",
        roadMapD: "url('/public/assets/images/bg-road-map-d.svg')",
        roadMapM: "url('/public/assets/images/bg-road-map-m.svg')",
        ourTeamD: "url('/public/assets/images/our-team-d.png')",
        ourTeamBg:
          'linear-gradient(179.99deg, #0C1122 0.01%, rgba(12, 17, 34, 0.95) 10.9%, rgba(27, 31, 47, 0.95) 21.93%, rgba(36, 41, 55, 0.92) 32.57%, rgba(44, 48, 62, 0.9) 40.3%, rgba(52, 56, 69, 0.87) 48.68%, rgba(57, 61, 74, 0.82) 57.31%, rgba(61, 65, 77, 0.8) 66.52%, #0B1224 99.34%);',
        shadow: "url('/public/assets/images/bg-shadow.svg')",
        Line: 'radial-gradient(50% 50% at 50% 50%, #757575 0%, rgba(117, 117, 117, 0) 100%);',
      },
      colors: {
        primary: {
          DEFAULT: '#F0C51D',
          50: '#FBF1C9',
          100: '#FAECB6',
          200: '#F8E290',
          300: '#F5D96A',
          400: '#F3CF43',
          500: '#F0C51D',
          600: '#C8A20D',
          700: '#93770A',
          800: '#5E4C06',
          900: '#2A2203',
        },
        ebony: {
          DEFAULT: '#0C1122',
          50: '#3C55AA',
          100: '#374D9B',
          200: '#2C3E7C',
          300: '#212F5E',
          400: '#172040',
          500: '#0C1122',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },

        ebonyClay: '#242838',
        stormGray: '#717180',
        grayDark: '#504E48',
        blackGray: '#464343',
      },
      boxShadow: {
        'bg-yellow': '0 -11rem 35rem 8rem #dab52329',
        'bg-white': '0 0 15rem 15rem #ffffff21',
      },
    },
  },
  plugins: [],
};
