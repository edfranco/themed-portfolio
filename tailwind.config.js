/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    colors: {
      cyberpunk: {
        neon: {
          blue: "#00FFFF",
          pink: "#FF00FF",
          purple: "#8A2BE2",
          green: "#39FF14",
          cyan: "#00E5EE",
          yellow: "#FFFF33",
          black: "#0D0D0D",
          white: "#ffffff",
        },
      },
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.6)",
        },
        ".neon-yellow-shadow": {
          textShadow: `0 0 8px rgba(0, 255, 255, 0.8), 0 0 16px rgba(0, 255, 255, 0.6)`,
        },
        ".neon-purple-shadow": {
          textShadow: "4px 4px 32px #8A2BE2, 4px 4px 128px #8A2BE2",
        },
        ".neon-cyan-shadow": {
          textShadow: "4px 4px 32px #00E5EE, 4px 4px 128px #00E5EE",
        },
        ".neon-pink-shadow": {
          textShadow: "4px 4px 32px #FF00FF, 4px 4px 128px #FF00FF",
        },
        ".neon-green-shadow": {
          textShadow: "4px 4px 32px #39FF14, 4px 4px 128px #39FF14",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
