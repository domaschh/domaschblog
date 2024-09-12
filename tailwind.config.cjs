
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)"
                ]
            },
            fontFamily: {
                'jetbrains': ['JetBrainsMono', 'monospace']
            },
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
        },
    },
    plugins: [],
}