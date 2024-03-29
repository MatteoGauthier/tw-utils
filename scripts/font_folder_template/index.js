const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "{{tw_font_name}}": ["'{{css_font_name}}'", "{{css_font_name}}", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
