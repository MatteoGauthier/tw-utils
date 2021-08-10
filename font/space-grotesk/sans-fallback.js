const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: fallbackMacOsFonts,
} = require("../../lib/fallback-macos-fonts");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          fallbackMacOsFonts,
          "'Space Grotesk'",
          "Space Grotesk",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};