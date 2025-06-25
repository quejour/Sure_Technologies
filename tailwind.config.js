/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // 👈  include every file in /src
  ],
  theme: { extend: {} },
  plugins: [],
};
