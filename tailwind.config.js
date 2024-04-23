module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_01: "#ffffff" },
        blue: { 200: "#91b7f1", 700: "#2984c5", A700: "#0065ff" },
        indigo: { 300: "#6a95d5" },
        black: { 600: "#656d76", 900: "#000000", "900_7f": "#0000007f", "900_89": "#00000089", A700_01: "#000000" },
        gray: { 50: "#f7f8f9", 200: "#eeecec", 900: "#191d23", "100_01": "#ecfdf5" },
        blue_gray: {
          50: "#e7eaee",
          100: "#d9d9d9",
          500: "#64748b",
          700: "#4b5768",
          900: "#051b44",
          "100_01": "#d0d5dd",
        },
      },
      boxShadow: {
        xs: "10px 10px 4px 0px #0000003f",
        sm: "1.5px 4px 4px 0px #0000003f",
        md: "0px 4px 4px 0px #0000003f",
        lg: "2px 4px 4px 0px #0000003f",
        xl: "0px 0px 13px 5px #00000029",
      },
      fontFamily: {
        plusjakartasans: "Plus Jakarta Sans",
        inter: "Inter",
        svngilroy: "SVN-Gilroy",
        manrope: "Manrope",
        opensans: "Open Sans",
      },
      textShadow: { ts: "2px 4px 4px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(to right #0c319033,#10369733)",
        gradient1: "linear-gradient(180deg, #b8e1ff,#5d8ace)",
        gradient2: "linear-gradient(179deg, #7cc5fb,#5b60d3)",
        gradient3: "linear-gradient(92deg, #d0e2ff,#174b9b)",
        gradient4: "linear-gradient(180deg, #d0e2ff,#174b9b)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
