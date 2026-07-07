import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",
        blue: "var(--blue)",
        "blue-dark": "var(--blue-dark)",
        surface: "var(--black)",
      },
      backgroundImage: {
        "brand-gradient": "var(--gradient)",
      },
      borderRadius: {
        card: "20px",
        btn: "14px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,.08)",
        lift: "0 20px 60px rgba(0,0,0,.14)",
      },
      fontFamily: {
        latin: ["var(--font-latin)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      spacing: {
        section: "96px",
        "section-sm": "56px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
