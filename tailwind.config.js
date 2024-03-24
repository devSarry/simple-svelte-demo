/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
          "primary": "#0087ff",
          "secondary": "#00d4ff",
           "accent": "#ff0000",
          "neutral": "#24140d",
          "base-100": "#e0ffff",
          "info": "#00caff",
          "success": "#6b8d00",
          "warning": "#ffae00",
          "error": "#ec0040",

      },
    },
  },
  plugins: [],
}

