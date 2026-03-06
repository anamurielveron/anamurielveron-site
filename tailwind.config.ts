import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts, tsx}",
    ".components/**/*.{ts, tsx}",
    ".content/**/*.{ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "grotesk"],
        mono: ["var(--font-mono)", "mono"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        base100: "var(--color-base-100)",
        base200: "var(--color-base-200)",
        base300: "var(--color-base-300)",
        baseContent: "var(--color-base-content)",
        accent: "var(--color-accent)",
        accentMuted: "var(--color-accent-muted)",
        accentContent: "var(--color-accent-content)",
      },
    },
  },
  plugins: [],
};

export default config;