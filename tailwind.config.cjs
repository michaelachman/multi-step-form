/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "steps-background-mobile":
          "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
