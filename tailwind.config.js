/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Palette from https://colorhunt.co/palette/191a191e51284e9f3dd8e9a8
      primary: "#191A19",
      secondary: "#1E5128",
      tertiary: "#3AD305", // Modified from #4E9F3D
      quaternary: "#D8E9A8",
    },
    fontFamily: {
      sans: ["Courier New", "monospace"],
      serif: ["Courier New", "monospace"],
    },
    dropShadow: {
      "tertiary-glow": "0px 0px 5px #3AD305",
      "quaternary-glow": "0px 0px 5px #D8E9A8",
    },
    extend: {},
  },
  plugins: [],
};
