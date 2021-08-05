module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "375px",
      // => @media (min-width: 768px) { ... }

      lg: "950px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "karla": "Karla",
      
    },
    extend: {
      colors: {
        'cyan': 'hsl(179, 62%, 43%)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue': 'hsl(218, 22%, 67%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
