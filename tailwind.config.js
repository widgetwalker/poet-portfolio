/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Cinzel Decorative", "serif"],
                body: ["Lora", "serif"],
                accent: ["La Belle Aurore", "cursive"],
                sans: ["Lora", "serif"],
            },
            colors: {
                // Custom Palette
                parchment: "#F5F2EB",
                ink: "#2C3E50",
                "ink-light": "#4A6572",
                rose: "#D4A5A5",
                sage: "#9CAB98",
            },
            backgroundImage: {
                'paper-grain': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
            },
            keyframes: {
                "ink-spread": {
                    "0%": { clipPath: "circle(0% at 50% 50%)" },
                    "100%": { clipPath: "circle(150% at 50% 50%)" },
                }
            },
            animation: {
                "ink-spread": "ink-spread 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
            },
        },
    },
    plugins: [],
}
