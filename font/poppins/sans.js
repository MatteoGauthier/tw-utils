const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
