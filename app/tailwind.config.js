/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    color: {
      daisyblack: 'rgb(29 35 42)',
      appred: '#ff0303'
    },
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'dracula'],
  },
}
