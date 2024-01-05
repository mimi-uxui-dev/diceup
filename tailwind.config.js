/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        topnavbarBgColor: "var(--topnavbar-bg-color)",
        bigTagShadow: "var(--big-tag-shadow)",
        buttonShadow: "var(--button-shaddow)",
        purpleLinear: "var(--purple-linear)",
        linearGreen: "var(--linearGreen)",

        Black2: "var(--Black2)",
        darkpurple: "var(--darkpurple)",
        gray: "var(--gray)",
        grayLinear: "var(--gray-linear)",
        lineColor: "var(--line-color)",
        p1: "var(--p1)",
        w16: "var(--w16)",
        w50: "var(--w50)",
      },
      fontSize: {
        16: "16px", // Set the font size for the root element
        "custom-size-5rem": "5rem",
      },
      fontFamily: {
        inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      greenLinear: {
        text: ["269deg", "#01FF94 -1%", "#16DAB5 100%"],
      },
      boxShadow: {
        purpleButtonShadow: "0px 0px 30px 8px rgba(144, 42, 210, 0.2)",
      },
      extend: {
        backgroundColor: {
          "custom-gray-700": "#4a5568",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const greenLinear = theme("greenLinear");

      const utilities = Object.keys(greenLinear).map((key) => ({
        [`.text-linear-${key}`]: {
          backgroundImage: `linear-gradient(${greenLinear[key].join(", ")})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        },
      }));

      addUtilities(utilities, variants("linearColors"));
    },
  ],
};
