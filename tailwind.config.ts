import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080a0f",
        surface: "#0d111a",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "surface-card": "rgba(13, 17, 26, 0.7)",
        brand: {
          teal: "#5DCAA5",
          "teal-deep": "#1D9E75",
          cyan: "#378ADD",
          "cyan-light": "#00D2FF",
          accent: "#00F5A0",
        },
        offwhite: "#F4F2EB",
        muted: "#8C96A8",
        dark: {
          900: "#05070a",
          800: "#080a0f",
          700: "#0d111a",
          600: "#141926",
          500: "#1c2333",
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
