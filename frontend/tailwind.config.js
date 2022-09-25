/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', '../app/views/**/*.html.erb'],
  theme: {
    colors: {
      'hover-light-blue': '#acdbf2',
      'footer-divider': '#6889ab'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
