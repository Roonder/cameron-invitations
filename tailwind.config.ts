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
    },
  },
  plugins: [],
} satisfies Config;
