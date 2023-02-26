/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}',],
  theme: {
    extend: {
      backgroundImage: {
        "cycling-road": "url('/pokeball.png')",
      },
      fontSize: {
        xs: '0.688rem',
        sm: '0.813rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      fontFamily: {
        'font-mono': "var(--font-mono)",
      },
      colors: {
        "callout-rgb": "var(--callout-rgb)",
        "callout-border-rgb": "var(--callout-border-rgb)",
        "card-rgb": "var(--card-rgb)",
        "card-border-rgb": "var(--card-border-rgb)",
        "secondary-glow": "var(--secondary-glow)",
        "primary-glow": "var(--primary-glow)",
        "tile-border": "var(--tile-border)",
        "tile-start-rgb": "var(--tile-start-rgb)",
        "tile-end-rgb": "var(--tile-end-rgb)",
        "background-end-rgb": "var(--background-end-rgb)",
        "background-start-rgb": "var(--background-start-rgb)",
      },
      borderRadius: {
        'border-radius': "var(--border-radius)",
      },
      zIndex: {
        '60': '60',
        '100': '100',
        '140': '140',
        '160': '160',
        '200': '200',
        '240': '240',
      }
    },
  },
  plugins: [require("autoprefixer")],
}
