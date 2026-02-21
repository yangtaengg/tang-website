import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "rgba(255,255,255,0.08)",
        border: "rgba(255,255,255,0.18)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 42px rgba(8, 13, 30, 0.42)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(70% 60% at 20% 0%, rgba(116,86,255,0.35) 0%, rgba(11,15,30,0) 60%), radial-gradient(65% 65% at 82% 8%, rgba(44,197,255,0.24) 0%, rgba(11,15,30,0) 62%), radial-gradient(85% 80% at 50% 100%, rgba(25,129,255,0.18) 0%, rgba(11,15,30,0) 72%)"
      }
    }
  },
  plugins: []
};

export default config;
