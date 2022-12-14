/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        extend: {
            colors: {
                "deep-orange": "rgba(218, 69, 44, 1)",
                "light-orange": "rgba(218, 75, 39, 0.12)",
                "very-light-orange": "rgba(218, 75, 39, 0.12)",
                "light-blue": "rgba(90, 166, 177, 1)",
                "very-light-blue": "rgba(235, 244, 246, 1)",
                "section-blue": "rgba(235, 244, 246, 1)",
                "light-grey": "rgba(217, 217, 217, 1)",
                "lightish-pink": "background: rgba(251, 233, 229, 1)",
                
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
                primary: {
                    from: { left: "0%" },
                    to: { left: "-100%" },
                },
                secondary: {
                    from: { left: "100%" },
                    to: { left: "0%" },
                },
            },
            animation: {
                "move-in-right": "moveInRight 3s linear",
                slide: "primary 30s linear infinite",
                "slide-back": "secondary 30s linear infinite",
            },
            screens: {
                "curved-arrow": "1415px",
            },
        },
    },
    plugins: [require("daisyui")],
};
