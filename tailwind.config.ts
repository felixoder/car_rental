import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero-gradient': 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          
      },
      // utility colors
      colors: {
        'header-red':"#F1270F",
        'para-gray' :"#555",
        'para-blue' :"#2C6FCC",
        'lines':"#555555",
        'footer_color': "#333333",
        'rectangle_color': "#D9D9D9"
      },
      blur: {
        xs: '10px',
        sm: '20px',
      },
    },
  },
  plugins: [],
};
export default config;
