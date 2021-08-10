const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
