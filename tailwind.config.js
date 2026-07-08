/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#00273d',
          green: '#006d3d',
          'green-light': '#6cfda8',
          cyan: '#00b5e0',
          blue: '#7fa8cb',
          'bg-light': '#f9f9fc',
          'bg-gray': '#f4f7f9',
          border: '#e2e2e5',
          'border-subtle': '#c2c7ce',
          'text-primary': '#00273d',
          'text-secondary': '#42474d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Syne', 'ui-sans-serif', 'sans-serif'],
        stat: ['SUSE', 'ui-monospace', 'monospace'],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
};
