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
    extend: {},
  },
  plugins: [],
};
