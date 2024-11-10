import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primaryOrange:'#F15025',
       primaryWhite: 'FFFFFF',
       primaryBlack: '#191919',
       grayDark: '#CED0CE',
       grayLight: '#E6E8E6'
      },
    },
  },
  plugins: [],
} satisfies Config;
