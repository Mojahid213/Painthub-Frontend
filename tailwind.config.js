module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Kushan: ["Kaushan Script", "cursive"],
      Dosis: ["Dosis", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      "Roboto-Slab": ["Roboto Slab", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        xl: "1280px",
        "2xl": "1280",
      },
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "spin-slow": "spin 9s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: " translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
