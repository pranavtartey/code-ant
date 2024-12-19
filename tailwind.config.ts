import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5 rem",
          md: "2rem",
          lg: "4rem"
        }
      },
    },
  },
  plugins: [],
};
export default config;
