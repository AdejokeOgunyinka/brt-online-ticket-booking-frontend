/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        briem: ['"Briem Hand"'],
        dmSans: ['"DM Sans"'],
        heebo: ["Heebo"],
        inter: ["Inter"],
        nunito: ["Nunito"],
        poppins: ["Poppins"],
        raleway: ["Raleway"],
        rubik: ["Rubik"],
        teachers: ["Teachers"],
        redditSans: ['"Reddit Sans"'],
      },
      colors: {
        primary: "#001d54",
        primaryBorder: "#d9ecfe",
        buttonBorder: "#f0f0f0",
        greyBg: "#f4f5f9",
        greyBorder: "#f6f7fb",
        greyHeader: "#6d6d70",
        greyText: "#adadaf",
        blackText: "#1e1e1e",
      },
      boxShadow: {
        select: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
      listStyleType: {
        circle: "circle",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
        alpha: "lower-alpha",
      },
    },
  },
  plugins: [],
};
