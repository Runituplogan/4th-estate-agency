import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF0E5",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        baskerville: ["Baskerville", "serif"],
        geist: '"Geist", sans-serif',
        manrope: ' "Manrope", sans-serif',
      },
      backgroundImage: {
        bg1: "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.51) 100%)",
      },
      screens: {
        sm: "375px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
