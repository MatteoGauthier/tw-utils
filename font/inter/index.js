const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
    },
  },
};
