import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07151b",
        surface: "#07151b",
        "surface-dim": "#07151b",
        "surface-bright": "#2d3b42",
        "surface-container-lowest": "#031016",
        "surface-container-low": "#0f1d23",
        "surface-container": "#142128",
        "surface-container-high": "#1e2c32",
        "surface-container-highest": "#29373d",
        "on-surface": "#d6e5ed",
        "on-surface-variant": "#bcc9cb",
        primary: "#62d6e8",
        "on-primary": "#00363d",
        "primary-container": "#0b9fb0",
        secondary: "#6dd6e3",
        "on-secondary": "#00363c",
        "secondary-container": "#2a9fab",
        tertiary: "#aaccd7",
        outline: "#879395",
        "outline-variant": "#3d494b",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      spacing: {
        base: "8px",
        xs: "4px",
        sm: "12px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        "margin-desktop": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
