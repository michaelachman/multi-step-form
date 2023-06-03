/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "steps-background-mobile":
          "url('/src/assets/images/bg-sidebar-mobile.svg')",

        "steps-background-desktop":
          "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
