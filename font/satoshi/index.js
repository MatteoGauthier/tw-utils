const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "satoshi": ["'Satoshi'", "Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
