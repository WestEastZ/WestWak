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
        bgColor: {
          100: "#1C1D1F",
          200: "#1A1A1A",
          main: "#1CBC74",
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
