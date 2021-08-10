const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
