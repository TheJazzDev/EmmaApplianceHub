/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        '100': '#1690ff',
        '200': '#46a5ff',
        '300': '#73bcff',
        '400': '#a2d2ff',
        'paragraph': '#707d97',
        'card-text': '#ccd7f7',
        'heading': '#8891b0',
        'card': '#112240',
        'Background': '#0D0D2B',
      },
    },
  },
  plugins: [],
}
