const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
