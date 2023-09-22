/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
        },
        plugins: [],
    }
}
