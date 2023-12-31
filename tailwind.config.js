/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#FFC94B",
        "dark-grey": "#B8B8B8",
        "light-grey": "#ECECEC",
        light: "#FAFAFA",
      },
      zIndex : {
        "-1": -1,
      }
    },
  },
  plugins: [],
}

