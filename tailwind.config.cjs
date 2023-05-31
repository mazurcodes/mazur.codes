/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        article: '0 2px 10px rgba(0, 0, 0, 0.10)',
        'article-hover': '0 3px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
