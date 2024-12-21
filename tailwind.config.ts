import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
        xl: "1600px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem",
          sm : "0rem",
          md: "0rem",
          lg: "0rem"
        }
      },
    },
  },
  plugins: [],
};
export default config;
