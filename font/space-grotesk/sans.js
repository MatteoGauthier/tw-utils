const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Space Grotesk'",
          "Space Grotesk",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};
