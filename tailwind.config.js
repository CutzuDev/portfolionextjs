/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "accordion-up123": {
          "0%": { height: "var(--radix-accordion-content-height)" },
          "100%": { height: 0 },
        },
        testKEYFRAMES: {
          "0%, 100%": {
            opacity: 0.05,
          },
          "50%": {
            opacity: 0.15,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        testANIMATION: "testKEYFRAMES 15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
