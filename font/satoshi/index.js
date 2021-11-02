const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Satoshi'", "Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
