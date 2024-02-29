module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        green: { 600: "#45914d", "900_01": "#058913", "900_02": "#03530b" },
        gray: { 800: "#4d4a4a", "800_01": "#494646" },
        black: { 900: "#000000" },
      },
      boxShadow: { xs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(180deg, #027c16,#01641100)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
