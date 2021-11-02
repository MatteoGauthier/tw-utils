const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "Satoshi": ["'Satoshi'", "Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
