const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope'", "Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
