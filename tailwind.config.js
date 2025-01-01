module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f0f4f8', // Light mode background
          dark: '#1a202c',  // Dark mode background
        },
        text: {
          light: '#2d3748', // Light mode text
          dark: '#e2e8f0',  // Dark mode text
        },
        accent: {
          light: '#3182ce', // Light mode accent
          dark: '#63b3ed',  // Dark mode accent
        },
      },
    },
  },
  plugins: [],
  darkMode : 'selector'
};