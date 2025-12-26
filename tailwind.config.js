/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-outfit)", // Updated to Outfit
      mono: "var(--font-jetbrains)",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "#ffffff", // Text is now white by default
          foreground: "#020617",
        },
        background: "#020617", // Slate-950 (Deep Dark)
        accent: {
          DEFAULT: "#00ff99", // Placeholder, will be overridden by gradients often
          hover: "#00e187",
        },
        // Premium Palette
        slate: {
          900: "#0f172a",
          800: "#1e293b",
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #00c6ff, #0072ff)', // Electric Blue
        'gradient-dark': 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          "100%": {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};