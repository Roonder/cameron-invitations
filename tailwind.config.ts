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
        background: "var(--background)",
        foreground: "var(--foreground)",
        inv: {
          white: "#efeeea",
          marble: "#f0eee8",
          "palid-pink": "#eea8b2",
          black: "#232423",
          brown: "#aa7545",
          gold: "#eba572"
        }
      },
      keyframes: {
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: "0",
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: "1",
          },
        }
      },
      animation: {
        starScale: "starScale 1600ms ease infinite"
      }
    },
  },
  plugins: [],
} satisfies Config;
