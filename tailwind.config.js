/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {},
        },
        container: {
            center: true,
        },

        fontFamily: {
            mulish: ["var(--font-mulish)"],
            noto_serif: ["var(--font-noto-serif)"],
        },

        colors: {
            primary: "#884A39",
            primary_shade_1: "#B97B6C",
            primary_shade_2: "#DDB5AB",
            primary_shade_3: "#FFE5DF",
            primary_shade_4: "#F3EDEB",
            dark_1: "#37211A",
            dark_2: "#53413B",
            dark_3: "#716460",
            dark_4: "#A99E9B",
            dark_5: "#D6CDCB",
            dark_6: "#F0ECEB",
            dark_7: "#F8F5F4",
            white: "#FFFFFF",
        },
    },
    plugins: [],
};
