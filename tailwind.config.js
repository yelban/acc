/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx,vue}", //
        "./index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Mabry Pro",
                    "Verdana",
                    "Noto Sans TC",
                    "Noto Sans SC",
                    "Noto Sans JP",
                    "Microsoft JhengHei",
                    "Roboto",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
