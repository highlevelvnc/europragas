import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A0B",
          900: "#101012",
          800: "#17171A",
          700: "#1F1F22",
          600: "#2A2A2E",
          500: "#3A3A3F",
        },
        gold: {
          DEFAULT: "#FFD700",
          50: "#FFFBE6",
          100: "#FFF6CC",
          200: "#FFEC99",
          300: "#FFE066",
          400: "#FFD933",
          500: "#FFD700",
          600: "#E0BC00",
          700: "#A88E00",
          800: "#705F00",
          900: "#382F00",
        },
        steel: {
          50: "#F4F4F5",
          100: "#E4E4E7",
          200: "#C7C7CC",
          300: "#A0A0A6",
          400: "#7A7A80",
          500: "#5A5A60",
          600: "#3F3F45",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE57",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["clamp(2rem, 4vw + 0.5rem, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-md": ["clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      maxWidth: {
        container: "1200px",
      },
      backgroundImage: {
        "hex-pattern":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 28 49'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z' fill='%23FFD700' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        "grid-lines":
          "linear-gradient(to right, rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,215,0,0.03) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(255,215,0,0.12), transparent 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 0 1px rgba(255,215,0,0.2), 0 10px 40px -10px rgba(255,215,0,0.25)",
        "card-hover": "0 20px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,215,0,0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
        shine: "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
