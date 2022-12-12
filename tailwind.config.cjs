/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "deep-orange": "rgba(218, 69, 44, 1)",
                "very-light-orange": "rgba(218, 75, 39, 0.12)",
                "light-blue": "rgba(90, 166, 177, 1)",
                "very-light-blue": "rgba(235, 244, 246, 1)",
            },
            fontFamily: {
                inter: ["Inter", "serif", "sans-serif"],
            },
        },
    },
    plugins: [],
};
