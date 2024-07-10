/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './node_modules/@onrewind/ui/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.tsx',
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  presets: [require('@onrewind/ui/lib/origins.preset')],
  theme: {
    fontFamily: {
      title: ['graphik-regular', ...defaultTheme.fontFamily.sans],
      body: ['Headline', ...defaultTheme.fontFamily.sans],
      sans: ['graphik-bold', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#f16305',
        secondary: 'var(--secondary)',
        background: '#FEFEFE',
        form: '#696969',
        facebook: '#1B74E4',
        error: '#ef4444',
        lightGray: '#D7D6D6',
      },
      width: {
        'min-1080': 'min(100%, 1080px)',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))',
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1023px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
