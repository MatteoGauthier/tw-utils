const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: [
          "'Space Grotesk'",
          "Space Grotesk",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};
