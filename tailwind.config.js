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
        bgColor: {
          100: "#1C1D1F",
        },
        characterColor: {
          wak: "#1CBC74",
          ine: "#8A2BE2",
          jingburger: "#F0A957",
          lilpa: "#3330db",
          jururu: "#FF008C",
          gosegu: "#467EC6",
          vlichan: "#95C100",
        },
      },
      fontFamily: {
        spoqa: ["SpoqaHanSansNeo", "sans-serif"],
      },
      // keyframes: {
      //   slideDown: {
      //     "0%": { transform: "translateY(0)" },
      //     "50%": { transform: "translateY(125%)" },
      //     "70%": { transform: "translateY(120%)" },
      //     "100%": { transform: "translateY(125%)" },
      //   },
      //   slideUp: {
      //     "0%": { transform: "translateY(125%)" },
      //     "100%": { transform: "translateY(0%)" },
      //   },
      // },
      // animation: {
      //   "slide-down": "slideDown 0.8s ease-in-out forwards",
      //   "slide-up": "slideUp 0.3s ease-in-out forwards",
      // },
    },
  },
  plugins: [],
};
