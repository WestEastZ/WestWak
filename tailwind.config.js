/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./image/*.{webp, png, jpeg}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          background_black: "#0A0A0A",
          background: "#1B1B1B",
          container: "#202020",
          box: "#2C2C2C",
          dark_box: "#181818",
          border: "#373737",
          main: "#1CBC74",
          text: "#9ca3af",
          light_box: "#A9A9A9",
        },
        characterColor: {
          woowakgood: "#1CBC74",
          ine: "#8A2BE2",
          jingburger: "#F0A957",
          lilpa: "#3330db",
          jururu: "#FF008C",
          gosegu: "#467EC6",
          viichan: "#95C100",
        },
      },
      fontFamily: {
        spoqa: ["SpoqaHanSansNeo", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
