const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["'Satoshi'", "Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
