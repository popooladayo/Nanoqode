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
                "section-blue": "rgba(235, 244, 246, 1)",
            },
            fontFamily: {
                inter: ["Inter", "serif", "sans-serif"],
            },
            keyframes: {
                moveInRight: {
                    "0%": { opacity: "0", transform: "translateX(100px)" },
                    "50%": { transform: "translateX(10px)" },
                    "100%": { opacity: "1", transform: "translateX(0px)" },
                },
            },
            animation: {
                "move-in-right": "moveInRight 3s linear",
            },
        },
    },
    plugins: [],
};
