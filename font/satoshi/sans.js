const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Satoshi'", "Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
