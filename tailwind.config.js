// Tailwind config boilerplate
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {},
    screens: {
      mobileS: "360px",
      // => @media (min-width: 360px) { ... }
      mobileM: "480px",
      // => @media (min-width: 480px) { ... }
      mobileL: "640px",
      // => @media (min-width: 640px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "960px",
      // => @media (min-width: 960px) { ... }
      laptopM: "1024px",
      // => @media (min-width: 1024px) { ... }
      laptopL: "1280px",
      // => @media (min-width: 1280px) { ... }
      desktopL: "1440px",
      // => @media (min-width: 1440px) { ... }
      desktopFullHD: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      serif: ["Lora", "serif"],
      system: ["Georgia", "Times New Roman", "Times", "serif"],
      sans: ["PT Sans", "Arial", "Verdana", "Helvetica", "sans-serif"],
    },
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    maxWidth: {
      xs: "20rem",
      sm: "30rem",
      md: "40rem",
      lg: "50rem",
      xl: "60rem", // 60.625rem
      "2xl": "70rem",
      "3xl": "80rem",
      "4xl": "90rem",
      "5xl": "100rem",
      full: "100%",
    },
  },
  plugins: [],
};
