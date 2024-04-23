module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue: { 200: "#91b7f1" },
        indigo: { 300: "#6a95d5" },
        black: { "900_89": "#00000089", "900_75": "#00000075", "900_93": "#00000093" },
        blue_gray: { "100_82": "#d9d9d982" },
        gray: { "400_89": "#c1bdbd89" },
      },
      boxShadow: { xs: "1.5px 4px 4px 0px #0000003f", sm: "0px 4px 4px 0px #0000003f" },
      fontFamily: { poppins: "Poppins", plusjakartasans: "Plus Jakarta Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
