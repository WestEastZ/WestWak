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
          wak: "#164532",
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
      // backgroundImage: {
      //   ine_profile: `url(/image/ine_profile.webp)`,
      //   jing_profile: `url(/image/jing_profile.webp)`,
      //   lilpa_profile: `url(/image/lilpa_profile.webp)`,
      //   jururu_profile: `url(/image/jururu_profile.webp)`,
      //   gosegu_profile: `url(/image/gosegu_profile.webp)`,
      //   viichan_profile: `url(/image/viichan_profile.webp)`,
      // },
    },
  },
  plugins: [],
};
