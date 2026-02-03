import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        anchor: "var(--anchor)",
        "anchor-text": "var(--anchor-text)",
        "anchor-accent": "var(--anchor-accent)",
        muted: "var(--muted)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 17, 17, 0.08)",
        lift: "0 14px 40px rgba(17, 17, 17, 0.12)",
      },
      backgroundImage: {
        "cta-shimmer": "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.24), rgba(255,255,255,0.08))",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(60%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [typography],
};

export default config;
