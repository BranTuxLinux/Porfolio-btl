import { fontsEnum } from './src/tools/fonts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        vt: [fontsEnum.Vt, "monospace"],
        pixel: [fontsEnum.Pixel, "sans-serif"],
      },
    },
  },
  plugins: [],
};
