const defaultTheme = require("tailwindcss/defaultTheme");
const fallbackMacOsFonts = require("../../lib/fallback-macos-fonts");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ...fallbackMacOsFonts,
          "'Poppins'",
          "Poppins",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};
