/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "bright-blue": " hsl(220, 98%, 61%)",
        light: {
          gray: "hsl(0, 0%, 98%)",
          lightGrayishBlue: "hsl(236, 33%, 92%)",
          grayishBlue: "hsl(236, 9%, 61%)",
          darkGrayishBlue: "hsl(235, 19%, 35%)",
        },
        dark: {
          blue: "hsl(235, 21%, 11%)",
          desatBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          lightGrayishBlueHover: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
        },
        top: "hsl(192, 100%, 67%)",
        bottom: "hsl(280, 87%, 65%)",
      },
      backgroundImage: {
        "desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
        check: "url('/src/assets/images/icon-check.svg')",
      },
    },
  },
  plugins: [],
};
