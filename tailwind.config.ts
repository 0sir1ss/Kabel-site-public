import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ffedcb", 
        dark: "#151618"
      }
    },
  },
  plugins: [],
} satisfies Config;
