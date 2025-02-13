/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        NimbusSanL: ["NimbusSanL-Regular", "sans-serif"],
        "NimbusSanL-RegularItalic": ["NimbusSanL-RegularItalic", "sans-serif"],
        "NimbusSanL-Bold": ["NimbusSanL-Bold", "sans-serif"],
        "NimbusSanL-BoldItalic": ["NimbusSanL-BoldItalic", "sans-serif"],
      },
      colors: {
        "primary":{
          100: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555"
      }
    },

  },
  plugins: [],
}