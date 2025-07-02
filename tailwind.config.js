// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        gradientStart: "#CCCCFF",
        gradientMid: "#94c9E4",
        gradientEnd: "#6EE7B7",
      },
      borderRadius: {
        lg: "1rem", // 16px
      },
      spacing: {
        4: "1rem", // 16px
        6: "1.5rem", // 24px
      },
    },
  },
  plugins: [],
};
