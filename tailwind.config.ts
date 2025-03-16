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
        Manrope:["Manrope"]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;
